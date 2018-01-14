function extendMenu(){
    if ($("#menu_icon").attr("src") == './src/menu_gif_white.gif' || $("#menu_icon").attr("src") == './src/menu_gif.gif') {
        $("#menu_icon").attr("src", "./src/close_gif.gif");
        $("#home_icon").attr("src", "./src/logo_black.png");
        $("#nav_page").css("left", "0%");
        $("#title_text").css("color", "black")
        $("#title_text").css("display", "block")
        $(".chevron_green").css("display", "none");
        $(".chevron_container").css("display", "none");
    } else if ($("#menu_icon").attr("src") == './src/close_gif.gif'){
        if (state < 2){
            $("#menu_icon").attr("src", "./src/menu_gif_white.gif");
            $("#home_icon").attr("src", "./src/logo_white.png");
        } else{
            $("#menu_icon").attr("src", "./src/menu_gif.gif");
            $("#home_icon").attr("src", "./src/logo_black.png");
        }
        $("#home_icon").attr("src", "./src/logo_white.png");
        $("#nav_page").css("left", "-100%");
        $("#title_text").css("color", "rgb(255, 253, 255)");
        $("#title_text").css("display", "none")
        $(".chevron_container").css("display", "block");
        setTimeout(function(){
            $(".chevron_green").css("display", "inline-block");
        }, 1000);
    }
}


function resize(){
    //alert(window.innerWidth);
    if (window.innerWidth <= 750){
        $("#welcome").text("Welcome To My Website");
        $("#project_heading").css("padding-top", "100px");
        $("#resume_heading").css("padding-top", "100px");
        $("#blog_heading").css("padding-top", "100px");
        $("#about_heading").css("padding-top", "100px");
    } else {
        $("#welcome").html("&mdash; Welcome To My Website &mdash;");
        $("#project_heading").css("padding-top", "60px");
        $("#resume_heading").css("padding-top", "60px");
        $("#blog_heading").css("padding-top", "60px");
        $("#about_heading").css("padding-top", "60px");
    }

    if ((screen.height-100) < $(window).innerHeight()){
      $(".section").css("min-height", String($(window).innerHeight()).concat("px"));
    } else {
      $(".section").css("min-height", String((screen.height)).concat("px"));
    }
}

var state = 0;
var in_transition = false;
var normal_scroll = true;
var oldy;
function scrollfunc(s, b){
    if (b == true){
      normal_scroll = false;
    }
    if (state == 0){
      if (oldy != $("#name")[0].getBoundingClientRect().bottom){
        oldy = $("#name")[0].getBoundingClientRect().bottom;
      } else{
        normal_scroll = false;
      }
    } else if (state==1){
      if (oldy != $("#project_heading")[0].getBoundingClientRect().bottom){
        oldy = $("#project_heading")[0].getBoundingClientRect().bottom;
      } else{
        normal_scroll = false;
      }
    } else if (state==2){
      if (oldy != $("#about_heading")[0].getBoundingClientRect().bottom){
        oldy = $("#about_heading")[0].getBoundingClientRect().bottom;
      } else{
        normal_scroll = false;
      }
    } else if (state==3){
      if (oldy != $("#blog_heading")[0].getBoundingClientRect().bottom){
        oldy = $("#blog_heading")[0].getBoundingClientRect().bottom;
      } else{
        normal_scroll = false;
      }
    } else if (state==4){
      if (oldy != $("#resume_heading")[0].getBoundingClientRect().bottom){
        oldy = $("#resume_heading")[0].getBoundingClientRect().bottom;
      } else{
        normal_scroll = false;
      }
    }

    if (in_transition == false && normal_scroll==false) {
      if (s == -1) {
        if (state == 0) {
          in_transition = true;
          state++;
          $("#home_page").css("display", "none");
          $("#project_page").css("display", "block");
          loadprojects();
        } else if (state == 1) {
          state++;
          in_transition = true;
          $("#project_page").css("display", "none");
          $("#about_page").css("display", "block");
          $("#menu_icon").attr("src", "./src/menu_icon_black.png");
          $("#home_icon").attr("src", "./src/logo_black.png");
          loadabout();
        } else if (state == 2) {
          state++;
          in_transition = true;
          $("#about_page").css("display", "none");
          $("#blog_page").css("display", "block");
          loadblog();
        } else if (state == 3) {
          state++;
          in_transition = true;
          $("#blog_page").css("display", "none");
          $("#resume_page").css("display", "block");
          loadresume();
        }
      } else if (s == -2) {
        if (state == 1) {
          in_transition = true;
          state--;
          $("#home_page").css("display", "block");
          $("#project_page").css("display", "none");
          loadhome();
        } else if (state == 2) {
          state--;
          in_transition = true;
          $("#about_page").css("display", "none");
          $("#project_page").css("display", "block");
          $("#menu_icon").attr("src", "./src/menu_icon_white.png");
          $("#home_icon").attr("src", "./src/logo_white.png");
          loadprojects();
        } else if (state == 3) {
          state--;
          in_transition = true;
          $("#blog_page").css("display", "none");
          $("#about_page").css("display", "block");
          loadabout();
        } else if (state == 4) {
          state--;
          in_transition = true;
          $("#resume_page").css("display", "none");
          $("#blog_page").css("display", "block");
          loadblog();
        }
      } else if (s == 0) {
        $("#home_page").css("display", "block");
        $("#about_page").css("display", "none");
        $("#blog_page").css("display", "none");
        $("#project_page").css("display", "none");
        $("#resume_page").css("display", "none");
        state = 0;
        $("#menu_icon").attr("src", "./src/close_gif.gif");
        extendMenu();
        loadhome();
        $("#menu_icon").attr("src", "./src/menu_icon_white.png");
          $("#home_icon").attr("src", "./src/logo_white.png");
      } else if (s == 1) {
        $("#project_page").css("display", "block");
        $("#about_page").css("display", "none");
        $("#blog_page").css("display", "none");
        $("#home_page").css("display", "none");
        $("#resume_page").css("display", "none");
        state = 1;
        $("#menu_icon").attr("src", "./src/close_gif.gif");
        extendMenu();
        loadprojects();
        $("#menu_icon").attr("src", "./src/menu_icon_white.png");
          $("#home_icon").attr("src", "./src/logo_white.png");
      } else if (s == 2) {
        $("#about_page").css("display", "block");
        $("#home_page").css("display", "none");
        $("#blog_page").css("display", "none");
        $("#project_page").css("display", "none");
        $("#resume_page").css("display", "none");
        state = 2;
        $("#menu_icon").attr("src", "./src/close_gif.gif");
        extendMenu();
        loadabout();
        $("#menu_icon").attr("src", "./src/menu_icon_black.png");
        $("#home_icon").attr("src", "./src/logo_black.png");
      } else if (s == 3) {
        $("#blog_page").css("display", "block");
        $("#about_page").css("display", "none");
        $("#home_page").css("display", "none");
        $("#project_page").css("display", "none");
        $("#resume_page").css("display", "none");
        state = 3;
        $("#menu_icon").attr("src", "./src/close_gif.gif");
        extendMenu();
        loadblog();
        $("#menu_icon").attr("src", "./src/menu_icon_black.png");
          $("#home_icon").attr("src", "./src/logo_black.png");
      } else if (s == 4) {
        $("#resume_page").css("display", "block");
        $("#about_page").css("display", "none");
        $("#blog_page").css("display", "none");
        $("#project_page").css("display", "none");
        $("#home_page").css("display", "none");
        state = 4;
        $("#menu_icon").attr("src", "./src/close_gif.gif");
        extendMenu();
        loadresume();
        $("#menu_icon").attr("src", "./src/menu_icon_black.png");
          $("#home_icon").attr("src", "./src/logo_black.png");
      }
      var pause = setTimeout(function() {
        in_transition = false;
        normal_scroll = true;
      }, 250);
    }
}


