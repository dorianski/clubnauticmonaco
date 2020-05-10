// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll', scrollFunction2);

function scrollFunction2() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.85)";
  }else{
    document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0)";
  }
}


