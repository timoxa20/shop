import { BrowserRouter } from "react-router-dom";
import AppRoures from "../shared/component/AppRoures";
import { Provider } from "react-redux";
import { store } from "./StoreProvider/config/store";
import NavBar from "../shared/component/NavBar";
import TypeBar from "../shared/component/TypeBar";
import cls from './App.module.scss'
import Footer from "../shared/component/footer/Footer";


function App() {
  return (
      <BrowserRouter >
          <Provider store={store} >
              <NavBar />
              <div className={cls.App}></div>
              <TypeBar/>
              <AppRoures />
              <Footer/>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
