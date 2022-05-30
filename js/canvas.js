window.addEventListener("load",()=>{
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    //variables
    
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
