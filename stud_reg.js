function validate() {
    if (document.myform.roll.value == "") {
        alert("Please Enter Your ROLL NO.!!");
        document.myform.roll.focus();
        return false;
    }
    if (document.myform.name.value == ""){
        alert("Please Enter Your NAME!!");
        document.myform.name.focus();
        return false;
    }
    if (document.myform.add.value == ""){
        alert("Please Enter Your ADDRESS!!");
        document.myform.add.focus();
        return false;
    }
    if (document.myform.con.value == ""){
        alert("Please Enter Your CONTACT NO.!!");
        document.myform.con.focus();
        return false;
    }
    if (document.myform.cls.value == ""){
        alert("Please Enter Your CLASS!!");
        document.myform.cls.focus();
        return false;
    }
    if (document.myform.mail.value == ""){
        alert("Please Enter Your MAIL ID!!");
        document.myform.mail.focus();
        return false;
    }
    if (document.myform.male.value == ""){
        alert("Please Enter Your GENDER!!");
        document.myform.male.focus();
        return false;
    }
    if (document.myform.female.value == ""){
        alert("Please Enter Your GENDER!!");
        document.myform.female.focus();
        return false;
    }
    return true;
}
