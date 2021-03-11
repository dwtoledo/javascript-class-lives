export default function gerarNumeroEntre(min: number, max: number) : number {

    const aleatorio = Math.random()
    const diferenca = (max + 1) - min
    return Math.floor(aleatorio * diferenca + min)
}