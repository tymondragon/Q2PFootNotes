$(document).ready(function() {
      $('.modal').modal();
      /////This is the create a user//////
      $('#login').click((event) => {
          let password = $('#hashed_pw').val()
          let confirm = $('#password2').val()
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
                localStorage.setItem('userLogin', JSON.stringify(`${data.id, data.first_name}`))
                window.location.href = './dashboard.html'
              })
              .fail(function(jqXhr, textStatus, errorThrown) {
                console.log('OOPS:', errorThrown)
              })
          }
        })
      $('#modalLogin').click((event) => {
        if (password === '' || confirm === '') {
          M.toast({html: 'Passwords Must Match!!'})
        } else {
          $.ajax({
              url: 'http://localhost:3000/footnotes/login',
              type: 'POST',
              data: {
                email: $('#modalEmail').val(),
                hashed_pw: $('#password').val()
              },
              dataType: 'json'
            })
            .done((data) => {
              console.log("User has signed in", data)
              localStorage.setItem('userLogin', JSON.stringify({id:data.id, name:data.first_name}))
              window.location.href = './dashboard.html'
            })
            .fail(function(jqXhr, textStatus, errorThrown) {
              console.log('OOPS:', errorThrown)
            })
        }
      })
      }); /////end of the doc .ready function