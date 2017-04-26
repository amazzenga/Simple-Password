//type checkString below
function checkString(str){
    if(str.length >= 8 && str.length < 20){
        return str;
    }
    else{
        throw new Error("Password is the wrong length.");
    }
}

//type getString below
function getString(str){
    try{
        str = checkString(str);
    }
    catch(e){
        console.log(e.message);
        getString(password);
    }
}
getString("uihawkeyes")
