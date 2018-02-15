function resizefunc(){
    if (window.innerWidth <= 800){
        $(".side-menu").css("margin-left", "-250px");
        $("#menu_icon").css("display", "block");
        $("#menu_icon").attr("src", "../src/menu_icon_black.png");
    } else {
        $(".side-menu").css("margin-left", "0px");
        $("#menu_icon").css("display", "none");
    }
}

function extendMenu(){
    if ($("#menu_icon").attr("src") == "../src/menu_gif.gif"){
        $("#menu_icon").attr("src", "../src/close_gif.gif");
        $(".side-menu").css("margin-left", "0px");
    } else {
        $("#menu_icon").attr("src", "../src/menu_gif.gif");
        $(".side-menu").css("margin-left", "-250px");
    }
}

function loadNotes(){
    let url = "https://raw.githubusercontent.com/ZGao28/ZGao28.github.io/master/README.md";

    $.ajax({
        url: url,
        success: function( data ){
            console.log(data);
        },
        
    });
    
}
