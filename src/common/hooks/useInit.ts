import {useEffect, useState} from 'react';

export function useInit(func: () => void) {
    const [initialized, setInitialized] = useState(false);
    useEffect(() => {
        if (!initialized) {
            setInitialized(true);
            func();
        }
    }, [initialized, setInitialized, func]);
}
