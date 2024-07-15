const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;

}

setInterval(carrossel, 1800);

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 3500);

function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}