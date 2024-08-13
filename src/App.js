import './App.css';
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Bit from "./components/bit/Bit.jsx"
import Setting from "./components/setting/Setting.jsx"
import Have from "./components/have/Have.jsx"
import Check from "./components/check/Check.jsx"
import Navigating from "./components/navigating/Navigating.jsx"
import Subscribe from "./components/subscribe/Subscribe.jsx"
import Footer from "./components/footer/Footer.jsx"

function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <Bit />
     <Setting />
     <Have />
     <Check />
     <Navigating />
     <Subscribe />
     <Footer />
    </div>
  );
}

export default App;
