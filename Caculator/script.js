let isResult=false

function clickdisplay(val){
    if(isResult==true){
        cleardis()
    }
    document.getElementById("screen").value+=val
    isResult = false
}
function cleardis(){
    document.getElementById("screen").value=""
}

function result(){
    var text = document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
    isResult=true
}