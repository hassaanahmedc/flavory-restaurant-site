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

// Food Menue Cards 
const cardsContainer = document.getElementById("food-cards-container");
const loadmoreBtn = document.getElementById("load-more-btn");

const foodCards = [
  {
    placeholder_image: "resources/images/body/low-res/cone.gif",
    orignal_image: "resources/images/body/cone.jpg",
    title: 'Ice Cream Cone',
    price: 'Rs 120',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad itaque enim assumenda, illum magnam sunt tempore id.Adipisci, ut."
  },

  {
    placeholder_image: "resources/images/body/low-res/fried-rice.gif",
    orignal_image: "resources/images/body/fried-rice.jpg",
    title: 'Chinese Fried Rice',
    price: 'Rs 230',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad itaque enim assumenda, illum magnam sunt tempore id.Adipisci, ut."
  },

  {
    placeholder_image: "resources/images/body/low-res/pizza.gif",
    orignal_image: "resources/images/body/pizza.jpg",
    title: 'Italian Pizza',
    price: 'Rs 420',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad itaque enim assumenda, illum magnam sunt tempore id.Adipisci, ut."
  },

  {
    placeholder_image: "resources/images/body/low-res/cone.gif",
    orignal_image: "resources/images/body/cone.jpg",
    title: '3 Scops Cone',
    price: 'Rs 80',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad itaque enim assumenda, illum magnam sunt tempore id.Adipisci, ut."
  },

  {
    placeholder_image: "resources/images/body/low-res/dim sum.gif",
    orignal_image: "resources/images/body/dim sum.jpg",
    title: 'Chinese Dim Sum',
    price: 'Rs 2500',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad itaque enim assumenda, illum magnam sunt tempore id.Adipisci, ut."
  },

  {
    placeholder_image: "resources/images/body/low-res/tempura.gif",
    orignal_image: "resources/images/body/tempura.jpg",
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
        src="${cardInfo.placeholder_image}"
        data-src="${cardInfo.orignal_image}"
        alt="${cardInfo.title}"
        loading="lazy"
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

  if (remainingItems <= cardsPerLoad) {
    loadmoreBtn.style.display = "none";
  }

};

loadmoreBtn.addEventListener("click", renderCards);


// Testmonials Data
const testmonialsContainer = document.getElementById("testmonials-container");

const testmonialCards = [
  {
    placeholder_image: "resources/images/body/low-res/customer-img2.gif",
    orignal_image: "resources/images/body/customer-img2.jpg",
    custonerName: "Lida",
    Comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam, earum cumque distinctio, facere necessitatibus praesentium possimus neque recusandae sed libero veritatis dolorem ratione delectus doloremque.",
  },

  {
    placeholder_image: "resources/images/body/low-res/customer-img2.gif",
    orignal_image: "resources/images/body/customer-img2.jpg",
    custonerName: "Lida",
    Comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam, earum cumque distinctio, facere necessitatibus praesentium possimus neque recusandae sed libero veritatis dolorem ratione delectus doloremque.",
  },

  {
    placeholder_image: "resources/images/body/low-res/customer-img1.gif",
    orignal_image: "resources/images/body/customer-img1.jpg",
    custonerName: "Nona",
    Comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam, earum cumque distinctio, facere necessitatibus praesentium possimus neque recusandae sed libero veritatis dolorem ratione delectus doloremque.",
  }
]

const testmonialsMarkup = (cardInfo) => {
  return `
      <div class="testmonial-card">
        <figure class="testmonial-img-container">
          <img src="${cardInfo.placeholder_image}" data-src="${cardInfo.orignal_image}" alt="Customer Image" loading="lazy">
        </figure>
        <article class="feedback-box">
          <div class="rating-stars">
            <i class="fa-solid fa-star" style="color: #282828"></i>
            <i class="fa-solid fa-star" style="color: #282828"></i>
            <i class="fa-solid fa-star" style="color: #282828"></i>
            <i class="fa-solid fa-star" style="color: #282828"></i>
            <i class="fa-solid fa-star" style="color: #282828"></i>
          </div>
          <p id="cutomer-review">${cardInfo.Comment}</p>
          <i class="fa-solid fa-quote-left feedback-quotes" style="color: #ff8080;"></i>
          <h6 id="customer-name">${cardInfo.custonerName}</h6>
          <i class="fa-solid fa-quote-right feedback-quotes" style="color: #ff8080;"></i>
        </article>
    </div>
    `
}

const renderTestmonials = () => {

  const cardsIndex = testmonialCards.slice(0, -1);
  const cardMarkUp = cardsIndex.map((card) => testmonialsMarkup(card)).join("");
  testmonialsContainer.insertAdjacentHTML("afterbegin", cardMarkUp);

};

renderTestmonials();


const leftArrow = document.querySelector("#crousel-arrow-left")
const rightArrow = document.querySelector("#crousel-arrow-right")
const cards = document.querySelectorAll(".testmonial-card")

let currentCard = 0;
let maxCards = cards.length - 1

cards.forEach((card, index) => {
  card.style.transform = `translateX(${index * 110}%)`
})

leftArrow.addEventListener("click", () => {
  if (currentCard === 0) {
    currentCard = maxCards;
  } else {
    currentCard--
  }
  cards.forEach((card, index) => {
    card.style.transform = `translateX(${(index - currentCard) * 110}%)`
  })
})

rightArrow.addEventListener("click", () => {
  1
  if (currentCard === maxCards) {
    currentCard = 0
  } else {
    currentCard++
  }
  cards.forEach((card, index) => {
    card.style.transform = `translateX(${(index - currentCard) * 110}%)`
  })
})

// Smooth scrolling
const slider = document.querySelectorAll(".from-bottom");
const options = {
  threshold: 1,
}

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("fade-in", entry.isIntersecting)
    if (entry.isIntersecting) appearOnScroll.unobserve(entry.target)
  }
  )
}, options)

slider.forEach(slide => {
  appearOnScroll.observe(slide)
})

//Lazy Image Loading

const lazyImages = document.querySelectorAll(".lazy-load");
const option = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
}

const lazyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;

      lazyObserver.unobserve(lazyImage);
    }
  });
}, option);

lazyImages.forEach((image) => lazyObserver.observe(image));