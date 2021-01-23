
function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar")
}

function redirecionar() {
    // abre em outra aba
    window.open("https://www.google.com/");
    // abre na mesma aba
    window.location.href = "https://www.google.com/";
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
    // document.getElementById(elemento).innerHTML = "Obrigado por passar o mouse";
    // alert("Trocar teste");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    // document.getElementById(elemento).innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Seja bem vindo");
}

function change(elemento) {
    console.log(elemento.value);
}

// function soma(n1, n2) {    
//     return n1 + n2;
// }

// function validaIdade(idade) {
//     var validar;
//     if (idade >= 18) {
//         validar = true;
//     } else {
//         validar = false;
//     }

//     return validar;
// }

// var idade = prompt("Qual sua idade? ");
// console.log(validaIdade(idade));

// alert(soma(5, 7));

// var d = new Date();
// alert(d)
// alert(d.getUTCFullYear())


// var count;
// for (count = 0; count < 5; count++) {
//     console.log(count)    
// };

// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     count = count + 1;
// }

// var idade = prompt("Qual a sua idade?")
// if (idade >= 18) {
//     alert("Maior de idade");
// } else {
//     alert("Menor de idade");
// };

// var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
// console.log(frutas);
// alert(frutas[1].nome)

// var fruta = {nome: "maça", cor: "vermelha"};
// console.log(fruta.nome);
// alert(fruta.cor)


// var lista = ["maçã", "pera", "uva"];

// lista.push("laranja");
// lista.pop()
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(' - '))
// alert(lista[0]);


// var nome = "Diego Mendes";
// var n1 = 36;
// var n2 = 10;
// var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + " anos" );
// alert(idade + idade2)
// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.toUpperCase())
// console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));


