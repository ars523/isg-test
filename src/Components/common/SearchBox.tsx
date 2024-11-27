'use client'

import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
function SearchBox() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const search = searchParams.get('q')
    const [searchValue, setSearchValue] = React.useState(search)

    const handleSearch = () => {
        if (searchValue) {
            router.push(`/search?q=${searchValue}`)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch()
    }

    return (
        <div className='flex gap-3'>
            <form onSubmit={handleSubmit} className='flex-1'>
                <input
                    type="text"
                    placeholder='কী খুঁজতে চান?'
                    className='bg-white w-full px-3 py-2 text-2xl rounded-sm outline-none border border-gray-300'
                    value={searchValue || ''}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </form>
            <button
                disabled={!searchValue}
                onClick={handleSearch}
                className='bg-[#006563] px-4 rounded-sm disabled:bg-gray-300 disabled:cursor-not-allowed'
            >
                <IoSearch color='#fff' size={22} className='' />
            </button>
        </div>
    )
}

export default SearchBox