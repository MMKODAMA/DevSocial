function logout(){

    
    localStorage.removeItem('Session');
    localStorage.removeItem('Token');
    location.href='disconnect.html';
}
function login(){
    location.href='login.html';
}