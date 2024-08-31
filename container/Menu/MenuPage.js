
import React from 'react';
import { images } from '../../constants';
import "./MenuPage.css"

const MenuPage = () => {
  return (
    <div className="menu-page">
      <h1>Cocktails</h1>
      <div className="menu-items">
      
        <div className="menu-item">
          <img src={images.image1} alt="Image 1" />
          <p>$10</p>
        </div>
        <div className="menu-item">
          <img src={images.image2} alt="Image 2" />
          <p>$12</p>
        </div>
        <div className="menu-item">
          <img src={images.image3} alt="Image 3" />
          <p>$45</p>
        </div>
        <div className="menu-item">
          <img src={images.image4} alt="Image 4" />
          <p>$87</p>
        </div>
        <div className="menu-item">
          <img src={images.image5} alt="Image 5" />
          <p>$20</p>
        </div>
        <div className="menu-item">
          <img src={images.image6} alt="Image 6" />
          <p>$22</p>
        </div>
        <div className="menu-item">
          <img src={images.image7} alt="Image 7" />
          <p>$32</p>
        </div>
        <div className="menu-item">
          <img src={images.image8} alt="Image 8" />
          <p>$23</p>
        </div>
        <div className="menu-item">
          <img src={images.image9} alt="Image 9" />
          <p>$45</p>
        </div>
        <div className="menu-item">
          <img src={images.image10} alt="Image 10" />
          <p>$11</p>
        </div>
        <div className="menu-item">
          <img src={images.image11} alt="Image 11" />
          <p>$17</p>
        </div>
        <div className="menu-item">
          <img src={images.image12} alt="Image 12" />
          <p>$19</p>
        </div>   
      </div>
    </div>
  );
};

export default MenuPage;
