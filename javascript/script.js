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
    var h = String(window.screen.height).concat("px");
    $(".word").css("left", String(((window.innerWidth-$(".word").width())/2)-20).concat("px"));
    $("#background_div").css('height', h);
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


function scrollfunc(s, b){
    if (in_transition == false && $(".modal").css("display")=="none") {
      if (s == 0) {
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
        $("#menu_icon").attr("src", "./src/menu_icon_black.png");
          $("#home_icon").attr("src", "./src/logo_black.png");
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
      }, 250);
    }
}

var backgroundState = 1;

function loadhome() {
  $("#name").css("opacity", "0");
  $("#name").css("margin-top", "80px");
  $("#welcome").css("opacity", "0");
  $("#welcome").css("letterSpacing", "0px");
  $(".nf").css("opacity", "0");
  $(".social_media_white").css("width", "0px");
  $(".circle").css("opacity", "0");
  $(".circle").css("background-color", "white");
  if (backgroundState != 0) {
    $("#background_div").animate(
      {
        height: window.screen.height
      },
      1200
    );
    $("#background_div2").animate(
      {
        height: 0
      },
      1200,
      function() {
        backgroundState = 0;
        resize();
        $("#name").animate(
          {
            opacity: 1,
            marginTop: 150
          },
          1000,
          function() {
            // Animation complete.
            $(".social_media_white").animate(
              {
                width: 30
              }, 800
            );
            $("#welcome").animate(
              {
                opacity: 1,
                letterSpacing: "20px"
              },
              800,
              function() {
                resize();
                $(".circle").animate({
                  opacity: 1
                }, 1000);
                // Animation complete.
                $(".n").animate(
                  {
                    opacity: 1
                  },
                  2000
                );
                $(".nn").animate(
                  {
                    opacity: 1
                  },
                  2000
                );
                $("#menu_icon").animate(
                  {
                    opacity: 1
                  },
                  2000
                );
                $("#home_icon").animate(
                  {
                    opacity: 1
                  },
                  2000,
                );
                $(".nf").animate(
                  {
                    opacity: 1
                  }, 1000);
              }
            );
          }
        );
      }
    );
  } else {
    $("#name").animate(
      {
        opacity: 1,
        marginTop: 180
      },
      1000,
      function() {
        $(".social_media_white").animate(
          {
            width: 30
          }, 800
        );
        // Animation complete.
        $("#welcome").animate(
          {
            opacity: 1,
            letterSpacing: "20px"
          },
          800,
          function() {
            resize();
            $(".circle").animate({
              opacity: 1
            }, 1000);
            // Animation complete.
            $(".n").animate(
              {
                opacity: 1
              },
              2000
            );
            $(".nn").animate(
              {
                opacity: 1
              },
              2000
            );
            $("#menu_icon").animate(
              {
                opacity: 1
              },
              2000
            );
            $("#home_icon").animate(
              {
                opacity: 1
              },
              2000
            );
            $(".nf").animate(
              {
                opacity: 1
              }, 1000);
            $(".chevron_container").animate(
              {
                opacity: 1
              },
              2000,
              function() {
                $("#home_page").css("overflow", "auto");
              }
            );
          }
        );
      }
    );
  }
}

function loadprojects() {
  $(document).scrollTop(0);
  $("#project_page").css("overflow", "hidden");
  $("#project_heading").css("opacity", "0");
  $("#project_heading").css("padding-top", "0px");
  $("#project_intro").css("opacity", "0");
  $(".page_content").css("opacity", "0");
  $(".nf").css("opacity", "0");
  $(".circle").css("opacity", "0");
  $(".circle").css("background-color", "rgb(30, 20, 80)");
  if (backgroundState != 1) {
    $("#background_div").animate(
      {
        height: 0
      },
      1200
    );
    $("#background_div2").animate(
      {
        height: window.screen.height
      },
      1200,
      function() {
        backgroundState = 1;
        $("#project_heading").animate(
          {
            opacity: 1,
            paddingTop: 60
          },
          1000,
          function() {
            // Animation complete.
            resize();
            $("#project_intro").animate(
              {
                opacity: 1
              },
              300,
              function() {
                $(".circle").animate({
                  opacity: 1
                }, 1000);
                $(".nf").animate(
                  {
                    opacity: 1
                  }, 1000);
                // Animation complete.
                $(".page_content").animate(
                  {
                    opacity: 1
                  },
                  500,
                  function() {
                    $("#project_page").css("overflow", "auto");
                  }
                );
              }
            );
          }
        );
      }
    );
  } else {
    $("#project_heading").animate(
      {
        opacity: 1,
        paddingTop: 60
      },
      1000,
      function() {
        // Animation complete.
        resize();
        $("#project_intro").animate(
          {
            opacity: 1
          },
          300,
          function() {
            $(".circle").animate({
              opacity: 1
            }, 1000);
            $(".nf").animate(
              {
                opacity: 1
              }, 1000);
            // Animation complete.
            $(".page_content").animate(
              {
                opacity: 1
              },
              500,
              function() {
                $("#project_page").css("overflow", "auto");
              }
            );
          }
        );
      }
    );
  }
}

