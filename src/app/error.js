'use client'

import { useEffect } from "react"

export default function Error({ error, retry}){
    useEffect(() => {
        console.error(error);
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button className="btn btn-alt"
                onClick={
                    () => retry()
                }
            >
                Try again</button>
        </div>
    )
}