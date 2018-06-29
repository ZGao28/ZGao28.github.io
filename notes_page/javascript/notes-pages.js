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


async function loadNotes(extension){
    let url = "https://raw.githubusercontent.com/ZGao28/ZGao28.github.io/master/notes_page/programming-notes/"+extension;
    let md = new showdown.Converter();
    var notes = document.getElementsByClassName('notes-section')[0]; 
    var mynotes = 'no notes';
    await $.ajax({
        url: url,
        cache: false,
        error: function () {
            let result = md.makeHtml('# Something went wrong while loading the page. An issue message was sent, please check back later!');
            notes.insertAdjacentHTML('afterbegin', result);
        },
        success: function( data ){
            mynotes = data;
        }
    });

    let result = md.makeHtml(mynotes);
    $('.notes-section').empty();
    notes.insertAdjacentHTML('afterbegin', result);
}
