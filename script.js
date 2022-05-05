const selectBtn = document.querySelector('#select');

const createCard = (item) => {
    const cards = document.querySelector('.content');
    const card = document.createElement('div');

    card.innerHTML = `
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
        </div>`;
    cards.appendChild(card);
}


fetch('./dbHeroes.json')
    .then(res => res.json())
    .then(result => result.forEach(item => createCard(item)))
    .catch(error => console.log(error.message));

selectBtn.addEventListener('change', (e) => {

    const cards = document.querySelector('.content');
    cards.innerHTML = '';
    fetch('./dbHeroes.json')
        .then(res => res.json())
        .then(result => result.forEach(item => {
            if (item.movies) {
                if (item.movies.includes(e.target.value)) {
                    createCard(item);
                }
            }
            if (e.target.value === '') {
                createCard(item);
            }
        }))
        .catch(error => console.log(error.message));
})