'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"
import { FaMoon, FaSun } from "react-icons/fa"

export default function Theme() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()
    useEffect(() => setMounted(true), [])

    if (!mounted) return (
        <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={36}
            height={36}
            sizes="36x36"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
        />
    )

    if (resolvedTheme === 'dark') {
        return (
            <>
                {/* <FiSun onClick={() => setTheme('light')} /> */}
                <div onClick={() => setTheme('light')} className='relative scale-75 w-10 h-5 flex items-center dark:bg-depth-dark bg-depth-light cursor-pointer rounded-full transition-all duration-300 p-1' >
                    <FaSun className='text-dark ' size={12} />
                    <div className="absolute dark:bg-light bg-dark depth-dabg-depth-dark:bg-dark w-4 h-4 rounded-full shadow-md transform transition-transform duration-300" style={resolvedTheme ? { left: "2px" } : { right: "2px" }}></div>
                    <FaMoon className='ml-auto text-light' size={12} />
                </div>
            </>

        );
    }
    if (resolvedTheme === 'light') {
        return (
            <>
                {/* <FaMoon onClick={() => setTheme('dark')} /> */}
                <div onClick={() => setTheme('dark')} className='relative scale-75 w-10 h-5 flex items-center dark:bg-depth-dark bg-depth-light cursor-pointer rounded-full transition-all duration-300 p-1' >
                    <FaSun className='text-dark ' size={12} />
                    <div className="absolute dark:bg-light bg-dark depth-dabg-depth-dark:bg-dark w-4 h-4 rounded-full shadow-md transform transition-transform duration-300" style={resolvedTheme ? { right: "2px" } : { right: "2px" }}></div>
                    <FaMoon className='ml-auto text-light' size={12} />
                </div>
            </>

        );
    }
}