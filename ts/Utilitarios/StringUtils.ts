import gerarNumeroEntre from "./NumeroUtils.js"

export default function gerarChavePix(mascara: string) : string {

    let chave = ''
    for (let index = 0; index < mascara.length; index++) {
        const caracterMascara = mascara[index]
        switch (caracterMascara) {
            case 'L':
                chave += gerarLetra().toUpperCase()
                break
            case 'l':
                chave += gerarLetra().toLowerCase()
                break   
            case 'N':
                chave += gerarNumeroEntre(0, 9)
                break
            default:
                chave += caracterMascara
                break
        }
    }
    return chave
}

function gerarLetra() : string {

    const letra = String.fromCharCode(gerarNumeroEntre(65, 90))
    const IsLetraMaiscula = gerarNumeroEntre(0, 1)
    return IsLetraMaiscula ? letra.toUpperCase() : letra.toLowerCase()
}

