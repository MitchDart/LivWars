var image = {
	render: function (ctx, entity) {
		// Draw the player entity
		ctx.strokeStyle = 'rgba(255, 255, 0, 1)';
		ctx.beginPath();

		var padding = entity._bounds2d.x2 * 0.2;

		ctx.arc(0,0, entity._bounds2d.x2 - (padding*2), 0, Math.PI*2);

		ctx.stroke();
	}
};
