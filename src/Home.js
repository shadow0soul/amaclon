import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920"
            alt=""
          />
        </div>

        <div className="home__row">
          <Product id={1} title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011" price="400.00" image="https://images-na.ssl-images-amazon.com/images/I/51aoe6r1ibL._SX323_BO1,204,203,200_.jpg" rating={2} />
          <Product id={2} title="Elica 60 cm 1200 m3/hr Filterless Auto Clean Chimney (WDFL 606 HAC MS NERO, Motion Sensor Control, Black)"
            image="https://m.media-amazon.com/images/I/61MMo3L63rL._SL1500_.jpg"
            price="11999.00"
            rating={4} />
        </div>
        <div className="home__row">
        <Product id={3} title="Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black"
            image="https://m.media-amazon.com/images/I/51kdFjyPRAL._SL1500_.jpg"
            price="650.00"
            rating={4} />
        <Product id={4} title="Zippo Armor Freedom Skull Antique Brass Pocket Lighter"
            image="https://m.media-amazon.com/images/I/61Fv6tJqe-L._SL1000_.jpg"
            price="12699.00"
            rating={3} />
          <Product id={5} title="Zebronics Wired Keyboard and Mouse Combo with 104 Keys and a USB Mouse with 1200 DPI - JUDWAA 750"
            image="https://m.media-amazon.com/images/I/71XlOI9x+vL._SL1500_.jpg"
            price="350.00"
            rating={5} />
        </div>
        <div className="home__row">
        <Product id={6} title="LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, HDMI x 2, Display Port - 34GL750-B (Black)"
            image="https://m.media-amazon.com/images/I/71S9dis6PRL._SL1500_.jpg"
            price="52000"
            rating={5} />
        </div>

       
      </div>
    );
}

export default Home
