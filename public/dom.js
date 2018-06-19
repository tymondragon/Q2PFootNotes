$(document).ready(function(){
  $('.modal').modal();


  $('form').submit((event) => {
    event.preventDefault()
    $.post(`http://localhost:3000/login`, $(this).serialize())
      .then((result) => {
        console.log(result)
        // $('#result').html(result)
      })
  })
});
