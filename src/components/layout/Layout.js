import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import GitHubLogo from '../ui/GitHubLogo';
import Readme from './ReadmePopup';
import { useState } from 'react';

function Layout(props) {

  const [rShown, rShownSetter] = useState(true)

  return (
    <div>
      {rShown && <Readme shown = {rShownSetter}/>}
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <GitHubLogo />
    </div>
  );
}

export default Layout;
