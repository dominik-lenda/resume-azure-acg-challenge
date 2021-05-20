window.addEventListener('DOMContentLoaded', (event) =>{
  getVisitCount();
})
const functionApiUrl = 'https://getresumecounter-dl.azurewebsites.net/api/GetResumeCounter?code=zaDxNPnIrymFYNwADOHpw4rVsugMX1Nj3c4PTFmvejWQsiKikNKamg=='
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
  let count = 30;
  fetch(localFunctionApi).then(response => {
    return response.json()
  }).then(response => {
    console.log("Website called function API");
    count = response.count;
    document.getElementById("counter").innerText = count;
  }).catch(function(error) {
    console.log(error);
  });
  return count;
}

// Some code thanks to @chrisgannon

var select = function(s) {
  return document.querySelector(s);
}

function randomBetween(min,max)
{
    var number = Math.floor(Math.random()*(max-min+1)+min);
  
    if ( number !== 0 ){
      return number;
    }else {
      return 0.5;
    }
}

var tl = new TimelineMax();

for(var i = 0; i < 20; i++){

  var t = TweenMax.to(select('.bubble' + i), randomBetween(1, 1.5), {
    x: randomBetween(12, 15) * (randomBetween(-1, 1)),
    y: randomBetween(12, 15) * (randomBetween(-1, 1)), 
    repeat:-1,
    repeatDelay:randomBetween(0.2, 0.5),
    yoyo:true,
    ease:Elastic.easeOut.config(1, 0.5)
  })

  tl.add(t, (i+1)/0.6)
}


tl.seek(50);
