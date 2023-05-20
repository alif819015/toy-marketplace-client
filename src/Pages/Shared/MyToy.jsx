import { useEffect, useState } from "react";
import ToyList from "./ToyList";

const MyToy = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  const handleDelete = id =>{
    const proceed = confirm('Are you sure you wont to delete');
    if(proceed){
        fetch(`http://localhost:5000/allToys/${id}`, {
            method: 'DELETE',
            headers:{"content-type":"application/json"},
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted successful')
                const remaining = toys.filter(toy => toy._id !== id);
                setToys(remaining);
            }
        })
    }
}

  console.log(toys);
  return (
    <div>
      <h3 className="text-center text-3xl font-bold my-5">My Toy</h3>
      <div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Image</th>
                  <th>Date</th>
                  <th>Ratting</th>
                  <th>Price</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {toys?.map((toy) => (
                  <ToyList key={toy._id} toy={toy} handleDelete={handleDelete}></ToyList>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToy;
