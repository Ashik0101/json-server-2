const url = "https://json-server-deployment-2.onrender.com";
window.addEventListener("load", fetchData);
function fetchData() {
  fetch(`${url}/users`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("res :", res);
      appendData(res);
      handleDelete();
    })
    .catch((err) => {
      console.log(err);
    });
}

function appendData(data) {
  let container = document.getElementById("container");
  container.innerHTML = null;
  container.innerHTML = `${data
    .map((element) => {
      return createCard(element.name, element.age, element.id);
    })
    .join(" ")}`;
}

function createCard(name, age, id) {
  return `
      <div class="card">
         <p> ${id} </p>
         <h3>Name : ${name}</h3>
         <p>Age : ${age}</p>
         <button id="button" data-id = "${id}">Delete </button>
      </div>
      
      `;
}

//add user
let addButton = document.getElementById("submit");
addButton.addEventListener("click", () => {
  let payload = {
    name: document.getElementById("name").value,
    age: +document.getElementById("age").value,
    id: +document.getElementById("id_input").value,
  };
  console.log("payload is :", payload);
  AddUser(payload);
});

function AddUser(data) {
  console.log("data inside func :", data);
  fetch(`${url}/users`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // fetchData();
      location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}

function handleDelete() {
  let buttons = document.querySelectorAll("#button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event.target.dataset.id);
      deleteFunction(event.target.dataset.id);
    });
  });
}

function deleteFunction(id) {
  fetch(`${url}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      location.reload();
    })
    .catch((err) => {
      console.log("err :", err);
    });
}
