$(document).ready(function(){

  const URL = 'http://www.baseball-reference.com/players/gl.fcgi?id=harpebr03&t=b&year=2017'

  $.ajax({
    url: `${URL}`,
    success: function (html) {

    const table =  $(html).find('table')[4].children[3].innerHTML.split('\n')
    var bryce = table[table.length-3].split('data-stat=')[16].split('>')[1][0]

    console.log(bryce);
    }

  })
})
