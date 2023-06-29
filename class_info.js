function validate(){
    if (document.myform3.name.value == ""){
        alert("Please Enter Your Class Name!!!");
        document.myform3.name.focus();
        return false;
    }
    if (document.myform3.str.value == ""){
        alert("Please Enter Your Class Strength!!!");
        document.myform3.str.focus();
        return false;
    }
    if (document.myform3.sec.value == ""){
        alert("Please Enter Your Section!!!");
        document.myform3.sec.focus();
        return false;
    }
    if (document.myform3.tea.value == ""){
        alert("Please Enter Your Class Teacher!!!");
        document.myform3.tea.focus();
        return false;
    }
    return true;
}