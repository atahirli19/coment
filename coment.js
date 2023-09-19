fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => console.log(data))
    const container = document.querySelector('.comments')

async function myFunc(){
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json()
    container.innerHTML = data
    
}