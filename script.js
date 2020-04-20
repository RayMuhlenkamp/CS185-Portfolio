function loadPage(){
    window.addEventListener("scroll", scroll)
    
    $(".img").on("click", function(e){
        $("#myImgModal").show()
        $("#modalImg").attr("src", this.src)
        e.stopPropagation()
    })    

    $("body").click(function(){
        $("#myImgModal").hide()
    })

    $("#modalImg").click(function(e) {
        e.stopPropagation()
    })
}

function closeModal(){
    $("#myImgModal").hide()
}

function scroll() {
    if ($(window).scrollTop() > $(document).height()*.2) {
        $("#scrollButton").show()
    }
    else {
        $("#scrollButton").hide()
    }
}

function goToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
}