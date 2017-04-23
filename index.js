$(document).ready(getHomeRuns)


function getHomeRuns() {
  $('.btn').click(function() {
    homerCheck()
  })
}

function homerCheck() {
  const URL = 'http://www.baseball-reference.com/players/gl.fcgi?id=harpebr03&t=b&year=2017'

  $.ajax({
    url: `${URL}`,
    success: function (html) {

    const table =  $(html).find('table')[4].children[3].innerHTML.split('\n')
    var bryce = table[table.length-3].split('data-stat=')[16].split('>')[1][0]

    render(bryce)
    }

  })
}


function render(data) {
  let $answer = $('#answer')

  if (data > 0) {
    var response = "Yes"
  } else {
    var response = "No"
  }

  $answer.append(`<h1> <p>${response}</p> </h1>`)
}
