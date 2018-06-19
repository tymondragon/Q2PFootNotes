$(document).ready(function() {
      $('.modal').modal();
      let password = $('#hashed_pw').val()
      let confirm = $('#password2').val()
      let email = $('#modalEmail').val()
      let modalPass = $('#password').val()
      /////This is the create a user//////
      $('#login').click((event) => {
          event.preventDefault()
          if (password !== confirm || password === '' || confirm === '') {
            M.toast({html: 'Passwords Must Match!!'})
          } else {
            $.ajax({
                url: 'http://localhost:3000/footnotes/signup',
                type: 'POST',
                data: {
                  first_name: $('#first_name').val(),
                  email: $('#email').val(),
                  hashed_pw: $('#hashed_pw').val()
                },
                dataType: 'json'
              })
              .done((data) => {
                console.log("yay! for objects", data)
                localStorage.setItem('userLogin', JSON.stringify({id:data.id, name:data.first_name}))
                window.location.href = './dashboard.html'
              })
              .fail(function(jqXhr, textStatus, errorThrown) {
                console.log('OOPS:', errorThrown)
              })
          }
        })
        $('#modalLogin').click((event) => {
          event.preventDefault()
          console.log(email, modalPass)
        if (modalPass === '' || email === '') {
          M.toast({html: 'Please Enter Valid Credentials'})
        } else {
          $.ajax({
              url: 'http://localhost:3000/footnotes/login',
              type: 'POST',
              data: {
                email: $('#modalEmail').val(),
                hashed_pw: $('#password2').val()
              },
              dataType: 'json'
            })
            .done((data) => {
              console.log("User has signed in", data)
              localStorage.setItem('userLogin', JSON.stringify({id:data.id, name:data.first_name}))
                // window.location.href = './dashboard.html'
            })
            .fail(function(jqXhr, textStatus, errorThrown) {
              console.log('OOPS:', errorThrown)
            })
        }
      })
      }); /////end of the doc .ready function