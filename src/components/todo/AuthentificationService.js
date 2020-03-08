class AuthentificationService {

registerSuccessfulLogin(username,password){
    console.log("registered successfully");
    sessionStorage.setItem('authenticatedUser', username);
}
logout(){
    sessionStorage.removeItem('authenticatedUser');
}
}

export default new AuthentificationService() //new instance of the class AuthentificationService