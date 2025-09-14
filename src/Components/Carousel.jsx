import { useEffect } from "react";
import img1 from '../assets/Img/img1.png'
import img2 from '../assets/Img/img2.jpg'
import img3 from '../assets/Img/img3.jpg'
import './Carousel.css'
import { Link } from "react-router-dom";

export default function Carousel(){
useEffect(() => {
    const items = document.querySelectorAll('.slider .list .item');
    let countItem = items.length;
    let itemActive = 0;

    const showSlider = () => {
      const current = document.querySelector('.slider .list .item.active');
      if (current) current.classList.remove('active');
      items[itemActive].classList.add('active');
    };

    const nextSlide = () => {
      itemActive = (itemActive + 1) % countItem;
      showSlider();
    };

    const interval = setInterval(nextSlide, 6000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
    return(
<>
            <div className="slider" >
        <div className="list">
            <div className="item active">
                <img src={img1}/>
                <div className="content">
                <h2>Welcome to CampusConnect</h2>
                    <p>
                       Your Gateway to Campus Events
                    </p>
                    <p>Discover, explore and participate in existing college events</p>
                    <Link to="/Recipes"><button className="btn">Learn More</button></Link>
                </div>
            </div>
            <div className="item">
                <img src={img2}/>
                <div className="content">
                <h2>Welcome to CampusConnect</h2>
                    <p>
                       Your Gateway to Campus Events
                    </p>
                    <p>Discover, explore and participate in existing college events</p>
                    <Link to="/Recipes"><button className="btn">Learn More</button></Link>
                </div>
            </div>
            <div className="item">
                <img src={img3}/>
               <div className="content">
                <h2>Welcome to CampusConnect</h2>
                    <p>
                       Your Gateway to Campus Events
                    </p>
                    <p>Discover, explore and participate in existing college events</p>
                    <Link to="/Recipes"><button className="btn">Learn More</button></Link>
                </div>
            </div>
        </div> 
        </div>
        </>
    );
}