function loadabout() {
  $(document).scrollTop(0);
  $("#about_page").css("overflow", "hidden");
  $("#about_heading").css("opacity", "0");
  $("#about_heading").css("padding-top", "0px");
  $("#about_paragraph").css("opacity", "0");
  $(".rotating_table").css("opacity", "0");
  $(".nf").css("opacity", "0");
  $(".circle").css("opacity", "0");
  $(".circle").css("background-color", "#507DBC");
  if (backgroundState != 1) {
    $("#background_div").animate(
      {
        height: 0
      },
      1200
    );
    $("#background_div2").animate(
      {
        height: window.screen.height
      },
      1200,
      function() {
        backgroundState = 1;
        $("#about_heading").animate(
          {
            opacity: 1,
            paddingTop: 60
          },
          1000,
          function() {
            $(".circle").animate({
              opacity: 1
            }, 1000);
            // Animation complete.
            resize();
            $("#about_paragraph").animate(
              {
                opacity: 1
              },
              300,
              function() {
                $(".nf").animate(
                  {
                    opacity: 1
                  }, 1000);
                // Animation complete.
                $(".rotating_table").animate(
                  {
                    opacity: 1
                  },
                  500,
                  function() {
                    $("#about_page").css("overflow", "auto");
                  }
                );
              }
            );
          }
        );
      }
    );
  } else {
    $("#about_heading").animate(
      {
        opacity: 1,
        paddingTop: 60
      },
      1000,
      function() {
        // Animation complete.
        resize();
        $("#about_paragraph").animate(
          {
            opacity: 1
          },
          300,
          function() {
            $(".circle").animate({
              opacity: 1
            }, 1000);
            $(".nf").animate(
              {
                opacity: 1
              }, 1000);
            // Animation complete.
            $(".rotating_table").animate(
              {
                opacity: 1
              },
              500,
              function() {
                $("#about_page").css("overflow", "auto");
              }
            );
          }
        );
      }
    );
  }
}

function loadblog() {
  $(document).scrollTop(0);
  $("#blog_page").css("overflow", "hidden");
  $("#blog_heading").css("opacity", "0");
  $("#blog_heading").css("padding-top", "0px");
  $(".extra_wrapper").css("opacity", "0");
  $(".nf").css("opacity", "0");
  $(".circle").css("opacity", "0");
  $(".circle").css("background-color", "rgb(50, 55, 135)");
  if (backgroundState != 1) {
    $("#background_div").animate(
      {
        height: 0
      },
      1200
    );
    $("#background_div2").animate(
      {
        height: window.screen.height
      },
      1200,
      function() {
        backgroundState = 1; 
        $("#blog_heading").animate(
          {
            opacity: 1,
            paddingTop: 60
          },
          1000,
          function() {
            $(".circle").animate({
              opacity: 1
            }, 1000);
            // Animation complete.
            resize();
            $(".nf").animate(
              {
                opacity: 1
              }, 1000);
            $(".extra_wrapper").animate(
              {
                opacity: 1
              },
              800,
              function() {
                $("#blog_page").css("overflow", "auto");
              }
            );
          }
        );
      }
    );
  } else {
    $("#blog_heading").animate(
      {
        opacity: 1,
        paddingTop: 60
      },
      1000,
      function() {
        $(".circle").animate({
          opacity: 1
        }, 1000);
        // Animation complete.
        resize();
        $(".nf").animate(
          {
            opacity: 1
          }, 1000);
        $(".extra_wrapper").animate(
          {
            opacity: 1
          },
          800,
          function() {
            $("#blog_page").css("overflow", "auto");
          }
        );
      }
    );
  }
}

