// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit",clickFunc);

let matchData = JSON.parse(localStorage.getItem("schedule")) || []; 
function clickFunc(){
    event.preventDefault();
    
    let obj = {};
    obj.matchNum = document.querySelector("#matchNum").value;
    obj.teamA = document.querySelector("#teamA").value;
    obj.teamB = document.querySelector("#teamB").value;
    obj.date = document.querySelector("#date").value;
    obj.venue = document.querySelector("#venue").value;

    matchData.push(obj);

    localStorage.setItem("schedule",JSON.stringify(matchData));
}