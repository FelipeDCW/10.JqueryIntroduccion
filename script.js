let titulo1 = document.querySelector(`#tituloVainillla`)
titulo1.addEventListener(`click`,function(){
    titulo1.style.backgroundColor=`red`
    
})

let titulo2 =  $(`#tituloJquery`)

titulo2.click(function(){
    titulo2.css("background-color", "green")
})

$(`#mostrar`).on(`click`,function(){
    $(`#tituloJquery`).show() /* mostrar el elemento */
})

$(`#Ocultar`).on(`click`,function(){
    $(`#tituloJquery`).hide() /* ocultar el elemento */
})

$(`#mostrarOcultar`).on(`click`,function(){
    $(`#tituloJquery`).toggle() /* ocultar o mostrar el elemento */
})

let arreglojq = $(`.hola`)
console.log(arreglojq)
for (let i=0; i < arreglojq.length;i++){
    console.log(arreglojq[i])
}

let arregloselectorall = document.querySelectorAll(`.hola`)

arregloselectorall.forEach(function(indice) {
    console.log(indice)
});

