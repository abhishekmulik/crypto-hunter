import './App.css';
import {Routes, Route, BrowserRouter as Router, Link} from 'react-router-dom'
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage';
import { makeStyles } from "@material-ui/core"


function App() {

  const style={
    backgroundColor:'#14161a',
        color:'white',
        minHeight:"100vh"
  }
  return (
    <Router>
      <div style={style}>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/coins/:id' element={<CoinPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
