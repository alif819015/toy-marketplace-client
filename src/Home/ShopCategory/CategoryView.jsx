import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CategoryView = () => {
    const toys = useLoaderData();
    console.log(toys)
        const {
            picture,
            name,
            price,
            rating,
           
          } = toys;
          return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.pinimg.com/originals/85/c0/c9/85c0c9ad1f920e5ba7c52c3d286d4dfa.jpg")` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <div className="card w-96 glass">
              <figure>
                <img src={picture} alt="car!" />
              </figure>
              <div className="card-body text-start">
                <h2 className="card-title">
                  <span className="font-bold">Toy Name: </span>
                  {name}
                </h2>
                <h2 className="card-title">
                  <span className="font-bold">Toy Name: </span>
                  {price}
                </h2>
                <p>
                  <div className="flex gap-3">
                  <span className="font-bold">Ratting:</span> {rating}
                  <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                  </div>
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
    );
};

export default CategoryView;