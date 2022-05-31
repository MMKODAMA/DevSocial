const save = document.getElementById('save');
const canvasBG = document.getElementById('canvasBG');
const canvasSection = document.getElementById('canvasSection');
const azul = document.getElementById('azul');
const vermelho = document.getElementById('vermelho');
const verde = document.getElementById('verde');
const amarelo = document.getElementById('amarelo');
const preto = document.getElementById('preto');
const rosa = document.getElementById('rosa');
const roxo = document.getElementById('roxo');
const colorSelector = document.getElementById('colorSelector');






window.addEventListener("load",()=>{
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    //variables
    context.strokeStyle='rgb(255,0,0)';
    let desenhando = false;
    function startPosition(e){
        desenhando = true;
        desenhar(e);
    }
    function stopPosition(){
        desenhando = false;
        context.beginPath();
    }
    function desenhar(e){
        if(!desenhando){
            return;
        }
        context.lineWidth = 10;
        context.lineCap = 'round';
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }
    
    //event listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', stopPosition);
    canvas.addEventListener('mousemove',desenhar);
    save.addEventListener('click', function() {
    console.log(canvas.toDataURL());
    const link = document.getElementById('imagem');
    let url = canvas.toDataURL();
    link.src = url;
    link.style.display = 'block';
    canvasBG.style.display = 'none';
    canvasSection.style.display='none';
   });

   colorSelector.addEventListener('input',function(e) {
    context.strokeStyle=`${colorSelector.value}`;
   });
   azul.addEventListener('click',function(e){
    context.strokeStyle='blue';
   });
   vermelho.addEventListener('click',function(e){
    context.strokeStyle='red';
   });
   verde.addEventListener('click',function(e){
    context.strokeStyle='green';
   });
   amarelo.addEventListener('click',function(e){
    context.strokeStyle='yellow';
   });
   rosa.addEventListener('click',function(e){
    context.strokeStyle='pink';
   });
   preto.addEventListener('click',function(e){
    context.strokeStyle='black';
   });
   roxo.addEventListener('click',function(e){
    context.strokeStyle='purple';
   });

});





// context.fillStyle='rgb(255,0,0)';
// context.strokeStyle='rgb(255,0,0)';

// context.fill();

// canvas.onclick = function(event){
    
//     context.stroke();
//     console.log('S');
// }

// canvas.onmousemove = function(event){
//     pointerX=event.pageX;
//     pointerY=event.pageY;
//     console.log(pointerX +','+pointerY);
//     context.lineTo(pointerX,pointerY);
// }

// canvas.onmousedown = function(event){
//     pointerX=event.pageX;
//     pointerY=event.pageY;
//     context.beginPath();
//     context.moveTo(pointerX,pointerY);
//     console.log('ss');
// }

// download.addEventListener('click', function() {
//     console.log(canvas.toDataURL());
//     const link = document.createElement('img');
//     let url = canvas.toDataURL();
//     let imagem = {id: 1 ,link:url};
//     window.localStorage.setItem('imagem',JSON.stringify(imagem));
//   });
