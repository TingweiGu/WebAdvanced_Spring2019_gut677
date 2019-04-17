var fullURL ="https://swapi.co/api/people/" + Math.floor(Math.random() * 50) + "/";

var name = document.getElementById("name");
var height = document.getElementById("height");
var mass = document.getElementById("mass");
var hair_color = document.getElementById("hair_color");
var skin_color = document.getElementById("skin_color");
var eye_color = document.getElementById("eye_color");
var birth_year = document.getElementById("birth_year");

(function() {
  document.getElementById("ajaxButton").addEventListener("click", makeRequest);
 

  var httpRequest;
  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert("It did not work :(");
      return false;
    }
    httpRequest.onreadystatechange = fillInfo;
    httpRequest.open(
      "GET", fullURL
    );
    httpRequest.send();
  }

  function fillInfo() {
    var responseContent;
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
          console.log(httpRequest.responseText);
        
        responseContent = httpRequest.responseText;
        console.log(responseContent);

        var parsed = JSON.parse(responseContent);
        console.log(parsed.name);
        console.log(parsed.height);
        console.log(parsed.mass);
        console.log(parsed.hair_color);
        console.log(parsed.skin_color);
        console.log(parsed.eye_color);
        console.log(parsed.birth_year);
        
        _name.innerHTML = parsed.name;
        height.innerHTML = parsed.height;
        mass.innerHTML = parsed.mass;
        hair_color.innerHTML = parsed.hair_color;
        skin_color.innerHTML = parsed.skin_color;
        eye_color.innerHTML = parsed.eye_color;
        birth_year.innerHTML = parsed.birth_year;

      } else {
        alert("There was a problem with the request.");
      }
    }
  }
})();