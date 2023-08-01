const userElement = document.querySelector('.user');

window.onload = async () => {
  const response = await fetch('https://randomuser.me/api');
  const data = await response.json();
  userElement.innerHTML += `<div><image src="${data.results[0].picture.medium}"></div>`;
  userElement.innerHTML += `<div>${data.results[0].name.first} ${data.results[0].name.last}</div>`;
  userElement.innerHTML += `<div>${data.results[0].dob.age}</div">`;
  userElement.innerHTML += `<div>${data.results[0].gender}</div>`;
  userElement.innerHTML += `<div>${data.results[0].location.country}</div">`;
  userElement.innerHTML += `<div>${data.results[0].login.username}</div">`;
  userElement.innerHTML += `<div>${data.results[0].login.password}</div">`;
  userElement.innerHTML += `<div>${data.results[0].email}"</div>`;
  console.log(data.results[0]);
};
