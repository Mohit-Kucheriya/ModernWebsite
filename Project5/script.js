function valueSetter() {
    gsap.set("#nav a", {
        y: "-100%",
        opacity: 0
    })
    gsap.set("#home .parent .child", {
        y: "100%"
    })
    gsap.set("#home .row img", {
        opacity: 0
    })

    document.querySelectorAll("#Visual>g").forEach(function (e) {
        let character = e.childNodes[1].childNodes[1];
        character.style.strokeDasharray = character.getTotalLength() + "px";
        character.style.strokeDashoffset = character.getTotalLength() + "px";
    });
}

function revealToSpan() {
    document.querySelectorAll(".reveal").forEach((elem) => {
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");

        spanParent.classList.add("parent");
        spanChild.classList.add("child");

        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);
        elem.innerHTML = "";
        elem.appendChild(spanParent);
    });
}

function loaderAnimation() {
    var tl = gsap.timeline();

    tl.from("#loader .child span", {
        x: "100",
        duration: 1.4,
        stagger: .1,
        ease: Power3.easeInOut,
    })

        .to("#loader .parent .child", {
            y: "-110%",
            duration: 1,
            ease: Circ.easeInOut,
        })

        .to("#loader", {
            height: 0,
            duration: 1,
            ease: Power3.easeInOut,
        })
        .to("#green", {
            height: "100%",
            top: 0,
            duration: 1,
            delay: -0.8,
            ease: Circ.easeInOut,
        })
        .to("#green", {
            height: 0,
            duration: 1,
            delay: -0.3,
            ease: Circ.easeInOut,
            onComplete: function () {
                animateHome();

            }

        });
}

function animateSVG() {


    gsap.to("#Visual>g>g>path,#Visual>g>g>polyline", {
        strokeDashoffset: 0,
        ease: Expo.easeInOut,
    });
}

function animateHome() {

    var tl = gsap.timeline();
    tl
        .to("#nav a", {
            y: 0,
            opacity: 1,
            stagger: .05,
            ease: Expo.easeInOut

        })
        .to("#home .parent .child", {
            y: 0,
            duration: 1.5,
            stagger: .1,
            ease: Expo.easeInOut

        })

        .to("#home .row img", {
            opacity: 1,
            ease: Expo.easeInOut,
            delay: -.05,
            onComplete: function () {
                animateSVG();
            }
        })
}

function locoScroll() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function cardHoverEffect() {
    document.querySelectorAll(".img-container").forEach(function (container) {
        var showingImg;
        container.addEventListener("mousemove", function (dets) {
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
            showingImg = dets.target
            document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
            showingImg.style.filter = "grayscale(1)";
            document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color
        })

        container.addEventListener("mouseleave", function () {
            document.querySelector("#cursor").children[showingImg.dataset.index].style.opacity = 0;
            showingImg.style.filter = "grayscale(0)"
            document.querySelector("#work").style.backgroundColor = "#f2f2f2"


        })
    })

}

revealToSpan();
valueSetter();
loaderAnimation();
// animateSVG();
locoScroll();
cardHoverEffect();

