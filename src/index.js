import './style.css';
import getComponents from './components.js'

// Add content div to body
let content = document.createElement('div');
content.id = 'content'
document.body.appendChild(content)

const components = getComponents();


for (let c in components) {
    content.appendChild(components[c])
}

// TODO figure out why font arent working