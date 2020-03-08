class AuthentificationService {

registerSuccessfulLogin(username,password){
    console.log("registered successfully");
    sessionStorage.setItem('authenticatedUser', username);
}

}

export default new AuthentificationService() //new instance of the class AuthentificationService