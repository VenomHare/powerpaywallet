import { Button } from '@powerpaywallet/ui/button'
import React from 'react'
import { EditableField } from './edit-field';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@powerpaywallet/store';
import { updateField } from '../../actions/profile/update';
import { alert } from '../../../components/alerts';
import { setEditingFieldId, setLoading, updateProfileData } from '@powerpaywallet/store/slices';
import { uploadPFPImage } from '../../actions/profile/pfpUpload';
import { ProfileImage } from '@powerpaywallet/ui/ProfileImage';
import { removePfp } from '../../actions/profile/pfpRemove';

const MAX_SIZE_MB = 1;


export const PersonalDetailsScreeen = () => {
    const { profileData } = useSelector((state: RootState) => state.states);
    const appDispatch = useDispatch<AppDispatch>();
    const dispatch = useDispatch();

    const saveField = async (value: string, id: "phone" | "email" | "name") => {
        try {
            dispatch(setLoading(true));
            await updateField(id, value)
            appDispatch(updateProfileData());
            appDispatch(setEditingFieldId("none"));
        }
        catch (err) {
            alert(appDispatch, (err as any).message || "Something went wrong", "error")
        }
        finally {
            dispatch(setLoading(false));
        }
    }

    const handleRemovePfp = async () => {
        try {
            dispatch(setLoading(true));
            const success = await removePfp();
            if (success) {
                appDispatch(updateProfileData());
            }
            else {
                alert(appDispatch, "Failed to remove profile image", "error");
            }
        }
        catch {
            alert(appDispatch, "Something went wrong", "error");
        }
        finally {
            dispatch(setLoading(false));
        }

    }

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {

            const fileSizeMB = file.size / (1024 * 1024); // convert bytes to MB

            if (fileSizeMB > MAX_SIZE_MB) {
                alert(appDispatch, "Image must be less than 1MB!", "error");
                return;
            }

            try {
                dispatch(setLoading(true));
                const upload = await uploadPFPImage(file);

                if (upload) {
                    alert(appDispatch, "Uploaded new profile image!", "success");
                    appDispatch(updateProfileData());
                }
                else {
                    alert(appDispatch, "Failed to Upload Profile Image!", "error");
                }
            }
            catch {
                alert(appDispatch, "Failed to Upload Profile Image!", "error");
            }
            finally {
                dispatch(setLoading(false));
            }

        }
    }

    return (<>
        <div id="pfp" className='w-full flex gap-2 flex-col-reverse 2xs:flex-row'>
            <ProfileImage url={profileData?.pfpUrl} profileName={profileData?.fullName || ""} className='bg-slate-500/50 rounded-xl flex items-center justify-center' />
            <div className='w-fit flex flex-col items-start justify-around '>
                <p className='font-semibold text-xl'>Update your Profile Image</p>
                <label
                    htmlFor="pfpUpload"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 cursor-pointer focus:outline-none focus:ring-4 font-medium rounded-lg text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 my-1 2xs:my-0 inline-block"
                >
                    Change Image
                    <input
                        type="file"
                        id="pfpUpload"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </label>
                <Button onClick={handleRemovePfp} className='my-1 2xs:my-0 ' variant={'ghost'} >Remove Image</Button>
            </div>
        </div>
        <EditableField id={"name"} value={profileData?.fullName} label='Full Name' onSave={(val) => { saveField(val, "name") }} />
        <EditableField id={"email"} type={"email"} value={profileData?.email} label='Email ' onSave={(val) => { saveField(val, "email") }} />
        <EditableField id={"phone"} type={"number"} value={profileData?.phone} label='Phone Number ' onSave={(val) => { saveField(val, "phone") }} />
    </>
    )
}

