import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json'
import service from '../services.json'

let html = "";
  data.restaurants.forEach((resto) => {
    html += `
    <article class="resto-item">
      <img class="resto-thumbnail" src="${resto.pictureId}" alt="Gambar suasana restoran yang berada di ${resto.city}"/>
      <h1 class="resto-name">${resto.name} (${resto.city})</h1>
      <p class="resto-description">${resto.description}</p>
      <p class="resto-rating">Rating ${resto.rating}</p>
    </article>
    `;
    document.getElementById("resto").innerHTML = html;
});

let layanan = "";
  service.services.forEach((service) => {
    layanan += `
    <style>
    .service-name {
      color : brown;
    }
    </style>
    <article class="service-item">
      <h1 class="service-name">${service.name}</h1>
      <p class="service-description">${service.description}</p>
    </article>
    `;
    document.getElementById("services").innerHTML = layanan;
});

const menu = document.querySelector('#menu');
const container = document.querySelector('.container-satu');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

container.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
});

document.querySelector('#searchButtonElement').addEventListener('click', searchResto);
document.querySelector('#searchElement').addEventListener('keyup', searchResto);

function searchResto (){
  const seacrhElement = document.querySelector('#searchElement');
  const seacrh = seacrhElement.value.toLowerCase();
  const restoItems = document.querySelectorAll('.resto-item');

  restoItems.forEach((resto) => {
    let text = resto.textContent;
    if(text.toLowerCase().includes(seacrh.toLowerCase())){
      resto.style.display = '';
    }
    else {
      resto.style.display = 'none';
    }
  });
}
