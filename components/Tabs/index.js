// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
    console.log('Tabs Data', response) 
    response.data.forEach( item => {
        const para = (item);
        parent.appendChild(button);
    })

    .catch(err => {
        console.log('Error', err)
    })

    function Tabs(tabs){
        const topics = document.createElement('div')
        const title = document.createElement('span')

        topics.classList.add('topics')
        title.classList.add('title')
        
        topics.appendChild(title)

        title.textContent = `TRENDING TOPICS: ${tabs}`

        return Tabs
    }