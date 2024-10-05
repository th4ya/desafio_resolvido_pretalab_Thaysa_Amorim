/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/ 

// Função principal
function calcularmedalhas() {
    const paises = [];
    const totalmedalhas = [];

    while (true) {
        const pais = prompt("Digite o nome do país (ou 'sair' para terminar):");
       
        if (pais.toLowerCase() === "sair") {
            break;
        }

        let ouro = parseFloat(prompt(`Digite quantas medalhas de ouro ${pais} conquistou:`));
        let prata = parseFloat(prompt(`Digite quantas medalhas de prata ${pais} conquistou:`));
        let bronze = parseFloat(prompt(`Digite quantas medalhas de bronze ${pais} conquistou:`));
       
        if (!isNaN(ouro) && !isNaN(prata) && !isNaN(bronze)) {
            paises.push(pais);
            totalmedalhas.push(ouro + prata + bronze);
          } 
          else {
            alert("Por favor, insira um valor numérico válido para as medalhas.");
          }

        } 
        alert (`Ranking de Medalhas:
        - ${paises[0]} : ${totalmedalhas[0]}
        - ${paises[1]} : ${totalmedalhas[1]}
        - ${paises[2]} : ${totalmedalhas[2]}
        - ${paises[3]} : ${totalmedalhas[3]}
        - ${paises[4]} : ${totalmedalhas[4]}`)
    }
   
    calcularmedalhas();
