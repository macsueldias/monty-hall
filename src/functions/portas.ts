import PortaModel from "../model/porta";

export function CriarPortas(qtde: number, portaComPresente : number): PortaModel[] {
    return Array.from({length: qtde}, (_, i) => {
        const numero = i + 1
        const temPresente = numero === portaComPresente
        return new PortaModel(numero, temPresente)
    })
}

export function AtualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero

        if(igualAModificada) {
            return portaModificada
        } else {
            return portaModificada.aberta ? portaAtual : portaAtual.desSelecionar()
        }
    })
}