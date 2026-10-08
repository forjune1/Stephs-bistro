// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});




const customOrder = document.getElementById("customOrder");
const submitOrder = document.getElementById("submitOrder");

submitOrder.addEventListener("click", () => {
  const order = customOrder.value.trim();

  if (order === "") {
    alert("Please enter your order.");
    return;
  }

  const phoneNumber = "2349023306168";

  const message = `Hello Stephs Bistro, I would like to make a custom order:

  ${order}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});