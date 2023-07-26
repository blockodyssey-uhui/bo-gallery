import { useEffect, useState } from 'react';

const useCheckBreakpoint = () => {
    const [breakPoint, setBreakPoint] = useState('');

    const handleResize = () => {
        const { innerWidth } = window;

        if (innerWidth < 768) setBreakPoint('phone');
        else if (innerWidth >= 768 && innerWidth < 1024) setBreakPoint('tablet');
        else if (innerWidth >= 1024) setBreakPoint('pc');
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.addEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        handleResize();
    }, []);

    return breakPoint;
};

export default useCheckBreakpoint;
