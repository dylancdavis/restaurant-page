export default function getComponents() {
    let components = []
    components.push(banner())
    components.push(mainContent())
    
    return components
}

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

    let tabHeaders = ['menu','book','about','hours & locations']

    for (let t in tabHeaders) {
        nB.appendChild(newDiv(tabHeaders[t]))
    }

    return nB
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
    infoBox.appendChild(currentInfo())

    ret.appendChild(infoBox)

    return ret;
}

function currentInfo() {
    let ret = document.createElement('div');
    ret.classList.add('current-info')
    
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