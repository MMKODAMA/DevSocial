if (sessionStorage.getItem("Token") == null) {

  alert('Voce precisa estar logado');
  location.href = "login.html";

}

function openCanvas(){
  let canvasSection = document.getElementById('canvasSection');
  let canvasBG = document.getElementById('canvasBG');
  canvasBG.style.display="block";
  canvasSection.style.display='block';
}

let caixaDeTexto = document.getElementById('textfield');
let timeLine = document.getElementById('posts');

function upload() {
  let arquivo = document.getElementById('file');
  arquivo.click();

  arquivo.onchange = function () {
    let file = document.getElementById('file').files[0];
    let type = file.name.split('.')[1];
    base64(file, type);
  }
}

function publicar() {
  
  let inputFile = document.getElementById('file');
  let img = document.getElementById('imagem');
  let video = document.getElementById('video');
  let audio = document.getElementById('audio');
  if(caixaDeTexto.value.trim().length > 0 || audio.style.display != 'none' || video.style.display != 'none'|| img.style.display != 'none'){
    let file = '';
  let type = 'text';
  if (img.style.display == 'block') {
    file = img.src;
    type = 'img';
  } else if (video.style.display == 'block') {
    file = video.src;
    type = 'video';
  } else if (audio.style.display == 'block') {
    file = audio.src;
    type = 'audio';
  }
  let geo;
  let session = JSON.parse(sessionStorage.getItem('Session'));
  let posts = JSON.parse(localStorage.getItem('Posts')) || [];
  posts.push({
    user: session.nome,
    textContent: caixaDeTexto.value.trim(),
    mediaContent: file,
    mediaType: type,
    local: session.local
  });
  localStorage.setItem('Posts', JSON.stringify(posts));
  caixaDeTexto.value = '';
  img.style.display = "none";
  img.src = "";
  video.style.display = "none";
  img.src = "";
  audio.style.display = "none";
  img.src = "";
  inputFile.src='';
  window.location.reload();
  }else{
    alert("Seu post esta vazio");
    caixaDeTexto.value='';

  }
  

}
function carregarPosts() {
  let posts = JSON.parse(localStorage.getItem('Posts')) || [];
  let feed = '';
  timeLine.innerHTML = '';

  
  for(let i = posts.length-1; i >=0; i--){
    if (posts[i].mediaType == 'text') {
      timeLine.innerHTML += `  
      <div class="poster"> 
      <div class="header"> 
        <div class="text"> 
          <p>${posts[i].user} </p> 
          <p>${posts[i].local}</p>
        </div> 
      </div> 
      <div class="content"> 
        <p>${posts[i].textContent}</p> 
      </div> 
  </div>`;
    } else if (posts[i].mediaType == 'img') {
      timeLine.innerHTML += `  
      <div class="poster2"> 
        <div class="header"> 
          <div class="text"> 
            <p>${posts[i].user} </p> 
            <p>${posts[i].local}</p>
          </div> 
        </div> 
      <div class="content2"> 
        <p>${posts[i].textContent}</p> 
        <img src="${posts[i].mediaContent}" class="feedContent">
      </div> 
      </div>`;
    } else if (posts[i].mediaType == 'video') {
      timeLine.innerHTML += `  
      <div class="poster2"> 
      <div class="header"> 
        <div class="text"> 
          <p>${posts[i].user} </p> 
          <p>${posts[i].local}</p>
        </div> 
      </div> 
      <div class="content2"> 
        <p>${posts[i].textContent}</p> 
        <video src="${posts[i].mediaContent}" class="feedContent" controls></video>
      </div> 
  </div>`;
    } else if (posts[i].mediaType == 'audio') {
      timeLine.innerHTML += `  
      <div class="poster"> 
      <div class="header"> 
        <div class="text"> 
          <p>${posts[i].user} </p> 
          <p>${posts[i].local}</p>
        </div> 
      </div> 
      <div class="content"> 
        <p>${posts[i].textContent}</p> 
        <audio src="${posts[i].mediaContent}" class="feedContent"controls style="height:50px"></audio>
      </div> 
  </div>`;
    }
  }

}

function base64(file, type) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function () {
    if (type == 'jpg' || type == 'png') {
      console.log(reader.result);
      document.getElementById('imagem').src = reader.result;
      document.getElementById('imagem').style.display = 'block';
    }
    if (type == 'mp4') {
      document.getElementById('video').src = reader.result;
      document.getElementById('video').style.display = 'block';
      document.getElementById('video').style.height = '100px';
      document.getElementById('video').style.width = '100px';
    }
    if (type == 'mp3') {
      document.getElementById('audio').src = reader.result;
      document.getElementById('audio').style.display = 'block';
    }
  }
}

carregarPosts();