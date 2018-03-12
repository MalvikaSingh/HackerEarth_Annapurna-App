function check(){
    if(document.getElementById("c1").checked == true){
        alert("Include iron rich food like beetroot, jaggery! Take care!");
        if( document.getElementById("r12")==true)
        document.location.href="Nagpur.html";
        else
        document.location.href="Nagpur_v.html";
    }
    ///////////////////COLD /////////////////////////////
    if(document.getElementById("c11").checked == true){
        alert("Include Vitamin C rich food like Oranges and have honey, Honey! Take care!");
        if( document.getElementById("r12")==true)
        document.location.href="Nagpur.html";
        else
        document.location.href="Nagpur_v.html";
    }
    /////////////////////LOOSE MOTION///////////////////////////////////
    if(document.getElementById("c13").checked == true){
        alert("Include light meals like curd-rice and drink water and juices! Take care!");
        if( document.getElementById("r12")==true)
        document.location.href="Mumbai.html";
        else
        document.location.href="Mumbai_n.html";
    }
  //////////////////// SUNSTROKE ///////////////////////////// 
  if(document.getElementById("c15").checked == true){
    alert("Include cool, natural drinks like water and juices! Take care!");
    document.location.href="Nashik.html";
}    
    /////////////////////Diabetes///////////////////////////////////
    if(document.getElementById("c2").checked == true){
        alert("Have less of sugary and proceesed foods. Natural sugar intake through fruits. Take care!");
        if(document.getElementById("r12")==true)
        document.location.href="Nashik_n.html";
        else
        document.location.href="Nashik.html";
    }
    ////////////////////None////////////////////////////////
    if(document.getElementById("c3").checked == true){
        document.location.href="Bhandara.html";
    } 
}
