var myFakeElement = {};
var myFakeElement = {
	on: function (something) {
		console.log('Running .on with ' + something);
		return this;
	}
};
myFakeElement.on('batman');
myFakeElement
	.on('gordan')
	.on('jordan');

/*
	Running .on with batman
	Running .on with gordan
	Running .on with jordan
*/
