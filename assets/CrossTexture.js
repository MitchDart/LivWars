var image = {
	render: function (ctx, entity) {
		// Draw the player entity
		ctx.strokeStyle = 'rgba(255, 255, 0, 1)';
		ctx.beginPath();

		var paddingX = entity._bounds2d.x2 * 0.4;
		var paddingY = entity._bounds2d.y2 * 0.4;

		ctx.moveTo(-entity._bounds2d.x2 + paddingX, -entity._bounds2d.y2 + paddingY);
		ctx.lineTo(entity._bounds2d.x2 - paddingX, entity._bounds2d.y2 - paddingY);

		ctx.moveTo(entity._bounds2d.x2 - paddingX, -entity._bounds2d.y2 + paddingY);
		ctx.lineTo(-entity._bounds2d.x2 + paddingX, entity._bounds2d.y2 - paddingY);

		ctx.stroke();
	}
};
