const menu = document.querySelector('#menuButton')
const toggleBtn = document.querySelector('#menuNav')
const btnCancel = document.querySelector('#menuCancel')
const url_api = 'https://api.themoviedb.org/3/'
const apiKey = '?api_key=c2fb37fcfc979b639215e5d25d1ca74b'
const Trending = 'trending/all/week'
const trendingCard = document.querySelector('#trendingCard')
const cards = []

const evento = () => {
  if (toggleBtn.classList.contains("is-active")) {
        
    toggleBtn.classList.remove("is-active")
}
else {
    toggleBtn.classList.add("is-active")
}
}
menu.addEventListener('click', evento)
btnCancel.addEventListener('click', evento)

const moviePetition = async (url_api) => {
  try {
    const response = await fetch(`${url_api}${Trending}${apiKey}`);
    const dataJason = await response.json();
    const resultsDataJason = dataJason.results.sort((a, b) => b.vote_average - a.vote_average)
    resultsDataJason.forEach(node => {

      const card = document.createElement('div');
      card.className = 'card';

      const figure = document.createElement('figure');
      figure.className = 'card__figure';

      const image = document.createElement('img')
      image.className = 'card__img'
      image.src = `https://image.tmdb.org/t/p/w500/${node.poster_path}`

      const cardDetails = document.createElement('div')
      cardDetails.className = 'card__details'

      const cardButtons = document.createElement('span')
      cardButtons.className = 'card__buttons'

      const addIcon = document.createElement('i')
      addIcon.className = 'add__icon'

      const playIcon = document.createElement('i')
      playIcon.className = 'play__icon'

        const cardTitle = document.createElement('h3')
        cardTitle.className = 'card__title'
        if (node.title){
        cardTitle.textContent = node.title
      } else {
        cardTitle.textContent = node.name
      }
      const supAverage = document.createElement('sub')
      supAverage.textContent = '10'

      const cardAverage = document.createElement('p')
      cardAverage.className = 'card__description'
      cardAverage.textContent = `${node.vote_average} /`

      cardButtons.append(addIcon, playIcon)
      cardAverage.append(supAverage)
      cardDetails.append(cardButtons, cardTitle, cardAverage)
      figure.append(image)
      card.append(figure,cardDetails )
      cards.push(card)
      trendingCard.append(...cards)
    });
  } catch (err) {
    console.error(err);
    oops()
  }
}
moviePetition(url_api)
