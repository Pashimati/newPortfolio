import './App.scss';
import Header from "../../containers/header/Header";

function App() {
    return (
        <div className="App">
            <Header id="pageHeader"/>
            <article id="mainArticle">Article</article>
            <nav id="mainNav">Nav</nav>
            <div className="ads" id="siteAds">Ads</div>
            <footer id="pageFooter">Footer</footer>
        </div>
    );
}

export default App;
