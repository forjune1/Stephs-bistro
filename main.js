
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// MOBILE NAVIGATION
if (navToggle && links) {
  navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
  });
}

// CUSTOM ORDER
const customOrder = document.getElementById("customOrder");
const submitOrder = document.getElementById("submitOrder");

if (submitOrder && customOrder) {
  submitOrder.addEventListener("click", function () {
    const order = customOrder.value.trim();

    if (order === "") {
      alert("Please enter your order.");
      return;
    }

    const phoneNumber = "2349023306168";

    const message =
      `Hello Steph's Bistro, I would like to make a custom order:\n\n${order}`;

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  });
}
