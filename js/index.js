if (localStorage.getItem("Token") == null) {

  alert('Voce precisa estar logado');
  location.href = "login.html";

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
  let session = JSON.parse(localStorage.getItem('Session'));
  let posts = JSON.parse(localStorage.getItem('Posts')) || [];
  posts.push({
    user: session.nome,
    textContent: caixaDeTexto.value.trim(),
    mediaContent: file,
    mediaType: type
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
  //carregarPosts();

}
function carregarPosts() {
  let posts = JSON.parse(localStorage.getItem('Posts')) || [];
  let feed = '';
  timeLine.innerHTML = '';

  posts.map((poster) => {
    if (poster.mediaType == 'text') {
      timeLine.innerHTML += `  
      <div class="poster"> 
      <div class="header"> 
        <div class="text"> 
          <p>${poster.user} </p> 
          <p>São Paulo - SP</p>
        </div> 
      </div> 
      <div class="content"> 
        <p>${poster.textContent}</p> 
      </div> 
  </div>`;
    } else if (poster.mediaType == 'img') {
      timeLine.innerHTML += `  
      <div class="poster2"> 
        <div class="header"> 
          <div class="text"> 
            <p>${poster.user} </p> 
            <p>São Paulo - SP</p>
          </div> 
        </div> 
      <div class="content2"> 
        <p>${poster.textContent}</p> 
        <img src="${poster.mediaContent}" class="feedContent">
      </div> 
      </div>`;
    } else if (poster.mediaType == 'video') {
      timeLine.innerHTML += `  
      <div class="poster2"> 
      <div class="header"> 
        <div class="text"> 
          <p>${poster.user} </p> 
          <p>São Paulo - SP</p>
        </div> 
      </div> 
      <div class="content2"> 
        <p>${poster.textContent}</p> 
        <video src="${poster.mediaContent}" class="feedContent" controls></video>
      </div> 
  </div>`;
    } else if (poster.mediaType == 'audio') {
      timeLine.innerHTML += `  
      <div class="poster2"> 
      <div class="header"> 
        <div class="text"> 
          <p>${poster.user} </p> 
          <p>São Paulo - SP</p>
        </div> 
      </div> 
      <div class="content2"> 
        <p>${poster.textContent}</p> 
        <audio src="${poster.mediaContent}" class="feedContent"controls></audio>
      </div> 
  </div>`;
    }

  });

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
    }
    if (type == 'mp3') {
      document.getElementById('audio').src = reader.result;
      document.getElementById('audio').style.display = 'block';
    }
  }
}

carregarPosts();