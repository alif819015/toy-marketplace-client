import { Link } from "react-router-dom";

const ToyList = ({ toy, handleDelete, handleUpdate, handleView }) => {
  const { _id, image, price, date, seller, retting, status } = toy;

  return (
    <tr>
      <th>
        <label></label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-10 h-10">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{seller}</div>
      </td>
      <td>{date}</td>
      <td>{retting}</td>
      <td>${price}</td>
      <th>
        <Link to={`/updated/${_id}`}>
          <button className="btn btn-sm">update</button>
        </Link>
      </th>

      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-outline"
        >
          delete
        </button>
      </th>
      <th>
        <Link to={`/myView/${_id}`}>
          <button onClick={() => handleView(_id)} className="btn btn-sm">
            View
          </button>
        </Link>
      </th>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-purple-600">Confirmed</span>
        ) : (
          <button
            onClick={() => handleUpdate(_id)}
            className="btn btn-sm btn-xs"
          >
            order
          </button>
        )}
      </th>
    </tr>
  );
};

export default ToyList;
