$(document).ready(function() {
  $('.modal').modal();
  $('#login').click((event) => {
    event.preventDefault()
    console.log("Hello");
    $.ajax({
      url: 'http://localhost:3000/footnotes/signup',
      type: 'POST',
      data: {
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val(),
        email: $('#email').val(),
        hashed_pw: $('#hashed_pw').val()
      },
      dataType: 'json'
      })
      .done((data) => {
        console.log("yay! for objects", data)
        localStorage.setItem('userLogin', JSON.stringify(`${data.id}`))
        window.location.href = './dashboard.html'

      })
      .fail (function(jqXhr, textStatus, errorThrown) {
        console.log('OOPS:', errorThrown)
      })
  })

});/////end of the doc .ready function