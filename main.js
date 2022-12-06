var canvas = new fabric.Canvas("canvas_MINECRAFT");
var largura_do_block = 30;
var altura_do_block = 30;
var posiçãoX = 10;
var posiçãoY = 10;
var object_player = "";
function uptadeobject(){
    fabric.Image.fromURL("player.png" , function (img){
        object_player = img;
        object_player.scaleToWidth(150);
        object_player.scaleToHeight(140);
        object_player.set({top: posiçãoY , left: posiçãoX});
        canvas.add(object_player);
    });
}
function newimagem(getImage){
    fabric.Image.fromURL(getImage , function (img){
        blockimg = img;
        blockimg.scaleToWidth(largura_do_block);
        blockimg.scaleToHeight(altura_do_block);
        blockimg.set({top: posiçãoY , left: posiçãoX});
        canvas.add(blockimg);
    });
}

window.addEventListener("keydown", myKeyDown)

function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        if(largura_do_block < 100 && altura_do_block < 100){
        largura_do_block = largura_do_block + 10;
        altura_do_block = altura_do_block + 10;
        document.getElementById("largura_atual").innerHTML = largura_do_block;
        document.getElementById("altura_atual").innerHTML = altura_do_block;
    }
    }
    if(e.shiftKey == true && keyPressed == '77')
    {
        if(largura_do_block > 10 && altura_do_block > 10){
        largura_do_block = largura_do_block - 10;
        altura_do_block = altura_do_block - 10;
        document.getElementById("largura_atual").innerHTML = largura_do_block;
        document.getElementById("altura_atual").innerHTML = altura_do_block;
        }
    }
    if(keyPressed == 38){
        up();
    }
    if(keyPressed == 40){
        down();
    }
    if(keyPressed == 39){
        right();
    }
    if(keyPressed == 37){
        left();
    }
    if(keyPressed == 89){
        newimagem("yellow_wall.png");
    }
    if(keyPressed == 71){
        newimagem("ground.png");
    }
    if(keyPressed == 76){
        newimagem("light_green.png");
    }
    if(keyPressed == 68){
        newimagem("dark_green.png");
    }
    if(keyPressed == 85){
        newimagem("unique.png");
    }
    if(keyPressed == 82){
        newimagem("roof.jpeg");
    }
    if(keyPressed == 87){
        newimagem("wall.jpeg");
    }
    if(keyPressed == 84){
        newimagem("trunk.jpeg");
    }
    if(keyPressed == 67){
        newimagem("cloud.jpeg");
    }
}

function up(){
    if(posiçãoY >= 10){
        posiçãoY = posiçãoY - altura_do_block;
        console.log("altura da imagem do bloco = " + altura_do_block);
        console.log("Quando a tecla direcional Cima for pressionada, X = " + posiçãoX + " , Y = "+ posiçãoY);
        canvas.remove(object_player);
        uptadeobject();
    }
}

function down(){
    if(posiçãoY <= 500){
        posiçãoY = posiçãoY + altura_do_block;
        console.log("altura da imagem do bloco = " + altura_do_block);
        console.log("Quando a tecla direcional Baixo for pressionada, X = " + posiçãoX + " , Y = "+ posiçãoY);
        canvas.remove(object_player);
        uptadeobject();
    }
}

function right(){
    if(posiçãoX <= 850){
        posiçãoX = posiçãoX + largura_do_block;
        console.log("largura da imagem do bloco = " + largura_do_block);
        console.log("Quando a tecla direcional Direita for pressionada, X = " + posiçãoX + " , Y = "+ posiçãoY);
        canvas.remove(object_player);
        uptadeobject();
    }
}

function left(){
    if(posiçãoX >= 0){
        posiçãoX = posiçãoX - largura_do_block;
        console.log("largura da imagem do bloco = " + largura_do_block);
        console.log("Quando a tecla direcional Esquerda for pressionada, X = " + posiçãoX + " , Y = "+ posiçãoY);
        canvas.remove(object_player);
        uptadeobject();
    }
}