const prompt = require('prompt-sync')();

const sabores = ['Baunilha', 'Chocolate', 'Morango', 'Menta', 'Coco', 'Limão'];

function escolherSabores() {
    let saboresEscolhidos = [];
    let continuar = true;

    while (continuar) {
        console.log("Escolha um sabor da lista abaixo:");
        sabores.forEach((sabor, index) => {
            console.log(`${index + 1}. ${sabor}`);
        });

        let escolha = parseInt(prompt("Digite o número do sabor desejado: ")) - 1;

        if (escolha >= 0 && escolha < sabores.length) {
            if (!saboresEscolhidos.includes(sabores[escolha])) {
                saboresEscolhidos.push(sabores[escolha]);
                console.log(`Sabor ${sabores[escolha]} adicionado ao pedido.`);
            } else {
                console.log("Esse sabor já foi selecionado. Escolha outro.");
            }

            let mais = prompt("Deseja escolher mais um sabor? (sim/não): ").toLowerCase();
            if (mais !== 'sim') {
                continuar = false;
            }
        } else {
            console.log("Opção inválida. Tente novamente.");
        }
    }

    if (saboresEscolhidos.length > 0) {
        console.log(`Você escolheu os seguintes sabores: ${saboresEscolhidos.join(', ')}`);
    } else {
        console.log("Nenhum sabor foi selecionado.");
    }

    return saboresEscolhidos;
}

let resultado = escolherSabores();
console.log("Sabores escolhidos pelo usuário:", resultado);
