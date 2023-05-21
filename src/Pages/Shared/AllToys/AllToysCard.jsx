import { Link } from "react-router-dom";

const AllToysCard = ({ toy }) => {
  const { _id, seller, toyName, category, price, quantity } = toy;

  const handleAllView = id =>{
    fetch(`https://assignment-11-toy-marketplace-server-alif819015.vercel.app/allToys/${id}`)
    .then(res=> res.json())
    .then(data =>{
        console.log(data)
    })
  }

  return (
    <tr>
      <th>1</th>
      <td>{seller}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/allView/${_id}`}>
        <button onClick={() => handleAllView(_id)} className="btn btn-active btn-secondary">Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToysCard;
