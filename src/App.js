import './index.css';
import {Link, Route, Routes} from "react-router-dom";
import './Home/Home.js'
import Home from "./Home/Home";
import Redirect from "./Redirect/Redirect";
import NewLink from "./NewLink/NewLink";


export default function App() {
  return (
    <div className="App">
        <div className='router-nav-container container'>
          <nav className='navigation-menu'>
              <div className='navigation-menu__container'>
                  <div>
                      <Link to='/home'>Главная</Link>
                  </div>
                  <div>
                      <Link to='/redirect'>Redirect</Link>
                  </div>
                  <div>
                      <Link to='/go_to'>Go to</Link>
                  </div>
              </div>
          </nav>
        </div>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/redirect' element={<Redirect />} />
            <Route path='/go_to' element={<NewLink />} />
        </Routes>
    </div>
  );
}

