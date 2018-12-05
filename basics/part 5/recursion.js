function unwrapArray(data) {
	if (!Array.isArray(data)) {
		return data;
	} else {
		return unwrapArray(data[0]);
	}
}

unwrapArray([[['my data']]]);
/*
  "my data"
*/

var link2 = {
	cracked: false,
	next: null
};

var link1 = {
	cracked: false,
	next: link2
};

function chainIsGood(link) {
	if (link.cracked) {
		return false;
	}

	if (link.next) {
		return chainIsGood(link.next);
	} else {
		return true;
	}
}
