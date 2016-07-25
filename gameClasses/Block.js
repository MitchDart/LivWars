var Block = IgeEntity.extend({
	classId: 'Block',
	
	init: function () {
		IgeEntity.prototype.init.call(this);

		this.width(50)
			.height(50);

		this.state = 0;

		if (ige.isClient) {
			
			this.mouseUp(function (event, control) {
				ige.network.send('click', this.id());
			});
		}
	},

	placeCross: function() {
		new Cross()
			.streamMode(1)
			.mount(this);

		this.state = 1;
	},

	placeNaught: function() {
		new Naught()
			.streamMode(1)
			.mount(this);

		this.state = 2;
	},

	getState: function() {
		return this.state;
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Block; }