const toggle_menu = document.getElementById("nav-menu");
const menu_close = document.getElementById("nav-xmark");

const toggle_display = document.querySelector(".nav-links");

const open_toggle = () => {
  if (window.getComputedStyle(toggle_display).display === "none") {
    toggle_display.style.display = "block";
  }
  if (window.getComputedStyle(toggle_menu).cursor === "pointer") {
    toggle_menu.style.document = "default"
  } else {
    toggle_menu.style.document = "pointer"
  }
}

const close_toggle = () => {
  if (window.getComputedStyle(toggle_display).display === "block") {
    toggle_display.style.display = "none";
  }
}

menu_close.addEventListener("click", close_toggle);
toggle_menu.addEventListener("click", open_toggle);


const cardsContainer = document.getElementById("food-cards-container");
const loadmoreBtn = document.getElementById("load-more-btn");

const foodCards = [
  {
    image: "resources/images/body/cone.jpg",
    title: 'Ice Cream Cone',
    price: 'Rs 120',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad itaque enim assumenda, illum magnam sunt tempore id.Adipisci, ut."
  },

  {
    image: "resources/images/body/fried-rice.jpg",
    title: 'Chinese Fried Rice',
    price: 'Rs 230',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad itaque enim assumenda, illum magnam sunt tempore id.Adipisci, ut."
  },

  {
    image: "resources/images/body/pizza.jpg",
    title: 'Italian Pizza',
    price: 'Rs 420',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad itaque enim assumenda, illum magnam sunt tempore id.Adipisci, ut."
  }, 

  {
    image: "resources/images/body/cone.jpg",
    title: '3 Scops Cone',
    price: 'Rs 80',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad itaque enim assumenda, illum magnam sunt tempore id.Adipisci, ut."
  },

  {
    image: "resources/images/body/dim sum.jpg",
    title: 'Chinese Dim Sum',
    price: 'Rs 2500',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad itaque enim assumenda, illum magnam sunt tempore id.Adipisci, ut."
  }, 

  {
    image: "resources/images/body/tempura.jpg",
    title: 'Tempura Fish',
    price: 'Rs 2140',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad itaque enim assumenda, illum magnam sunt tempore id.Adipisci, ut."
  }
]
const generateCards = (cardInfo) => {
  return `
    <div class="food-card">
    <div class="card-image-container">
      <img
        src="${cardInfo.image}"
        alt="${cardInfo.title}"
      />
    </div>
    <div class="card-info">
      <h4><a href="">${cardInfo.title}</a><span>${cardInfo.price}</span></h4>
      <p>
        ${cardInfo.description}
      </p>
      <span>
        <i class="fa-solid fa-star" style="color: #282828"></i>
        <i class="fa-solid fa-star" style="color: #282828"></i>
        <i class="fa-solid fa-star" style="color: #282828"></i>
        <i class="fa-solid fa-star" style="color: #282828"></i>
        <i class="fa-solid fa-star" style="color: #282828"></i>
      </span>
    </div>
  </div>
    `
}

const cardsPerLoad = 3;
let currentCardIndex = 0;

const renderCards = () => {

  const remainingItems = foodCards.length - currentCardIndex;

  const cardsIndex = foodCards.slice(currentCardIndex, currentCardIndex + cardsPerLoad);
  const cardMarkUp = cardsIndex.map((card) => generateCards(card)).join("");
  cardsContainer.insertAdjacentHTML("beforeend", cardMarkUp);
  currentCardIndex += cardsPerLoad;

  if (remainingItems <= cardsPerLoad){
    loadmoreBtn.style.display = "none";
  }

};

loadmoreBtn.addEventListener("click", renderCards);