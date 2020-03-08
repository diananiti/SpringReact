class AuthentificationService {

registerSuccessfulLogin(username,password){
    console.log("registered successfully");
    sessionStorage.setItem('authenticatedUser', username);
}
logout(){
    sessionStorage.removeItem('authenticatedUser');
}
//check if the user sccesfully login or not

isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticatedUser');
    if(user===null)return false;
    return true;
    //i will use this true/false to enable/disable the link
}

}

export default new AuthentificationService() //new instance of the class AuthentificationService