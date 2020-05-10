/*if(screen.width < 400 || screen.height > 10){
    document.getElementById('navbar').style.backgroundColor="rgba(0,0,0,0)";
}*/


window.addEventListener('scroll', scrollFunction2);

if(screen.width < 400 || screen.height > 10){
    function scrollFunction2() {
    document.getElementById('navbar').style.backgroundColor="rgba(0,0,0,0)";
    }
}else if(screen.width > 400 || screen.height > 10){

function scrollFunction2() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.85)";
  }else{
    document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0)";
  }
}

}



/*function removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}
 
removejscssfile("meniu.js", "js") //remove all occurences of "somescript.js" on page*/
