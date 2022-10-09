var dobInput = document.getElementById("dobInput");
var dobInputValue = document.getElementById("dobInputValue");
var date = new Date(dobInput.getAttribute("data-value"));
var d = date.getDate();
var m = date.getMonth();
m += 1;
var y = date.getFullYear();
console.log(d + "-" + m + "-" + y);
dobInputValue.innerHTML = d + "-" + m + "-" + y;