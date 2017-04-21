$(document).ready(function(){

  const URL = 'http://www.baseball-reference.com/players/gl.fcgi?id=harpebr03&t=b&year=2017'

  $.ajax({
    url: `${URL}`,
    success: function(data) {
      console.log(data)
    }
  })
})
