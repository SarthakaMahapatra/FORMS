function validate(){
    if (document.myform2.name.value == ""){
        alert("Please Enter Teacher Name!!! ");
        document.myform2.name.focus();
        return false;
    }
    if (document.myform2.num.value == ""){
        alert("Please Enter Your Contact No.!!!");
        document.myform2.num.focus();
        return false;
    }
    if (document.myform2.mail.value == ""){
        alert("Please Enter Your Maild ID!!!");
        document.myform2.mail.focus();
        return false;
    }
    if (document.myform2.des.value == ""){
        alert("Please Enter Your Designation!!!");
        document.myform2.des.focus();
        return false;
    }
    if (document.myform2.cat.value == ""){
        alert("Please Enter Your Category!!!");
        document.myform2.cat.focus();
        return false;
    }
    if (document.myform2.sub.value == ""){
        alert("Please Enter Your Subject Specialization!!!");
        document.myform2.sub.focus();
        return false;
    }
    if (document.myform2.qua.value == ""){
        alert("Please Enter Your Qualification!!!");
        document.myform2.qua.focus();
        return false;
    }
    return true;
}