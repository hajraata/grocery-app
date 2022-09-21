import React, { useEffect, useState } from "react";
import { deleteItem } from "../apis/lists";
import "../styles/ListItem.css";

function ListItem({ listItems, onDeleteItem }) {
  const [list, setList] = useState([]);

  //console.log(listItems);

  useEffect(() => {
    setList(listItems);
  }, [listItems]);

  //console.log(list);

  const onDelete = (e) => {
    e.preventDefault();
    const id = e.target.id;
    deleteItem(id).then(onDeleteItem());
  };

  // console.log(list);
  if (list.length !== 0) {
    return (
      <div className="listItem">
        <table className="items">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.id} className="itemDetails">
                <td className="itemName">{item.name}</td>
                <td className="itemQuantity">
                  {item.quantity} {item.unit}
                </td>
                <td className="deleteItem">
                  <button
                    className="btn-delete"
                    id={item.id}
                    onClick={(e) => onDelete(e)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="no-items">
        <h3 className="no-items-heading">No items in your list yet</h3>
      </div>
    );
  }
}

export default ListItem;