function loadresume() {
  $(document).scrollTop(0);
  $("#resume_page").css("overflow", "hidden");
  $("#resume_heading").css("opacity", "0");
  $("#resume_heading").css("padding-top", "0px");
  $("#resume_box").css("opacity", "0");
  $("#thanks").css("opacity", "0");
  $(".circle").css("opacity", "0");
  $(".circle").css("background-color", "rgb(30, 20, 80)");
  if (backgroundState != 1) {
    $("#background_div").animate(
      {
        height: 0
      },
      1200
    );
    $("#background_div2").animate(
      {
        height: window.screen.height
      },
      1200,
      function() {
        backgroundState = 1;
        $("#resume_heading").animate(
          {
            opacity: 1,
            paddingTop: 60
          },
          1000,
          function() {
            $(".circle").animate({
              opacity: 1
            }, 1000);
            resize();
            // Animation complete.
            $("#resume_box").animate(
              {
                opacity: 1
              },
              300
            );
            $("#thanks").animate(
              {
                opacity: 1
              },
              500,
              function() {
                $("#resume_page").css("overflow", "auto");
              }
            );
          }
        );
      }
    );
  } else {
    $("#resume_heading").animate(
      {
        opacity: 1,
        paddingTop: 60
      },
      1000,
      function() {
        resize();
        // Animation complete.
        $(".circle").animate({
          opacity: 1
        }, 1000);
        $("#resume_box").animate(
          {
            opacity: 1
          },
          300
        );
        $("#thanks").animate(
          {
            opacity: 1
          },
          500,
          function() {
            $("#resume_page").css("overflow", "auto");
          }
        );
      }
    );
  }
}

function closemodal(){
  $(".modal").animate({
    height: "0%",
  }, 500, function(){
    $(".modal").css("display", "none");
  });
  $("#close_modal").css("display", "none");
  $("#project_page").css("display", "block");
  loadprojects();
}

