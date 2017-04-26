$(document).ready(getHomeRuns)

function getHomeRuns() {
  $('.btn').click(function() {
    $('.response').remove()
    homerCheck()
  })
}

function homerCheck() {
  const URL = 'https://crossorigin.me/http://www.baseball-reference.com/players/gl.fcgi?id=harpebr03&t=b&year=2017'

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

  var verbs = ['hit', 'crushed', 'swatted', 'poked', 'blasted']
  var homer = ['homer', 'home run', 'dinger']
  var homers = ['homers', 'home runs', 'dingers']
  var number = ['zero', 'one', 'two', 'three', 'four', 'five']

  if (data == 1) {
    var response = `Bryce Harper ${verbs[Math.floor(Math.random()*verbs.length)]} ${number[data]} ${homer[Math.floor(Math.random()*homers.length)]} in his last game.`
  } else if (data > 1) {
    var response = `Bryce Harper ${verbs[Math.floor(Math.random()*verbs.length)]} ${number[data]} ${homers[Math.floor(Math.random()*homers.length)]} in his last game.`
  } else {
    var response = "Sadly, no."
  }

  $answer.append(`<h1 class="response">${response}</h1>`)
}
