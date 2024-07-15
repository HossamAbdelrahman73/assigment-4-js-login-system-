const signUp = document.getElementById("sign-up");

let inputs = document.querySelectorAll("input");
let arrlogins = [];
if (localStorage.getItem("logins")) {
  arrlogins = JSON.parse(localStorage.getItem("logins"));
}
console.log(arrlogins);
let validInputs = [
  /[a-zA-Z0-9]{3,}/,
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/,
  /[a-zA-Z0-9_-]{7,}/,
];

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log("adsd");
  let dataObject = {
    namePerson: inputs[0].value,
    email: inputs[1].value,
    password: inputs[2].value,
  };
  let flag = true;
  // console.log(inputs[0].value);
  for (let i = 0; i < inputs.length; i++) {
    if (!validInputs[i].test(inputs[i].value)) {
      flag = false;
      // return;
    }
  }

  if (flag) {
    document.getElementById("success").classList.remove("d-none");
    document.getElementById("error").classList.add("d-none");
    arrlogins.push(dataObject);
    localStorage.setItem("logins", JSON.stringify(arrlogins));
    console.log(arrlogins);
  } else {
    document.getElementById("error").classList.remove("d-none");
    document.getElementById("success").classList.add("d-none");
  }
});
