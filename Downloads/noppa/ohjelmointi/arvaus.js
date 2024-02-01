const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

document.querySelector('button').addEventListener('click', () => {
    const randomized_number = getRandomIntNumberInRange(1,6)
    const input = document.querySelector('input')
    const guess = Number(input.value)

    if (guess === randomized_number) {
        alert("You guessed right, number is " + randomized_number)
    } else {
        alert("Your guess is wrong, number is " + randomized_number)
    }

    input.value = ''
    input.focus()
})