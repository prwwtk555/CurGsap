var main =document.querySelector("#main")
var cursor=document.querySelector("#cursor")
var img=document.querySelector("#image")
main.addEventListener("mousemove",function(dets){
  gsap.to(cursor ,{
    x:dets.x,
    y:dets.y,
    duration:1,
    // ease:"back.out",

  })
})
img.addEventListener("mouseenter",function(){
  cursor.innerHTML="View More"
  gsap.to(cursor,{
    scale:2,
  })
})
  img.addEventListener("mouseleave",function(){
      cursor.innerHTML=""
    gsap.to(cursor,{
      scale:1,
    })

})