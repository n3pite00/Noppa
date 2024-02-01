'use strict'

const button = document.querySelector('button')

const convert = () => {
    const age = document.querySelector('input').value
    const low = Math.round((220-age) * 0.65)
    const up = Math.round((220-age) * 0.85)
    document.querySelector('output').innerHTML = low + '-' + up
}

button.addEventListener('click', convert)