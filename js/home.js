const logOut = document.getElementById("log-out");

logOut.addEventListener("click", function (e) {
  location.href = `./index.html`;
});

const welcomeName = document.querySelector(".welcome");
welcomeName.innerHTML = `Welcome ${JSON.parse(
  localStorage.getItem("finalName")
)}`;
