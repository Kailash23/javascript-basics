// Handling events in the DOM

// Select an element in a page to inspect it
var element = $0;

element.addEventListener('click', function () {
	console.log('element clicked');
});

element.addEventListener('click', function (event) {
	console.log(event);
});
