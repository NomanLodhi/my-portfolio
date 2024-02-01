import About from "./Sections/About";
import Footer from "./Sections/Footer";
import Intro from "./Sections/Intro";
import Navbar from "./Sections/Navbar";
import Portfolio from "./Sections/Portfolio";
import Skills from "./Sections/Skills";


function App() {
  return (
    <section className="wide">

<Navbar/>

<section id="Home">
  <Intro/>
</section>
<section id="About">
<About/>
</section>
<section id="Skills">
<Skills/>
</section>
<section id="Portfolio">
<Portfolio/>
</section>
<section>
<Footer/>
</section>
    </section> 
    );
}

export default App;
