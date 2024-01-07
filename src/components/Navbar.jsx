import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="flex justify-center py-5">
                <div className="">
                    {/* Image  */}
                    <div className="flex justify-center mb-5">
                        {/* Image Tag  */}
                        <img
                            className='w-16'
                            src="https://cdn-icons-png.flaticon.com/128/266/266286.png"
                            alt="img"
                        />
                    </div>

                    {/* Heading Tag  */}
                    <h1 className='text-sky-200 text-3xl lg:text-6xl font-medium text-center mb-3'>
                        BG-Bash
                    </h1>

                    <h2 className='text-sm lg:text-6xl font-medium text-center mb-3 text-gray-400'>
                    Background Removal Tool
                    </h2>

                    {/* Paragraph Tag  */}
                    <p className='text-white text-2xl font-light text-center mb-3'>
                        Fast, simple and great performance.
                    </p>


                </div>
            </div>
        </div>
    )
}