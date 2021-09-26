import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (newFav) => {},
    removeFavorite: (meetupId) => {},
    isFavorite: (meetupId) => {}
})

export function FavoritesContextProvider(props){

    const [userFavorites, setUserFavorites] = useState([])

    function addFavoriteHandler(newFav) {
        
        setUserFavorites((prev)=>[...prev,newFav])
        
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prev)=>{return prev.filter((ele)=>ele.id !== meetupId)})
    }

    function isFavoriteHandler(meetupId) {
        return userFavorites.some(ele => ele.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites : userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: isFavoriteHandler
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;