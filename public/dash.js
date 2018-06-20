$(document).ready(function() {
  const user = JSON.parse(localStorage.getItem('userLogin'))
  let userId = user.id;
  let oldNotes = $('#oldNotes')
  let name = $('#yourName')
  name.append(`<h1 class="center-align"> Hey, ${user.name}! Welcome.</h1>`)
  $.get(`http://localhost:3000/footnotes/notes/${userId}`, (data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      localStorage.setItem(`id${i}`, JSON.stringify(data[i].id))
      localStorage.setItem(`video${i}`, JSON.stringify(data[i].video_link.slice(17)))

      let note = $(`<li class="collection-item avatar">
      <h5>Your Note:</h5>
      <p class="this-link">${data[i].content}
      <a class="waves-effect waves-teal btn-flat right"><i class="material-icons right video">arrow_forward</i></a></p>
      </li>`)
      oldNotes.append(note)
    }

  })
  $(document).on("click", "i.video" , () => {
        window.location.href = './video.html'    // console.log($(this).find('a').attr('href'))
      // localStorage.setItem('noteAndVideo', JSON.stringify($(this).find('a').attr('href')))

        });
  // $('').click((e) => {
  //   e.preventDefault()
  // console.log("hello");
  //     localStorage.setItem('noteAndVideo', JSON.stringify($(this).text()))
  // })
})

// ${data[i].video_link}