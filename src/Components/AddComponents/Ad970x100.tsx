import React, { ReactNode } from 'react';
import cn from 'classnames';

interface Ad970x100Props {
  children: ReactNode;
  className?: string;
}

const Ad970x100: React.FC<Ad970x100Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'container mt-10 lg:mt-14 flex justify-center max-w-[320px] lg:max-w-[970px] h-[90px] bg-gray-100 ',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Ad970x100;