function openmodal(s) {
  $("#project_page").css("display", "none");
  $(".modal").css("display", "block");
  $("#close_modal").css("display", "block");
  $(".modal").animate(
    {
      height: "100%"
    },
    1000
  );
  if (s == 0) {
    $(".modal_image").attr("src", "./src/tutorzone_logo.png");
    $(".modal_name").text("TutorZone");
    $(".summary").text(
      "A Convenient and Unique Tutoring Platform!"
    );
    $("#about_des").html(
      "There are lots of tutoring companies out there in the world, but according to many fellow students, they all provided a miserable experience. <i>'It took 3 phone calls and 5 days before I could actually meet up with anyone. Then they charged me a hefty price all while making me travel almost and hour to reach the tutor.'</i> TutorZone aims to remove all the hassle and waiting time by providing an online platform where tutors and students can sign up and meet instantly. Students will be able to book an available time on the tutor's calendar and also suggest a meeting location."
    );
    $("#tech_des").html(
      "Web Stack: React.js, PHP, MySQL <br><br>Mobile Stack: Mobile App not yet Confirmed"
    );
    $("#team_des").html(
      "Essam Aboukoube <br><br>Zi Gao <br><br>Anthony Aoun"
    );
    $("#status_des").html("Under Progress - Code is in Private Repo on Bitbucket");
  } else if (s == 1) {
    $(".modal_image").attr("src", "./src/lynqup_logo.png");
    $(".modal_name").text("LynqUp");
    $(".summary").text(
      "A New Social Media Platform With a Goal to Simplify The Way We Connect!"
    );
    $("#about_des").html(
      "LynqUp promotes in-person social interactions. Our goal is to drastically increase the amount of time people spend together in real life, as opposed to over a technical medium like Facebook or SnapChat It is apparent that our society has shifted away from enjoying each other's company in person, but a lot of the time this is because it is much more convenient to connect online. There is also the fact that companies gamify social interactions and also induces high dopamine levels, actions that are hard to acheive in real life interactions. <br><br> LynqUp is aiming to remedy all these problems by making it easier for people to meet up and hang out together,  all while gamifying the interaction process and making it as fun and exciting as possible. There will be a mobile application as well as a web application that runs in browsers for pc use.  LynqUp is currently a startup project run by a team of software engineering students at the University of Ottawa. Unfortunately due to the nature of this project I am unable to release any specifics, but if you are interested in joining the LynqUp team, want to sponsor us, or just want to find out more about this amazing platform feel free to contact me!"
    );
    $("#tech_des").html(
      "Web Stack: React.js, Node.js, Express, MySQL <br><br>Mobile Stack: React Native, TBD"
    );
    $("#team_des").html(
      "Zi Gao <br><br>Anthony Aoun <br> <br>Marc Frame<br><br>Owen Anderson<br><br>Elliot Barbeau<br><br>Simon Gaudert<br><br>Cindy Huang"
    );
    $("#status_des").html("Under Progress - Code is in Private Repo on Bitbucket");
  } else if (s == 2) {
    $(".modal_image").attr("src", "./src/zigao_io.jpg");
    $(".modal_name").text("ZiGao.io");
    $(".summary").text(
      "My personal portfolio website :) !"
    );
    $("#about_des").html(
      "ZiGao.io was created as a cool place for me to showcase some of my projects and include a small introduction to myself. I mostly worked on this site as a hobby and didn't devote too much effort into it. I like to draw out website UIs in my free time - this project actually started with me being bored one day and sketching out some designs. I'd like to have my blog and notes sites up soon as well, as soon as I have some more free time!"
    );
    $("#tech_des").html(
      "HTML, CSS, jQuery <br><br> No Backend or Mobile App Required Yippee!"
    );
    $("#team_des").html(
      "Zi Gao <br><br>Cindy Huang"
    );
    $("#status_des").html("Completed! - Code and Design Docs can be Found at <a href='https://github.com/ZGao28/zigao_io'>This Repo</a>");
  } else if (s == 3) {
    $(".modal_image").attr("src", "./src/readr_logo.png");
    $(".modal_name").text("ReadR");
    $(".summary").text(
      "A Neural Network That Reads Things"
    );
    $("#about_des").html(
      "Since everyone is getting on the machine learning hype train I thought I would too. My goal with this project is to build from scratch using TensorFlow, a neural network that can read text in multiple languages. I hope for it to also be able to read graphs, equations, even emojis. The final product will include an interface where the user can upload or take a picture of text, and ReadR will convert that picture into selectable text. An additional thing I want to eventually add is for ReadR to actually read aloud the text! <br><br> Originally I came up with the idea of this side project in Fall 2017 and started playing around with things then. I have since realized that some features of this project are currently way above my skill level so I've put this project on hold for now. Currently it is able to decipher numbers well and characters occasionally. I am definitely coming back to this project soon, and I am currently taking machine learning courses on Coursera. While there are probably many versions of my project already out there and many APIs I could use, I'm doing everything from scratch myself as this project mostly for learning as AI and neural nets have always been a subject of fascination for me."
    );
    $("#tech_des").html(
      "Python, TensorFlow"
    );
    $("#team_des").html(
      "Zi Gao"
    );
    $("#status_des").html("Under Progress");
  } else if (s == 4) {
    $(".modal_image").attr("src", "./src/virtual_logo.png");
    $(".modal_name").text("Virtual Fighterz");
    $(".summary").text(
      "The Classic Street Fighter Game With a Modern Twist"
    );
    $("#about_des").html(
      "How cool would it be for there to be a kinect version of street fighters where you could do move around with your actual body and hit things, perform combos, and challenge other players? I think that's every kids dream at some point in life, or at least it was mine, so that counts for something right? <br> <br> Virtual Fighterz was my rendition of street fighters on kinect, albiet a very low budget version. I used the webcam on laptops and image processing to track the players key joints (wrist, elbow, waist, etc). The player had to wear colored a few motion trackers which are calibrated at the beginning of the game. There was a one player mode where the player has to either jump, duck or punch to destroy obstacles coming at them. I also implemented a two player mode via network connection. The collision algorithm was particularly difficult to figure out due the skewed polygons acting as the players body parts. In the end everything worked out well with minimal bugs, but I didn't have time to replace the shapes with actual body sprites. I will be going back to fix up this project some time and maybe even release it!"
    );
    $("#tech_des").html(
      "Processing (Essentially a Java Wrapper/Library)"
    );
    $("#team_des").html(
      "Zi Gao"
    );
    $("#status_des").html("Completed! - Code can be Found at <a href='https://github.com/ZGao28/Virtual-Fighterz'>This Repo</a>");
  } else if (s == 5) {
    $(".modal_image").attr("src", "./src/soccerbuds_logo.png");
    $(".modal_name").text("Soccer Buds");
    $(".summary").text(
      "A Not For Profit Youth Soccer Camp!"
    );
    $("#about_des").html(
      "One of my friends really likes playing soccer and also really likes giving back to the community. He told me he was starting a non-profit soccer camp to improve the community and brighten the lives of children who may not be able to afford a real soccer camp. As soon as I heard I jumped onboard, and with my poor foot-eye coordination, I was moved off field and instead tasked with making a website for kids to sign up and learn more about the camp."
    );
    $("#tech_des").html(
      "Web Stack: HTML/CSS, jQuery, PHP"
    );
    $("#team_des").html(
      "Zi Gao <br><br> Simon Gaudert"
    );
    $("#status_des").html("Completed! - Just waiting on a couple of team pictures - Website will be up soon at <a href='https://soccerbudsorleans.com'>Soccerbudsorleans.com</a>");
  } else if (s == 6) {
    $(".modal_image").attr("src", "./src/arduino_logo.png");
    $(".modal_name").text("Arduino Projects");
    $(".summary").text(
      "A Bunch of Small but Cool Arduino Projects"
    );
    $("#about_des").html(
      "I was fortunate enough to have a robotics class offered by my high school and also very fortunate that I had an awesome teacher who provided us with arduino chips and cool project ideas. Most of these projects below were done in class, and we did a lot of them so I'm only showcasing the more interesting ones! My teammate and I actually recorded a lot of video demonstrations for our gadgets on our <a href='https://www.youtube.com/user/Mmoub1'> YouTube Channel</a>. Also, check out my teacher Mr. Young's website <a href='https://trypto.com'> here</a>. He posts some cool tech related discussions on his home page.<br><br><br><br><br><br><i class='em em-car'></i><br><br><b>Autonomous Vehicle</b><br><br>One project that was done was a simple autonomous vehicle. We connected the circuits and added parts to a wood-cut car chassis. Then we coded a simple detection algorithm using two IROS sensors for the car to determine whether it was driving on the road or not, and adjust it's positioning accordingly. Then as a bonus we added an object detection algorithm for it to detect objects in front of it and maneuver around it.<br><br><br> <br><br><br><i class='em em-video_game'></i><br><br><b>Game Box</b><br><br>For this one we combined an Arduino Uno, a small breadboard, a nokia screen, a small speaker, a couple of push buttons, 2 scrollable knobs, a couble of LED lights and a wooden box to make a custom handheld gaming console! We coded and added in our own mini arcade games like space invaders and pong.<br><br><br><br><br><br><i class='em em-hammer_and_wrench'></i><br><br><b>Claw Machine</b><br><br>For this project we made a wooden claw with 3 servo motors as joints to give it 3 axis of rotation and a lot of maneuverbility. This claw was then mounted on top of the wooden car used for the autonomous vehicle. Both the claw and the vehicle were wireslessly controlled using a Wii Nunchuck and RF Communications. You can control it to pick up stuff and move it, build a block tower, etc."
    );
    $("#tech_des").html(
      "Arduino, C++, Processing"
    );
    $("#team_des").html(
      "Zi Gao <br><br>Mohammed Moubarak"
    );
    $("#status_des").html("Always Updating - All Projects Mentioned Are Completed");
  } else if (s == 7) {
    $(".modal_image").attr("src", "./src/school_logo.png");
    $(".modal_name").text("School Projects");
    $(".summary").text(
      "Cool Projects Done in School"
    );
    $("#about_des").html(
      "I also completed a lot of smaller coding projects for school, mainly for the classes ICS3U and ICS4U. A lot of them I found to be really neat so I'm showcasing some below.<br><br><br><br><br><br><i class='em em-checkered_flag'></i><br><br><b>Game of Lyfe</b><br><br>Game of Lyfe is based off Conway's Game of Life (not the board game 'Life'!). Basically it's a game in which cells that are either alive or dead follow a bunch of rules, and is used to model a bunch of things in real life. You can read the <a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'>Wikipedia Article Here </a>. My version of it allows you to modify the rule sets and alter the speed of progression. You can check out the code in <a href='https://github.com/ZGao28/Game_Of_Lyfe'>this Repo</a>.<br><br><br><br><br><br><i class='em em-heavy_division_sign'></i><br><br><b>Mini Desmos</b><br><br>Nothing too much to explain here, basically a very simple version of Desmos the graphing calculator. It has little amounts of functionalities compared to the real thing but it was fun to work on. Code is available in <a href='https://github.com/ZGao28/mini_desmos'>this Repo</a>.<br><br><br><br><br><br><i class='em em-x'></i><br><br><b>Tic Tac Toe</b><br><br>Basically this project was a simple tic tac toe game that I made with a single player and two player mode. The single player mode had 4 levels of difficulty ranging from easy to impossible in which I implemented my own algorithm that at least tied the player but also tried to win for itself. It was fun to study a little bit about game theory in this project. Unfortunately the code for this project got deleted so it's no longer up on my GitHub."
    );
    $("#tech_des").html(
      "Processing"
    );
    $("#team_des").html(
      "Zi Gao"
    );
    $("#status_des").html("Always Updating - All Projects Mentioned Are Completed");
  } else if (s == 8) {
    $(".modal_image").attr("src", "./src/misc_logo.png");
    $(".modal_name").text("Miscellaneous Projects");
    $(".summary").text(
      "Projects That I Worked on in my Free Time and From Hackathons"
    );
    $("#about_des").html(
      "This is just place that contains a random mish mash of projects I've worked on but didn't get it's own page. I'm going to a lot of hackathons soon so this will be a place for those mini-projects and pitches.<br><br><br><br><br><br><br><i class='em em-hourglass'></i><br><br><b>Time Dash</b><br><br>This was probably the first real app that I made, and the only one to make it onto the Google Play Store thus far. It is a level based adventure platformer game, coded in Java using Android Studio. I brought together a small team of coder friends and we worked on it a few summers ago. The end product wasn't very high quality, but we learned a lot from all the mistakes and failures we went through. It was more to test the waters with native app development. The Repo is made public and can be found <a href='https://github.com/ZGao28/TimeDash'>Here</a>.<br><br><br><br><br><br><i class='em em-lower_left_paintbrush'></i><br><br><b>Zym-Strap</b><br><br>Zym-Strap is basically a super light weight boot-strap with custom themes for colours and the feel of the elements. My friend Marc and I worked on this together to get better with HTML/CSS and jQuery. Marc is currently working on a landing page website for Zym-Strap using Zym-Strap. You'll be able to download it there, but for now the code can be viewed in <a href='https://github.com/MarcDAFrame/ZYM-Strap'>this Repo</a>."
    );
    $("#tech_des").html(
      "Java, Android Studio, HTML/CSS, jQuery, Other Stuff"
    );
    $("#team_des").html(
      "Zi Gao <br><br>Justin Wong<br><br>Solomon Davidson<br><br>Cindy Huang<br><br>Mark Frame"
    );
    $("#status_des").html("Always Updating - All Projects Mentioned Are Completed");
  }

}


