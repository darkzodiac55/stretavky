import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import GitHubLogo from '../ui/GitHubLogo';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <GitHubLogo />
    </div>
  );
}

export default Layout;
