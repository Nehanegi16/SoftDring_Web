let tl=gsap.timeline({
    scrollTrigger:{
        trigger:".two",
        start:"0% 95%",
        end:"70% 50%",
        scrub:true,
        markers:false

    }
})
tl.to("#fanta",{
    top:"120%",
    left:"0%"
},'orange')
tl.to("#orangecut",{
    top:"160%",
    left:"23%"
},'orange')
tl.to("#orange",{
    width:"17%",
    top:"170%",
    left:"70%"
},'orange')
tl.to("#leaf",{
    top:"120%",
    rotate:"-130deg",
    left:"80%"
},'orange')
tl.to("#leaf3",{
    top:"140%",
    rotate:"260deg",
    left:"-1%"
},'orange')

let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".three",
        start:"0% 95%",
        end:"70% 50%",
        scrub:true,
        markers:false

    }
})
tl2.from("#coca",{
    left:"5%",
    x:"100",
    top:"3%",
    
},'a')
tl2.from("#pepsi",{
    x:"-10",
    top:"15%",
    right:"0%"

},'a')
tl2.to("#fanta",{
    width:"35vw",
    y:"900",
    top:"128%",
    left:"33%"

},'a')

