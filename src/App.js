import './App.scss';
import { GifsContextProvider } from './contexts/GifsContext';
import { Link, Route } from 'wouter'
import Home from './pages/Home';
import { SearchResults } from './pages/SearchResults';
import { GifDetail } from './pages/GifDetail'

function App() {
  return (
  <>
    <GifsContextProvider>
      <Route
        component={Home}
        path='/'
      />
      <Route
        component={SearchResults}
        path='/search/:keyword'
      />
      <Route
        component={GifDetail}
        path='/gif/:id'
      />
    </GifsContextProvider>
  </>
  );
}

export default App;
