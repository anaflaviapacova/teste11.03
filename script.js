const questions = [
{
item: "Garrafa PET",
correct: "plastico",
info: "O plástico PET é um polímero formado por longas cadeias moleculares."
},
{
item: "Jornal velho",
correct: "papel",
info: "O papel é feito principalmente de celulose, um polímero natural das plantas."
},
{
item: "Lata de refrigerante",
correct: "metal",
info: "Latas são feitas de alumínio, um metal que pode ser reciclado várias vezes."
},
{
item: "Garrafa de vidro",
correct: "vidro",
info: "O vidro é composto principalmente de dióxido de silício (SiO₂)."
}
]

let current = 0

function showQuestion(){
document.getElementById("item").innerText =
"Onde descartar: " + questions[current].item
}

function answer(choice){

if(choice === questions[current].correct){
document.getElementById("result").innerText =
"✅ Correto! " + questions[current].info
}
else{
document.getElementById("result").innerText =
"❌ Errado! O correto é: " + questions[current].correct
}

}

function nextQuestion(){
current++
if(current >= questions.length){
current = 0
}
document.getElementById("result").innerText = ""
showQuestion()
}

showQuestion()