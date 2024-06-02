const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

        .to(".boundingelem", {
            y: "0",
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut,
            stagger: .2
        })

        .from("#herofooter", {
            y: "-10",
            opacity: 0,
            duration: 1.5,
            ease: Expo.easeInOut,
            delay: -1
        })

}
var timeout;
//function to make circle squeeze while moving 
function circleSqueeze() {
    // define the default scale value i.e
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMoving(xscale, yscale);
        timeout = setTimeout(function () {
            document.querySelector("#minic").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}
circleSqueeze();

function circleMoving(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minic").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}
firstPageAnim();
circleMoving();

document.querySelectorAll(".elem").forEach(function (elem) {

    var rotate = 0;
    var diffrotate = 0;
    elem.addEventListener("mouseleave", function (dets) {
       
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power1,
            duration:0.5
           
        });
    });


    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top
        diffrotate = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrotate * 0.5)
        });
    });
});


