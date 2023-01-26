import './style.css';
import component from './componentCreator';
import tabHandler from './tabHandler';

// Tab definitions for navbar
const tabs = [
    { id: 'menu', text: 'menu' },
    { id: 'book', text: 'book' },
    { id: 'about', text: 'about' },
    { id: 'hours-and-location', text: 'hours & location' },
]

// Build the content div with created elements

const navBar = tabHandler.navBar(tabs);

const banner = component.div({
    class: ['banner'],
    children: [
        component.div({text: "Nicola's", class: ['bannerTitle']}),
        navBar,
    ]
})

const infoBox = component.div({class: ['info-box']})
const mainContent = component.div({
    class: ['main-content'],
    children: [infoBox]
})

const content = component.div({
    id: 'content',
    children: [banner, mainContent]})
document.body.appendChild(content);

console.log(content);


// Tab Switching Logic

// First, define a default tab

let defaultTab = 'menu'
infoBox.appendChild(tabHandler.content[defaultTab])
document.getElementById(defaultTab).classList.add('selected-tab')

function switchTab(e) {
    // Clear "selected tab" style from current selection
    navBar.querySelector('.selected-tab').classList.remove('selected-tab')
    e.currentTarget.classList.add('selected-tab')
    setContentTo(e.currentTarget.id)
}

function setContentTo(tab) {
    // Swap out the infoBox's children for whatever tab we select
    let infoBox = document.querySelector('.info-box')
    infoBox.removeChild(infoBox.querySelector('.current-info'))
    infoBox.appendChild(tabHandler.content[tab])
}

// Add handlers so buttons call tab switching
let tabHeaders = banner.querySelectorAll('.tab-header')

for (let i=0;i<tabHeaders.length;i++) {
    tabHeaders[i].addEventListener('click',switchTab)
}