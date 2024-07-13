const lenis = new Lenis();

lenis.on("scroll", (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function scrollAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#part1",
            start: "50% 50%",
            end: "170% 50%",
            pin: true,
            scrub: true,
        },
    });
    // New effect one way
    // tl.to(".rotate-div", {
    //     duration:1,
    //     delay:0.5,
    //     rotate: -15,
    //     scale: 1

    // })

    tl.to(
        ".rotate-div",
        {
            // duration:1,
            // delay:0.5,
            rotate: -10,
            scale: 1.05,
        },
        "a"
    );

    tl.to(
        ".overlay h1",
        {
            opacity: 1,
            delay: 0.1,
        },
        "a"
    );

    tl.to(
        ".overlay ",
        {
            backgroundColor: "#0000006a",
            delay: 0.1,
        },
        "a"
    );

    tl.to(
        ".scroll-child",
        {
            width: "100%",
        },
        "a"
    );
}
scrollAnimation()

function roundedEffect() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#part2",
            start: "0% 70%",
            end: "50% 50%",
            scrub: true,
        },
    });

    tl2.to(".rounded-wrapper", {
        height: 0,
        marginTop: 0,
    });
}
roundedEffect()

function textReveal() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".two",
            start: "20% 50%",
            end: "100% 50%",
            scrub: 1,
            // markers: true,
        }
    })

    tl3.to(".text-hover h1", {
        width: "100%",

    })
    tl3.to(".text-hover h2", {
        width: "100%",
        delay: -0.4
    })
}
textReveal()


