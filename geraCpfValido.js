class validarCPF {
    constructor(cpf) {
        this.cpf = cpf;
    }

    get getCPf() {
        return this.cpf;
    }

    inicia() {
        return this.calculo();
    }

    formatarNumeroCPF(array) {
        let numeroCPFLimpo = array
            .filter((n) => !(n == "." || n == "-"))
            .map((n) => Number(n));

        return numeroCPFLimpo.slice(0, 9)
    }

    calculo(array) {
        let arrayEntrada = [...this.formatarNumeroCPF(array)]
        let iterator = arrayEntrada.length + 1

        let digitoUm = arrayEntrada.reduce((acc, element) => {
            acc += element * iterator
            iterator--
            return acc
        }, 0)
        digitoUm = (11 - (digitoUm % 11))

        iterator = arrayEntrada.length + 2

        let digitoDois = [...arrayEntrada, digitoUm].reduce((acc, element) => {
            acc += element * iterator
            iterator--
            return acc
        }, 0)
        digitoDois = (11 - (digitoDois % 11))

        console.log("Digito 1 : " + digitoUm +
            "\nDigito 2 : " + digitoDois +
            "\nresultado : " + `${array},${digitoUm},${digitoDois}`)
        return [...array, digitoUm, digitoDois]

    }
}

class geraCPF extends validarCPF {
    constructor() {
        super()
        this.min = 99999999;
        this.max = 999999999;
    }

    get gerar() {
        return this.formatar
    }

    get noveDigitos() {
        let fator = this.max - this.min
        const numero = Math.floor(Math.random() * fator + this.min);

        const numerosCPF = Array
            .from(numero.toString())
            .map(numero => Number(numero))

        return numerosCPF
    }

    get formatar() {
        let result = this.calculo(this.noveDigitos)
        let unir1 = result.slice(0, 3).concat('.', result.slice(3, 6), '.', result.slice(6, 9), '-', result.slice(9, 12))
        return unir1.join("")
    }
}

const cpf = new geraCPF();
console.log(cpf.gerar);