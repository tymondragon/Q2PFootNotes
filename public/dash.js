$(document).ready(function() {
  const user = JSON.parse(localStorage.getItem('userLogin'))
  let userId = user.id;
  let oldNotes = $('#oldNotes')
  $.get(`http://localhost:3000/footnotes/notes/${userId}`, (data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      // let note = $(`<li><a href="#!"><span class="new badge">12</span></a></li>`)
      let note = $(`<li class="collection-item avatar">
      <a href="${data[i].video_link}" class="vidKey">${data[i].video_link}</a>
      <p>Your Notes
      ${data[i].content}</p>
      <a href="./video.html" class="secondary-content"><i class="material-icons">arrow_forward</i></a>
      </li>`)
      // let notes = $("<span>", {
      //   "class": "notes",
      //   "src": data[i].content
      // })
      // let vidKey = $("<span>", {
      //   "class": "vidKey",
      //   "src": data[i].video_link
      // })
      // let link = $("<a>", {
      //   "class": "secondary-content",
      //   "href": "./video.html"
      // })
      // note.append(notes, vidKey, link)
      // $("#oldNotes").append()
      // console.log("Note is", note);
      // $("#oldNotes").append(note.append(notes))
      oldNotes.append(note)
      // console.log("NOte", note);
      // console.log("data.id is", vidKey.data.video_link)
    }

  })
})

// for (let i = 0; i < data.length; i++) {
// let note = $("<li>")
//           let notes = $("<span>", {
//             "class": "notes",
//             "src": data[i].content
//           })
//           let vidKey = $("<span>", {
//             "class": "vidKey",
//             "src": data[i].video_link
//           })
//           let link = $("<a>", {
//             "class":"secondary-content",
//             "href": "./video.html",
//             "src": data[i].video_link
//           })
//           $("#oldNotes").append(note.append(notes vidKey link))
// }
// <li class="collection-item avatar">
//      <span class="note">Notes</span>
//      <span class="video-link">video_link</span>
//      <a href="./video.html" class="secondary-content"><i class="material-icons">arrow_forward</i></a>
//    </li>
//