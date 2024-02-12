
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Emplisting from './Emplisting';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
import EmpCreate from './EmpCreate';
function App() {
  return (
    <div className="App" >
      <h1>ReactJS CRUD Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Emplisting/>}></Route>
          <Route path='/employee/create' exact  element={<EmpCreate />}></Route>
          <Route path='/employee/edit/:empid' exact element={<EmpEdit/>}></Route>
          <Route path='/employee/detail/:empid' exact element={<EmpDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
