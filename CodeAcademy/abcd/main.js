const name = document.getElementById("name");
const pasw = document.getElementById("pass");
const btn = document.getElementById("btn");

btn.addEventListener("click", myfunc);

function myfunc(even) {
  if (name.value == "Nihad" && pasw.value == 12345) {
    window.location.href = "http://127.0.0.1:5500/home.html";
  } else {
    alert(" Sehifeye giris mumkun olmadi");
    // even.preventDefault();
  }
}
