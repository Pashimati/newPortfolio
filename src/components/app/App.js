import './App.scss';
import Header from "../header/Header";
import Aside from "../aside/Aside";
import Navbar from "../navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Header/>
            <article id="mainArticle">Article</article>
            <Navbar/>
            <Aside/>
            <footer id="pageFooter">Footer</footer>
        </div>
    );
}

export default App;
