// function Hero() {
//   return (
//     <div class="wrapper">
//       <div class="container1">
//         <input type="radio" name="slide" id="c1" checked />
//         <label for="c1" class="card">
//           <div class="row">
//             <div class="icon">1</div>
//             <div class="description">
//               <h4>Winter</h4>
//               <p>Winter has so much to offer - creative activities</p>
//             </div>
//           </div>
//         </label>
//         <input type="radio" name="slide" id="c2" />
//         <label for="c2" class="card">
//           <div class="row">
//             <div class="icon">2</div>
//             <div class="description">
//               <h4>Digital Technology</h4>
//               <p>Gets better every day - stay tuned</p>
//             </div>
//           </div>
//         </label>
//         <input type="radio" name="slide" id="c3" />
//         <label for="c3" class="card">
//           <div class="row">
//             <div class="icon">3</div>
//             <div class="description">
//               <h4>Globalization</h4>
//               <p>Help people all over the world</p>
//             </div>
//           </div>
//         </label>
//         <input type="radio" name="slide" id="c4" />
//         <label for="c4" class="card">
//           <div class="row">
//             <div class="icon">4</div>
//             <div class="description">
//               <h4>New technologies</h4>
//               <p>Space engineering becomes more and more advanced</p>
//             </div>
//           </div>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default Hero;
import img1 from "../../assets/main-section-img/IMG_6523_JPG.avif";
import img2 from "../../assets/main-section-img/6A74347A-D57C-4861-A7DC-F379BF50A55D.avif";
import img3 from "../../assets/main-section-img/BE1DDA83-6EB9-4E0C-9864-AA80A0EE8FB2.avif";
import img4 from "../../assets/main-section-img/DSC00943_edited.avif";
import img5 from "../../assets/main-section-img/IMG_7376_JPG.avif";
import img6 from "../../assets/main-section-img/IMG_7374_JPG.avif";
import img7 from "../../assets/main-section-img/DSC08835.avif";
function Hero() {
  return (
    <div className="wrapper">
      <div className="xl:block hidden">
        <div className="container1">
          <input type="radio" name="slide" id="c1" defaultChecked />
          <label htmlFor="c1" className="card card-c1">
            <div className="row">
              {/* <div className="icon">1</div> */}
              <div className="description">
                <h4>The Hagia Sophia</h4>
                <p>Istanbul, Turkey</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className="card card-c2">
            <div className="row">
              {/* <div className="icon">2</div> */}
              <div className="description">
                <h4>Petra</h4>
                <p>Jordan</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className="card card-c3">
            <div className="row">
              {/* <div className="icon">3</div> */}
              <div className="description">
                <h4>Samarkand</h4>
                <p>Uzbekistan</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className="card card-c4">
            <div className="row">
              {/* <div className="icon">4</div> */}
              <div className="description">
                <h4>The Great Wall</h4>
                <p>China</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c5" />
          <label htmlFor="c5" className="card card-c5">
            <div className="row">
              {/* <div className="icon">4</div> */}
              <div className="description">
                <h4>Mogao Grottoes</h4>
                <p>Dunhuang, China</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c6" />
          <label htmlFor="c6" className="card card-c6">
            <div className="row">
              {/* <div className="icon">4</div> */}
              <div className="description">
                <h4>Ellora Caves</h4>
                <p>Maharashtra, India</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c7" />
          <label htmlFor="c7" className="card card-c7">
            <div className="row">
              {/* <div className="icon">4</div> */}
              <div className="description">
                <h4>Cappadocia</h4>
                <p>Turkey</p>
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="xl:hidden block w-full h-[auto]">
        <swiper-container className="mySwiper">
          <swiper-slide>
            <img src={img1} alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src={img2} alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src={img3} alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src={img4} alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src={img5} alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src={img6} alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src={img7} alt="" />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  );
}

export default Hero;
