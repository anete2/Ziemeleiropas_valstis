//Caur lapam doties!!! 

function raditspeli() { 
    document.getElementById("info_lapa").style.display = "none" 
    document.getElementById("speles_lapa").style.display = "block" 
    newJaut()
} 
function atpakal() { 
    document.getElementById("speles_lapa").style.display = "none" 
    document.getElementById("info_lapa").style.display = "block" 
} 
const tagaddat = new Date(); 
const veids = { year: 'numeric', month: 'long', day: 'numeric' }; 
document.getElementById("datums").innerHTML= tagaddat.toLocaleDateString('lv-LV', veids);   
function raditLaiku() { 
    const tagad = new Date(); 
    const laiks = tagad.toLocaleTimeString('lv-LV') 
    document.getElementById('laiks').innerText = "Pašreizējais laiks: " + laiks; 
} 

setInterval(raditLaiku, 1000); 
raditLaiku(); 

function mekletValsti() { 
    let logs = document.getElementById("ievadi_valsti") 
    let vards = logs.ariaValueMax.trim().toLowerCase() 
    let elements = document.getElementById(vards) 
if (elements) { 
    elements.scrollIntoView({ behavior: 'smooth', block: 'center'}); 
    elements.style.backgroundColor = "grey"; 
    setTimeout(() => {elements.style.backgroundColor = "";}, 2000) 
} else { 
    alert("Valsts netika atrasta! Lūdzu mēģiniet vēlreiz!"); 
} 
} 

//Viss info teksts 1 lapa 
function raditTekstu(x) { 
    let jautajums = document.getElementById(x) 
    jautajums.style.display = (jautajums.style.display == "block") ? "none" : "block" 
} 
//spele ieklautie jautajumi 

let punkti = 0;
const maxJautajumi = 23;
let aktivieJautajumi = [];
let esosaisIndekss = 0;
// 1. Visi jautājumi (šeit jābūt jautājumiem) 
const visiDati = [ 
    { jautajums: "Latvijas karogs ir sarkanbaltsarkans.", atbilde: true}, 
    { jautajums: "Igaunijas karogā ir melna krāsa.", atbilde: true}, 
    { jautajums: "Lietuvas karogā ir zila krāsa.", atbilde: true}, 
    { jautajums: "Somijas karogā ir attēlots krusts.", atbilde: true}, 
    { jautajums: "Dānijas karogs ir sarkans ar baltu.", atbilde: true}, 
    { jautajums: "Zviedrijas karogā ir dzeltena krāsa.", atbilde: true}, 
    { jautajums: "Islandes karogā ir zaļa krāsa.", atbilde: false}, 
    { jautajums: "Latvija atrodas pie Baltijas jūras.", atbilde: true}, 
    { jautajums: "Norvēģijā ir daudz fjordu.", atbilde: true}, 
    { jautajums: "Somiju sauc par ezeru zemi.", atbilde: true}, 
    { jautajums: "Islandē atrodas aktīvi vulkāni.", atbilde: true}, 
    { jautajums: "Rīga ir Latvijas galvaspilsēta.", atbilde: true}, 
    { jautajums: "Viļņa ir Igaunijas galvaspilsēta.", atbilde: false}, 
    { jautajums: "Tallina atrodas Igaunijā.", atbilde: true}, 
    { jautajums: "Stokholma ir Zviedrijas galvaspilsēta.", atbilde: true}, 
    { jautajums: "Mazā nāriņa atrodas Kopenhāgenā.", atbilde: true}, 
    { jautajums: "Rundāles pils atrodas Lietuvā.", atbilde: false}, 
    { jautajums: "Dzintaru var atrast Baltijas jūras krastā.", atbilde: true}, 
    { jautajums: "Baltijas valstis ir četras.", atbilde: false}, 
    { jautajums: "Ziemeļvalstīs ziemā ir redzama ziemeļblāzma.", atbilde: true}, 
    { jautajums: "Baltijas ceļš notika, cilvēkiem sadodoties rokās.", atbilde: true}, 
    { jautajums: "Igaunija robežojas ar Latviju.", atbilde: true}, 
    { jautajums: "Latvieši un lietuvieši ir radniecīgas tautas.", atbilde: true}, 
]; 


// Sagatavo spēli
function sagatavotSpeli() {
    aktivieJautajumi = [...visiDati].sort(() => Math.random() - 0.5);
    punkti = 0;
    esosaisIndekss = 0;

    document.getElementById("punkti").innerText = punkti;
    raditJautajumu();
}

// Parāda jautājumu
function raditJautajumu() {
    if (esosaisIndekss < maxJautajumi && esosaisIndekss < aktivieJautajumi.length) {
        let jautajumsObj = aktivieJautajumi[esosaisIndekss];
        document.getElementById("jautajums").innerText = jautajumsObj.jautajums;
        document.getElementById("atsauksme").innerText = "";
    } else {
        beigtSpeli();
    }
}

// Pārbauda atbildi
function parbauda(lietotajaAtbilde) {
    let jautajumsObj = aktivieJautajumi[esosaisIndekss];
    let pazinot = document.getElementById("atsauksme");

    if (lietotajaAtbilde === jautajumsObj.atbilde) {
        pazinot.innerText = "Pareizi!";
        pazinot.style.color = "green";
        punkti++;
    } else {
        pazinot.innerText = "Nepareizi!";
        pazinot.style.color = "red";
    }

    document.getElementById("punkti").innerText = punkti;

    esosaisIndekss++;

    setTimeout(raditJautajumu, 1500);
}

// Spēles beigas
function beigtSpeli() {
    document.getElementById("jautajums").innerText = "Spēle beigusies!";
    document.getElementById("atsauksme").innerText =
        "Tavi punkti: " + punkti + " no " + Math.min(maxJautajumi, aktivieJautajumi.length);
}

// Startē spēli
window.onload = function () {
    sagatavotSpeli();
};

