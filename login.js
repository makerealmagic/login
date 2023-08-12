function main(){
    var uname = login.uname.value;
    var pwd = login.pwd.value;
    if(uname == ""){
        alert("please enter the username");
        return false;
    }
    if(pwd == ""){
        alert("please enter the password");
        return false;
    }
    return true;
}
