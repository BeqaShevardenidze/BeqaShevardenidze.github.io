size = 10;
function fAll(){
    let Inline1 = [];
    let Inline2 = [];
    let Inline3 = [];
    let Inline4 = [];
    for (let i = 0; i < size; i++){
        Inline1[i] = document.getElementsByClassName("inline1")[i];
        Inline2[i] = document.getElementsByClassName("inline2")[i];
        Inline3[i] = document.getElementsByClassName("inline3")[i];
        Inline4[i] = document.getElementsByClassName("inline4")[i];
        if (Inline1[i].style.visibility === "hidden"){
            Inline1[i].style.visibility = "visible";
            Inline2[i].style.visibility = "hidden";
            Inline3[i].style.visibility = "hidden";
            Inline4[i].style.visibility = "hidden";
        }else{
            Inline1[i].style.visibility = "hidden";
            Inline2[i].style.visibility = "hidden";
            Inline3[i].style.visibility = "hidden";
            Inline4[i].style.visibility = "hidden";
        }
    }
}
function fHtml_css_js(){
    let Inline1 = [];
    let Inline2 = [];
    let Inline3 = [];
    let Inline4 = [];
    for (let i = 0; i < size; i++){
        Inline1[i] = document.getElementsByClassName("inline1")[i];
        Inline2[i] = document.getElementsByClassName("inline2")[i];
        Inline3[i] = document.getElementsByClassName("inline3")[i];
        Inline4[i] = document.getElementsByClassName("inline4")[i];
        if (Inline2[i].style.visibility === "visible"){
            Inline1[i].style.visibility = "visible";
            Inline2[i].style.visibility = "hidden";
            Inline3[i].style.visibility = "hidden";
            Inline4[i].style.visibility = "hidden";
        } 
        else{
            Inline1[i].style.visibility = "hidden";
            Inline2[i].style.visibility = "visible";
            Inline3[i].style.visibility = "hidden";
            Inline4[i].style.visibility = "hidden";
        }
    }
}
function fPython(){
    let Inline1 = [];
    let Inline2 = [];
    let Inline3 = [];
    let Inline4 = [];
    for (let i = 0; i < size; i++){
        Inline1[i] = document.getElementsByClassName("inline1")[i];
        Inline2[i] = document.getElementsByClassName("inline2")[i];
        Inline3[i] = document.getElementsByClassName("inline3")[i];
        Inline4[i] = document.getElementsByClassName("inline4")[i];
        if (Inline3[i].style.visibility === "visible"){
            Inline1[i].style.visibility = "visible";
            Inline2[i].style.visibility = "hidden";
            Inline3[i].style.visibility = "hidden";
            Inline4[i].style.visibility = "hidden";
        } 
        else{
            Inline1[i].style.visibility = "hidden";
            Inline2[i].style.visibility = "hidden";
            Inline3[i].style.visibility = "visible";
            Inline4[i].style.visibility = "hidden";
        }
    }
}
function fCpp(){
    let Inline1 = [];
    let Inline2 = [];
    let Inline3 = [];
    let Inline4 = [];
    for (let i = 0; i < size; i++){
        Inline1[i] = document.getElementsByClassName("inline1")[i];
        Inline2[i] = document.getElementsByClassName("inline2")[i];
        Inline3[i] = document.getElementsByClassName("inline3")[i];
        Inline4[i] = document.getElementsByClassName("inline4")[i];
        if (Inline4[i].style.visibility === "visible"){
            Inline1[i].style.visibility = "visible";
            Inline2[i].style.visibility = "hidden";
            Inline3[i].style.visibility = "hidden";
            Inline4[i].style.visibility = "hidden";
        } 
        else{
            Inline1[i].style.visibility = "hidden";
            Inline2[i].style.visibility = "hidden";
            Inline3[i].style.visibility = "hidden";
            Inline4[i].style.visibility = "visible";
        }
    }
}