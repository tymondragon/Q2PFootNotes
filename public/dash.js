$(document).ready(function() {
  const user = JSON.parse(localStorage.getItem('userLogin'))
  let userId = user.id;
  $.get(`http://localhost:3000/footnotes/notes/${userId}`, (data) => {
    console.log(data);
  })
})



// <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>