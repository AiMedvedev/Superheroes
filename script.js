'use strict';
const selectBtn = document.querySelector('#select');

const createCard = (item) => {
    const cards = document.querySelector('.content');
    const card = document.createElement('div');

    card.innerHTML = `<div class="card-container">
        <div class="card">
            <img src="${item.photo}" alt="superhero_photo" />
            <h1 class="name title-name"><span>${item.name}</h1>
            <div class="drawn_content">
                <h1 class="name"><span>${item.name}</h1>
                <div class="title actor">Actor: <span>${item.actors}</span></div>
                <div class="title movies">Movies: <span>${item.movies}</span></div>
                <div class="title species">Species: <span>${item.species}</span></div>
                <div class="title gender">Gender: <span>${item.gender}</span></div>
                <div class="title birthDay">Birthday: <span>${item.birthDay}</span></div>
                <div class="title deathDay">Deathday: <span>${item.deathDay}</span></div>
                <div class="title status">Status: <span>${item.status}</span></div>
            </div>
        </div>
    </div>`;
    cards.appendChild(card);
}


fetch('./dbHeroes.json')
    .then(res => res.json())
    .then(result => result.forEach(item => createCard(item)))
    .then(data => {
        let cardsArray = document.querySelectorAll('.card');
        selectBtn.addEventListener('change', () => {
            
            cardsArray.forEach(card => {
                card.style.display = 'flex';
                
                if (card.innerHTML.indexOf(select.value) === -1) {
                    card.style.display = 'none';
                }
            })
        })
    })
    .catch(error => console.log(error.message));

