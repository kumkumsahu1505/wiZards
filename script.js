let t1 = gsap.timeline()
t1.from(".nav h1,.nav h4,.nav button",{
    y:-30,
    duration:0.2,
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
    duration:0.1
})
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section4",
        scroller:"body",
        scrub:2,
        markers:true,
        start:"top 50%",
        end : "top 0"
    }
})
tl2.from(".section4",{
    y:30,
    opacity:0,
    duration:1
  })

tl2.from(".container.left1",{
    x:-300,
    opacity:0,
    duration:1,

},"anim")
tl2.from(".container.right1",{
    x:300,
    opacity:0,
    duration:1,

},"anim")
tl2.from(".container.left2",{
    x:-300,
    opacity:0,
    duration:1,

},"anim2")

tl2.from(".container.right2",{
    x:300,
    opacity:0,
    duration:1,

},"anim2")//"anim2" jo hai vo 2 timeline task ko ek sath krvata hai.