import React, { useState } from 'react'


function Home() {
    const [apiResponse, setApiResponse] = useState()
    async function apiCall() {
        await fetch('https://jsonplaceholder.typicode.com/comments').then(data =>
            data.json().then(comments => {
                setApiResponse(comments)
                console.log(apiResponse);
            }
            )
        )

    }
    return (
        apiResponse ?
            <main className='w-full bg-zinc-600 flex flex-col justify-center items-center min-h-screen h-[100%]'>
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 justify-center container xl:max-w-[1400px] gap-10'>
                    {apiResponse?.map((item, index) => (
    
                        <div className="flex flex-col justify-start items-start border-1 border-white text-white shadow p-5 gap-3 rounded-3xl">
                            <div className='flex gap-5 p-3 border-1 bg-zinc-500 w-full rounded-3xl'>
                                <p className='border rounded-full p-2 bg-white text-black'>#{item.id}</p>
                                <p>{item.email}</p>
                            </div>
                            <p className='text-3xl font-bold'>{item.name}</p>
                            <p>{item.body}</p>
    
                        </div>
    
                    ))}
                </section>
            </main>

            :
            <section className='w-full bg-zinc-600 flex flex-col justify-center items-center min-h-screen h-[100%]'>
                <div className='container xl:max-w-[1400px] flex justify-center items-center shadow'>
                    <button onClick={apiCall} className='border-1 border-white rounded p-4 text-white text-xl cursor-pointer'>Load Comments</button>
                </div>
            </section>
    )
}

export default Home