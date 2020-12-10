function validateForm(){
	var fname = document.forms["myform"]["fname"].value;
	var lname = document.forms["myform"]["lname"].value;
	var email = document.forms["myform"]["email"].value;
	// var gender = document.forms["myform"]["gender"].value;
	var feedback = document.forms["myform"]["feedback"].value;
    var strUser = document.getElementById("car").value;
    // var strUser = e.options[e.selectedIndex].value;

	console.log(strUser);
	// alert('j');

	if (fname=="") {
        document.getElementById('error-fname').innerHTML = " Please Enter Your First Name *"
    }
    if (lname=="") {
        document.getElementById('error-lname').innerHTML = " Please Enter Your Last Name *"
    }
    if (email=="") {
        document.getElementById('error-email').innerHTML = " Please Enter Your Email *";
    }
    // if (gender=="") {
    //     document.getElementsByName('error-phone').innerHTML = " Please Select Your Gender *";      
    // }
    // if(strUser.selectedIndex==0){
    //      document.getElementById('error-email').innerHTML = " Please Select Valid Value *";
    // }
    if (feedback=="") {
        document.getElementById('error-feedback').innerHTML = " Please Enter Your Feedback *";
    }          
    if(fname=="" || lname==""|| email=="" || feedback=="" || strUser=="0"){
        alert("Please Enter the Value");
       	return false;

    }else{
    	alert('Thanks We will Contact You Soon');
    }      
}

// function Validate()
// {
// var e = document.getElementById("car");
// var strUser = e.options[e.selectedIndex].value;
// // var strUser1 = e.options[e.selectedIndex].text;
// if(strUser=="")
// {
// alert("Please select a user");
// }
// }