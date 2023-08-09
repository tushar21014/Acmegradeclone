var father = document.getElementById('father');
var child = document.getElementsByClassName('child');
var child_content = document.getElementsByClassName('intern_section');
var intern_wrap = document.getElementsByClassName('intern_wrap');


var images = [
    'https://www.acmegrade.com/images/inter/inter1.png',
    'https://www.acmegrade.com/images/inter/inter2.png',
    'https://www.acmegrade.com/images/inter/inter3.png',
    'https://www.acmegrade.com/images/inter/inter4.png',
    'https://www.acmegrade.com/images/inter/inter5.png',
];

var colors = [
    "#03138b",
    "#0063d3",
    "#f3018c",
    "#35065c",
    "#c276fa"
]


for (let i = 0; i < child.length; i++) {
    child[i].addEventListener("mouseover", function () {
        for (let j = 0; j < child.length; j++) {
            if (j === i) {
                
                child[j].style.width = "60%";
                child[j].style.opacity = 0;
                child[j].style.overflow = "hidden";
                
                intern_wrap[j].style.width = "60%";
                
                child_content[j].style.display = "flex";
            } else {
                intern_wrap[j].style.width = "10vw";
                child[j].style.width = "10vw";
                child[j].style.opacity = 1;
                child[j].style.overflow = "";

                child_content[j].style.display = "none";
            }

            child[j].style.transition = "width 0.5s linear, opacity 0.5s linear";
            child[j].style.background = "unset";
            child[j].style.backgroundSize = "100% !important";
            child[j].style.backgroundColor = colors[j];
            child[j].style.backgroundImage = `url('${images[j]}')`;
            child[j].style.backgroundRepeat = "no-repeat";
            child[j].style.backgroundPosition = "bottom center";

            father.style.justifyContent = (i === 0) ? "end" : "space-around";
        }
    });
}
