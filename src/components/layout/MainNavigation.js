import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
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
            <Link to='/favorites'>Obľúbené</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
