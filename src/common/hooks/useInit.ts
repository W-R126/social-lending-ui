import {useEffect, useState} from 'react';

export function useInit(func: () => any) {
    const [initialized, setInitialized] = useState(false);
    useEffect(() => {
        if (!initialized) {
            setInitialized(true);
            func();
        }
    }, [initialized, setInitialized, func]);
}
