import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const Data = () => {
    const dogUrl = useLoaderData()

    return (
        <div>
            <img src={ dogUrl } />
        </div>
    )
}


// Function to Fetch the data
export const dataLoader = async () => {
    const res = await fetch("https://random.dog/woof.json")
    const dog = await res.json()

    return dog.url;
}