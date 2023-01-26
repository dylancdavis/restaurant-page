import component from "./componentCreator"

const menuInfo = component.div({
    class: ['current-info'],
    children: [
        menuItem("Al's Salad",'mixed greens with vine ripe tomatoes, onion, cucumbers','7'),
        menuItem("Caesar House",'croutons, anchovies optional','8'),
        menuItem("Wedge Salad",'romaine, bacon, tomato, green onion, gorgonzola dressing','9'),
        menuItem("Calamari",'long island squid lightly floured, flash fried, Cajun aioli','11'),
        menuItem("Crab Cakes",'domestic lump crabmeat','15'),
        menuItem('Lobster Bisque','with shrimp, puff pastry dome','9'),
    ]
})

function menuItem(name,description,price) {

    let iName = component.span({class: ['item-name'], text: name})
    let iDesc = component.span({class: ['item-description'], text: description})
    let iPrice = component.span({class: ['item-price'], text: price})

    let leftWrapper = component.div({
        class: ['menu-left'],
        children: [iName,iDesc]
    })

    let rightWrapper = component.div({
        class: ['menu-right'],
        children: [iPrice]
    })

    return component.div({
        class: ['menu-item'],
        children: [leftWrapper, rightWrapper]
    })
}

const bookInfo = component.div({
    class: ['current-info'],
    text: 'booking info'
})

const aboutInfo = component.div({
    class: ['current-info'],
    text: 'about info'
})

const hoursAndLocationInfo = component.div({
    class: ['current-info'],
    text: 'hours and location info'
})

const tabContents = {
    menu: menuInfo,
    book: bookInfo,
    about: aboutInfo,
    'hours-and-location': hoursAndLocationInfo
}

export default {
    navBar: (tabs) => {
        let nB = component.div({class: ['navBar']})
    
        for (let t in tabs) {
    
            let n = component.div({text: tabs[t].text, 
                                   class: ['tab-header'], 
                                   id: tabs[t].id})
            nB.appendChild(n)
        }
        return nB
    },
    content: {
        menu: menuInfo,
        book: bookInfo,
        about: aboutInfo,
        'hours-and-location': hoursAndLocationInfo
    }
}