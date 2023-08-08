    var father = document.getElementById('father');
    var child1 = document.getElementById("child-1");
    var child2 = document.getElementById("child-2");
    var child3 = document.getElementById("child-3");
    var child4 = document.getElementById("child-4");
    var child5 = document.getElementById("child-5");

    function hoverevent(params) {
        var item = document.getElementById(params);
        var arr = ["child-1", "child-2", "child-3", "child-4", "child-5"];
        var index = arr.indexOf(params);
        if (index !== -1) {
            arr.splice(index, 1);
        }

        for (let i = 0; i < arr.length; i++) {
            var doc = document.getElementById(arr[i]);
            doc.style.width = "10%";
            doc.style.transition = "width 1s linear";
        }
        item.style.width = "60%";
        if(params == 'child-1')
        {
            father.style.justifyContent = "end";
        }
        else if(params == 'child-5')
        {
            father.style.justifyContent = "start";
        }

        item.style.background = "unset";
        if (child2.style.background == "unset") {
            child2.style.transition = "background-image 1s linear";
            child2.style.backgroundImage = "url('https://www.acmegrade.com/images/inter/inter2.png')";
            child2.style.backgroundPosition = "center";
        }
    }
    // child2.addEventListener("mouseover",function () {
    //     child5.style.width = "10vw"
    //     child4.style.width = "10vw"
    //     child3.style.width = "10vw"
    //     child1.style.width = "10vw"
    //     child2.style.width = "60vw"
    //     child5.style.transition = "width 0.5s linear";
    //     child4.style.transition = "width 0.5s linear";
    //     child3.style.transition = "width 0.5s linear";
    //     child2.style.transition = "width 0.5s linear";
    //     child1.style.transition = "width 0.5s linear";
    //     father.style.justifyContent="space-around"
    //     child2.style.background="unset"
    //     if(child1.style.background=="unset"){
    //         // child1.style.transition = "background image 0.4s linear";
    //         // child1.style.background= "#0063d3 url('https://www.acmegrade.com/images/inter/inter1.png') no-repeat bottom center";
    //         child1.style.transition = "background image 1s linear";
    //         child1.style.backgroundImage="url('https://www.acmegrade.com/images/inter/inter1.png')"
    //         // child2.style.backgroundRepeat="no-repeat";
    //         child1.style.backgroundPosition="center";
    //     }
    // })

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