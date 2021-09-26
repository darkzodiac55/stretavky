import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
  const FavoritesCtx = useContext(FavoritesContext)

  const isItemFav = FavoritesCtx.isFavorite(props.id)

  function toggleFavorites(params) {
    if (isItemFav) {
      FavoritesCtx.removeFavorite(props.id)
    } else {
      FavoritesCtx.addFavorite({
        key: props.id,
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorites}>{isItemFav === true ? 'Preč z obľúbených' : 'Do obľúbených'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
