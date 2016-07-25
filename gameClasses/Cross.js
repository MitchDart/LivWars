var Cross = IgeEntity.extend({
	classId: 'Cross',
	
	init: function () {
		IgeEntity.prototype.init.call(this);

		if(!ige.isServer) {
			this.texture(ige.client.textures.cross);
		}

		this.width(50)
		.height(50);
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Cross; }