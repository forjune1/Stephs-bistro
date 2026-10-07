const menu = [
  {
    id: 1,
    title: "Basmatic Smokey Jollof 1.5L",
    category: "Rice",
    price: 35000,
    img: "./images/item-1.jpeg",
    desc: `Aromatic basmati rice cooked in a rich tomato and pepper sauce with a delicious smoky flavor.`,
  },
  {
    id: 2,
    title: "Basmatic Fried Rice 1.5L",
    category: "Rice",
    price: 35000,
    img: "./images/item-1.jpeg",
    desc: `Fragrant basmati fried rice tossed with colorful vegetables and savory seasonings for a flavorful meal.`,
  },
  {
    id: 3,
    title: "Basmatic Coconut Rice 1.5L",
    category: "Rice",
    price: 40000,
    img: "./images/item-1.jpeg",
    desc: `Tender basmati rice cooked with creamy coconut milk and aromatic spices for a rich, mildly sweet flavor.`,
  },
  {
    id: 4,
    title: "Basmatic Beef Rice 1.5L",
    category: "Rice",
    price: 35000,
    img: "./images/item-1.jpeg",
    desc: `Flavorful basmati rice prepared with tender pieces of beef, vegetables, and savory spices.`,
  },
  {
    id: 5,
    title: "Native Rice 1.5L",
    category: "Rice",
    price: 35000,
    img: "./images/item-1.jpeg",
    desc: `Traditional Nigerian-style rice prepared with aromatic local ingredients and rich, savory flavors.`,
  },
  {
    id: 6,
    title: "Basmatic Smokey Jollof 2L",
    category: "Rice",
    price: 50000,
    img: "./images/item-1.jpeg",
    desc: `A generous portion of aromatic basmati jollof rice cooked in a rich tomato-pepper sauce with a smoky finish.`,
  },
  {
    id: 7,
    title: "Basmatic Fried Rice 2L",
    category: "Rice",
    price: 50000,
    img: "./images/item-1.jpeg",
    desc: `A generous serving of basmati fried rice mixed with colorful vegetables and savory seasonings.`,
  },
  {
    id: 8,
    title: "Basmatic Coconut Rice 2L",
    category: "Rice",
    price: 50000,
    img: "./images/item-1.jpeg",
    desc: `A generous portion of tender basmati rice cooked in creamy coconut milk and aromatic spices.`,
  },
  {
    id: 9,
    title: "Basmatic Beef Rice 2L",
    category: "Rice",
    price: 45000,
    img: "./images/item-1.jpeg",
    desc: `Basmati rice combined with tender beef, vegetables, and savory seasonings for a hearty meal.`,
  },
  {
    id: 10,
    title: "Native Rice 2L",
    category: "Rice",
    price: 45000,
    img: "./images/item-1.jpeg",
    desc: `A generous serving of traditional Nigerian-style rice made with aromatic local ingredients and rich flavors.`,
  },

  {
    id: 11,
    title: "Stir Fried Pasta 1.5L",
    category: "Pasta",
    price: 30000,
    img: "./images/item-2.jpeg",
    desc: `Pasta stir-fried with fresh vegetables, aromatic seasonings, and a savory sauce for a delicious meal.`,
  },
  {
    id: 12,
    title: "Native Pasta 1.5L",
    category: "Pasta",
    price: 30000,
    img: "./images/item-2.jpeg",
    desc: `Pasta prepared with traditional local flavors, aromatic spices, and savory ingredients.`,
  },
  {
    id: 13,
    title: "Jollof Pasta 1.5L",
    category: "Pasta",
    price: 30000,
    img: "./images/item-2.jpeg",
    desc: `Pasta cooked in a rich tomato and pepper sauce with classic jollof-inspired spices and flavors.`,
  },
  {
    id: 14,
    title: "Stir Fried Pasta 2L",
    category: "Pasta",
    price: 40000,
    img: "./images/item-2.jpeg",
    desc: `A generous serving of pasta stir-fried with fresh vegetables, aromatic seasonings, and a savory sauce.`,
  },
  {
    id: 15,
    title: "Native Pasta 2L",
    category: "Pasta",
    price: 40000,
    img: "./images/item-2.jpeg",
    desc: `A generous portion of pasta prepared with traditional local flavors, aromatic spices, and savory ingredients.`,
  },
  {
    id: 16,
    title: "Jollof Pasta 2L",
    category: "Pasta",
    price: 35000,
    img: "./images/item-2.jpeg",
    desc: `A generous serving of pasta cooked in a rich tomato and pepper sauce with delicious jollof-inspired flavors.`,
  },

  {
    id: 17,
    title: "Abacha With Fried Fish 1.5L",
    category: "Dishes",
    price: 30000,
    img: "./images/item-3.jpeg",
    desc: `Traditional African salad made with cassava flakes, rich palm-oil dressing, spices, and crispy fried fish.`,
  },
  {
    id: 18,
    title: "Abacha With Fried Fish 1.5L",
    category: "Dishes",
    price: 35000,
    img: "./images/item-3.jpeg",
    desc: `Traditional African salad made with cassava flakes, rich palm-oil dressing, spices, and crispy fried fish.`,
  },
  {
    id: 19,
    title: "Nkwobi 1.5L",
    category: "Dishes",
    price: 45000,
    img: "./images/item-3.jpeg",
    desc: `Tender cow foot cooked in a rich spicy palm-oil sauce with traditional Nigerian seasonings.`,
  },
  {
    id: 20,
    title: "Nkwobi 2L",
    category: "Dishes",
    price: 50000,
    img: "./images/item-3.jpeg",
    desc: `A generous portion of tender cow foot cooked in a rich, spicy palm-oil sauce with traditional seasonings.`,
  },
  {
    id: 21,
    title: "Fio Fio 1.5L",
    category: "Dishes",
    price: 40000,
    img: "./images/item-3.jpeg",
    desc: `Creamy Nigerian black-eyed bean dish seasoned with aromatic spices and traditional local flavors.`,
  },
  {
    id: 22,
    title: "Fio Fio 2L",
    category: "Dishes",
    price: 45000,
    img: "./images/item-3.jpeg",
    desc: `A generous serving of creamy black-eyed beans prepared with aromatic spices and traditional local flavors.`,
  },
  {
    id: 23,
    title: "Ukwa With Fried Fish 1.5L",
    category: "Dishes",
    price: 40000,
    img: "./images/item-3.jpeg",
    desc: `Traditional African breadfruit cooked until tender and served with flavorful fried fish.`,
  },
  {
    id: 24,
    title: "Ukwa With Fried Fish 2L",
    category: "Dishes",
    price: 45000,
    img: "./images/item-3.jpeg",
    desc: `A generous serving of tender African breadfruit paired with flavorful fried fish.`,
  },

  {
    id: 25,
    title: "Egusi Soup 1.5L",
    category: "Soup",
    price: 40000,
    img: "img/signatureegusi.avif",
    desc: `Rich Nigerian melon-seed soup cooked with leafy vegetables, palm oil, and savory seasonings.`,
  },
  {
    id: 26,
    title: "Egusi Soup 2L",
    category: "Soup",
    price: 45000,
    img: "./images/item-4.jpeg",
    desc: `A generous serving of rich Nigerian egusi soup made with melon seeds, vegetables, palm oil, and savory seasonings.`,
  },
  {
    id: 27,
    title: "White Soup/Nsala 1.5L",
    category: "Soup",
    price: 40000,
    img: "./images/item-4.jpeg",
    desc: `Light and flavorful Nigerian white soup made with traditional spices and a rich, savory broth.`,
  },
  {
    id: 28,
    title: "White Soup/Nsala 2L",
    category: "Soup",
    price: 45000,
    img: "./images/item-4.jpeg",
    desc: `A generous serving of traditional Nsala soup with a light, savory broth and aromatic spices.`,
  },
  {
    id: 29,
    title: "Banga Soup 1.5L",
    category: "Soup",
    price: 40000,
    img: "./images/item-4.jpeg",
    desc: `Rich Nigerian palm-fruit soup prepared with aromatic spices and traditional savory flavors.`,
  },
  {
    id: 30,
    title: "Banga Soup 2L",
    category: "Soup",
    price: 45000,
    img: "./images/item-4.jpeg",
    desc: `A generous serving of rich palm-fruit Banga soup cooked with aromatic Nigerian spices.`,
  },
  {
    id: 31,
    title: "Vegetable Soup 1.5L",
    category: "Soup",
    price: 35000,
    img: "./images/item-4.jpeg",
    desc: `Nutritious Nigerian vegetable soup packed with leafy greens, palm oil, and flavorful traditional seasonings.`,
  },
  {
    id: 32,
    title: "Vegetable Soup 2L",
    category: "Soup",
    price: 40000,
    img: "./images/item-4.jpeg",
    desc: `A generous serving of nutritious Nigerian vegetable soup made with leafy greens and traditional seasonings.`,
  },
  {
    id: 33,
    title: "Ogbono Soup 1.5L",
    category: "Soup",
    price: 40000,
    img: "./images/item-4.jpeg",
    desc: `Thick and delicious Nigerian soup made from ground ogbono seeds, leafy vegetables, and rich savory seasonings.`,
  },
  {
    id: 34,
    title: "Ogbono Soup 2L",
    category: "Soup",
    price: 45000,
    img: "./images/item-4.jpeg",
    desc: `A generous serving of thick Nigerian ogbono soup prepared with ground ogbono seeds, vegetables, and savory spices.`,
  },

  {
    id: 35,
    title: "Okro Soup 1.5L",
    category: "Soup",
    price: 35000,
    img: "./images/item-5.jpeg",
    desc: `Traditional Nigerian okro soup made with fresh okra, vegetables, palm oil, and flavorful seasonings.`,
  },
  {
    id: 36,
    title: "Okro Soup 2L",
    category: "Soup",
    price: 40000,
    img: "./images/item-5.jpeg",
    desc: `A generous serving of traditional Nigerian okro soup prepared with fresh okra, vegetables, and savory seasonings.`,
  },
  {
    id: 37,
    title: "Oha Soup 1.5L",
    category: "Soup",
    price: 40000,
    img: "./images/item-5.jpeg",
    desc: `Traditional Igbo-style Oha soup made with tender oha leaves, palm oil, and rich local seasonings.`,
  },
  {
    id: 38,
    title: "Oha Soup 2L",
    category: "Soup",
    price: 45000,
    img: "./images/item-5.jpeg",
    desc: `A generous serving of traditional Oha soup prepared with tender oha leaves, palm oil, and aromatic spices.`,
  },
  {
    id: 39,
    title: "Bitter Leaf Soup 1.5L",
    category: "Soup",
    price: 45000,
    img: "./images/item-5.jpeg",
    desc: `Traditional Nigerian bitter leaf soup prepared with fresh bitter leaves, palm oil, and rich savory seasonings.`,
  },
  {
    id: 40,
    title: "Bitter Leaf Soup 2L",
    category: "Soup",
    price: 50000,
    img: "./images/item-5.jpeg",
    desc: `A generous serving of traditional bitter leaf soup made with bitter leaves, palm oil, and flavorful seasonings.`,
  },
  {
    id: 41,
    title: "Afang Soup 1.5L",
    category: "Soup",
    price: 40000,
    img: "./images/item-5.jpeg",
    desc: `Rich Nigerian Afang soup prepared with Afang leaves, vegetables, palm oil, and traditional savory seasonings.`,
  },
  {
    id: 42,
    title: "Afang Soup 2L",
    category: "Soup",
    price: 45000,
    img: "./images/item-5.jpeg",
    desc: `A generous serving of rich Afang soup made with Afang leaves, vegetables, palm oil, and traditional seasonings.`,
  },

  {
    id: 43,
    title: "Peppered Chicked",
    category: "Protein",
    price: 5000,
    img: "./images/item-5.jpeg",
    desc: `Tender chicken seasoned with aromatic spices and tossed in a rich, spicy pepper sauce.`,
  },
  {
    id: 44,
    title: "Peppered Turkey",
    category: "Protein",
    price: 7000,
    img: "./images/item-5.jpeg",
    desc: `Tender turkey pieces coated in a flavorful, spicy pepper sauce with aromatic Nigerian seasonings.`,
  },
  {
    id: 45,
    title: "Peppered Beef",
    category: "Protein",
    price: 3000,
    img: "./images/item-5.jpeg",
    desc: `Tender beef pieces cooked with a rich blend of peppers and savory spices.`,
  },
  {
    id: 46,
    title: "Egg",
    category: "Protein",
    price: 500,
    img: "./images/item-5.jpeg",
    desc: `Fresh egg prepared as a simple and delicious protein accompaniment to your meal.`,
  },
  {
    id: 47,
    title: "Coleslaw",
    category: "Protein",
    price: 2000,
    img: "./images/item-5.jpeg",
    desc: `Fresh and crunchy cabbage and carrot salad tossed in a creamy, lightly seasoned dressing.`,
  },
  {
    id: 48,
    title: "Peppered Snail",
    category: "Protein",
    price: 6000,
    img: "./images/item-5.jpeg",
    desc: `Tender snail cooked and coated in a spicy pepper sauce with aromatic Nigerian seasonings.`,
  },
  {
    id: 49,
    title: "Fried Beef",
    category: "Protein",
    price: 1000,
    img: "./images/item-5.jpeg",
    desc: `Tender pieces of beef fried until flavorful and lightly seasoned for a delicious protein addition.`,
  },
  {
    id: 50,
    title: "Sausage",
    category: "Protein",
    price: 500,
    img: "./images/item-5.jpeg",
    desc: `Savory sausage prepared to complement rice, pasta, and other main dishes.`,
  },

  {
    id: 51,
    title: "Chicken Pepper Soup 1.5L",
    category: "PepperSoup",
    price: 35000,
    img: "./images/item-6.jpeg",
    desc: `Spicy and aromatic Nigerian pepper soup prepared with tender chicken and traditional herbs and spices.`,
  },
  {
    id: 52,
    title: "Catfish Pepper Soup 1.5L",
    category: "PepperSoup",
    price: 35000,
    img: "./images/item-6.jpeg",
    desc: `Flavorful catfish pepper soup made with tender catfish, fresh peppers, and aromatic Nigerian spices.`,
  },
  {
    id: 53,
    title: "Assorted Pepper Soup 1.5L",
    category: "PepperSoup",
    price: 40000,
    img: "./images/item-6.jpeg",
    desc: `Rich and spicy pepper soup prepared with assorted meats and traditional Nigerian herbs and spices.`,
  },
  {
    id: 54,
    title: "Goat Meat Pepper Soup 1.5L",
    category: "PepperSoup",
    price: 40000,
    img: "./images/item-6.jpeg",
    desc: `Tender goat meat simmered in a spicy, aromatic pepper soup with traditional Nigerian spices.`,
  },
  {
    id: 55,
    title: "Chicken Pepper Soup 2L",
    category: "PepperSoup",
    price: 40000,
    img: "./images/item-6.jpeg",
    desc: `A generous serving of spicy chicken pepper soup prepared with aromatic herbs and traditional Nigerian spices.`,
  },
  {
    id: 56,
    title: "CatFish Pepper Soup 2L",
    category: "PepperSoup",
    price: 40000,
    img: "./images/item-6.jpeg",
    desc: `A generous serving of flavorful catfish pepper soup made with fresh peppers and aromatic spices.`,
  },
  {
    id: 57,
    title: "Assorted Pepper Soup 2L",
    category: "PepperSoup",
    price: 45000,
    img: "./images/item-6.jpeg",
    desc: `A generous serving of spicy assorted meat pepper soup prepared with traditional herbs and seasonings.`,
  },
  {
    id: 58,
    title: "Goat Meat Pepper Soup 2L",
    category: "PepperSoup",
    price: 45000,
    img: "./images/item-6.jpeg",
    desc: `A generous serving of tender goat meat simmered in a spicy and aromatic Nigerian pepper soup.`,
  },

  {
    id: 59,
    title: "Chicken Stew 1.5L",
    category: "Stew",
    price: 30000,
    img: "./images/item-7.jpeg",
    desc: `Rich tomato-based stew prepared with tender chicken, peppers, tomatoes, and savory Nigerian seasonings.`,
  },
  {
    id: 60,
    title: "Beef Stew 1.5L",
    category: "Stew",
    price: 30000,
    img: "./images/item-7.jpeg",
    desc: `Rich and flavorful tomato stew cooked with tender beef, peppers, tomatoes, and aromatic spices.`,
  },
  {
    id: 61,
    title: "Goat Meat Stew 1.5L",
    category: "Stew",
    price: 35000,
    img: "./images/item-7.jpeg",
    desc: `Hearty Nigerian tomato stew prepared with tender goat meat, peppers, tomatoes, and savory seasonings.`,
  },
  {
    id: 62,
    title: "Catfish Stew 1.5L",
    category: "Stew",
    price: 35000,
    img: "./images/item-7.jpeg",
    desc: `Flavorful tomato stew cooked with tender catfish, peppers, tomatoes, and aromatic Nigerian spices.`,
  },
  {
    id: 63,
    title: "Ofeakwu 1.5L",
    category: "Stew",
    price: 35000,
    img: "./images/item-7.jpeg",
    desc: `Traditional Igbo palm-fruit stew prepared with aromatic spices and rich, savory local flavors.`,
  },
  {
    id: 64,
    title: "Chicken Stew 2L",
    category: "Stew",
    price: 40000,
    img: "./images/item-7.jpeg",
    desc: `A generous serving of rich tomato-based chicken stew made with peppers, tomatoes, and savory seasonings.`,
  },
  {
    id: 65,
    title: "Beef Stew 2L",
    category: "Stew",
    price: 40000,
    img: "./images/item-7.jpeg",
    desc: `A generous serving of rich tomato stew cooked with tender beef, peppers, tomatoes, and aromatic spices.`,
  },
  {
    id: 66,
    title: "Goat Meat Stew 2L",
    category: "Stew",
    price: 45000,
    img: "./images/item-7.jpeg",
    desc: `A generous serving of hearty Nigerian goat meat stew prepared with tomatoes, peppers, and savory spices.`,
  },
  {
    id: 67,
    title: "Catfish Stew 2L",
    category: "Stew",
    price: 45000,
    img: "./images/item-7.jpeg",
    desc: `A generous serving of flavorful catfish stew cooked in a rich tomato and pepper sauce.`,
  },
  {
    id: 68,
    title: "Ofeakwu 2L",
    category: "Stew",
    price: 45000,
    img: "./images/item-7.jpeg",
    desc: `A generous serving of traditional Ofeakwu prepared with palm fruit and aromatic local spices.`,
  },

  {
    id: 69,
    title: "Garri",
    category: "Swallow",
    price: 400,
    img: "./images/item-8.jpeg",
    desc: `Smooth and refreshing garri prepared as a classic Nigerian swallow, perfect with soups and stews.`,
  },
  {
    id: 70,
    title: "Semo",
    category: "Swallow",
    price: 400,
    img: "./images/item-8.jpeg",
    desc: `Soft and smooth semolina swallow, perfect for pairing with rich Nigerian soups and stews.`,
  },
  {
    id: 71,
    title: "Pounded Yam",
    category: "Swallow",
    price: 400,
    img: "./images/item-8.jpeg",
    desc: `Smooth, soft, and stretchy pounded yam, traditionally served with rich Nigerian soups.`,
  },
  {
    id: 72,
    title: "Plantain Flour",
    category: "Swallow",
    price: 400,
    img: "./images/item-8.jpeg",
    desc: `Smooth plantain-flour swallow with a naturally rich flavor, perfect with Nigerian soups and stews.`,
  },
];


