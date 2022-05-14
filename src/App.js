import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css'
import Home from './components/pages/home/Home'
import Create from './components/pages/create/Create'
import Recipe from './components/pages/recipe/Recipe'
import Search from './components/pages/search/Search'
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import useTheme from './components/hooks/useTheme';
import Edit from './components/pages/edit/edit';

function App() {
  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar/>
      <ThemeSelector/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/create">
          <Create />
        </Route>

        <Route path="/search">
          <Search />
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
        <Route path="/recipes/:id">
          <Recipe />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
