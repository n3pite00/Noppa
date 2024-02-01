'use strict'

const button = document.querySelector('button')

const convert = () => {
    const miles = document.querySelector('input').value
    const kilometres = miles * 1.609
    document.querySelector('output').innerHTML = kilometres.toFixed(2)
}

button.addEventListener('click', convert)