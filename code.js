const canal = new BroadcastChannel('canl');

const bot = document.getElementById("boton");
const lab = document.getElementById("lbl");
var contadorv = 0;

bot.addEventListener('click',function(){
contadorv++;
lab.innerText = contadorv;
canal.postMessage(contadorv);
});

canal.onmessage = function(event){
    lab.innerText = event.data;
}