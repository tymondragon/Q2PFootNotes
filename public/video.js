$(document).ready(() => {
  const note = JSON.parse(localStorage.getItem('noteId'))
  // const video = JSON.parse(localStorage.getItem('noteVid'))
  $.get(`http://localhost:3000/footnotes/note/${note}`, (data) => {
    let userVideo = `<iframe id="ytplayer" type="text/html" width="640" height="400"
    src="https://www.youtube.com/embed/${data.video_link.slice(17)}"
    frameborder="0"></iframe>`
    $('#vidPlayer').append(userVideo)
  })
  
})




// <iframe id="ytplayer" type="text/html" width="640" height="400"
// src=`https://www.youtube.com/embed/${some video link}`
// frameborder="0"></iframe>