function trocarTela(id) {
  document.querySelectorAll(".tela").forEach(t => t.classList.remove("ativa"));
  document.getElementById(id).classList.add("ativa");
}
function iniciarQuiz() {
  trocarTela("quiz");
  mostrarPergunta();
}
const perguntas = [
  { texto: "Eu preciso ser reconhecido pelo que faço.", tipo: "vaidade" },
  { texto: "Eu raramente me impressiono com as pessoas.", tipo: "desprezo" },
  { texto: "Eu me comparo com os outros com frequência.", tipo: "inveja" },
  { texto: "Eu me culpo por coisas que já passaram.", tipo: "culpa" },
  { texto: "Tenho dificuldade em tomar decisões.", tipo: "inseguranca" },
  { texto: "Eu não esqueço quando alguém me machuca.", tipo: "vinganca" },
  { texto: "Eu ajo sem pensar quando estou com raiva.", tipo: "odio" },
  { texto: "Quando quero algo, eu vou até o fim.", tipo: "obsessao" },

  { texto: "Gosto de chamar atenção quando entro em um lugar.", tipo: "vaidade" },
  { texto: "Prefiro observar do que interagir.", tipo: "desprezo" },
  { texto: "Sinto que outras pessoas têm mais do que eu.", tipo: "inveja" },
  { texto: "Sinto que devo compensar erros do passado.", tipo: "culpa" },
  { texto: "Mudo de opinião para agradar os outros.", tipo: "inseguranca" },
  { texto: "Planejo como dar o troco quando me ferem.", tipo: "vinganca" },
  { texto: "Prefiro ser sincero, mesmo que machuque.", tipo: "odio" },
  { texto: "Fico obcecado por ideias ou objetivos.", tipo: "obsessao" },

  { texto: "Me esforço para ser admirado.", tipo: "vaidade" },
  { texto: "Vejo defeitos antes de qualidades.", tipo: "desprezo" },
  { texto: "Comparação me motiva.", tipo: "inveja" },
  { texto: "Carrego responsabilidades que não são minhas.", tipo: "culpa" },
  { texto: "Penso demais antes de agir.", tipo: "inseguranca" },
  { texto: "Justiça é mais importante que paz.", tipo: "vinganca" },
  { texto: "Tenho dificuldade em controlar explosões emocionais.", tipo: "odio" },
  { texto: "Eu não paro até conseguir o que quero.", tipo: "obsessao" }
];
function mostrarPergunta() {
  if(indice >= perguntas.length) {
    mostrarResultado();
    return;
  }

  const p = perguntas[indice];
  document.getElementById("pergunta").innerText = p.texto;

  const respostas = ["Discordo", "Neutro", "Concordo"];

  document.getElementById("respostas").innerHTML = respostas.map((r,i)=>`
    <button onclick="responder(${i})">${r}</button>
  `).join("");
}
function responder(valor) {
  const tipo = perguntas[indice].tipo;
  pontos[tipo] += valor;

  indice++;
  mostrarPergunta();
}
function mostrarResultado() {
  trocarTela("resultado");

  let total = Object.values(pontos).reduce((a,b)=>a+b,0);

  let maior = Object.keys(pontos).reduce((a,b)=> pontos[a]>pontos[b]?a:b);

  document.getElementById("nomeResultado").innerText = maior;

  // porcentagens
  let html = "";
  for(let k in pontos){
    let pct = ((pontos[k]/total)*100).toFixed(1);
    html += <p>${k}: ${pct}%</p>;
  }

  document.getElementById("porcentagens").innerHTML = html;

  animarResultado(maior);
}
function animarResultado(tipo) {
  document.body.className = "tema-" + tipo;

  // fumaça fake
  const fumaça = document.createElement("div");
  fumaça.style.position = "fixed";
  fumaça.style.width = "100%";
  fumaça.style.height = "100%";
  fumaça.style.background = "rgba(255,255,255,0.05)";
  fumaça.style.animation = "fade 2s forwards";
  document.body.appendChild(fumaça);

  setTimeout(()=>fumaça.remove(),2000);
}
document.addEventListener("mousemove", e=>{
  const gato = document.getElementById("gato");
  gato.style.left = e.clientX + "px";
  gato.style.top = e.clientY + "px";
});

function iniciarQuiz() {
  trocarTela("quiz");

  const musica = document.getElementById("musica");
  musica.volume = 0.3; // volume suave
  musica.play();

  mostrarPergunta();
}
function toggleSom() {
  const musica = document.getElementById("musica");
  musica.muted = !musica.muted;

  document.getElementById("muteBtn").innerText =
    musica.muted ? "🔇" : "🔊";
}
function mostrarResultado() {
  trocarTela("resultado");

  const musica = document.getElementById("musica");
  musica.volume = 0.1; // abaixa no resultado
function fadeSom(audio, alvo, tempo) {
  let passo = (audio.volume - alvo) / (tempo / 50);

  let intervalo = setInterval(() => {
    audio.volume -= passo;

    if (audio.volume <= alvo) {
      audio.volume = alvo;
      clearInterval(intervalo);
    }
  }, 50);
}
  fadeSom(musica, 0.1, 2000);
  function mostrarResultado() {
  trocarTela("resultado");

  let total = Object.values(pontos).reduce((a,b)=>a+b,0);
  let tipo = Object.keys(pontos).reduce((a,b)=> pontos[a]>pontos[b]?a:b);

  const bgm = document.getElementById("bgm");
  const batida = document.getElementById("batida");
  const voz = document.getElementById("voz");

  // 🔇 para música anterior
  bgm.pause();

  // 💥 batida dramática
  batida.volume = 0.8;
  batida.play();

  // ⏳ espera a batida terminar
  setTimeout(() => {

    // 🌫️ muda o fundo
    document.body.className = "tema-" + tipo;

    // 🎧 novo som ambiente do elemento
    bgm.src = sons[tipo].bg;
    bgm.volume = 0.2;
    bgm.play();

    // 👁️ sussurro
    voz.src = sons[tipo].voz;
    voz.volume = 0.6;
    voz.play();

  }, 800);
}

function criarEstrelas() {
  for(let i=0;i<20;i++){
    let estrela = document.createElement("div");
    estrela.className = "estrela";

    estrela.style.left = Math.random()*100 + "vw";
    estrela.style.top = Math.random()*100 + "vh";

    document.body.appendChild(estrela);

    setTimeout(()=>estrela.remove(),2000);
  }
}
  criarEstrelas();

