/**
 * Created by huangyi03 on 2014/10/9.
 */

var GC = GC || {};

GC.winSize = cc.size(520, 650);

GC.h = GC.winSize.height;

GC.w = GC.winSize.width;

GC.w_2 = GC.w / 2;

GC.h_2 = GC.h / 2;

GC.gap = 16;

GC.size = 4;

GC.startTiles = 2;

GC.winValue = 2048;

GC.GAME_STATE = {
    PLAY: 1,
    OVER: 2
};

GC.KEY_MAP = {
    38: 0, // Up
    39: 1, // Right
    40: 2, // Down
    37: 3, // Left
    87: 0, // W
    68: 1, // D
    83: 2, // S
    65: 3  // A
};