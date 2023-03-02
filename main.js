const images = ["integrante1.jpeg","integrante2.jpeg","integrante3.jpeg","integrante4.jpeg","integrante5.jpeg","integrante6.jpeg"];
let boton = document.getElementById("btn");
let foto = document.getElementById("foto");
let ruta = "./images/";

boton.addEventListener("click",()=>{
    const confetti = new JSConfetti();
    foto.style.height = "0px";  
    var espera = 2000;
    setTimeout(function() {
        afortunado();
        foto.style.height = "250px";
        confetti.addConfetti();
    }, espera);
    
});

afortunado = () =>{
    for (let i = 0; i <200; i++) {
        let num = Math.floor(Math.random()*6);
        foto.setAttribute("src",`${ruta}${images[num]}`);
    }  
}
