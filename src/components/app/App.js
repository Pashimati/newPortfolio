import './App.scss';
import Header from "../header/Header";
import Aside from "../aside/Aside";
import Navbar from "../navbar/Navbar";
import Article from "../article/Article";
import Footer from "../footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Article/>
            <Navbar/>
            <Aside/>
            <Footer/>
        </div>
    );
}

export default App;
