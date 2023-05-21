import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const AllToysView = () => {
    const toys = useLoaderData();
    console.log(toys);
    const {
      image,
      toyName,
      seller,
      email,
      price,
      retting,
      quantity,
      description,
    } = toys;
    return (
  <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.pinimg.com/originals/85/c0/c9/85c0c9ad1f920e5ba7c52c3d286d4dfa.jpg")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
      <div className="card w-96 glass">
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">
            <span className="font-bold">Toy Name: </span>
            {toyName}
          </h2>
          <p>
            <span className="font-bold">Seller Name:</span> {seller}
          </p>
          <p>
            <span className="font-bold">Selar Email:</span> {email}
          </p>
          <p>
            <span className="font-bold">Price:</span> ${price}
          </p>
          <p>
            <div className="flex gap-3">
            <span className="font-bold">Ratting:</span> {retting}
            <Rating style={{ maxWidth: 120 }} value={retting} readOnly />
            </div>
          </p>
          <p>
            <span className="font-bold">Quantity:</span> {quantity}
          </p>
          <p>
            <span className="font-bold">Description:</span> {description}
          </p>
        </div>
      </div>
      </div>
    </div>
  </div>
    );
};

export default AllToysView;