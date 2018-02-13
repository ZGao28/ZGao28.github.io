function scrollfunc(){
  
    if ($('#main_img')[0].getBoundingClientRect().top <= 50 && $('#menu_icon').css("display") == 'none'){
      $('#headerBar').css("background-color", "rgba(12, 16, 20, 0.9)");
      $('.navTab').css("color", "white");
    } else {
      $('#headerBar').css("background-color", "transparent");
      $('.navTab').css("color", "black");
    }
  }

  function openNav(){
    var home = document.getElementById("homeTab");
    var programming = document.getElementById("programmingTab");
    var math = document.getElementById("mathTab");
    var science = document.getElementById("scienceTab");
    var main = document.getElementById("mainTab");
    var blog = document.getElementById("blogTab");
    if ($("#menu_icon").attr("src") == "./menu_gif.gif"){
      $("#menu_icon").attr("src", "./close_gif.gif");
        home.className = "dropdownBtn";
        programming.className = "dropdownBtn";
        math.className = "dropdownBtn";
        science.className = "dropdownBtn";
        main.className = "dropdownBtn";
        blog.className = "dropdownBtn";
    } else {
      $("#menu_icon").attr("src", "./menu_gif.gif");
        home.className = "invis";
        programming.className = "invis";
        math.className = "invis";
        science.className = "invis";
        main.className = "invis";
        blog.className = "invis";
    }
  }
  function resizefunc(){
    var home = document.getElementById("homeTab");
    var programming = document.getElementById("programmingTab");
    var math = document.getElementById("mathTab");
    var science = document.getElementById("scienceTab");
    var main = document.getElementById("mainTab");
    var blog = document.getElementById("blogTab");
    if (window.innerWidth >= 768){
      home.className = "navTab";
      programming.className = "navTab";
      math.className = "navTab";
      science.className = "navTab";
      main.className = "navTab";
      blog.className = "navTab";
      $("#menu_icon").attr("src", "./menu_icon_black.png");
    } else {
      home.className = "invis";
      programming.className = "invis";
      math.className = "invis";
      science.className = "invis";
      main.className = "invis";
      blog.className = "invis";
    }
  }