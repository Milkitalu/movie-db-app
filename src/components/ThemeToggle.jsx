

import {useAppContext} from '../context/AppContext';

function ThemeToggle() {
    const { theme, toggleTheme } = useAppContext();

    return (
        <button onClick={toggleTheme} className="p-2 rounded  bg-gray-300">
            Switch to {theme ==='light' ? 'Dark' : 'Light'} Mode
        </button>
    );
}

export default ThemeToggle;