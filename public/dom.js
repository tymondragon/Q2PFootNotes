$(document).ready(function() {
  $('.modal').modal();
  $('#login').click((event) => {
    $.ajax({
      url: 'footnotes/signup',
      type: 'POST',
      data: {
        first_name: $('#first_name').text(),
        last_name: $('#last_name').text(),
        email: $('#email').text(),
        hashed_pw: $('#hashed_pw').text()
      },
      success: (data) => {
        console.log(data)
        // UPDATE DOM!
        // $('doohickey').append(data)
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log('OOPS:', errorThrown)
      }
    })
  })
});