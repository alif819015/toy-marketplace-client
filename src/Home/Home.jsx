import img1 from "../../public/New folder/img2.jpg";
import img2 from "../../public/New folder/img4.jpg";
import img3 from "../../public/New folder/img5.jpg";
import img4 from "../../public/New folder/img8.jpg";
import Gallery from "./Gallery/Gallery";
import ShopCategory from "./ShopCategory/ShopCategory";
// import banner from "../../public/banner";


const Home = () => {
  return (
    <div>
      <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/332/141/94/marvel-comics-hulk-captain-america-iron-man-wallpaper-preview.jpg")`,
      }}
    >
      <div className="hero-overlay bg-[#b92d5e] bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="grid md:grid-cols-2">
          <div className="max-w-md">
            {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button> */}
          </div>

          {/* carousel */}
          <div>
            <div className="navbar md:px-8">
              <div className="carousel m-12 rounded-3xl h-full w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img src={img1} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img src={img2} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img src={img3} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                  <img src={img4} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="my-10">
      <Gallery></Gallery>
    </div>
    <div className="my-10">
      <ShopCategory></ShopCategory>
    </div>
    </div>
  );
};

export default Home;
