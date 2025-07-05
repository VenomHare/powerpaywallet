import Image from "next/image";

const SIZE_VARIANTS = {
    mini: " w-9 h-9 text-xl font-medium",
    small: " w-12 h-12 text-2xl font-medium",
    large: " w-25 h-25 sm:w-35 sm:h-35 text-5xl sm:text-6xl  "
}

type ProfileImageProps = {
    url?: string;
    profileName: string;
    onClick?: () => void;
    className?: string;
    size?: keyof typeof SIZE_VARIANTS
}

export const ProfileImage = ({ url, onClick, profileName, className, size = "large" }: ProfileImageProps) => {


    return <>
        <div className={`flex-shrink-0 ${SIZE_VARIANTS[size]} ${className !== undefined ? className : ""} ${onClick !== undefined ? "cursor-pointer" : ""}`} onClick={()=>{onClick?.()}}>
            {
                (url == undefined) ?
                    <>
                        <div className='w-[95%] h-[95%] rounded-full flex items-center justify-center bg-blue-500 font-[Manrope]'>{profileName.split(" ").map((d, i) => i < 2 && d.slice(0, 1)).join("")}</div>
                    </>
                    :
                    <Image src={url} alt='profile_image' width={512} height={512}
                        className='w-[95%] h-[95%] rounded-full bg-slate-600' />
            }
        </div>
    </>
}