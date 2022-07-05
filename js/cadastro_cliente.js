let indexEdit = 0;

function Save() {
    let maisLinha = "";

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;

    let _clientes = new Clientes(0, nome, cpf);
    _clientes.saveCliente();

    maisLinha += "<tr id='linha" + _clientes.lastId + "'>";
    maisLinha += "<td>" + _clientes.lastId + "</td>";
    maisLinha += "<td>" + nome + "</td>";
    maisLinha += "<td>" + cpf + "</td>";    
    maisLinha += "<td><img class='editar' style='cursor: pointer;' src='images/editar.png' onclick='editarLinha(" + 0 + ");' /> <img src='images/lixeira.png' style='cursor: pointer;' onclick='removerLinha(" + 0 + ");' /></td>";
    maisLinha += "</tr>";

    const linha = document.getElementById("dados");
    linha.innerHTML += maisLinha;

    document.getElementById("nome").value ="";
    document.getElementById("cpf").value = "";
}

function removerLinha(index) {
    let _clientes = new Clientes(index);
    _clientes.removeCliente();

    const linha = document.getElementById("linha" + index);
    linha.innerHTML = "";
}

function editarLinha(index) {
    indexEdit = index;

    document.getElementById("btnSalvar").style.display = "none";
    document.getElementById("btnEditar").style.display = "block";

    for (let i = 0; i < arr.length; i++) {
        if (indexEdit == i) {
            document.getElementById("nome").value = arr[i][1];
            document.getElementById("cpf").value = arr[i][2];
        }
    }       

    console.log(arr);
}

function Edit() {
    let maisLinha = "";

    const dados = document.getElementById("dados");
    dados.innerHTML = ""; 
   
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == indexEdit) {
            console.log("menor")
            maisLinha += "<tr id='linha" + indexEdit + "'>";
            maisLinha += "<td>" + indexEdit + "</td>";
            maisLinha += "<td>" + nome + "</td>";
            maisLinha += "<td>" + cpf + "</td>";    
            maisLinha += "<td><img class='editar' style='cursor: pointer;' src='images/editar.png' onclick='editarLinha(" + indexEdit + ");' /> <img src='images/lixeira.png' style='cursor: pointer;' onclick='removerLinha(" + indexEdit + ");' /></td>";
            maisLinha += "</tr>";
        } else {
            console.log("maior")
            maisLinha += "<tr id='linha" + arr[i][0] + "'>";
            maisLinha += "<td>" + arr[i][0] + "</td>";
            maisLinha += "<td>" + arr[i][1] + "</td>";
            maisLinha += "<td>" + arr[i][2] + "</td>";    
            maisLinha += "<td><img class='editar' style='cursor: pointer;' src='images/editar.png' onclick='editarLinha(" + arr[i][0] + ");' /> <img src='images/lixeira.png' style='cursor: pointer;' onclick='removerLinha(" + arr[i][0] + ");' /></td>";
            maisLinha += "</tr>";
        }
    }

    arr.splice(indexEdit, 1);
    arr.push([indexEdit, nome, cpf]);

    const linha = document.getElementById("dados");
    linha.innerHTML += maisLinha;

    console.log(arr);

    document.getElementById("nome").value ="";
    document.getElementById("cpf").value = "";

    document.getElementById("btnSalvar").style.display = "block";
    document.getElementById("btnEditar").style.display = "none";
}