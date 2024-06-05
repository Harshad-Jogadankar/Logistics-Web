function empty()
{
var a = document.getElementById('name');
var b = document.getElementById('email');
var c = document.getElementById('contactno');
var d = document.getElementById('address');
var e = document.getElementById('queries');
if(a.value != "" && b.value != "" && c.value != "" && d.value != "" && e.value != "" )
    alert("Entry Received Succesfully"  )
else
alert("Please Enter the details")	
}