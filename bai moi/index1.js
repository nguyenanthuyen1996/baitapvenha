function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed;
    }
    this.moveTop = function (){
        this.top += this.speed
    }

    this.moveRight2 = function(){
        this.left -= this.speed;
    }
    this.moveTop2 = function (){
        this.top -= this.speed
    }
}

let hero = new Hero('oto.png', 20, 30, 100,200);
let turn_right = true
function start(){
    if( hero.left < window.innerWidth - hero.size && turn_right == true ) {
        hero.moveRight()
    }else if(hero.top < (window.innerHeight - hero.size) && hero.left >= window.innerWidth - hero.size) {
        turn_right = false
        hero.moveTop()
    } else if (hero.left > 0 && turn_right == false){
        hero.moveRight2()
    } else if (hero.top > 0 && turn_right == false) {
        hero.moveTop2()
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();