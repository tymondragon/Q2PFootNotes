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
      let note = $(`<nav class="${data[i].id} row blue-grey darken-3">
          <div class="col s2 truncate lato information"><span class="song title">Title:   </span>${data[i].subject}</div>
          <div class="col s7 truncate lato information"><span class="song title">Content:   </span>${data[i].content}</div>
          <ul id="nav-mobile" class="right hide-on-med-and-down col s2">
            <li><a id="${data[i].id}" class="delButton lato">Delete</a></li>
            <li><a id="${data[i].id}" class="noteButton lato watch">Watch</a></li>
          </ul>
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
      let parent = $(this).parentsUntil('ul.note-list')
      // .parents('ul').parents('div').parents('nav')
      // let parent = $(this).parents('li').parents('ul').parents('div').parents('nav')
      console.log(parent);
      let id = Number($(this).attr('id'))
      parent.addClass('hide')
      $.ajax({
        url: `/footnotes/notes/${id}`,
        type: 'DELETE',
        data: {
          id: id
        },
        dataType: 'json'
      })
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