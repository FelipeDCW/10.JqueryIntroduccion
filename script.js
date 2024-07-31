let titulo1 = document.querySelector(`#tituloVainillla`)
titulo1.addEventListener(`click`,function(){
    titulo1.style.backgroundColor=`red`
    
})

let titulo2 =  $(`#tituloJquery`)

titulo2.click(function(){
    titulo2.css("background-color", "green")
})

$(`#mostrar`).on(`click`,function(){
    $(`#tituloJquery`).show()
})

$(`#Ocultar`).on(`click`,function(){
    $(`#tituloJquery`).hide()
})

$(`#mostrarOcultar`).on(`click`,function(){
    $(`#tituloJquery`).toggle()
})
