//import Clientes from '../clientes/clientes.js';

function carregaHTML() {
    // ESCONDE FORMULARIO
    document.getElementById("btnEsconder").style.display = "none";
    document.getElementById("btnEditar").style.display = "none";    
}

function CadastrarNovo() {
    document.getElementById("formulario").style.display = "block";
    document.getElementById("btnEsconder").style.display = "";
}

function EsconderNovo() {
    document.getElementById("btnEsconder").style.display = "none";
    document.getElementById("formulario").style.display = "none";
}