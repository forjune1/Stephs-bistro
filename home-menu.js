const homeMenuContainer = document.querySelector(".home-menu-container");

const popularMeals = menu.slice(0, 10);

function displayHomeMenu() {

  const meals = popularMeals.map(function (item) {

    return `
      <article class="home-menu-item">

        <img 
          src="${item.img}" 
          alt="${item.title}"
        >

        <div class="home-menu-info">
          <h3>${item.title}</h3>

          <p>
            ${item.desc}
          </p>

          <span>₦${item.price.toLocaleString()}</span>
        </div>

      </article>
    `;

  }).join("");

  homeMenuContainer.innerHTML = meals;
}

displayHomeMenu();