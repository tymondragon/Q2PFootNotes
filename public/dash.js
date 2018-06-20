$(document).ready(function() {
  const user = JSON.parse(localStorage.getItem('userLogin'))
  let userId = user.id;
  let oldNotes = $('#oldNotes')
  let name = $('#yourName')
  name.append(`<h1 class="center-align"> Hey, ${user.name}! Welcome.</h1>`)
  $.get(`http://localhost:3000/footnotes/notes/${userId}`, (data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      // localStorage.setItem(`id${i}`, JSON.stringify(data[i].id))
// localStorage.setItem(`video${i}`, JSON.stringify(data[i].video_link.slice(17)))
      let note = $(`<li class="collection-item avatar">
      <h5>Your Note:</h5>
      <p class="this-link">${data[i].content}
      <a id="${data[i].video_link.slice(17)}" class="waves-effect waves-teal btn-flat right"><i id="${data[i].id}" class="material-icons right video">arrow_forward</i></a></p>
      </li>`)
      oldNotes.append(note)
    }
    $("i").bind("click", function () {
      event.preventDefault()
      let noteId = $(this).attr('id')
      let noteVid = $(this).parent('a').attr('id')
      console.log(noteVid);
      localStorage.setItem('noteId', JSON.stringify(noteId))
      // localStorage.setItem('noteVid', JSON.stringify(noteVid))
      window.location.href = './video.html'
    })
        });
  // $('').click((e) => {
  //   e.preventDefault()
  // console.log("hello");
  //     localStorage.setItem('noteAndVideo', JSON.stringify($(this).text()))
  // })
})

// ${data[i].video_link}