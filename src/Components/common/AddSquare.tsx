import cn from '@/lib/cn'
import { ClassValue } from 'clsx'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IAddSquareProps {
    add: {
        image: string | StaticImageData,
        link: string,
        alt: string
    },
    className?: ClassValue
}

function AddSquare({ add, className }: IAddSquareProps) {
    return (
        <Link className='block mx-auto lg:mx-0 w-[300px]' href={add.link} target='_blank' >
            <Image
                width={300}
                height={250}
                className='w-[300px] h-[250px] fit-cover'
                src={add.image}
                alt={add.alt}
            />
        </Link>
    )
}

export default AddSquare