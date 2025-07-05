"use client";
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { PersonalDetailsScreeen } from './personal-detail';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@powerpaywallet/store';
import { updateProfileData } from '@powerpaywallet/store/slices';

const ProfilePage = () => {

    const session = useSession();
    const appDispatch = useDispatch<AppDispatch>();
    const { profileData } = useSelector((state: RootState) => state.states);

    useEffect(() => {
        if (session.status == "unauthenticated") {
            signIn();
        }

        if (profileData == undefined) {
            appDispatch(updateProfileData())
        }
    }, [session, profileData, appDispatch])

    return (<>
        
        <div className='w-full min-h-[92dvh] bg-amber-300/0 p-4 flex flex-col font-[Manrope] gap-5'>
            <div className='flex flex-col gap-2 mb-2'>
                <h1 className='text-2xl sm:text-4xl md:text-5xl font-semibold '>Edit Profile</h1>
                <p className='text-lg md:text-2xl'>Update your personal information and account settings.</p>
            </div>
            <div className='w-full h-full bg-amber-400/0 flex flex-col md:flex-row justify-between items-center md:items-start gap-2'>
                <div className='w-full md:w-[30dvw] lg:w-[25dvw] xl:w-[20dvw] h-fit bg-slate-200 p-2 rounded-md flex flex-col items-center gap-2'>
                    <div className='w-full p-2 text-xl font-medium capitalize bg-slate-400 rounded-md'>Personal Details</div>
                </div>
                <div className='w-full h-full bg-slate-200 p-4 flex flex-col gap-4 md:gap-8'>
                    <RenderScreen />
                </div>
            </div>

        </div>
    </>
    )
}

const RenderScreen = () => {
    const { profileTab } = useSelector((state: RootState) => state.states);

    switch (profileTab) {
        case "personal":
            return <PersonalDetailsScreeen />
        default:
            return <p className='text-3xl text-red-400'>Something went wrong</p>
    }

}


export default ProfilePage