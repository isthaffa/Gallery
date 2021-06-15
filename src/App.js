import { Route, BrowserRouter as Router ,Switch } from 'react-router-dom';
import './App.css';
import Album from './pages/Album';
import Gallery from './pages/Gallery';

function App() {
    // const [selectedAlbum, setselectedAlbum] = useState(null)
  return (
    <div >
      <Router >
        <Switch>
          <Route path="/" exact={true}  component={Album}   />
          <Route path="/gallery/:id" exact={true}  component={Gallery}   />
        </Switch>
      </Router>

      
   
    </div>
  );
}

export default App;
