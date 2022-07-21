let humb = document.querySelector("#humb");
let popup = document.querySelector("#popup");
let menu = document.querySelector("#menu").cloneNode(1);

humb.addEventListener("click", humbshow);
function humbshow(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  fillpopup();
}
function fillpopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

let contact = document.querySelector(".butcontact");
contact.addEventListener("click", contacttel);
function contacttel() {
  prompt("Please, enter your phone number: ");
  alert("Thank, you! We will call you later.");
}

let submitbut = document.querySelector(".butSubmit");
let emailinput = document.getElementById("input").value;
submitbut.addEventListener("click", booknowel);
function booknowel() {
  if (emailinput) {
    alert("Sorry, you haven`t write you email yet.");
  } else {
    alert(
      "Thank, you for booking! We have already sent you a letter on your email."
    );
  }
  location.reload();
}

$(".buttonbooknow").click(function (event) {
  $(".buttonbooknow").scrollTop(1000);
});
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 2,
    speed: 600,
    infinite: false,
    appendArrows: $(".arrowsdiv"),
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  });
});