// =====================================================
// GET HTML ELEMENTS
// =====================================================

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");


// =====================================================
// VENDOR WHATSAPP NUMBER
// =====================================================

// IMPORTANT:
// Use the vendor's Nigerian number with 234
// Do NOT include +, spaces, or the first 0.
//
// Example:
// 08139436706
// becomes:
// 2348139436706

const VENDOR_WHATSAPP_NUMBER = "2349023306168";


// =====================================================
// PAGE LOAD
// =====================================================

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});


// =====================================================
// DISPLAY MENU ITEMS
// =====================================================

function displayMenuItems(menuItems) {

  let displayMenu = menuItems
    .map(function (item) {

      return `
        <article class="menu-item">

          <img 
            src="${item.img}" 
            alt="${item.title}" 
            class="photo"
          />

          <div class="item-info">

            <header>

              <h4>${item.title}</h4>

              <h4 class="price">
                ₦${item.price}
              </h4>

            </header>

            <p class="item-text">
              ${item.desc}
            </p>

            <button 
              type="button" 
              class="order-btn" 
              data-id="${item.id}"
            >
              Order now
            </button>

          </div>

        </article>
      `;
    })
    .join("");

  sectionCenter.innerHTML = displayMenu;


  // ===================================================
  // ORDER BUTTONS
  // ===================================================

  sectionCenter
    .querySelectorAll(".order-btn")
    .forEach(function (button) {

      button.addEventListener("click", function () {

        // Find the food item that was clicked
        const item = menu.find(function (menuItem) {

          return menuItem.id === Number(button.dataset.id);

        });


        // If item doesn't exist, stop
        if (!item) {
          return;
        }


        // =================================================
        // CREATE WHATSAPP MESSAGE
        // =================================================

        const message = encodeURIComponent(

          `Hello, I would like to order:\n\n` +

          `Food: ${item.title}\n` +

          `Category: ${item.category}\n` +

          `Price: ₦${item.price}\n` 
        );


        // =================================================
        // OPEN WHATSAPP
        // =================================================

        const whatsappURL =
          `https://wa.me/${VENDOR_WHATSAPP_NUMBER}?text=${message}`;


        window.open(whatsappURL, "_blank");

      });

    });

}


