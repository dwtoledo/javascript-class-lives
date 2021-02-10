export default function gerarNumeroEntre(min, max) {
    const aleatorio = Math.random()
    const diferenca = (max + 1) - min
    return Math.floor(aleatorio * diferenca + min)
}