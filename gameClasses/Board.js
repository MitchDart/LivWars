var Board = IgeEntity.extend({
	classId: 'Board',
	
	init: function () {
		IgeEntity.prototype.init.call(this);

		if(!ige.isServer) {
			this.texture(ige.client.textures.board);
		}

		this.width(150)
		.height(150);

		this.blocks = [];
	},

	placeCross: function(x,y) {
		this.blocks[x][y].placeCross();

		return checkWin(this.blocks);
	},

	placeNaught: function(x,y) {
		this.blocks[x][y].placeNaught();

		return checkWin(this.blocks);
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Board; }

function checkWin(blocks) {
	//Check top to bottom
	if(blocks[1][0].getState() != 0
		&& blocks[1][0].getState() == blocks[1][1].getState()
		&& blocks[1][1].getState() == blocks[1][2].getState()) {

		drawTopToBottomWin();
		return true;
	}

	//Check left to right
	if(blocks[0][1].getState() != 0
		&& blocks[0][1].getState() == blocks[1][1].getState()
		&& blocks[1][1].getState() == blocks[2][1].getState()) {

		drawLeftToRightWin();
		return true;
	}

	//Check left corner
	if(blocks[0][0].getState() != 0
		&& blocks[0][0].getState() == blocks[1][1].getState()
		&& blocks[1][1].getState() == blocks[2][2].getState()) {

		drawLeftCornerWin();
		return true;
	}

	//Check right corner
	if(blocks[2][0].getState() != 0
		&& blocks[2][0].getState() == blocks[1][1].getState()
		&& blocks[1][1].getState() == blocks[0][2].getState()) {

		drawRightCornerWin();
		return true;
	}

	return false;
}

function drawTopToBottomWin() {

}

function drawLeftToRightWin() {

}

function drawLeftCornerWin() {

}

function drawRightCornerWin() {

}