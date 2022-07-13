import { BrowserRouter } from "react-router-dom";
import AppRoures from "./component/AppRoures";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NavBar from "./component/NavBar";
import TypeBar from "./component/TypeBar";
import Cards from "./component/Cards";
import './App.css'


function App() {
  return (
    <BrowserRouter >
      <Provider store={store} >
          <NavBar/>
        <TypeBar/>
        <AppRoures />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
