import React, { useReducer } from "react";
import { addItem } from "../apis/lists";
import formReducer from "../reducers/formReducer";
import "../styles/AddItem.css";

// const [item, setItem] = useState({});
// const [name, setName] = useState("");
// const [quantity, setQuan] = useState(0);
// const [unit, setUnit] = useState("");

function AddItem({ onAddItem }) {
  // console.log(options[0].display);
  const initialFormState = { name: "", quantity: 0, unit: "" };

  const options = [
    { display: "--SELECT--", value: "" },
    { display: "NONE", value: "-" },
    { display: "KG", value: "kg" },
    { display: "CARTON", value: "carton" },
    { display: "DOZEN", value: "dozen" },
    { display: "LITRE", value: "litre" },
  ];

  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch({
      type: "HANDLE INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
    // console.log(formState);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(formState);
    addItem(formState).then(onAddItem());
  };

  return (
    <div className="addItem">
      <form className="addItemForm" onSubmit={onFormSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            className="itemName"
            name="name"
            required
            defaultValue={formState.name}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="quantity">
          Quantity
          <input
            type="number"
            className="itemQuantity"
            name="quantity"
            min="1"
            required
            defaultValue={formState.quantity}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="unit">
          Unit
          <select
            name="unit"
            id="unit-options"
            required
            defaultValue={formState.unit}
            onChange={(e) => handleChange(e)}
          >
            {options.map((op) => (
              <option key={op.value} value={op.value}>
                {op.display}
              </option>
            ))}
          </select>
        </label>

        <button className="btn-add" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddItem;
