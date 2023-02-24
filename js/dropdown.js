let content = document.getElementsByClassName("dropdown")[0];
let dropitem = document.getElementsByClassName("dropitem")[0];
let icon = document.getElementsByClassName("fa fa-angle-right")[0]
function myFunction() {
    console.log(content);
    if (document.getElementById("tr1").style.display == "none") {
        document.getElementById("tr1").style.display = "table-row"
        
    } else {
        document.getElementById("tr1").style.display = "none" 
    }
    if(document.getElementById("icon1").classList=="fa fa-angle-right"){
        document.getElementById("icon1").classList = "fa fa-angle-down";
    }else{
        document.getElementById("icon1").classList="fa fa-angle-right"
    }
    
    content.classList.add("box-style");
}

function myFunction2() {
    console.log(content);
    if (document.getElementById("tr2").style.display == "none") {
        document.getElementById("tr2").style.display = "table-row"
        
    } else {
        document.getElementById("tr2").style.display = "none" 
    }
    if(document.getElementById("icon2").classList=="fa fa-angle-right"){
        document.getElementById("icon2").classList = "fa fa-angle-down";
    }else{
        document.getElementById("icon2").classList="fa fa-angle-right"
    }
    
    content.classList.add("box-style");
}

function myFunction3() {
    console.log(content);
    if (document.getElementById("tr3").style.display == "none") {
        document.getElementById("tr3").style.display = "table-row"
        
    } else {
        document.getElementById("tr3").style.display = "none" 
    }
    if(document.getElementById("icon3").classList=="fa fa-angle-right"){
        document.getElementById("icon3").classList = "fa fa-angle-down";
    }else{
        document.getElementById("icon3").classList="fa fa-angle-right"
    }
    
    content.classList.add("box-style");
}

function myFunction4() {
    console.log(content);
    if (document.getElementById("tr4").style.display == "none") {
        document.getElementById("tr4").style.display = "table-row"
        
    } else {
        document.getElementById("tr4").style.display = "none" 
    }
    if(document.getElementById("icon4").classList=="fa fa-angle-right"){
        document.getElementById("icon4").classList = "fa fa-angle-down";
    }else{
        document.getElementById("icon4").classList="fa fa-angle-right"
    }
    
    content.classList.add("box-style");
}