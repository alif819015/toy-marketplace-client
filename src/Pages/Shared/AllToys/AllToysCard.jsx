

const AllToysCard = ({toy}) => {
    const {seller, toyName, category, price, quantity} = toy;
   
    return (
        <tr>
        <th>1</th>
        <td>{seller}</td>
        <td>{toyName}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><button className="btn btn-active btn-secondary">Details</button></td>
      </tr>
    );
};

export default AllToysCard;