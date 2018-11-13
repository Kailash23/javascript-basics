var myFakeElement = {};

var myFakeElement = {
	on: function (something) {
		console.log('Running .on with ' + something);
	}
};

myFakeElement.on('batman');

myFakeElement
	.on('gordan')
	.on('jordan');

/*
	Running .on with batman
	myFakeElement.on('gordan').on('jordan');
							^

	TypeError: Cannot read property 'on' of undefined
*/
