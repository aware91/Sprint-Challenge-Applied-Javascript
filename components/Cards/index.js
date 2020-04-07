// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Card(headline, url, name) {
    const card = document.createElement('div')
    const headLine = document.createElement('div')
    const authorContainer = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const author = document.createElement('span')

    card.classList.add('card')
    headLine.classList.add('headline')
    authorContainer.classList.add('author')
    imgContainer.classList.add('img-container')

    headLine.textContent = headline
    img.src = url
    author.innerHTML = `By ${name}`

    imgContainer.appendChild(img)
    authorContainer.append(imgContainer, author)
    card.append(headLine, authorContainer)

    return card
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
    console.log(res);
    const data = res.data.articles
    articleTypes = [
        data.javascript,
        data.bootstrap,
        data.technology,
        data.jquery,
        data.nod
    ]
    console.log(articleTypes);
    })
    .then(() => {
    const cardContainer = document.querySelector('.cards-container')
    articleTypes.forEach(articles => {
        articles.forEach(article => {
        cardContainer.append(
            Card(article.headline, article.authorPhoto, article.authorName)
        )
        }
        )
    })
    })
    .catch(err => console.log(err))