import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(false)

    useEffect(() => {darkMode === true ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')}, [darkMode])

    return [darkMode, setDarkMode];
};

export default useDarkMode;