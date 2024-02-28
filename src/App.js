import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Error from './components/ErrorPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<HomePage/>} />
        <Route path='/*' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
