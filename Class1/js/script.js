console.log("hi");

var GreetingContainer;
GreetingContainer = "hello? It's meeee.";
console.log("GreetingContainer");

// alert('Greetings: ' + GreetingContainer);

document.write('<p>' + GreetingContainer + '</p>');

var attributes = ["Black", "Green", "Blue"];
var arrange = document.getElementsByClassName('msg');

for (var i = 0; i < attributes.length; i++) {
	for (var i = 0; i < arrange.length; i++) {
		arrange[i].innerHTML = attributes[i];
	}
}