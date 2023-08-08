    
    var father = document.getElementById('father');
    var child = document.getElementsByClassName('child');
    var child1 = document.getElementById("child-1");
    var child2 = document.getElementById("child-2");
    var child3 = document.getElementById("child-3");
    var child4 = document.getElementById("child-4");
    var child5 = document.getElementById("child-5");

    child1.addEventListener("mouseover",function () {
        child5.style.width = "10%"
        child4.style.width = "10%"
        child3.style.width = "10%"
        child2.style.width = "10%"
        child1.style.width = "60%"
        child5.style.transition = "width 1s linear";
        child4.style.transition = "width 1s linear";
        child3.style.transition = "width 1s linear";
        child2.style.transition = "width 1s linear";
        child1.style.transition = "width 1s linear";
        father.style.justifyContent="end"
        child1.style.background="unset"
        if(child2.style.background=="unset"){
            child2.style.transition = "background image 0.4s linear";
            child2.style.backgroundImage="url('https://www.acmegrade.com/images/inter/inter2.png')"
            // child2.style.backgroundRepeat="no-repeat";
            child2.style.backgroundPosition="center";
            
        }
    })
    
    child2.addEventListener("mouseover",function () {
        child5.style.width = "10vw"
        child4.style.width = "10vw"
        child3.style.width = "10vw"
        child1.style.width = "10vw"
        child2.style.width = "60vw"
        child5.style.transition = "width 0.5s linear";
        child4.style.transition = "width 0.5s linear";
        child3.style.transition = "width 0.5s linear";
        child2.style.transition = "width 0.5s linear";
        child1.style.transition = "width 0.5s linear";
        father.style.justifyContent="space-around"
        child2.style.background="unset"
        if(child1.style.background=="unset"){
            // child1.style.transition = "background image 0.4s linear";
            // child1.style.background= "#0063d3 url('https://www.acmegrade.com/images/inter/inter1.png') no-repeat bottom center";
            child1.style.transition = "background image 0.4s linear";
            child1.style.backgroundImage="url('https://www.acmegrade.com/images/inter/inter1.png')"
            // child2.style.backgroundRepeat="no-repeat";
            child1.style.backgroundPosition="center";
        }
    })

    // child1.addEventListener("mouseout",function () {
    //     child5.style.width = "100%"
    //     child4.style.width = "100%"
    //     child3.style.width = "100%"
    //     child2.style.width = "100%"
    //     child1.style.width = "100%"
    //     child5.style.transition = "width 2s linear"
    //     child4.style.transition = "width 2s linear"
    //     child3.style.transition = "width 2s linear"
    //     child2.style.transition = "width 2s linear"
    //     child1.style.transition = "width 2s linear"
    // })