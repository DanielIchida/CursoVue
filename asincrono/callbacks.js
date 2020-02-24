function foo(array){
    var sum = 0
    for(var i = 0 ; i < array.length ; i++){
        alert(array[i])
        sum += array[i]
    }
    return sum;
}

[1,2,3].map(function double(x){
    return 2 * x
})

//TODO A menudo, cuando utiliza una devolución de llamada, desea acceder a un contexto específico.
function SomeClas(msg,elem){
    this.msg = msg
    elem.addEventListener('click',function(){
        console.log(this.msg);
    })
}

var s = new SomeClas('hello',someElement)


