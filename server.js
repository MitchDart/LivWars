var Server = IgeClass.extend({
	classId: 'Server',
	Server: true,

	init: function (options) {
		var self = this;

		
		ige.debugEnabled(true);

		// Add the networking component
		ige.addComponent(IgeNetIoComponent)
			// Start the network server
			.network.start(2000, function () {
				// Networking has started so start the game engine
				ige.start(function (success) {
					// Check if the engine started successfully
					var sillyFlopper = false;

					if (success) {
						ige.network.define('click', function(data, clientId) {
							if(sillyFlopper)
								ige.$(data).placeNaught();
							else
								ige.$(data).placeCross();

							sillyFlopper = (!sillyFlopper);
						});

						ige.network.on('connect', function () {});
						ige.network.on('disconnect', function () {});

						// Add the network stream component
						ige.network.addComponent(IgeStreamComponent)
							.stream.sendInterval(30) // Send a stream update once every 30 milliseconds
							.stream.start(); // Start the stream

						// Accept incoming network connections
						ige.network.acceptConnections(true);

						// Load the base scene data
						ige.addGraph('IgeBaseScene');

						self.mainBoard = new MainBoard()
							.id('mainBoard')
							.streamMode(1)
							.mount(ige.$('baseScene'));

						//Initialise Board matrix
						for(var i = 0; i < 3; i++) {
							self.mainBoard.boards[i] = [];
							for(var k = 0; k < 3; k++) {	
								var newBoard = new Board()
									.id('board' + i + '-' + k)
									.streamMode(1);

								newBoard.translateBy(newBoard.width() * (i-1), newBoard.height() * (k-1), 0)
									.mount(ige.$('mainBoard'));

								for(var x = 0; x < 3; x++) {
									newBoard.blocks[x] = [];

									for(var y = 0; y < 3; y++) {

										var newBlock = new Block()
											.streamMode(1);

										newBlock.translateBy(newBlock.width() * (x-1), newBlock.height() * (y-1), 0)
											.mount(newBoard);

										newBoard.blocks[x][y] = newBlock;
									}
								}

								self.mainBoard.boards[i][k] = newBoard;
							}
						}
					}
				});
			});
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Server; }