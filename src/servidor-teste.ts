//configurando um servidor local, para quando for rodar o projeto e salvar ele automaticamente 
//dar um restart
/**
 * 1° passo no terminal digital o seguinte comando > npm install ts-node-dev -D
 * 2° passo no package.jason fazer a seguinte confi dentro do  scripts > "start:dev":"ts-node-dev --respawn --transpile-only src/index.ts",
 * 3° feito isso no terminal digitar o comando > npm rum start:dev
 * ele vai automaticamente reiniciar sem precisar digitar o comando de novo
 */
let servidor: string = "Testando o servidor local";

console.log(servidor);