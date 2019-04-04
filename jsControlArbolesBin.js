let newArbol = new arbolBinario()
document.getElementById('boton').addEventListener('click', function(){
    let dato = document.getElementById('dato').value
    dato = parseInt(dato)
    let newNodo = new Nodo(dato)
    
    newArbol.agregar(newNodo)
})
document.getElementById('InO').addEventListener('click', function(){
    
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = newArbol.inO() 
})
