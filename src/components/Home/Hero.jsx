import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Men from "../person/Men";
import Women from "../person/Women";
import Kids from "../person/Kids";
function Hero() {
  return (
    <div className="hero-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Men />}></Route>
            <Route path="Women" element={<Women />}></Route>
            <Route path="Kids" element={<Kids />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      <div className="new-features">
        <h1 data-aos="fade-up">New & Featured</h1>
        <div className="features-box">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="new-featured-box"
          >
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_815,c_limit/32cccbda-5f11-4753-bd68-47db90ffc679/nike-just-do-it.png"
              alt=""
            />
            <div className="clothing">
              <h1>Latest Clothing</h1>
            </div>
            <div className="clothing-btn">
              <button>Take a Look</button>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="new-featured-box"
          >
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_815,c_limit/829a4807-bc59-4c10-95eb-900361666ab4/nike-just-do-it.png"
              alt=""
            />
            <div className="clothing">
              <h1>Latest Clothing</h1>
            </div>
            <div className="clothing-btn">
              <button>Take a Look</button>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="new-featured-box"
          >
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/be228095-36ab-469c-bcef-c805c80c8e9a/backpack-KxKTNv.png"
              alt=""
            />
            <div className="clothing">
              <h1>Latest Clothing</h1>
            </div>
            <div className="clothing-btn">
              <button>Take a Look</button>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="new-featured-box-tagline"
          >
            <div className="features-tagline">
              <h1>EASY. ALL DAY.</h1>
              <div className="line-feature"></div>
              <h2>
                Push the limits of the <br />
                Impossible
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="brookly-section">
        <div data-aos="fade-up" className="brooklyn-section-box">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1207,c_limit/8fdcffd8-edc9-4adb-b5b8-fcb00f41b93d/nike-just-do-it.png"
            alt=""
          />
          <div className="brooklyn-info">
            <h1>BROOKYLN FLEECE</h1>
            <p>
              Stay fly this season in fleece featuring a cotton blend and
              gradient colour palettes inspired by the Chicago skyline
            </p>
            <button>Take a look</button>
          </div>
        </div>
      </div>

      <div className="shoe-jordan">
        <div className="shoe-jordan-box">
          <div data-aos="fade-right" className="shoe-image">
            <img
              src="https://www.pngplay.com/wp-content/uploads/9/Air-Jordan-No-Background.png"
              alt=""
            />
          </div>
          <div className="shoe-info-box">
            <h1 data-aos="fade-left" className="left-one">
              STEP
            </h1>
            <h1 data-aos="fade-left" className="left-two">
              INTO
            </h1>
            <h1 data-aos="fade-left" className="left-three">
              COMFORT
            </h1>
          </div>
        </div>
        <div className="button-menu">
          <button>Shop</button>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-box">
          <div className="the-footer">
            <h2>FIND A STORE</h2>
            <h2>BECOME A MEMBER</h2>
            <h2>STUDENT DISCOUNT</h2>
            <h2>SEND US FEEDBACK</h2>
          </div>
          <div className="the-footer">
            <h2>GET HELP</h2>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Returns</p>
            <p>Payments Options</p>
            <p>Contact Us</p>
          </div>
          <div className="the-footer">
            <h2>About Nike</h2>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Returns</p>
            <p>Payments Options</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
