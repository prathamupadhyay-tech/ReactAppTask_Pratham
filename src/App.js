
import Home from './Home';
import Navbar from './navbar';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDeltails';
import NotFound from './NotFound';

function App() {
  

  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path = "/">
            <Home>
              
            </Home>

          </Route>
          <Route path = "/create">
            <Create/> 

          </Route>
          <Route path = "/blogs/:id">
            <BlogDetails>
              </BlogDetails> 

          </Route>
          <Route path = "*">
            <NotFound>

            </NotFound>
          </Route>

        </Switch>
      </div>

    </div>
    </Router>
    
  );
}

export default App;
