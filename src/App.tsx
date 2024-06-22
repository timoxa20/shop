import { BrowserRouter } from "react-router-dom";
import AppRoures from "./component/AppRoures";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NavBar from "./component/NavBar";
import TypeBar from "./component/TypeBar";
import './App.css'
import Footer from "./component/footer/Footer";


function App() {
  return (
    <BrowserRouter >
      <Provider store={store} >
          <NavBar/>
        <TypeBar/>
        <AppRoures />
        <Footer/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
