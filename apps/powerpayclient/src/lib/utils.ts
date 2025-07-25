export const getTokenURL = (bank: string) => {
    const url = process.env[`${bank}_REQ`]
    if (!url){
        const errMessage = `[ENV VARS]: ${bank}_REQ URL NOT FOUND`;
        console.error(errMessage);
        throw Error(errMessage);
    }
    else{
        return url
    }
}