function loadhome(){
  $(window).scrollTop(0);
  $("#name").css("opacity", "0");
  $("#name").css("margin-top", "80px");
  $("#welcome").css("opacity", "0");
  $("#welcome").css("letterSpacing", "0px");
  $( "#name" ).animate({
    opacity: 1, 
    marginTop: 180,
    }, 1000, function() {
    // Animation complete.
    $( "#welcome" ).animate({
      opacity: 1,
      letterSpacing: '20px',
    }, 800, function() {
      resize();
    // Animation complete.
      $( ".n" ).animate({
        opacity: 1,
      }, 2000);
      $( ".nn" ).animate({
        opacity: 1,
      }, 2000);
      $( "#menu_icon" ).animate({
        opacity: 1,
      }, 2000);
      $( "#home_icon" ).animate({
        opacity: 1,
      }, 2000);
      $( ".chevron_container" ).animate({
        opacity: 1,
      }, 2000);
    });
    }
  );
}

function loadprojects(){
  $(window).scrollTop(0);
  $( "#project_heading" ).css("opacity", "0");
  $( "#project_heading" ).css("padding-top", "0px");
  $( "#project_intro").css("opacity", "0");
  $( ".page_content").css("opacity", "0");
  $( "#project_heading" ).animate({
    opacity: 1,
    paddingTop: 60,
    }, 1000, function() {
    // Animation complete.
    resize();
    $( "#project_intro" ).animate({
      opacity: 1,
    }, 800, function() {
    // Animation complete.
      $( ".page_content" ).animate({
        opacity: 1,
      }, 1000);
    });
    }
  );
}

function loadabout(){
  $(window).scrollTop(0);
  $( "#about_heading" ).css("opacity", "0");
  $( "#about_heading" ).css("padding-top", "0px");
  $( "#about_paragraph").css("opacity", "0");
  $( ".rotating_table").css("opacity", "0");
  $( "#about_heading" ).animate({
    opacity: 1,
    paddingTop: 60,
    }, 1000, function() {
    // Animation complete.
    resize();
    $( "#about_paragraph" ).animate({
      opacity: 1,
    }, 800, function() {
    // Animation complete.
      $( ".rotating_table" ).animate({
        opacity: 1,
      }, 1000);
    });
    }
  );
}

function loadblog(){
  $(window).scrollTop(0);
  $( "#blog_heading" ).css("opacity", "0");
  $( "#blog_heading" ).css("padding-top", "0px");
  $( ".extra_wrapper").css("opacity", "0");
  $( "#blog_heading" ).animate({
    opacity: 1,
    paddingTop: 60,
    }, 1000, function() {
    // Animation complete.
    resize();
    $( ".extra_wrapper" ).animate({
      opacity: 1,
    }, 800);
    }
  );
  
}

function loadresume(){
  $(window).scrollTop(0);
  $( "#resume_heading" ).css("opacity", "0");
  $( "#resume_heading" ).css("padding-top", "0px");
  $( "#resume_box").css("opacity", "0");
  $( "#thanks").css("opacity", "0");
  $( "#resume_heading" ).animate({
    opacity: 1,
    paddingTop: 60,
    }, 1000, function() {
    resize();
    // Animation complete.
    $( "#resume_box" ).animate({
      opacity: 1,
    }, 800);
    $( "#thanks" ).animate({
      opacity: 1,
    }, 800);
    }
  );
}