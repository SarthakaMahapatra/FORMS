function validate(){
    if (document.myform4.sub.value == ""){
        alert("Please Enter Your Subject Name!!!");
        document.myform4.sub.focus();
        return false;
    }
    if (document.myform4.cls.value == ""){
        alert("Please Enter Your Class Name!!!");
        document.myform4.cls.focus();
        return false;
    }
    if (document.myform4.cat.value == ""){
        alert("Please Enter the Category!!!");
        document.myform4.cat.focus();
        return false;
    }
    if (document.myform4.cre.value == ""){
        alert("Please Enter the Credits!!!");
        document.myform4.cre.focus();
        return false;
    }
    return true;
}