const name = document.getElementById('name')
const email = document.getElementById('email')
const pass = document.getElementById('pass')
const confirm = document.getElementById('confirm')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let messages = []
    if(name.value === '' || name.value == null){
        messages.push('Fill this box')
    }
})