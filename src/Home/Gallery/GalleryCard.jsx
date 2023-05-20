const GalleryCard = ({toy}) => {
    const {image, name,rating} = toy;
  return (
    <div className="">
      <div className="card w-100 md:h-64 bg-base-100 shadow-xl">
        <figure>
          <img className="mx-auto w-100 md:h-40"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-md font-bold">{name}</h2>
          <p><small>Rating: {rating}</small></p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
