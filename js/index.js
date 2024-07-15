const login = document.getElementById("log-in");

let inputs = document.querySelectorAll("input");
// console.log(inputs);

let arrlogins = JSON.parse(localStorage.getItem("logins"));
console.log(arrlogins);
let validInputs = [
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/,
  /[a-zA-Z0-9_-]{7,}/,
];

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let dataObject = {
    email: inputs[0].value,
    password: inputs[1].value,
  };
  let flag = true;

  for (let i = 0; i < inputs.length; i++) {
    if (!validInputs[i].test(inputs[i].value)) {
      flag = false;
      // return;
    }
  }

  let nameP;

  for (let i = 0; i < arrlogins.length; i++) {
    if (
      arrlogins[i].email == inputs[0].value &&
      arrlogins[i].password == inputs[1].value
    ) {
      nameP = arrlogins[i].namePerson;
    }
  }

  // console.log(arrlogins.email); //.includes(dataObject)

  if (flag && nameP) {
    document.getElementById("success").classList.remove("d-none");
    document.getElementById("error").classList.add("d-none");
    location.href = `./home.html`;
    localStorage.setItem("finalName", JSON.stringify(nameP));
  } else {
    document.getElementById("error").classList.remove("d-none");
    document.getElementById("success").classList.add("d-none");
  }
});

// let qw=[eqwe].includes
