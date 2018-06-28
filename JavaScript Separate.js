window.onload = preparelinks;
function preparelinks(){
    var links =document.getElementsByTagName("a");
    if (var i=0; i<lins.length; i++){
        if(links[i].getAttribute("class") == popUp){
             links[i].onclick = function(){
            popUp(this.getAttribute("href"));
            return false;
          }
        }
    }
}