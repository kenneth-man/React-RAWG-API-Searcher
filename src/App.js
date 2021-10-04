import './App.css';
import ContextProvider from './Context';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Developers from './Pages/Developers';
import Games from './Pages/Games';
import Genres from './Pages/Genres';
import Platforms from './Pages/Platforms';
import Publishers from './Pages/Publishers';
import Favourites from './Pages/Favourites';
import PageDetails from './Pages/PageDetails';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import bannerImage from './Res/Images/rawg-banner.png';


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Navbar/>

          <Banner image={bannerImage} ID='main-banner'/>

          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/Search' exact={true} component={Search}/>
            <Route path='/Developers' exact={true} component={Developers}/>
            <Route path='/Games' exact={true} component={Games}/>
            <Route path='/Genres' exact={true} component={Genres}/>
            <Route path='/Platforms' exact={true} component={Platforms}/>
            <Route path='/Publishers' exact={true} component={Publishers}/>
            <Route path='/Favourites' exact={true} component={Favourites}/>
            <Route path='/PageDetails/:itemName' exact={true} component={PageDetails}/>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;