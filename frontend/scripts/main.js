// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
window.addEventListener('DOMContentLoaded', (event) =>{
  getVisitCount();
})

const functionApiUrl = 'https://getresumecounteracgdl.azurewebsites.net/api/GetResumeCounter?code=KOrzyAs7Lcp96TjxjSvHLbMxuAcG08WKQby42gUtrGe6L3OhfgqJRA=='
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
  let count = 30;
  fetch(functionApiUrl).then(response => {
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