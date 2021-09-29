import { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (newFav) => { },
    removeFavorite: (meetupId) => { },
    isFavorite: (meetupId) => { }
})

export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([])

    useEffect(() => {
        async function getIDs() {
            let response = await fetch('https://stretavky-backend-default-rtdb.firebaseio.com/meetups.json')
            let data = await response.json()
            let beginArr = []
            for (const key in data) {
                
                
                if (localStorage.getItem(`${key}`)) {
                    beginArr.push({
                        id: key,
                        key: key,
                        ...data[key]
                    })
                }
                
                
            }
            setUserFavorites(beginArr)
        }
        getIDs()
    }, [])

    function addFavoriteHandler(newFav) {

        setUserFavorites((prev) => [...prev, newFav])

    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prev) => { return prev.filter((ele) => ele.id !== meetupId) })
    }

    function isFavoriteHandler(meetupId) {
        return userFavorites.some(ele => ele.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: isFavoriteHandler
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;