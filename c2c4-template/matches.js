// write js code here corresponding to matches.html

  let matchData = JSON.parse(localStorage.getItem("schedule"));

 matchData.forEach(function(e){
  let matchNum = e.matchNum;
  let teamA = e.teamA;
  let teamB = e.teamB;
  let date = e.date;
  let venue = e.venue;
  
  let td1 = document.createElement("td");
  td1.innerText = matchNum;

  let td2 = document.createElement("td");
  td2.innerText = teamA;

  let td3 = document.createElement("td");
  td3.innerText = teamB;

  let td4 = document.createElement("td");
  td4.innerText = date;

  let td5 = document.createElement("td");
  td5.innerText = venue;

  let text = document.createElement("h5");
  text.innerText = "Add As Favourite"
  text.style.color = "green";
  text.style.cursor = "pointer";


  let tr = document.createElement("tr");
  tr.append(td1,td2,td3,td4,td5,text);

  let tbody = document.querySelector("tbody");
  tbody.append(tr);

 });