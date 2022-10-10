var dobInput = document.getElementById("editDob");
var date = new Date(dobInput.getAttribute("data-value"));
var d = date.getDate();
var m = date.getMonth();
m += 1;
var y = date.getFullYear();
dobInput.innerText = d + "-" + m + "-" + y;