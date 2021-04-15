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

    get formatarNumeroCPF() {
        let numeroCPF = Array.from(this.getCPf);
        let numeroCPFLimpo = numeroCPF
            .filter((n) => !(n == "." || n == "-"))
            .map((n) => Number(n));

        return numeroCPFLimpo.slice(0, 9)
    }

    calculo() {
        let iterator = this.formatarNumeroCPF.length + 1

        let digitoUm = this.formatarNumeroCPF.reduce((acc, element) => {
            acc += element * iterator
            iterator--
            return acc
        }, 0)
        digitoUm = (11 - (digitoUm % 11))

        iterator = this.formatarNumeroCPF.length + 2

        let digitoDois = [...this.formatarNumeroCPF, digitoUm].reduce((acc, element) => {
            acc += element * iterator
            iterator--
            return acc
        }, 0)
        digitoDois = (11 - (digitoDois % 11))

        console.log("Digito 1 : " + digitoUm + "\nDigito 2 : " + digitoDois)
    }
}

const cpf = new validarCPF("772.682.250-32");
cpf.inicia();