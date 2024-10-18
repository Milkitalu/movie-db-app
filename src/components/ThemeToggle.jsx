

import {useAppContext} from '../context/AppContext';

function ThemeToggle() {
    const { theme, toggleTheme } = useAppContext();

    return (
        <button onClick={toggleTheme} className=''>
            Switch to {theme ==='Light' ? 'Dark' : 'Light'} Mode
        </button>
    );
}

export default ThemeToggle;