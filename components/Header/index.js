// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(dates, titles, temperature) {
    const header = document.createElement('div');
    const h1 = document.createElement('h1');
    const date = document.createElement('span')
    const temp = document.createElement('span')

    header.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    date.textContent = dates;
    h1.textContent = titles;
    temp.textContent = temperature;

    header.append(date, h1, temp)

    return header;
}

const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header("MARCH 28, 2019", "Lambda Times", "98"))