import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const ShopCategory = () => {
  const [categories, setCategories] = useState([]);
  const [activeToy, setActiveToy] = useState("Transformers");
  useEffect((activeToy) => {
    fetch(
      `https://assignment-11-toy-marketplace-server-alif819015.vercel.app/all-categories/${activeToy}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      });
  }, [activeToy]);

  const handleTabClick = (tabName) => {
    setActiveToy(tabName);
  };
  return (
    <div>
      <h3 className="text-3xl text-center font-bold">
        Shop by Category
      </h3>
      <div className="mx-auto">
        <div className="text-black font-bold flex justify-center my-5">
          <div 
            onClick={() => handleTabClick("Transformers")}
            className= {`tab  tab2 Transformers ${
                activeToy == "Transformers" ? " bg-purple-700 text-white" : ""
            }`}
          >
            Transformers
          </div>
          <div
            onClick={() => handleTabClick("Avengers")}
            className={`tab  tab2 Avengers ${
                activeToy == "Avengers" ? " bg-purple-700 text-white" : ""
            }`}
          >
            Avengers
          </div>
          <div
            onClick={() => handleTabClick("Marvel")}
            className={`tab  tab2 Marvel ${
                activeToy == "Marvel" ? " bg-purple-700 text-white" : ""
            }`}
          >
            Marvel
          </div>
        </div>
      </div>
      <div className="flex gap-8 justify-center">
      {
        categories?.map( toy => <CategoryCard key={toy._id} toy={toy}></CategoryCard>)
      }
      </div>
    </div>
  );
};

export default ShopCategory;
