import cn from '@/lib/cn'
import { ClassValue } from 'clsx'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IAddLongProps {
    add: {
        image: string | StaticImageData,
        link: string,
        alt?: string
    },
    className?: ClassValue
}

function AddRectangle({ add, className }: IAddLongProps) {
    return (
        <div className={cn('md:mt-14 mt-6', className)}>
            <Link href={add.link}>
                <Image
                    className='w-full h-auto fit-cover'
                    src={add.image}
                    alt={add.alt || 'Add'}
                />
            </Link>
        </div>
    )
}

export default AddRectangle