var MainBoard = IgeEntity.extend({
	classId: 'MainBoard',
	
	init: function () {
		IgeEntity.prototype.init.call(this);

		if(!ige.isServer) {
			this.texture(ige.client.textures.mainBoard);
		}

		this.width(450)
		.height(450);

		this.boards = [];
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = MainBoard; }