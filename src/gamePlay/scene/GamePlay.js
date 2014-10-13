/**
 * Created by huangyi03 on 2014/10/9.
 */

var GamePlayLayer = cc.Layer.extend({

    backgroundLayer : null,
    touchLayer : null,
    ctor : function(){
        this._super();

        this.addCache();

        this.addBackgroundLayer();

        this.addTouchLayer();
    },

    addCache : function(){

        //将plist添加到缓存
        cc.spriteFrameCache.addSpriteFrames(res.source_plist);
        cc.spriteFrameCache.addSpriteFrames(res.nums_plist);
    },


    addBackgroundLayer : function(){

        this.backgroundLayer = new GPBackgroundLayer(cc.color(250, 248, 239));
        this.addChild(this.backgroundLayer);
    },

    addTouchLayer : function(){
        this.touchLayer = new GPTouchLayer();
        this.addChild(this.touchLayer);
    }
});

var GamePlayScene  = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var layer = new GamePlayLayer();
        this.addChild(layer);

    }
});