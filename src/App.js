
import MyForm from './components/MyForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardSection from './components/CardSection';
import MyNavbar from "./components/navbar";
import AllApiData from './components/AllApiData';
// import UserDetails from './components/UserDetails';
import {Provider} from "react-redux"
import { Store } from './components/store';
function App() {



  return (
    <BrowserRouter> 
    <Provider store={Store}>
    <MyNavbar />
    <AllApiData />
    <Routes>
      <Route path="/" element={<MyForm/>}/>
       <Route path='/cards/' element={<CardSection/>}/>
      {/* <Route path='/user/:id' element={<UserDetails/>}/>  */}
      </Routes> 
      </Provider>
     </BrowserRouter>
  );
}

export default App;
