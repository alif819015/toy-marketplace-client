import { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";

const AllToys = () => {
  const [toyes, setToyes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToyes(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearchByName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToyes(data);
      });
  };
  // useEffect(()=>{
  //   fetch('http://localhost:5000/toySearchByName/ironman')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // },[])

  return (
    <div className="m-8">
      <h3 className="text-center text-3xl font-bold my-5">All Toys</h3>
      <div className="p-2 text-center">
        <input
          style={{ border: "1px solid black" }}
          className="p-2  rounded-md"
          onChange={(t) => setSearchText(t.target.value)}
          type="text"
        />
        <button onClick={handleSearch} className="btn btn-outline btn-success">
          Search
        </button>
      </div>
      <table className="table table-zebra mx-5 w-full">
        {/* head */}
        <thead>
          <tr>
            <th>SI</th>
            <th>Seller</th>
            <th>ToyName</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {toyes?.map((toy) => (
            <AllToysCard key={toy} toy={toy}></AllToysCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
