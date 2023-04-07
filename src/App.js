import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Cart, CategoryProduct, Home, ProductSingle, Search } from "./pages";
import store from "./store/store";
import { Provider } from "react-redux";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path = "/product/:id" element = {<ProductSingle />} />

            <Route path = "/category/:category" element = {<CategoryProduct />} />
           
            <Route path = "/cart" element = {<Cart />} />
            
            <Route path = "/search/:searchTerm" element = {<Search />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
