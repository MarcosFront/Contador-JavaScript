function carregar(){

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${min}hr. `
if (min <10){
    min = "0" + min
}
if (hora >= 0 && hora < 12){
    //Bom dia
    msg.innerHTML += 'Bom Dia'
    img.src = 'manha.png'
    document.body.style.background = '#d9cbc2'
}else if (hora >=12 && hora < 18){
    //Boa tarde
   
        msg.innerHTML += 'Boa Tarde'
        img.src = 'tarde.png'
        document.body.style.background = '#8c673a'
}else{
    
    //Boa noite
    msg.innerHTML += 'Boa Noite e bons sonhos zzz'
    img.src = 'noite.png'
    document.body.style.background = '#09181b'
}
}