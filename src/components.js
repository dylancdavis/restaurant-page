export default function getComponents() {
    let components = []
    components.push(banner())
    components.push(mainContent())
    
    return components
}

const tabHeaders = [
    {
        id: 'menu',
        text: 'menu'
    },
    {
        id: 'book',
        text: 'book'
    },
    {
        id: 'about',
        text: 'about'
    },
    {
        id: 'hours-and-location',
        text: 'hours & location'
    },
]

function banner() {
    let b = document.createElement('div');
    b.classList.add('banner')

    let bannerTitle = newDiv("Nicola's")
    bannerTitle.classList.add('bannerTitle')

    b.appendChild(bannerTitle);
    b.appendChild(navBar())


    return b;
}

function navBar() {
    let nB = document.createElement('div');
    nB.classList.add('navBar')

    for (let t in tabHeaders) {
        let n = newDiv(tabHeaders[t].text)
        n.classList.add('tab-header')
        n.id = tabHeaders[t].id
        if (tabHeaders[t].name === 'menu') n.classList.add('selected-tab')
        n.addEventListener('click', switchTab)
        console.log("tab made");
        nB.appendChild(n)
    }

    return nB
}

function switchTab(e) {
    const tabHeaders = document.querySelectorAll('.tab-header');
    console.log(tabHeaders);
    for (let i=0; i<tabHeaders.length;i++) {
        console.log(tabHeaders[i])
        tabHeaders[i].classList.remove('selected-tab')
    }
    changeInfoContent(e.currentTarget.id);
    e.currentTarget.classList.add('selected-tab')
}

function changeInfoContent(id) {
    const infoBox = document.querySelector('.info-box');
    infoBox.removeChild(infoBox.querySelector('.current-info'))
    infoBox.appendChild(infoOptions[id])
}

function newDiv(text) {
    let ret = document.createElement('div')
    ret.textContent = text;
    return ret
}

function mainContent() {
    let ret = document.createElement('div')
    ret.classList.add('main-content');

    let infoBox = document.createElement('div')
    infoBox.classList.add('info-box');
    infoBox.appendChild(infoOptions.menu)

    ret.appendChild(infoBox)

    return ret;
}

function menuInfo() {
    let ret = infoTemplate();
    
    function item(name,description,price) {
        let i = document.createElement('div')
        i.classList.add('menu-item');
        
        let iName = document.createElement('span')
        iName.classList.add('item-name');
        iName.textContent = name;

        let iDesc = document.createElement('span')
        iDesc.classList.add('item-description')
        iDesc.textContent = description;

        let iPrice = document.createElement('span')
        iPrice.classList.add('item-price')
        iPrice.textContent = price;

        let leftWrapper = document.createElement('div');
        leftWrapper.classList.add('menu-left');
        leftWrapper.appendChild(iName)
        leftWrapper.appendChild(iDesc)

        let rightWrapper = document.createElement('div');
        rightWrapper.classList.add('menu-right');
        rightWrapper.appendChild(iPrice)
    
        i.appendChild(leftWrapper)
        i.appendChild(rightWrapper)
        return i
    }

    ret.appendChild(item("Al's Salad",'mixed greens with vine ripe tomatoes, onion, cucumbers','7'))
    ret.appendChild(item("Caesar House",'croutons, anchovies optional','8'))
    ret.appendChild(item("Wedge Salad",'romaine, bacon, tomato, green onion, gorgonzola dressing','9'))
    ret.appendChild(item("Calamari",'long island squid lightly floured, flash fried, Cajun aioli','11'))
    ret.appendChild(item("Crab Cakes",'domestic lump crabmeat','15'))
    ret.appendChild(item('Lobster Bisque','with shrimp, puff pastry dome','9'))

    return ret;
 
}

function bookInfo() {
    let ret = infoTemplate();
    ret.textContent = 'booking info'
    return ret;
 
}

function aboutInfo() {
    let ret = infoTemplate();
    ret.textContent = 'about info'
    return ret;
}

function hoursAndLocationInfo() {
    let ret = infoTemplate();
    ret.textContent = 'hours and location info'
    return ret;
}

function infoTemplate() {
    let ret = document.createElement('div');
    ret.classList.add('current-info')
    return ret;
}

const infoOptions = {
    menu: menuInfo(),
    book: bookInfo(),
    about: aboutInfo(),
    "hours-and-location": hoursAndLocationInfo()
}