var carouselState=0;
function updatecarousel(direction){
  if(direction == 0){
    if (carouselState==0){
      carouselState = 2;
    } else {
      carouselState--;
    }
  } else {
    if(carouselState==2){
      carouselState = 0;
    }else{
      carouselState++;
    }
  }
  console.log(carouselState);

  if (carouselState==0){
    $("#project_pic_1").attr("src", "./src/tutorzone_logo.png");
    $("#project_pic_2").attr("src", "./src/lynqup_logo.png");
    $("#project_pic_3").attr("src", "./src/zigao_io.jpg");
    $("#project_pic_1").attr("onclick", "openmodal(0)");
    $("#project_pic_2").attr("onclick", "openmodal(1)");
    $("#project_pic_3").attr("onclick", "openmodal(2)");
    $("#project_name_1").text("TUTORZONE");
    $("#project_name_2").text("LYNQUP");
    $("#project_name_3").text("ZIGAO.IO");
    $("#p1").css("color", "#507DBC");
    $("#p2").css("color", "rgb(40, 20, 80)");
    $("#p3").css("color", "rgb(40, 20, 80)");
  } else if (carouselState==1){
    $("#project_pic_1").attr("src", "./src/readr_logo.png");
    $("#project_pic_2").attr("src", "./src/virtual_logo.png");
    $("#project_pic_3").attr("src", "./src/soccerbuds_logo.png");
    $("#project_pic_1").attr("onclick", "openmodal(3)");
    $("#project_pic_2").attr("onclick", "openmodal(4)");
    $("#project_pic_3").attr("onclick", "openmodal(5)");
    $("#project_name_1").text("READR");
    $("#project_name_2").text("V.FIGHTERZ");
    $("#project_name_3").text("SOCCERBUDS");
    $("#p2").css("color", "#507DBC");
    $("#p3").css("color", "rgb(40, 20, 80)");
    $("#p1").css("color", "rgb(40, 20, 80)");
  } else if (carouselState==2){
    $("#project_pic_1").attr("src", "./src/arduino_logo.png");
    $("#project_pic_2").attr("src", "./src/school_logo.png");
    $("#project_pic_3").attr("src", "./src/misc_logo.png");
    $("#project_pic_1").attr("onclick", "openmodal(6)");
    $("#project_pic_2").attr("onclick", "openmodal(7)");
    $("#project_pic_3").attr("onclick", "openmodal(8)");
    $("#project_name_1").text("ARDUINO");
    $("#project_name_2").text("SCHOOL");
    $("#project_name_3").text("MISC.");
    $("#p3").css("color", "#507DBC");
    $("#p2").css("color", "rgb(40, 20, 80)");
    $("#p1").css("color", "rgb(40, 20, 80)");
  }
}
  
