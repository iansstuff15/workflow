export const fetchplus = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
}
