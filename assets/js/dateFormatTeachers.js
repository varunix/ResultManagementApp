var dobValues = document.querySelectorAll(".dobVal");
for(let dobVal of dobValues) {
    let date = new Date(dobVal.dataset.value);
    let d = date.getDate();
    let m = date.getMonth();
    m += 1;
    let y = date.getFullYear();
    console.log(d + "-" + m + "-" + y);
    dobVal.innerHTML = d + "-" + m + "-" + y;
}