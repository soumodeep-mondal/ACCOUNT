var myVar;

function loader(){
    myVar = setTimeout(hiding, 6000);
    myVar = setTimeout(showPage,6000);
}

function showPage(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

function hiding(){
    document.getElementById("loader").style.animation = "fadeout 5s ease";
    document.getElementById("myDiv").style.animation = "fadein 5s ease";
}