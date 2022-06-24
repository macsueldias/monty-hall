export default class PortaModel {
    numero: number
    temPresente: boolean
    selecionada: boolean
    aberta: boolean

    constructor(numero: number, temPresente = false, selecionada = false, aberta = false) {
        this.numero = numero 
        this.temPresente = temPresente
        this.selecionada = selecionada
        this.aberta = aberta
    }
    get Numero() {
        return this.numero
    }

    get TemPresente() {
        return this.temPresente
    }

    get Selecionada() {
        return this.selecionada
    }

    get Aberta() {
        return this.aberta
    }

    get fechada() {
        return !this.aberta
    }

    desSelecionar() {
        const desselecionada = false
        return new PortaModel(this.numero, this.temPresente, desselecionada, this.aberta)
    }

    alternarSelecao() {
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir() {
        const aberta = true
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
    }
}