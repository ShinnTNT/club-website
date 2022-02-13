

let screentHeight=$(window).height();

$(window).scroll(function (){
    let currentHeight=$(this).scrollTop();
    if(currentHeight > screentHeight-100){
        $(".site-nav").addClass("site-nav-scroll")
    }else {
        $(".site-nav").removeClass("site-nav-scroll")
        setActive("home")
    }
});
function setActive(current){
    $(".nav-link").removeClass("active");
    $(`.nav-link[href="#${current}"]`).addClass("active")
}
function navScroll(){
    let currentSection=$("section[id]");
       currentSection.waypoint(function (direction){
           if(direction == "down"){
               let currentSectionId=$(this.element).attr('id');
               setActive(currentSectionId)
           }
       },{offsets:'300'});
    currentSection.waypoint(function (direction){
        if(direction == "up"){
            let currentSectionId=$(this.element).attr('id');
            setActive(currentSectionId)
        }
    },{offsets: '300'})
};
navScroll();
$(window).on("load",function (){
    $(".loader-container").fadeOut(500,function (){
        $(this).remove();
    })
})