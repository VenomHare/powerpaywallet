export const getTokenURL = (bank: string) => {
    const url = process.env[`${bank}_REQ`]
    if (!url){
        throw Error(`[ENV VARS]: ${bank}_REQ URL NOT FOUND`);
    }
    else{
        return url
    }
}