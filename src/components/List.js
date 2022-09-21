import React, { useEffect, useState } from "react";
import { fetchList } from "../apis/lists";
import AddItem from "./AddItem";
import ListItem from "./ListItem";

function List() {
  const [listItems, setListItems] = useState([]);
  const [count, setCount] = useState(listItems.length);

  useEffect(() => {
    fetchList().then((items) => setListItems(items));
  }, [count]);

  const onDeleteItem = () => {
    setCount(count - 1);
  };

  const onAddItem = () => {
    setCount(count + 1);
  };

  //console.log(listItems);

  return (
    <div className="list-container">
      <ListItem listItems={listItems} onDeleteItem={onDeleteItem} />
      <AddItem onAddItem={onAddItem} />
    </div>
  );
}

export default List;
