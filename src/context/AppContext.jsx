import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    
    const [theme, setTheme] = useState('light');
    const[favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' :'light'));

}

const addFavorite = (movie) => {
    setFavorites((prev)  => [...prev, movie]);
    localStorage.setItem('favorites', JSON.stringify([...favorites, movie]));  
}

const removeFavorite =(id) => {
    const updateFavorites = favorites.filter((movie) => movie.id !==id);
    setFavorites(updateFavorites);
    localStorage.setItem('favorites' , JSON.stringify(updateFavorites));  
}

return (
    <AppContext.Provider value={{theme, toggleTheme, favorites,addFavorite, removeFavorite}} >
        {children}
    </AppContext.Provider>
);
};

export const useAppContext = () => {
    return useContext(AppContext);
};
