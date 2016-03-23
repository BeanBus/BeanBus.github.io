/* Wait for document to load before doing stuff, or it won't work
$( document ).ready(function() {
});*/

/* BACKGROUND */
/* 
Stole this dude's code for space background! Heck yeah!

"Spaaaaaace!" 
- Portal 2 
*/

var Space = (function() {
  function Space() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.ratio = window.innerHeight < 250 ? 0.6 : 1;
    this.r = 150;
    this.counter = 0;
  }
  Space.prototype.init = function() {
    this.createElement();
    this.loop();
  };
  Space.prototype.createElement = function() {
    var scale = this.ratio;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.width = '100%';
    this.canvas.style.background = 'url("http://th05.deviantart.net/fs70/PRE/i/2011/340/3/1/delta_plus_hud_by_disastranagant-d4i6yyr.png")';
    this.ctx.transform(scale, 0, 0, -scale, this.canvas.width / 2, this.canvas.height / 2);
    document.body.appendChild(this.canvas);
    for (var i = 0; i < 450; i++) {
      this.createParticle();
    }
  };
  Space.prototype.createParticle = function() {
    this.particles.push({
      color: Math.random() > 0.1 ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)",
      radius: Math.random() * 5,
      x: Math.cos(Math.random() * 7 + Math.PI) * this.r,
      y: Math.sin(Math.random() * 7 + Math.PI) * this.r,
      ring: Math.random() * this.r * 3,
      move: ((Math.random() * 4) + 1) / 500,
      random: Math.random() * 7
    });
  };
  Space.prototype.moveParticle = function(p) {
    p.ring = Math.max(p.ring - 1, this.r);
    p.random += p.move;
    p.x = Math.cos(p.random + Math.PI) * p.ring;
    p.y = Math.sin(p.random + Math.PI) * p.ring;
  };
  Space.prototype.resetParticle = function(p) {
    p.ring = Math.random() * this.r * 3;
    p.radius = Math.random() * 5;
  };
  Space.prototype.disappear = function(p) {
    if (p.radius < 0.8) {
      this.resetParticle(p);
    }
    p.radius *= 0.994;
  };
  Space.prototype.draw = function(p) {
    this.ctx.beginPath();
    this.ctx.fillStyle = p.color;
    this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    this.ctx.fill();
  };
  Space.prototype.loop = function() {
    var _this = this;
    this.ctx.clearRect(-this.canvas.width, -this.canvas.height, this.canvas.width * 2, this.canvas.height * 2);
    if (this.counter < this.particles.length) {
      this.counter++;
    }
    //this.ctx.shadowBlur = 20;
    //this.ctx.shadowColor = "#fff";
    for (var i = 0; i < this.counter; i++) {
      this.disappear(this.particles[i]);
      this.moveParticle(this.particles[i]);
      this.draw(this.particles[i]);
    }
    requestAnimationFrame(function() {
      return _this.loop();
    });
  };
  return Space;
})();
window.onload = function() {
  var space = new Space();
  space.init();
};

/* Then load all the UFOs into the game by making them bigger - the floating effect is achieved by making a 15-second transition in CSS */
$("#start").click(function() {
  $("#start").css("display", "none");
  $("#ufo1").css("width", "380px");
  $("#ufo1").css("height", "380px");
  $("#ufo1").css("left", "40%");
  $("#ufo2").css("width", "420px");
  $("#ufo2").css("height", "300px");
  $("#ufo2").css("left", "40%");
  $("#ufo3").css("width", "400px");
  $("#ufo3").css("height", "400px");
  $("#ufo3").css("left", "40%");
});


/* CLICKABLES CODE */
$("#ufo1").click(function() {
  $("#ufo1").hide();
});
$("#ufo2").click(function() {
  $("#ufo2").hide();
});
$("#ufo3").click(function() {
  $("#ufo3").hide();
});

/* ADDING AND SUBTRACTING AMMO AND LIVES FROM HUD CODE */