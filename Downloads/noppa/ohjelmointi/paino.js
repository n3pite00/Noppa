'use strict'

const button = document.getElementById('calculate')
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const output = document.getElementById('output');

const calculate = () => {

    const result =weight/(height * height);

    output.innerHTML = result.toFixed(2)
}

button.addEventListener('click', calculate);