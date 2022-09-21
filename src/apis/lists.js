export const fetchList = async () => {
  const res = await fetch("http://localhost:3001/list", {
    method: "GET",
  });
  return await res.json();
};

export const addItem = (item) => {
  return fetch("http://localhost:3001/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((data) => {
    data.json();
  });
};

export const deleteItem = (id) => {
  return fetch(`http://localhost:3001/list/${id}`, {
    method: "DELETE",
  }).then((data) => {
    console.log(data.json());
  });
};

//console.log(fetchList);
