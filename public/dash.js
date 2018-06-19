$(document).ready(function() {
  const user = JSON.parse(localStorage.getItem('userLogin'))
  let userId = user.id;
  $.get( `http://localhost:3000/footnotes/notes/${userId}`, (data) => {
  console.log(data);
})
})