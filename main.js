let ain = document.getElementById('one');
let bin = document.getElementById('two');
let cin = document.getElementById('three');
let alert = document.getElementById('alertNew');
let button = document.getElementById('sendBtn');

ain.addEventListener('focusout', validacion);
bin.addEventListener('focusout', validacion);
cin.addEventListener('focusout', validacion);

button.addEventListener('click', () => {

    let text = '';

    let ainval = ain.value;
    let binval = bin.value;
    let cinval = cin.value;

    let a = Number(ainval);
    let b = Number(binval);
    let c = Number(cinval);

    if (a > b) {

        if (a > c) {
            // a es mayor
            text = `<div class = "alert alert-primary mt-3">
                    <strong> El numero mayor es ${a}</strong> 
                    </div>`
        } else {
            // c es mayor
            text = `<div class = "alert alert-primary mt-3">
                    <strong> El numero mayor es ${c}</strong> 
                    </div>`
        }

    } else if (b > c) {
        // b es mayor
        text = `<div class = "alert alert-primary mt-3">
                <strong> El numero mayor es ${b} </strong> 
                </div>`
    } else {
        // c es mayor
        text = `<div class = "alert alert-primary mt-3">
                <strong> El numero mayor es ${c}</strong> 
                </div>`
    }

    alert.innerHTML = text;

});

function validacion(e) {

    let targeted = Number(e.target.value);

    if (isNaN(targeted)) {
        
        alert.innerHTML = `<div class = "alert alert-danger mt-3">
        <strong> Solo se permiten numeros</strong> 
        </div>`;
        e.target.value = "";
        e.target.focus();

    } else {
        alert.innerHTML = `<div class = "alert alert-success mt-3">
        <strong> Numero Aceptado</strong> 
        </div>`;
    }

}