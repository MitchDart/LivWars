var config = {
	include: [
		{name: 'MainBoard', path: './gameClasses/MainBoard'},
		{name: 'Board', path: './gameClasses/Board'},
		{name: 'Cross', path: './gameClasses/Cross'},
		{name: 'Naught', path: './gameClasses/Naught'},
		{name: 'Block', path: './gameClasses/Block'}
	]
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = config; }