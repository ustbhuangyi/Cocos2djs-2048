/**
 * Created by huangyi03 on 2014/10/10.
 */

var TileSprite = cc.Sprite.extend({

    ctor: function (value) {
        this._super("#" + value + ".png");
        this.active = true;

        this.value = value;
        this.location = {};
    }
});

TileSprite.prototype.playScale = function (merged) {
    var actionZoomIn, actionZoomOut;
    if (!merged) {
        this.scale = 0.1;
        this.runAction(cc.scaleTo(0.1, 1, 1));
    } else {
        actionZoomIn = cc.scaleTo(0.1, 1.2, 1.2);
        actionZoomOut = cc.scaleTo(0.1, 1, 1);
        this.runAction(cc.sequence(actionZoomIn, actionZoomOut));
    }
};

TileSprite.prototype.playMove = function (xTo, yTo, callback) {
    var actionTo = cc.moveTo(0.1, cc.p(xTo, yTo));
    this.stopAction();
    this.runAction(cc.sequence(actionTo, cc.callFunc(function () {
        callback && callback();
    })));
};

TileSprite.prototype.setValue = function (value) {
    this.value = value;
    this.update();
};

TileSprite.prototype.update = function () {
    this.setSpriteFrame(this.value + ".png");

};

TileSprite.prototype.destroy = function () {
    this.visible = false;
    this.active = false;
}

TileSprite.getOrCreateTile = function (value) {

    var tile = null;

    for (var i = 0, len = TileSprite.tiles.length; i < len; i++) {
        tile = TileSprite.tiles[i];
        if (tile.active === false) {
            this.visible = true;
            tile.active = true;
            return tile;
        }
    }

    tile = TileSprite.create(value);
    return tile;
};

TileSprite.create = function (value) {
    var tile = new TileSprite(value);

    TileSprite.tiles.push(tile);

    return tile;

};
