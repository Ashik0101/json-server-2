fetch(`https://json-server-deployment-2.onrender.com/students`)
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

function appendData(data) {
  let container = document.getElementById("container");
  container.innerHTML = null;
  container.innerHTML = `${data
    .map((element) => {
      return createCard(element.name, element.class);
    })
    .join(" ")}`;
}

function createCard(name, classs) {
  return `
      <div class="card">
         <h3>Name : ${name}</h3>
         <p>Class : ${classs}</p>
      </div>
      
      `;
}
