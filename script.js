// Selecionando os filhos

// $("#lista1 > .item2").hide()

/*
let lista1 = $("#lista1");
lista1.find(".item2").hide()
*/
// lista1.children()


/* Encadeamento

let jq = $("#lista1").slideUp(2000).slideDown(1000)
                                   .fadeOut(3000)

console.log(jq)
*/
/*
let objeto = {
    print10: function(){
        console.log(10);
        return this;
    },
    print20: function(){
        console.log(20);
        return this;
    }
}

objeto.print10().print20().print10().print20()
*/

/* Lendo o conteudo de um elemento

console.log($("#lista1").html())
console.log($("#novo").val())
console.log($("#novo").attr("name"))
*/

/* Modificando o conteúdo e características dos elementos

console.log($("h1").text("Lista de compras"))
console.log($("#lista1").find(".item2").html("Novo item"))
console.log($("#lista1").html("<li> Novo item 1 </li> <li> Novo item 2 </li>"))
console.log($("#novo").val("Arroz"))
console.log($("#novo").attr("name", "Item de compra"))
*/


/* Selecionando Elementos por atributos

console.log($("[key = 2]").remove())
*/


/* Removendo elementos

$("li").remove(".item2, .item4")
$("#lista1").remove()
$("#lista1").empty()
*/

/* Inserindo elementos

 let lista1 = $("#lista1")

 lista1.append("<li>Novo teste</li>")
 lista1.prepend("<li>Novo teste</li>")
 lista1.after("<li>Novo teste</li>")
 lista1.before("<li>Novo teste</li>")

let rect = $(".rect")
rect.append("Novo teste")
*/


/* Modificando o CSS

setTimeout(() =>{
    $("h1").addClass("bg-blue")
},1000)

setTimeout(() =>{
    $("h1").removeClass("bg-blue")
},4000)

setTimeout(() =>{
    $("h1").toggleClass("bg-blue")
},1000)

setTimeout(() =>{
    $("h1").toggleClass("bg-blue")
},4000)

setInterval(() =>{
    $("h1").toggleClass("bg-blue")
},1000)

$("h1").toggleClass("bg-blue")
console.log($("h1").css({"font-size":"50px",
                         "background-color":"red"}))
*/



/* Dimensões


let box = $(".box")

box.width(600)

box.append("largura: ", box.width(), "<br>",
    "largura + padding: ", box.innerWidth(), "<br>",
    "largura + padding + borda: ", box.outerWidth(), "<br>",
    "largura + padding + borda + margem: ", box.outerWidth(true))
*/