const url = "https://api.frankfurter.dev/v1/latest?symbols=CHF,GBP";

const xhr = new XMLHttpRequest;

function onRequestHandler(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.response)
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', `${url}/users`)
xhr.send();