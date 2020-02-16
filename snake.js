window.onload = function() {

  var stage = document.getElementById('stage');
  var context = stage.getContext("2d");
  document.addEventListener("keydown", keyPush);

  setInterval(game, 85);

  const velocidade = 1;
  
  var velocidade_x = velocidade_y = 0;
  var start_x = 10;
  var start_y = 15;
  var length_c = 20;
  var qtd = 35;
  var apple_x = apple_y = 0;
  
  apple_x = Math.floor(Math.random()*qtd);
  apple_y = Math.floor(Math.random()*qtd);
    
  var trail = [];
  tail = 5;
    
  function game() {
    start_x += velocidade_x;
    start_y += velocidade_y;

    if (start_x < 0) {
      start_x = qtd - 1;
    } 
    if (start_x > qtd-1) {
      start_x = 0;
    }
    if (start_y < 0) {
      start_y = qtd - 1;
    }
    if (start_y > qtd-1) {
      start_y = 0;
    }

      
    context.fillStyle = "#000022";
    context.fillRect(0,0, stage.width, stage.height);

    context.fillStyle = "red";
    context.fillRect(apple_x * length_c, apple_y * length_c, length_c, length_c);

    context.fillStyle = "#21ff21";
    for (var i = 0; i <trail.length; i++) {
      context.fillRect(trail[i].x*length_c, trail[i].y*length_c, length_c-1, length_c-1);

    if (trail[i].x == start_x && trail[i].y == start_y) {
    velocidade_x = velocidade_y = 0;
    tail = 5; 
    start_x = 17;
    start_y = 22;
    } 

    
      
    }

    trail.push({x:start_x, y:start_y})
    while (trail.length > tail) {
      trail.shift();
    }

    if (apple_x == start_x && apple_y == start_y) {
      tail++;
      apple_x = Math.floor(Math.random()*qtd);
      apple_y = Math.floor(Math.random()*qtd);
    }


  

  }

  function keyPush() {
    switch (event.keyCode) {
      case 37: //left_arrow
          velocidade_x = -velocidade;
          velocidade_y = 0;
          break;
      case 38: //up_arrow
          velocidade_x = 0;
          velocidade_y = -velocidade;
          break; 
      case 39: //right_arrow
          velocidade_x = velocidade;
          velocidade_y = 0;
          break;
      case 40: //down_arrow
          velocidade_x = 0;
          velocidade_y = velocidade;
          break;
      case 82: //restart
          velocidade_x = velocidade_y = 0;
          tail = 6;  
      default:
        break;
    }
  }
}
