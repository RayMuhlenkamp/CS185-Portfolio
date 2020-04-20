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
    var modal = document.getElementById("myImgModal")
    modal.style.display = "none"
}

function scroll() {
    if ($(window).scrollTop() > $(document).height()*.2) {
        scrollButton = document.getElementById("scrollButton")
        scrollButton.style.display = "block"
    }

    else {
        scrollButton.style.display = "none"
    }
}

function goToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
}