function Vec(x = 0 , y = 0){
    this.x  = x;
    this.y = y;
}
Vec.prototype = {
    add: function(vec){
        this.x += vec.x;
        this.y += vec.y;
        return this;
    },
    scale: function (val) {
        this.x += val;
        this.y += val;
        return this;
    },
    log: function(val){
        console.log(this.x + ' : '+this.y)
        return this;
    },
    clone: function () {
        return new Vec(this.x,this.y)
    }
}

var vec = new Vec();
vec.add({x: 10 , y: 10})
   .add({x: 10 , y: 10})
   .log();

console.log(vec);
