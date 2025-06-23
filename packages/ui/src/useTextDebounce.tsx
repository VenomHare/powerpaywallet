import { useEffect, useState } from "react"

export default function useTextDebounce(input: string, delay: number) {

    const [text, setText] = useState(input);

    useEffect(()=>{
        let timeout = setTimeout(()=>{
            setText(input);
        }, delay);

        return () => {
            clearTimeout(timeout);
        }

    },[input])

    return text
}