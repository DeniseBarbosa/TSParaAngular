//tipos primitivos: boolean, number, string
let ligado:boolean = false;
let nome: string = "Denise";

let idade: number = 20;
let altura: number = 1.7;

// tipos especiais > null, undefined
let nulo : null = null;
let indefinido: undefined = undefined;

//tipos> abragentes: any, void
let retorno:void
//aceita qualquer coisa > pode retornar qualquer coisa > um objeto, nulo, texto ou vazio
let retornoView:any = "s"

//objeto >obs: não é uma boa prática passa objetos dessa maneira;
let produto:object = {
    nome:"Denise",
    cidade:"SP",
    idade: 20,
};
//objeto totalmente tipado dinamico > mais recomendado a usar
type ProdutoLoja ={
    nome:string;
    preco:number;
    unidades:number;
}
let meuProduto: ProdutoLoja ={
    nome:"Tenis",
    preco: 89.99,
    unidades: 1,
};
// arrays > existe 2 maneiras de declaração
//1° pode ser feia assim
let dados: string[] = ["felipe", "ana", "adriana"];
//2° pode ser feita assim
let dados2: Array<string> = ["felipe", "ana", "adriana"];

// Trabalhando com Arrays de Multi Types armazena ddois tipos diferentes> porem não aceita boleano
let infos: (string | number)[]=["Denise", 2, "Prinsloo"];

// Trabalhando com Tuplas > tem que ser feito na exata na ordem que foi definida
//ela é mais inteligente, interessante
let boleto:[string, number, number] = ["agua conta", 95.55, 85.5];

// Trabalhando com Dates
let aniversario: Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString());

// Funções > a diferença do js é que podem ser tipadas ex: x e y
//o retorno é do tipo number 
function addNumero(x: number, y: number){
    return x+y;
}
 function addOla(nome:string): string {
    return `Ola ${nome}`;
 }

//ela obrigatoriamente tem que ser do tipo number
let soma: number = addNumero(7, 8);
console.log(soma);
console.log(addOla("Denise"));

// Funções Multi Tipos
//não é recomendado utilizar any
function ChamarFone(fone:string|number): number | string {
    return fone;
};
console.log(ChamarFone("denise"));

//Funções Async > assicrona > esperar alguma coisa
//vai retornar uma string
async function getBancodados(id:number): Promise<string> {
    return "Denise";
};

// Interfaces e comparação com o type (type x interface)
// a Interface é parecida com o type
// algumas pessoas utiliza interface do que o type
// a interface é utilizada quando vamos trabalhar com class
// iterface é um contrato > tem que seguir o contrato
// readonly > não pode ser alterado vai ser apenas leitura quando iimprir
type robor ={
  readonly  id: number | string;
    nome: string;
    dizerOla(): string;
};
interface robor2{
    id: number,
    nome: string,
};
const rob : robor ={
    id: 1,
    nome: "megaman",
    dizerOla: function (): string {
       return "";
    }
};

console.log((rob.nome="Denise"));
//aqui vai dar um erro no id
//console.log((rob.id=1));


// Quando usar interfaces?
// usar com for utilizar class
class Pessoa implements robor {
    id: string | number;
    nome: string;
    constructor(id: string|number, nome: string) {
        this.id = id;
        this.nome = nome;
    }
    dizerOla(): string {
        return "Denise";
    }
}

const P = new Pessoa(1, "bruxa");
console.log(P.dizerOla());

//class é uma forma para reaproveitar e recriar
class Personagem {
    //private só pode ser acessada por dentro da class
    nome: string;
    forca: number;
    habilidade: number;
    //dica > se o nome é opcional eu não tenho obrigação de passar no construtor
    constructor(forca: number, habilidade: number, nome: string ){
       // this.nome = nome;
        this.forca = forca;
        this.habilidade = habilidade;
        this.nome = nome;
    }
    atacar( ) : void{
        console.log(`Aatcar com ${this.forca} pontos`)
    }
}
//class Personagem > class pai ou super class
//sub-class
//class filha
class Magia extends Personagem{
    PontosMagia: number
    constructor(nome: string, forca: number, habilidade: number, PontosMagia: number){
        //class super
        super(forca, habilidade, nome)
        this.PontosMagia = PontosMagia;
    }
}

const p1 = new Personagem(10, 98, "denise"); 
p1.habilidade = 12;

//modificadores de acesso > Data Modifiers
//public consegue acessar for da class
//private acessar apenas dentro da class
// protected acessar dentro da class e sub-class



// O Problema que o Generics resolve
function ConcatenarArray(...itens:any[]):any[] {
    return new Array().concat(...itens);
}
const numArray = ConcatenarArray([1,6], [8]);
const stgArray = ConcatenarArray(["Dog","Cat"], ["Passarinho","Tamandua"])
numArray.push("naruto");
console.log(numArray);
console.log(stgArray);

// Utilizando Generics na prática > resolver o problema de cima (corrigindo)

// function ConcatenarArray<T>(...itens:T[]):T[] {
//     return new Array().concat(...itens);
// }
// //retornar um vetor de number
// const numArray = ConcatenarArray<Number[]>([1,6], [8]);
// //retornar um vetor de strings
// const stgArray = ConcatenarArray<string[]>(["Dog","Cat"], ["Passarinho","Tamandua"])
// console.log(numArray);
// console.log(stgArray);

// O principio dos decorators
function ExibirNome(alvo:any): any {
    console.log(alvo);
}
//decorar
//para parar de dar erro do @ > lembre-se de habilitar isso no tsconfig.jason > experimentalDecorators
@ExibirNome
class Funcionario{}
@ExibirNome
class Gerente{}

//Criar um decorador mais util 
function VersaoApi(versao:string) {
    return(alvo: any)=>{
        Object.assign(alvo.prototype, {__version: versao, __nome:"Denise"});
    }
}
@VersaoApi("1.10")
class Api{}
const api = new Api();
//console.log(api.__nome);