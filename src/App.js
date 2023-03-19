import { AppContextProvider } from './components/inputs';
import MyForm from './components/MyForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardSection from './components/CardSection';
import MyNavbar from "./components/navbar";
import FetchApi from './components/FetchApi';
function App() {



  return (
    <BrowserRouter>
    <AppContextProvider>
    <MyNavbar />
    <FetchApi />
    <Routes>
      <Route path="/" element={<MyForm/>}/>
      <Route path='/cards' element={<CardSection/>}/>
      </Routes> 
      </AppContextProvider>
     </BrowserRouter>
  );
}

export default App;
