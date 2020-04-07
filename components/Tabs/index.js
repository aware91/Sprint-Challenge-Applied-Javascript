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
        response.data.message.forEach(url => {
            const newTab = Tabs();
            newTabs.appendChild(newTab);
    console.log('Tabs Data', response) 
    })
})// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(topic) {
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = topic
    return tab;
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
    console.log(res);
    return topics = res.data.topics
    })
    .then((topics) => {
    const container = document.querySelector('.topics')
    topics.forEach(topic => {
        container.appendChild(Tab(topic))
    })
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

const newTabs = document.querySelector('.tabs')
