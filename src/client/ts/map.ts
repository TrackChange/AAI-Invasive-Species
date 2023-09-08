// click on View Map, 
// map wrapper display == block,
// click on close, map wrapper display == none


function viewMap() {
    const viewMapTag = document.querySelector('#map-tag')
    const mapWrapper = document.querySelector('.map-wrapper')
    const closeTag = document.querySelector('.map-close')
    const bodyTag = document.querySelector('body')

    viewMapTag.addEventListener('click', () => {
        mapWrapper.style.display = "block"
        bodyTag.style.overflow = 'hidden'
    })


    closeTag.addEventListener('click', () => {
        mapWrapper.style.display = "none"
        bodyTag.style.overflow = 'initial'

    })
}

function setupMap() {
    viewMap()
}

export { setupMap }