import HeaderBar from "./component/HeaderBar.jsx";
import HeroBanner from "./component/HeroBanner.jsx";
import FeaturedArticles from "./component/FeaturedArticles.jsx";
import FeaturedTutorials from "./component/FeaturedTutorials.jsx";
import Newsletter from "./component/Newsletter.jsx";
import Footer from "./component/Footer.jsx";
import "./index.css"

 
function App() {
  return (
    <div>
      <HeaderBar />
      <HeroBanner />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
