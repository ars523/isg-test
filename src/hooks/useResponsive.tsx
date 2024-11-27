import { useState, useEffect } from 'react';

const breakpoints = {
    mobile: 768,
    tablet: 1024,
};

interface WindowSize {
    width: number;
    height: number;
}

interface ResponsiveState extends WindowSize {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

const useResponsive = (): ResponsiveState => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const isMobile = windowSize.width < breakpoints.mobile;
    const isTablet = windowSize.width >= breakpoints.mobile && windowSize.width < breakpoints.tablet;
    const isDesktop = windowSize.width >= breakpoints.tablet;

    return {
        ...windowSize,
        isMobile,
        isTablet,
        isDesktop,
    };
};

export default useResponsive;
