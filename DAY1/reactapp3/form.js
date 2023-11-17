/*function clickEvent(){
    var name=document.getElementById("name").value ;
    document.write("hi "+name);
}*/
function clickEvent(){
    var first=parseInt(document.getElementById("num1").value);
    var second=parseInt(document.getElementById("num2").value);

    if(first>second){
    document.write(first +" is larger than "+second);
     }
     else{
    document.write(second +" is larger than "+first);
     }
}
