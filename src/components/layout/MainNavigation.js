import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorites-context';


import classes from './MainNavigation.module.css';

function MainNavigation() {

  const favoritesCtx = useContext(FavoritesContext)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Stretávky</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Všetky</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Pridaj</Link>
          </li>
          <li>
            <Link to='/favorites'>Moje Obľúbené
            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
