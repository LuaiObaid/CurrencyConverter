var sel = document.querySelectorAll(".cur"),
  inp = document.getElementById("inp"),
  outP = document.getElementById("outP");



const host = "api.frankfurter.app";
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries = Object.entries(data)
    for (let i = 0; i < entries.length; i++) {
        sel[0].innerHTML += `<option value = ${entries[i][0]}>${entries[i][0]}</option>`;
        sel[1].innerHTML += `<option value = ${entries[i][0]}>${entries[i][0]}</option>`;
        
    }
  });
function converter(){
    var inputCurrency = inp.value;
    if(sel[0].value != sel[1].value){
       const host = "api.frankfurter.app";
       fetch(`https://${host}/latest?amount=${inputCurrency}&from=${sel[1].value}&to=${sel[0].value}`)
         .then((val) => val.json())
         .then((val) => {
           outP.value = Object.values(val.rates)[0]
         });
    }else{
        alert("please select two different currency");
    }
}