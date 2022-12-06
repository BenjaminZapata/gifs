import './App.scss';
import { GifsContextProvider } from './contexts/GifsContext';
import { Link, Route } from 'wouter'
import Home from './pages/Home';

function App() {
  return (
  <>
    <GifsContextProvider>
      <Route
        component={Home}
        path='/'
      />
      <Route
        component={Home}
        path='/search/:keyword'
      />
      <Route
        component={Home}
        path='/gif/:id'
      />
    </GifsContextProvider>
  </>
  );
}

export default App;
