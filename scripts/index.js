const url = `https://json-server-deployment-2.onrender.com`;
function fetchData() {
  fetch(`${url}/users`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("res :", res);
      appendData(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
fetchData();
function appendData(data) {
  let container = document.getElementById("container");
  container.innerHTML = null;
  container.innerHTML = `${data
    .map((element) => {
      return createCard(element.name, element.age);
    })
    .join(" ")}`;
}

function createCard(name, age) {
  return `
      <div class="card">
         <h3>Name : ${name}</h3>
         <p>Age : ${age}</p>
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
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      //       console.log(res);
      //       if (res.status === 201) {
      //         alert("user added");
      //       }
      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
}
