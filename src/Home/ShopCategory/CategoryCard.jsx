import { Link } from "react-router-dom";


const CategoryCard = ({toy}) => {
    console.log(toy)
    const { _id, img, category} = toy;

    const handleCategoryView = id =>{
      fetch(
        `https://assignment-11-toy-marketplace-server-alif819015.vercel.app/all-categories/${id}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
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
                <div className="card-actions justify-end">
                  <Link to={`/categoryView/${_id}`}>
                  <button onClick={()=>handleCategoryView(_id)} className="btn btn-outline btn-success">View Details</button>
                  </Link>
                </div>
              </div>
            </div> 
        </div>
    );
};

export default CategoryCard;