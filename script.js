let t1 = gsap.timeline()
t1.from(".nav h1,.nav h4,.nav button",{
    y:-30,
    duration:0.5,
    opacity:0,
    delay:1,
    stagger:0.5
})
t1.from(".section2 .part1 h3,.section2 .part1 p,.section2 .part1 button",{
    x:-500,
    duration:0.5,
    stagger:0.5,
    opacity:0
})
t1.from(".section2 >.part2 >img",{
    opacity:0,
    x:200,
    duration:2
},"-=1")
t1.from(".section3 img",{
    opacity:0,
    stagger:0.5,
    y:30,
    duration:0.8
})

