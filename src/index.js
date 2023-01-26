import './style.css';
import getComponents from './components.js'

const components = getComponents();
console.log(components)

const content = document.getElementById('content')


for (let c in components) {
    console.log(components[c]);
    content.appendChild(components[c])
}

// TODO figure out why font arent working