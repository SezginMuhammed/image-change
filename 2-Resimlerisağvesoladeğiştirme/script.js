var text;
function resim(){
    var a=["image/ccc.jpg", "image/eee.jpg", "image/mm.jpg", "image/nnn.jpg", "image/sss.jpg",]
    text = "";
   
        var random = Math.round/* yuvarlama */(Math.random/* matamatiksel random */()*5);
        text += a[random];
    
}
setInterval(function(){/* belirli aralıklarla sürekli çalışmasını sağlayan fonksiyon */
resim();
document.getElementById("img").src=text;
},2000)
