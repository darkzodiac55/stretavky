import { Route, Switch } from 'react-router-dom';
import Footer from './components/layout/Footer';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout> {/* overarching "style" or wrapper of every 'route' */}
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
          <Footer />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
