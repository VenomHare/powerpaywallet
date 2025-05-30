export function Loading({loading}: {loading: boolean}){
    if (!loading)
        return <></>

    return (<>
        <div className="absolute w-full h-full flex items-center justify-center bg-black/40">
            <div className="spinner"></div>
        </div>
    </>)
}