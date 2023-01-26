import './style.css';
import getComponents from './components.js'

// Add content div to body
let content = document.createElement('div');
content.id = 'content'
document.body.appendChild(content)

const components = getComponents();
console.log(components)


for (let c in components) {
    console.log(components[c]);
    content.appendChild(components[c])
}

// TODO figure out why font arent working