// =====================================================
// DISPLAY CATEGORY BUTTONS
// =====================================================

function displayMenuButtons() {

  const categories = menu.reduce(

    function (values, item) {

      if (!values.includes(item.category)) {

        values.push(item.category);

      }

      return values;

    },

    ["all"]

  );


  // ===================================================
  // CREATE CATEGORY BUTTONS
  // ===================================================

  const categoryBtns = categories

    .map(function (category) {

      return `
        <button 
          type="button" 
          class="filter-btn" 
          data-id="${category}"
        >
          ${category}
        </button>
      `;

    })

    .join("");


  btnContainer.innerHTML = categoryBtns;


  // ===================================================
  // ADD CLICK EVENT TO CATEGORY BUTTONS
  // ===================================================

  const filterBtns =
    btnContainer.querySelectorAll(".filter-btn");


  filterBtns.forEach(function (btn) {

    btn.addEventListener("click", function (e) {

      const category =
        e.currentTarget.dataset.id;


      // =================================================
      // SHOW ALL
      // =================================================

      if (category === "all") {

        displayMenuItems(menu);

        return;

      }


      // =================================================
      // FILTER BY CATEGORY
      // =================================================

      const menuCategory = menu.filter(

        function (menuItem) {

          return menuItem.category === category;

        }

      );


      displayMenuItems(menuCategory);

    });

  });

}


