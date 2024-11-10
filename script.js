function firstanim(){

    var tl = gsap.timeline();

    tl.from(".inner2", {

        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeinout

    })
       .to(".boundingalem", {
        y: 0,  
        ease: Expo.easeinout,
        duration: 2,
        stagger: .2,
        delay: -1.3
    })
    .from(".footer", {
        y: -10,  
        ease: Expo.easeinout,
        duration: 2,
        opacity: 0,
        delay: -1.3
    })
}


function minicircle(){

    window.addEventListener("mousemove",function(dets){
        document.querySelector(".circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`

    })
    

}
minicircle()
firstanim()