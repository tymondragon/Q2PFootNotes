$(document).ready(() => {
  let note = JSON.parse(localStorage.getItem('noteId'))
  let user = JSON.parse(localStorage.getItem('userLogin'))
  // const video = JSON.parse(localStorage.getItem('noteVid'))
  $.get(`/footnotes/note/${note}`, (data) => {
    // let videoLink = `${data.video_link.slice(17,28)}`
    // let time = `${data.video_link.slice(31)}`
    console.log(data);
    let userVideo = `<iframe id="ytplayer" type="text/html" width="640" height="400"
    src="https://www.youtube.com/embed/${data.video_link.slice(17)}"
    frameborder="0"></iframe>`
    /////Add video to page/////
    $('#vidPlayer').append(userVideo)
    ////Add old note to page//////////
    $('#textarea1').append(data.content)
  })
  ///////////UPDATE old note///////
  $("#oldButt").click(() => {
    let newContent = $('#textarea1').val()
    $.ajax({
        url: `/footnotes/note/${note}`,
        type: 'POST',
        data: {
          "content": newContent
        },
        dataType: 'json'
      })
      .done((data) => {
        M.toast({
          html: 'Your Note Was Updated',
          classes: 'rounded'
        })
      })
      .fail(function(jqXhr, textStatus, errorThrown) {
        M.toast({
          html: 'Something is wrong',
          classes: 'rounded'
        })
      })
  })
  //////////Get the video and load it/////////////
  $('#watchVid').click(() => {
    let link = $("#ytVid").val()
    userVideo = `<iframe id="ytplayer" type="text/html" width="640" height="400"
    src="https://www.youtube.com/embed/${link.slice(17)}"
    frameborder="0"></iframe>`
    $('#vidPlayer').empty()
    $('#vidPlayer').append(userVideo)
    $('#textarea1').empty()
  })
  ////////CREATE the new note//////////
  $("#newButt").click(function() {
      let newNote = $('#textarea2').val()
      let link = $("#ytVid").val()
      $.ajax({
          url: "/footnotes/notes",
          type: 'POST',
          data: {
              user_id: user.id,
              content: newNote,
              video_link: link
            },
          dataType: 'json'
        })
        .done(function(data) {
        console.log("hello" ,data.content);
        M.toast({
          html: 'Your Note Was Updated',
          classes: 'rounded'
        })
      })
  })
})

// ${data.video_link.slice(17)}

// <iframe id="ytplayer" type="text/html" width="640" height="400"
// src=`https://www.youtube.com/embed/${some video link}`
// frameborder="0"></iframe>
// https://youtu.be/eERY-4RcpjQ?t=1h27m30s  31