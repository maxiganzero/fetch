const API_URL = 'https://rickandmortyapi.com/api'

const dataContainer = document.querySelector('#dataContainer')
const ulElement = document.createElement('ul')


/*fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(users => {
        const template = users.map(user => `<li>${user.name} ${user.email}<li>`)
        dataContainer.innerHTML = `<ul>${template}<ul>`
    })
*/

fetch(`${API_URL}/character`)
    .then(response => response.json())
    .then(character => {
        character.map(character => {
            let liElement = document.createElement('li')
            liElement.appendChild(
                document.createTextNode(`${character.name} ${character.species}`)
            )
            ulElement.appendChild(liElement)
        })

        dataContainer.appendChild(ulElement)

    })
    