import cn from '@/lib/cn';
import { ClassValue } from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface StaticAdComponentProps {
  imageUrlMobile: string | StaticImageData;
  imageUrlDesktop: string | StaticImageData;
  href: string;
  className?: ClassValue;
}

const StaticAdComponent: React.FC<StaticAdComponentProps> = ({
  imageUrlMobile,
  imageUrlDesktop,
  href,
  className,
}) => {
  return (
    <div className={cn( "container flex justify-center " , className)}>
      <Link href={href} target="_blank" rel="noopener noreferrer">

      <Image
      className='block lg:hidden'
      src={imageUrlMobile}
      alt="ad"
      width={320}
        height={100}
      />
      <Image 
      className='hidden lg:block'
       src={imageUrlDesktop}
       alt='ad'
       width={970}
       height={90}
       />
      </Link>
    </div>
  );
};

export default StaticAdComponent;