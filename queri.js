var amburger = window.document.getElementById("i")
var menus = window.document.getElementById("manu")



amburger.style.color = "#FF2A67"

function tela (){
    if (window.innerWidth >= 993){
         menus.style.display = "block"
    }else{
        menus.style.display = "none"
    }
}


function menu() {
    if ( menus.style.display == "none"){
         menus.style.transition = '2s'
         menus.style.display = "block"
        
    }else{
         menus.style.transition = '2s'
         menus.style.display = "none"
       
    }
   
       
}