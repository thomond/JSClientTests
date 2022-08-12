/*
Fills in a div with elements derived from a asyncronous request (XMLHttpRequest )

*/ 

function search(){
  const searchValue = document.getElementById("input").value; // get text to be searched
  document.getElementById("show").innerHTML = "" // clear results div
  
  
  const showReq = new XMLHttpRequest();
  showReq.open("GET", `https://api.tvmaze.com/search/shows?q=${searchValue}` , async=true );
  
  showReq.onload = () => { 
    shows = JSON.parse(showReq.responseText);
    
    shows.forEach( (value) => document.getElementById("show").innerHTML += `<b>${value.show.name}</b> <br/> ${value.show.summary  || "<p>No Summary</p>"} <br/>`
  )};

  showReq.onerror = () => {
    console.log(showReq.responseText)
  }
  
  showReq.send();
  
}