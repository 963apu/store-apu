import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router } from "react-router-dom"
import Slider from './components/Slider.js'
import data from "./data/data.json"
import Offers from './components/Offers.js';
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct";
import HotAcessoriesMenu from "./components/HotAcessoriesMenu";
import HotAccessories from "./components/HotAcessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js";

import Footer from "./components/Footer.js"



function App() {
  return (
    <Router className="App">
     <PreNavbar/>
     <Navbar/>
     <Slider start={data.banner.start}/>
     <Offers offer={data.offer}/>

     <Heading text="STAR PRODUCTS"/>
     <StarProduct starProduct={data.starProduct}/>
     <Heading text="HOT ACCESSORIES"/>
     <HotAcessoriesMenu/>
    

<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />

<Heading text="PRODUCT REVIEWS"/>
<ProductReviews productReviews={data.productReviews}/>
<Heading text="VIDEOS" />
<Videos videos={data.videos}/>

<Heading  text="IN THE PRESS"/>


<Footer footer={data.footer} />

   
     

    
      
       
      


    </Router>
  );
}

export default App;
