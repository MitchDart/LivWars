var igeClientConfig = {
	include: [
		/* Your custom game JS scripts */
		'./gameClasses/MainBoard.js',
		'./gameClasses/Board.js',
		'./gameClasses/Cross.js',
		'./gameClasses/Naught.js',
		'./gameClasses/Block.js',
		
		/* Standard game scripts */
		'./client.js',
		'./index.js'
	]
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = igeClientConfig; }