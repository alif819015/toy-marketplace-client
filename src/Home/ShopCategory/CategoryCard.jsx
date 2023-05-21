

const CategoryCard = ({toy}) => {
    console.log(toy)
    const {img, category} = toy;
    return (
        <div>
           <div className="mt-5 card card-compact w-72 bg-base-100 shadow-xl">
              <figure>
                <img className="h-56 w-full"
                  src={img}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-success">View Details</button>
                </div>
              </div>
            </div> 
        </div>
    );
};

export default CategoryCard;