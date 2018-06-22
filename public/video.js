$(document).ready(() => {
  $('.sidenav').sidenav();
  let note = JSON.parse(localStorage.getItem('noteId'))
  let user = JSON.parse(localStorage.getItem('userLogin'))
  // const video = JSON.parse(localStorage.getItem('noteVid'))
  $.get(`/footnotes/note/${note}`, (data) => {
    // let videoLink = `${data.video_link.slice(17,28)}`
    // let time = `${data.video_link.slice(31)}`
    // $('#vidPlayer').hide()
    let userVideo = `<div id="vidPlayer" class="col s6 offset-s3">
    <iframe id="ytplayer" type="text/html" width="640" height="400"
    src="https://www.youtube.com/embed/${data.video_link.slice(17)}"
    frameborder="0" allowfullscreen></iframe>
    </div>`
    // let userVideo = `<iframe id="ytplayer" type="text/html" width="640" height="400"
    // src="https://www.youtube.com/embed/${data.video_link.slice(17)}"
    // frameborder="0"></iframe>`

    /////Add video to page/////
    $('#vidPlayer').replaceWith(userVideo)
    ////Add old note to page//////////
    $('#yourNote').append(data.subject)
    $('#textarea1').append(data.content)
    $("#ytVid").val(`${data.video_link}`)
  })
  ///////////UPDATE old note///////
  $("#oldButt").click(() => {
    let newContent = $('#textarea1').val()
    console.log(newContent);

      $.ajax({
          url: `/footnotes/notes/${note}`,
          type: 'PUT',
          data: {
            content: newContent
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
          console.log("*********", errorThrown);
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
    src="https://www.youtube.com/embed/${link.slice(17)}" allowfullscreen"
    frameborder="2"></iframe>`
    $('#vidPlayer').empty()
    $('#vidPlayer').append(userVideo)
    $('#textarea1').empty()
  })
  ////////CREATE the new note//////////
  $("#newButt").click(function() {
    let newNote = $('#textarea2').val()
    let link = $("#ytVid").val()
    let subject = $("#subject").val()
    $.ajax({
        url: "/footnotes/notes",
        type: 'POST',
        data: {
          user_id: user.id,
          subject: subject,
          content: newNote,
          video_link: link
        },
        dataType: 'json'
      })
      .done(function(data) {
        console.log("hello", data.content);
        M.toast({
          html: 'Your Note Was Created',
          classes: 'rounded'
        })
      })
  })
  $(".logOut").click(function() {
    localStorage.removeItem('noteId')
    localStorage.removeItem('userLogin')
    localStorage.removeItem('noteVid')
  })
  $('#clearNew').click(function () {
    $("#subject").val("")
    $('#textarea2').val("")
  })
})

// ${data.video_link.slice(17)}

// <iframe id="ytplayer" type="text/html" width="640" height="400"
// src=`https://www.youtube.com/embed/${some video link}`
// frameborder="0"></iframe>
// https://youtu.be/eERY-4RcpjQ?t=1h27m30s  31