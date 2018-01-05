function extendMenu(){
    if ($("#menu_icon").attr("src") == './src/menu_gif_white.gif') {
        $("#menu_icon").attr("src", "./src/close_icon_black.png");
        $("#home_icon").attr("src", "./src/logo_black.png");
        $("#nav_page").css("left", "0%");
        $("#nav_page").css("opacity", "1");
        $("#title_text").css("color", "black")
    } else if ($("#menu_icon").attr("src") == './src/close_gif.gif'){
        $("#menu_icon").attr("src", "./src/menu_icon_white.png");
        $("#home_icon").attr("src", "./src/logo_white.png");
        $("#nav_page").css("left", "-100%");
        $("#nav_page").css("opacity", "0");
        $("#title_text").css("color", "rgb(255, 253, 255)");
    }
}


function resize(){
    //alert(window.innerWidth);
}
