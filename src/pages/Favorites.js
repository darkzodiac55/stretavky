import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";

import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext)

  return <section>
    <h1>Moje Obľúbené</h1>
    {favoritesCtx.totalFavorites >0 ? <MeetupList meetups = {favoritesCtx.favorites} /> : <h2 style={{color : 'red'}}>Nemáš Obľúbené :(</h2>}
    

    
  </section>;
}

export default FavoritesPage;
