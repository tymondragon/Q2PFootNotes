$(document).ready(function() {
  $('.sidenav').sidenav();
  const user = JSON.parse(localStorage.getItem('userLogin'))
  let userId = user.id;
  let oldNotes = $('#oldNotes')
  let name = $('#yourName')
  name.append(`<h1 class="center-align song"> Hey, ${user.name}! Welcome.</h1>`)
  $.get(`/footnotes/notes/${userId}`, (data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      // localStorage.setItem(`id${i}`, JSON.stringify(data[i].id))
      // localStorage.setItem(`video${i}`, JSON.stringify(data[i].video_link.slice(17)))
      let note = $(`<nav class="row blue-grey darken-3">
        <div class="blue-grey darken-3">
          <div class="col s10 truncate lato">${data[i].content}</div>
          <ul id="nav-mobile" class="right hide-on-med-and-down col s2">
            <li><a id="${data[i].id}" class="delButton lato">Delete</a></li>
            <li><a id="${data[i].id}" class="noteButton lato">Watch</a></li>
          </ul>
        </div>
      </nav>`)

      oldNotes.append(note)
    }
    $("a.noteButton").bind("click", function() {
      event.preventDefault()
      let noteId = $(this).attr('id')
      let noteVid = $(this).parent('a').attr('id')
      console.log(noteVid);
      localStorage.setItem('noteId', JSON.stringify(noteId))
      localStorage.setItem('noteVid', JSON.stringify(noteVid))
      window.location.href = './video.html'
    })
    $("a.delButton").bind("click", function() {
      event.preventDefault()
      let Parent = $(this).parent('li').parent('ul').parent('div').parent('nav')
      let id = Number($(this).attr('id'))
      Parent.addClass('hide')
      $.ajax({
          url: `/footnotes/notes/${id}`,
          type: 'DELETE',
          data: {
              id: id
          },
          dataType: 'json'    })

    })
  });
  $(".logOut").click(function() {
    localStorage.removeItem('noteId')
    localStorage.removeItem('userLogin')
  })
  $('#vidLink').click(() => {
    event.preventDefault()
    window.open('https://www.youtube.com')
    window.location.href = './video.html'
  })
})





// let noteVid = $(this).parent('a').attr('id')
// <li class="collection-item avatar">
// <h5>Your Note:</h5>
// <p class="this-link">${data[i].content}
// <a class="waves-effect waves-teal btn-flat right"><i id="${data[i].id}" class="material-icons right video">arrow_forward</i></a></p>
// </li>





// <nav class="row blue-grey darken-3">
//   <div class="blue-grey darken-3">
//     <div class="col s10 truncate">${data[i].content}</div>
//     <ul id="nav-mobile" class="right hide-on-med-and-down col s2">
//       <li><a id="deleteNote" class="red darken-2">Delete</a></li>
//       <li><a id="${data[i].id}" class="green">Watch</a></li>
//     </ul>
//   </div>
// </nav>
// ${data[i].video_link}
