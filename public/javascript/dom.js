$(document).ready(function() {
  $('.sidenav').sidenav();
  $('.modal').modal();
  /////This is the create a user//////
  $('#login').click((event) => {
    let password = $('#hashed_pw').val()
    let confirm = $('#password2').val()
    event.preventDefault()
    if (password !== confirm || password === '' || confirm === '') {
      M.toast({
        html: 'Passwords Must Match!!'
      })
    } else {
      $.ajax({
          url: '/footnotes/signup',
          type: 'POST',
          data: {
            first_name: $('#first_name').val(),
            email: $('#email').val(),
            hashed_pw: $('#hashed_pw').val()
          },
          dataType: 'json'
        })
        .done((data) => {
          localStorage.setItem('userLogin', JSON.stringify({
            id: data.id,
            name: data.first_name
          }))
          window.location.href = './dashboard.html'
        })
        .fail(function(jqXhr, textStatus, errorThrown) {
        })
    }
  })
  $('#modalLogin').click((event) => {
    let email = $('#modalEmail').val()
    let modalPass = $('#password').val()
    event.preventDefault()
    if (modalPass === '' || email === '') {
      M.toast({
        html: 'Please Enter Valid Credentials'
      })
    } else {
      $.ajax({
          url: '/footnotes/login',
          type: 'POST',
          data: {
            "email": $('#modalEmail').val(),
            "hashed_pw": $('#password').val()
          },
          dataType: 'json'
        })
        .done((data) => {
          localStorage.setItem('userLogin', JSON.stringify({
            id: data.id,
            name: data.first_name
          }))
          window.location.href = './dashboard.html'
        })
        .fail(function(jqXhr, textStatus, errorThrown) {
        })
    }
  })
}); 
