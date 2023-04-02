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


