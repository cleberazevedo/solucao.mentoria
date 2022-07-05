let arrayCliente = [];
let lastId = null;

class Clientes {    
    constructor(id, nome, cpf) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
    }

    async saveCliente() {
        let retorna_index = await this.getIndex(arrayCliente);
        console.log(retorna_index);
                
        arrayCliente.push([
            Number(retorna_index),
            this.nome,
            this.cpf
        ]);

        return this;
    }

    removeCliente() {
        arrayCliente.splice(this.id);
    }

    async getIndex(arr) {
        for (let i = 0; i <= arr.length; i++) {
            lastId = i;
        }
        
        return lastId;
    }
}