let perguntas = [
"Você gosta de ser o centro das atenções?",
"Você odeia ser ignorado?",
"Você costuma liderar naturalmente?",
"Você vê defeitos em tudo primeiro?",
"Você prefere ficar na sua?",
"Você se compara com os outros?",
"Você quer ter o que os outros têm?",
"Você se sente culpado facilmente?",
"Você sente que precisa ajudar todo mundo?",
"Você muda para agradar?",
"Você tem dificuldade em decidir?",
"Você guarda mágoa por muito tempo?",
"Você acredita em punição justa?",
"Você explode com facilidade?",
"Você odeia falsidade?",
"Você quebra regras sem pensar?",
"Você se fixa em objetivos intensamente?",
"Você não aceita meio-termo?",
"Você se cobra demais?",
"Você busca reconhecimento?",
"Você sente que nunca é suficiente?",
"Você evita conflitos?",
"Você quer justiça acima de tudo?",
"Você age antes de pensar?",
"Você faria qualquer coisa pelo que quer?"
];

let tipos = [
"vaidade","vaidade","vaidade",
"desprezo","desprezo",
"inveja","inveja",
"culpa","culpa",
"inseguranca","inseguranca",
"vinganca","vinganca",
"odio","odio","odio",
"obsessao","obsessao",
"culpa",
"vaidade",
"inveja",
"inseguranca",
"vinganca",
"odio",
"obsessao"
];

let pontos = {
vaidade:0,desprezo:0,inveja:0,culpa:0,
inseguranca:0,vinganca:0,odio:0,obsessao:0
};

let atual = 0;

function trocarTela(id){
document.querySelectorAll(".tela").forEach(t=>t.classList.remove("ativa"));
document.getElementById(id).classList.add("ativa");
}

function iniciar(){
trocarTela("quiz");

let bgm=document.getElementById("bgm");
bgm.src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_6c7b0b3c0e.mp3";
bgm.volume=0.3;
bgm.play();

mostrarPergunta();
}

function mostrarPergunta(){
document.getElementById("pergunta").innerText=perguntas[atual];
}

function responder(valor){
pontos[tipos[atual]]+=valor;
atual++;

if(atual<perguntas.length){
mostrarPergunta();
}else{
mostrarResultado();
}
}

function mostrarResultado(){
trocarTela("resultado");

let total = 0;
for(let k in pontos){total += Math.abs(pontos[k]);}

let vencedor = Object.keys(pontos).reduce((a,b)=>pontos[a]>pontos[b]?a:b);

document.body.className="tema-"+vencedor;

document.getElementById("tipo").innerText=vencedor.toUpperCase();

let porcentagem="";
for(let k in pontos){
let p = Math.round((Math.abs(pontos[k])/total)*100);
porcentagem += k+": "+p+"%<br>";
}

document.getElementById("porcentagem").innerHTML=porcentagem;

document.getElementById("descricao").innerText="Esse é o Keearem dominante da sua alma.";

let impacto=document.getElementById("impacto");
impacto.src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_6c7b0b3c0e.mp3";
impacto.play();

let voz=document.getElementById("voz");
setTimeout(()=>{
voz.src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_6c7b0b3c0e.mp3";
voz.play();
},800);
}

/* gatinho seguindo mouse */
document.addEventListener("mousemove",(e)=>{
let gato=document.getElementById("gatinho");
gato.style.left=e.clientX+"px";
gato.style.top=e.clientY+"px";
});
