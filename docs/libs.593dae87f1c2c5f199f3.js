(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,o){"use strict";o.r(t);var n={};o.r(n),o.d(n,"GAME",(function(){return s})),o.d(n,"PRELOAD",(function(){return a})),o.d(n,"GAME_OVER",(function(){return c}));var r={};o.r(r),o.d(r,"BACKGROUND",(function(){return u})),o.d(r,"ROCKET_MOUSE",(function(){return f})),o.d(r,"MOUSE_HOLE",(function(){return l})),o.d(r,"WINDOW1",(function(){return h})),o.d(r,"WINDOW2",(function(){return d})),o.d(r,"BOOKCASE1",(function(){return p})),o.d(r,"BOOKCASE2",(function(){return y})),o.d(r,"LASER_END",(function(){return b})),o.d(r,"LASER_MIDDLE",(function(){return m})),o.d(r,"COIN",(function(){return O}));var i={};o.r(i),o.d(i,"ROCKET_MOUSE_RUN",(function(){return w})),o.d(i,"ROCKET_FLAMES_ON",(function(){return v})),o.d(i,"ROCKET_MOUSE_FALL",(function(){return E})),o.d(i,"ROCKET_MOUSE_FLY",(function(){return _})),o.d(i,"ROCKET_MOUSE_DEAD",(function(){return g}));o(0);var s="game",a="preload",c="game-over",u="background",f="rocket-mouse",l="mouse-hole",h="window1",d="window2",p="bookcase1",y="bookcase2",b="laser-end",m="laser-middle",O="coin",w="rocket-mouse-run",v="rocket-flames-on",E="rocket-mouse-fall",_="rocket-mouse-fly",g="rocket-mouse-dead";function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=C(e);if(t){var r=C(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return x(this,o)}}function x(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var A,D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(s,Phaser.GameObjects.Container);var t,o,n,i=P(s);function s(e,t,o){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),j(M(n=i.call(this,e,t,o)),"flames",void 0),j(M(n),"mouse",void 0),j(M(n),"cursors",void 0);var a=e.add.image(0,0,r.LASER_END).setOrigin(.5,0),c=e.add.image(0,a.y+a.displayHeight,r.LASER_MIDDLE).setOrigin(.5,0);c.setDisplaySize(c.width,200);var u=e.add.image(0,c.y+c.displayHeight,r.LASER_END).setOrigin(.5,0).setFlipY(!0);e.physics.add.existing(M(n),!0);var f=n.body,l=a.displayWidth,h=a.displayHeight+c.displayHeight+u.displayHeight;return f.setSize(l,h),f.setOffset(.5*-l,0),f.position.x=n.x+f.offset.x,f.position.y=n.y,n.add(a),n.add(c),n.add(u),n}return t=s,(o=[{key:"preUpdate",value:function(){}},{key:"enableJetpack",value:function(e){this.flames.setVisible(e)}}])&&S(t.prototype,o),n&&S(t,n),s}();function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=F(e);if(t){var r=F(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return N(this,o)}}function N(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?B(e):t}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}!function(e){e[e.Running=0]="Running",e[e.Killed=1]="Killed",e[e.Dead=2]="Dead"}(A||(A={}));var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(a,Phaser.GameObjects.Container);var t,o,n,s=L(a);function a(e,t,o){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),G(B(n=s.call(this,e,t,o)),"flames",void 0),G(B(n),"mouse",void 0),G(B(n),"cursors",void 0),G(B(n),"mouseState",A.Running),n.mouse=e.add.sprite(0,0,r.ROCKET_MOUSE,"rocketmouse_fly01.png").setOrigin(.5,1),n.mouse.anims.play(i.ROCKET_MOUSE_RUN),e.physics.add.existing(B(n));var c=n.body;return c.setSize(.5*n.mouse.width,.7*n.mouse.height),c.setCollideWorldBounds(!0),c.setOffset(-.3*n.mouse.width,15-n.mouse.height),c.setVelocityX(200),n.flames=e.add.sprite(-63,-15,r.ROCKET_MOUSE).play(i.ROCKET_FLAMES_ON),n.add(n.flames),n.add(n.mouse),n.cursors=e.input.keyboard.createCursorKeys(),n}return t=a,(o=[{key:"preUpdate",value:function(){var e=this.body;switch(this.mouseState){case A.Running:var t;(null===(t=this.cursors.space)||void 0===t?void 0:t.isDown)?(e.setAccelerationY(-600),this.enableJetpack(!0),this.mouse.play(i.ROCKET_MOUSE_FLY,!0)):(e.setAccelerationY(0),this.enableJetpack(!1)),e.blocked.down?this.mouse.play(i.ROCKET_MOUSE_RUN,!0):e.velocity.y>0&&this.mouse.play(i.ROCKET_MOUSE_FALL,!0);break;case A.Killed:e.velocity.x*=.99,e.velocity.x<=5&&(this.mouseState=A.Dead);break;case A.Dead:e.setVelocity(0,0),this.emit("dead")}}},{key:"enableJetpack",value:function(e){this.flames.setVisible(e)}},{key:"kill",value:function(){if(this.mouseState===A.Running){this.mouseState=A.Killed,this.mouse.play(i.ROCKET_MOUSE_DEAD);var e=this.body;e.setAccelerationY(0),e.setVelocity(1e3,0),this.enableJetpack(!1)}}}])&&K(t.prototype,o),n&&K(t,n),a}();function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=J(e);if(t){var r=J(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Y(this,o)}}function Y(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?z(e):t}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(a,Phaser.Scene);var t,o,i,s=X(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),q(z(e=s.call(this,n.GAME)),"background",void 0),q(z(e),"mouseHole",void 0),q(z(e),"window1",void 0),q(z(e),"window2",void 0),q(z(e),"bookcase1",void 0),q(z(e),"bookcase2",void 0),q(z(e),"windows",[]),q(z(e),"bookcases",[]),q(z(e),"laserObstacle",void 0),q(z(e),"coins",void 0),q(z(e),"scoreLabel",void 0),q(z(e),"score",void 0),q(z(e),"mouse",void 0),e}return t=a,(o=[{key:"init",value:function(){this.score=0}},{key:"create",value:function(){var e=this,t=this.scale,o=t.width,i=t.height;this.background=this.add.tileSprite(0,0,o,i,r.BACKGROUND).setOrigin(0).setScrollFactor(0,0),this.mouseHole=this.add.image(Phaser.Math.Between(900,1500),501,r.MOUSE_HOLE),this.window1=this.add.image(Phaser.Math.Between(900,1300),200,r.WINDOW1),this.window2=this.add.image(Phaser.Math.Between(1600,2e3),200,r.WINDOW2),this.windows=[this.window1,this.window2],this.bookcase1=this.add.image(Phaser.Math.Between(2200,2700),580,r.BOOKCASE1).setOrigin(.5,1),this.bookcase2=this.add.image(Phaser.Math.Between(2900,3400),580,r.BOOKCASE2).setOrigin(.5,1),this.bookcases=[this.bookcase1,this.bookcase2],this.scoreLabel=this.add.text(10,10,"Score: ".concat(this.score),{fontSize:24,color:"#080808",backgroundColor:"#f8e71c",shadow:{fill:!0,blur:0,offsetY:0,padding:{left:15,right:15,top:10,bottom:10}}}).setScrollFactor(0),this.laserObstacle=new D(this,900,100),this.add.existing(this.laserObstacle),this.mouse=new H(this,.5*o,i-30),this.add.existing(this.mouse),this.coins=this.physics.add.staticGroup(),this.spawnCoin(),this.cameras.main.startFollow(this.mouse),this.cameras.main.setBounds(0,0,Number.MAX_SAFE_INTEGER,i),this.physics.world.setBounds(0,0,Number.MAX_SAFE_INTEGER,i-55),this.physics.add.overlap(this.laserObstacle,this.mouse,this.handleOverlapLaser,void 0,this),this.physics.add.overlap(this.coins,this.mouse,this.handleCollectCoin,void 0,this),this.mouse.once("dead",(function(){e.scene.run(n.GAME_OVER)}))}},{key:"update",value:function(){this.background.setTilePosition(this.cameras.main.scrollX),this.wrapMouseHole(),this.wrapWindows(),this.wrapBookcases(),this.wrapLaserObstacle(),this.teleportBackwards()}},{key:"wrapMouseHole",value:function(){var e=this.cameras.main.scrollX,t=e+this.scale.width;this.mouseHole.x+this.mouseHole.width<e&&(this.mouseHole.x=Phaser.Math.Between(t+100,t+1e3))}},{key:"wrapWindows",value:function(){var e=this,t=this.cameras.main.scrollX,o=t+this.scale.width,n=2*this.window1.width;if(this.window1.x+n<t){this.window1.x=Phaser.Math.Between(o+n,o+n+800);var r=this.bookcases.find((function(t){return Math.abs(e.window1.x-t.x)<=e.window1.width}));this.window1.visible=!r}if(n=this.window2.width,this.window2.x+n<t){this.window2.x=Phaser.Math.Between(this.window1.x+n,this.window1.x+n+800);var i=this.bookcases.find((function(t){return Math.abs(e.window2.x-t.x)<=e.window2.width}));this.window2.visible=!i}}},{key:"wrapBookcases",value:function(){var e=this,t=this.cameras.main.scrollX,o=t+this.scale.width,n=2*this.bookcase1.width;if(this.bookcase1.x+n<t){this.bookcase1.x=Phaser.Math.Between(o+n,o+n+800);var r=this.windows.find((function(t){return Math.abs(e.bookcase1.x-t.x)<=e.bookcase1.width}));this.bookcase1.visible=!r}if(n=this.bookcase2.width,this.bookcase2.x+n<t){this.bookcase2.x=Phaser.Math.Between(this.bookcase1.x+n,this.bookcase1.x+n+800);var i=this.windows.find((function(t){return Math.abs(e.bookcase2.x-t.x)<=e.bookcase2.width}));this.bookcase2.visible=!i}}},{key:"wrapLaserObstacle",value:function(){var e=this.cameras.main.scrollX,t=e+this.scale.width,o=this.laserObstacle.body,n=o.width;this.laserObstacle.x+n<e&&(this.laserObstacle.x=Phaser.Math.Between(t+n,t+n+1e3),this.laserObstacle.y=Phaser.Math.Between(0,300),o.position.x=this.laserObstacle.x+o.offset.x,o.position.y=this.laserObstacle.y)}},{key:"handleOverlapLaser",value:function(e,t){t.kill()}},{key:"spawnCoin",value:function(){this.coins.children.each((function(e){e.body.enable=!1}));for(var e=this.cameras.main.scrollX+this.scale.width+100,t=Phaser.Math.Between(1,20),o=0;o<t;++o){var n=this.coins.get(e,Phaser.Math.Between(100,this.scale.height-100),r.COIN);n.setVisible(!0),n.setActive(!0);var i=n.body;i.setCircle(.5*i.width),i.enable=!0,i.updateFromGameObject(),e+=1.5*n.width}}},{key:"handleCollectCoin",value:function(e,t){var o=t;this.coins.killAndHide(o),o.body.enable=!1,this.score++,this.scoreLabel.text="Score: ".concat(this.score)}},{key:"teleportBackwards",value:function(){var e=this.cameras.main.scrollX;e>2380&&(this.mouse.x-=2380,this.mouseHole.x-=2380,this.windows.forEach((function(e){e.x-=2380})),this.bookcases.forEach((function(e){e.x-=2380})),this.laserObstacle.x-=2380,this.laserObstacle.body.x-=2380,this.spawnCoin(),this.coins.children.each((function(e){var t=e;t.active&&(t.x-=2380,t.body.updateFromGameObject())})))}}])&&I(t.prototype,o),i&&I(t,i),a}();function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=ne(e);if(t){var r=ne(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return oe(this,o)}}function oe(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var re=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(s,Phaser.Scene);var t,o,r,i=te(s);function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),i.call(this,n.GAME_OVER)}return t=s,(o=[{key:"create",value:function(){var e=this,t=this.scale,o=t.width,r=t.height;this.add.text(.5*o,.5*r,"Press SPACE to Play Again",{fontSize:32,color:"#ffffff",backgroundColor:"#000000",shadow:{fill:!0,blur:0,offsetY:0},padding:15}).setOrigin(.5),this.input.keyboard.once("keydown-SPACE",(function(){e.scene.stop(n.GAME_OVER),e.scene.stop(n.GAME),e.scene.start(n.GAME)}))}}])&&$(t.prototype,o),r&&$(t,r),s}();function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ce(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=fe(e);if(t){var r=fe(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return ue(this,o)}}function ue(e,t){return!t||"object"!==ie(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var le=[function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(c,Phaser.Scene);var t,o,s,a=ce(c);function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),a.call(this,n.PRELOAD)}return t=c,(o=[{key:"preload",value:function(){this.load.image(r.BACKGROUND,"assets/house/bg_repeat_340x640.png"),this.load.image(r.MOUSE_HOLE,"assets/house/object_mousehole.png"),this.load.image(r.WINDOW1,"assets/house/object_window1.png"),this.load.image(r.WINDOW2,"assets/house/object_window2.png"),this.load.image(r.BOOKCASE1,"assets/house/object_bookcase1.png"),this.load.image(r.BOOKCASE2,"assets/house/object_bookcase2.png"),this.load.image(r.LASER_END,"assets/house/object_laser_end.png"),this.load.image(r.LASER_MIDDLE,"assets/house/object_laser.png"),this.load.image(r.COIN,"assets/house/object_coin.png"),this.load.atlas(r.ROCKET_MOUSE,"assets/characters/rocket-mouse.png","assets/characters/rocket-mouse.json")}},{key:"create",value:function(){this.anims.create({key:i.ROCKET_MOUSE_RUN,frames:this.anims.generateFrameNames(r.ROCKET_MOUSE,{start:1,end:4,prefix:"rocketmouse_run",zeroPad:2,suffix:".png"}),frameRate:10,repeat:-1}),this.anims.create({key:i.ROCKET_FLAMES_ON,frames:this.anims.generateFrameNames(r.ROCKET_MOUSE,{start:1,end:2,prefix:"flame",suffix:".png"}),frameRate:10,repeat:-1}),this.anims.create({key:i.ROCKET_MOUSE_FALL,frames:[{key:r.ROCKET_MOUSE,frame:"rocketmouse_fall01.png"}],frameRate:10,repeat:-1}),this.anims.create({key:i.ROCKET_MOUSE_FLY,frames:[{key:r.ROCKET_MOUSE,frame:"rocketmouse_fly01.png"}],frameRate:10,repeat:-1}),this.anims.create({key:i.ROCKET_MOUSE_DEAD,frames:this.anims.generateFrameNames(r.ROCKET_MOUSE,{start:1,end:2,prefix:"rocketmouse_dead",zeroPad:2,suffix:".png"}),frameRate:10}),this.scene.start(n.GAME)}},{key:"update",value:function(){}}])&&se(t.prototype,o),s&&se(t,s),c}(),Q,re],he={type:Phaser.AUTO,scale:{mode:Phaser.Scale.NONE,autoCenter:Phaser.Scale.CENTER_BOTH,parent:"root",width:800,height:640},physics:{default:"arcade",arcade:{debug:!0,gravity:{y:200}}},scene:le};t.default=new Phaser.Game(he)}]]);