function initCircles(){
  var s = Math.random()*15+5;
  var circle1 = {
    height: s,
    width: s,
    ypos: Math.random()*window.screen.height,
    xpos: Math.random()*window.screen.width,
    yvel: Math.random()*1+0.5
  }
  s = Math.random()*15+10;
  var circle2 = {
    height: s,
    width: s,
    ypos: Math.random()*window.screen.height,
    xpos: Math.random()*window.screen.width,
    yvel: Math.random()*1+0.5
  }
  s = Math.random()*15+10;
  var circle3 = {
    height: s,
    width: s,
    ypos: Math.random()*window.screen.height,
    xpos: Math.random()*window.screen.width,
    yvel: Math.random()*1+0.5
  }
  s = Math.random()*15+10;
  var circle4 = {
    height: s,
    width: s,
    ypos: Math.random()*window.screen.height,
    xpos: Math.random()*window.screen.width,
    yvel: Math.random()*1+0.5
  }
  s = Math.random()*15+10;
  var circle5 = {
    height: s,
    width: s,
    ypos: Math.random()*window.screen.height,
    xpos: Math.random()*window.screen.width,
    yvel: Math.random()*1+0.5
  }
  s = Math.random()*15+10;
  var circle6 = {
    height: s,
    width: s,
    ypos: Math.random()*window.screen.height,
    xpos: Math.random()*window.screen.width,
    yvel: Math.random()*1+0.5
  }
  var circles = [circle1, circle2, circle3, circle4, circle5, circle6];
  for (i = 1; i < 7; i++){
    $("#circle".concat(String(i))).css("height", String(circles[i-1].height).concat("px"));
    $("#circle".concat(String(i))).css("width", String(circles[i-1].width).concat("px"));
    $("#circle".concat(String(i))).css("bottom", String(circles[i-1].ypos).concat("px"));
    $("#circle".concat(String(i))).css("left", String(circles[i-1].xpos).concat("px"));
  }

  var animate = setInterval(function(){
    for (i = 0; i < 6; i++){
      circles[i].ypos += circles[i].yvel;
      if (circles[i].ypos >= window.screen.height){
        circles[i].ypos = 0+40;
        circles[i].xpos= Math.random()*window.screen.width;
        circles[i].yvel= Math.random()*1+0.5;
      } else if (circles[i].ypos <= 0){
        circles[i].ypos= window.screen.height-40;
      }
      $("#circle".concat(String(i+1))).css("bottom", String(circles[i].ypos).concat("px"));
      $("#circle".concat(String(i+1))).css("left", String(circles[i].xpos).concat("px"));
    }
  }, 10);
}



