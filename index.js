/*function changeImage() {
    var images = document.querySelectorAll("img");
    for (var i = 0; i < images.length; i++) {
        if (i == 0) {
            if (images[i].src.match("https://i.ebayimg.com/images/g/3UQAAOSwroxfeYhm/s-l1600.jpg")) {
                images[i].src = "https://image.tmdb.org/t/p/w342/jFuH0md41x5mB4qj5344mSmtHrO.jpg";
            }
        } else if (i == 1) {
            if (images[i].src.match("https://m.media-amazon.com/images/I/916VtXkyrHL._AC_UF1000,1000_QL80_.jpg")) {
                images[i].src = "https://fr.web.img6.acsta.net/pictures/18/10/22/11/41/0937031.jpg";
            }
        } else if (i == 2) {
            if (images[i].src.match("https://fr.web.img6.acsta.net/medias/nmedia/18/62/84/94/18680369.jpg")) {
                images[i].src = "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg";
            }
        }
    }
}*/
/*Liens/image pour catégorie Séries : 

var container = document.querySelector(".image-container");
    var images = container.querySelectorAll("img");
    
    for (var i = 1; i < images.length; i++) {
        if (images[i].src.match("https://i.ebayimg.com/images/g/3UQAAOSwroxfeYhm/s-l1600.jpg")) {
            images[i].src = "https://image.tmdb.org/t/p/w342/jFuH0md41x5mB4qj5344mSmtHrO.jpg";
        } else if (images[i].src.match("https://m.media-amazon.com/images/I/916VtXkyrHL._AC_UF1000,1000_QL80_.jpg")) {
            images[i].src = "https://fr.web.img6.acsta.net/pictures/18/10/22/11/41/0937031.jpg";
        } else if (images[i].src.match("https://fr.web.img6.acsta.net/medias/nmedia/18/62/84/94/18680369.jpg")) {
            images[i].src = "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg";
        }
    }
    */


function changeImageRight() {
    var container = document.querySelector(".image-container");
    var images = container.querySelectorAll("img");
    
    for (var i = 1; i < images.length; i++) {
        if (images[i].src.match("https://i.ebayimg.com/images/g/3UQAAOSwroxfeYhm/s-l1600.jpg")) {
            images[i].src = "https://media.senscritique.com/media/000021366045/0/mission_impossible_dead_reckoning_partie_1.jpg";
        } else if (images[i].src.match("https://m.media-amazon.com/images/I/916VtXkyrHL._AC_UF1000,1000_QL80_.jpg")) {
            images[i].src = "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6c2c7ace999b2efa7d6d113f7f3ec49f83722dbd2a22b202ef8028f26a1d0b69._RI_TTW_.jpg";
        } else if (images[i].src.match("https://fr.web.img6.acsta.net/medias/nmedia/18/62/84/94/18680369.jpg")) {
            images[i].src = "https://fr.web.img4.acsta.net/pictures/16/06/21/09/42/573260.jpg";
        }
    }
}
function changeParagraphRight()
{
    document.getElementById("paragraphe1").innerHTML = "<b>Mission Impossible : Christopher McQuarrie 1996-</b>";
    document.getElementById("paragraphe2").innerHTML = "The 'Mission: Impossible' films follow Ethan Hunt and his IMF team in high-stakes espionage missions. Known for intense action and intricate plots, each film sees Hunt facing new adversaries and challenges. With thrilling stunts and twists, the series showcases teamwork and Hunt's resourcefulness in saving the day against impossible odds.";
    document.getElementById("paragraphe3").innerHTML = "<b>John Wick : Chad Stahelski 2014-</b>";
    document.getElementById("paragraphe4").innerHTML = "The 'John Wick' films follow retired hitman John Wick seeking vengeance for his murdered dog and stolen car. Each movie delves into the criminal underworld, where Wick's legendary skills make him a force to be reckoned with. Known for its stylish action and world-building, the series explores themes of honor and the consequences of violence.";
    document.getElementById("paragraphe5").innerHTML = "<b>Jason Bourne : 2002-</b>";
    document.getElementById("paragraphe6").innerHTML = "The 'Jason Bourne' films center on the character, a CIA assassin suffering from amnesia. Bourne uncovers his true identity while evading his former employers. Known for intense action and intricate plots, each film reveals more about Bourne's past and the government's dark secrets. The series showcases Bourne's resourcefulness and determination in seeking the truth and justice.";
    
}

function changeKindRight()
{
    document.getElementById("type").innerHTML = "Kind : Action";
}

function changeImageLeft()
{
    var container = document.querySelector(".image-container");
    var images = container.querySelectorAll("img");
    for(var i = 1;i < images.length;i++)
    {
        if (images[i].src.match("https://i.ebayimg.com/images/g/3UQAAOSwroxfeYhm/s-l1600.jpg")) {
            images[i].src = "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg";
        } else if (images[i].src.match("https://m.media-amazon.com/images/I/916VtXkyrHL._AC_UF1000,1000_QL80_.jpg")) {
            images[i].src = "https://fr.web.img5.acsta.net/pictures/18/03/16/14/42/0611719.jpg";
        } else if (images[i].src.match("https://fr.web.img6.acsta.net/medias/nmedia/18/62/84/94/18680369.jpg")) {
            images[i].src = "https://musicart.xboxlive.com/7/667e3f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080";
        }
    }
}
function changeParagraphLeft()
{
    document.getElementById("paragraphe1").innerHTML = "<b>The Dark Knight : Christopher Nolan 2008</b>";
    document.getElementById("paragraphe2").innerHTML = "'The Dark Knight' portrays Batman's battle against the Joker, who brings chaos to Gotham. The film explores moral dilemmas as Batman faces the Joker's anarchic philosophy. Harvey Dent's tragic transformation into Two-Face adds depth, challenging notions of justice. Batman ultimately sacrifices his reputation to preserve Gotham's hope.";
    document.getElementById("paragraphe3").innerHTML = "<b>Avengers Infinity Wars : Anthony and Joe Russo 2018</b>";
    document.getElementById("paragraphe4").innerHTML = "'Avengers: Infinity War' sees the Avengers unite to stop Thanos from acquiring all Infinity Stones. Thanos succeeds, wiping out half the universe. Heroes face loss and sacrifice, with a devastating cliffhanger as Thanos achieves his goal, leaving the universe in ruins. The film sets the stage for a climactic battle in 'Avengers: Endgame.'";
    document.getElementById("paragraphe5").innerHTML = "<b>Logan : James Mangold 2017</b>";
    document.getElementById("paragraphe6").innerHTML = "'Logan' follows an aged Wolverine, caring for a dying Professor X while hiding from a world where mutants are nearly extinct. When a young mutant, Laura, enters his life, he must protect her from sinister forces. The film explores themes of redemption and mortality, culminating in a poignant farewell to the Wolverine legacy.";
    
}

function changeKindLeft()
{
    document.getElementById("type").innerHTML = "Kind : Super-Heroes";
}