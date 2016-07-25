var image = {
	render: function (ctx, entity) {
		// Draw the player entity
		ctx.strokeStyle = 'rgba(0, 255, 0, 1)';
		ctx.beginPath();

		ctx.moveTo(-entity._bounds2d.x2/3, entity._bounds2d.y2);
		ctx.lineTo(-entity._bounds2d.x2/3, -entity._bounds2d.y2);

		ctx.moveTo(entity._bounds2d.x2/3, entity._bounds2d.y2);
		ctx.lineTo(entity._bounds2d.x2/3, -entity._bounds2d.y2);

		ctx.moveTo(-entity._bounds2d.x2, -entity._bounds2d.y2/3);
		ctx.lineTo(entity._bounds2d.x2, -entity._bounds2d.y2/3);

		ctx.moveTo(-entity._bounds2d.x2, entity._bounds2d.y2/3);
		ctx.lineTo(entity._bounds2d.x2, entity._bounds2d.y2/3);

		ctx.stroke();
	}
};
