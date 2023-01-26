export default function getComponents() {
    let components = []
    components.push(banner())
    console.log('called')
    
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