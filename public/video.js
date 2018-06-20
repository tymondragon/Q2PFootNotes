$(document).ready(() => {
  const note = JSON.parse(localStorage.getItem('noteId'))
  // const video = JSON.parse(localStorage.getItem('noteVid'))
  $.get(`http://localhost:3000/footnotes/note/${note}`, (data) => {
    // let videoLink = `${data.video_link.slice(17,28)}`
    // let time = `${data.video_link.slice(31)}`
    // console.log(time);
    let userVideo = `<iframe id="ytplayer" type="text/html" width="640" height="400"
    src="https://www.youtube.com/embed/${data.video_link.slice(17)}"
    frameborder="0"></iframe>`
    $('#vidPlayer').append(userVideo)
  })

})


// ${data.video_link.slice(17)}

// <iframe id="ytplayer" type="text/html" width="640" height="400"
// src=`https://www.youtube.com/embed/${some video link}`
// frameborder="0"></iframe>
// https://youtu.be/eERY-4RcpjQ?t=1h27m30s  31