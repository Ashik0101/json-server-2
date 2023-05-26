fetch(`https://json-server-deployment-2.onrender.com/doctors`)
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
      return createCard(element.name, element.experience);
    })
    .join(" ")}`;
}

function createCard(name, experience) {
  return `
      <div class="card">
         <h3>Name : ${name}</h3>
         <p>Experience : ${experience}</p>
      </div>
      
      `;
}
