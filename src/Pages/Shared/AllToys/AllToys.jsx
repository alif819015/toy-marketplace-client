import { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";
import useTitle from "../../../hooks/UseTitle";

const AllToys = () => {
  useTitle('All-Toys')
  const [toyes, setToyes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://assignment-11-toy-marketplace-server-alif819015.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToyes(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`https://assignment-11-toy-marketplace-server-alif819015.vercel.app/toySearchByName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToyes(data);
      });
  };
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
