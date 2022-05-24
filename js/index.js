if (localStorage.getItem("Token") == null) {

    alert('Voce precisa estar logado');
      location.href = "login.html";
    
  }

let caixaDeTexto = document.getElementById('textfield');
let timeLine = document.getElementById('posts');


function publicar() {
    let session = JSON.parse(localStorage.getItem('Session'));
    let posts = JSON.parse(localStorage.getItem('Posts')) || [];
    posts.push({
        user: session.nome,
        content: caixaDeTexto.value
    });
    localStorage.setItem('Posts', JSON.stringify(posts));
    caixaDeTexto.value = '';
    carregarPosts();
}
function carregarPosts() {
    let posts = JSON.parse(localStorage.getItem('Posts')) || [];
    let feed = '';
    posts.map((poster) => {
        timeLine.innerHTML += `  
      <div class="poster"> 
      <div class="header"> 
        <div class="text"> 
          <p>${poster.user} </p> 
          <p>São Paulo - SP</p>
        </div> 
      </div> 
      <div class="content"> 
        <p>${poster.content}</p> 
      </div> 
  </div>`;
    });
}
carregarPosts();