/*Pour gérer la coordination des fonctions pour switcher les pages*/
/*Les Right et Left c'est pour les sens de la fleche, si c changeImageRight() = on utilise la fleche de droite*/
let fonction1Appelee = false; /*changeImageRight()*/
let fonction2Appelee = false;/*changeImageLeft()*/
let fonction3Appelee = false;/*changeImageRight2To0()*/
let fonction4Appelee = false;/*changeImageLeft2To1()*/
let fonction5Appelee = false;/*changeImageRight0To1()*/
let fonction6Appelee = false;/*changeImageLeft0To2()*/

function changeImageRight() /*image 1 à 2*/
{
    if(!fonction1Appelee)
    {
        var container = document.querySelector(".image-container");
        var images = container.querySelectorAll("img");
        
        for (var i = 1; i < images.length; i++) {
            if (images[i].src.match("https://i.ebayimg.com/images/g/3UQAAOSwroxfeYhm/s-l1600.jpg")) {
                images[i].src = "https://media.senscritique.com/media/000021366045/0/mission_impossible_dead_reckoning_partie_1.jpg";
                console.log("1: changeImageRight()");
                fonction2Appelee = true;/*pour qu'on appel pas les fonctions restantes si la on a bien exécuté la fonction concerné*/
                fonction3Appelee = true;
                fonction4Appelee = true;
                fonction5Appelee = true;
                document.getElementById("type").innerHTML = "Kind : Action";
                document.getElementById("paragraphe1").innerHTML = "<b>Mission Impossible : Christopher McQuarrie 1996-</b>";
                document.getElementById("paragraphe2").innerHTML = "The 'Mission: Impossible' films follow Ethan Hunt and his IMF team in high-stakes espionage missions. Known for intense action and intricate plots, each film sees Hunt facing new adversaries and challenges. With thrilling stunts and twists, the series showcases teamwork and Hunt's resourcefulness in saving the day against impossible odds.";
            } else if (images[i].src.match("https://m.media-amazon.com/images/I/916VtXkyrHL._AC_UF1000,1000_QL80_.jpg")) {
                images[i].src = "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6c2c7ace999b2efa7d6d113f7f3ec49f83722dbd2a22b202ef8028f26a1d0b69._RI_TTW_.jpg";
                document.getElementById("paragraphe3").innerHTML = "<b>John Wick : Chad Stahelski 2014-</b>";
                document.getElementById("paragraphe4").innerHTML = "The 'John Wick' films follow retired hitman John Wick seeking vengeance for his murdered dog and stolen car. Each movie delves into the criminal underworld, where Wick's legendary skills make him a force to be reckoned with. Known for its stylish action and world-building, the series explores themes of honor and the consequences of violence.";
            } else if (images[i].src.match("https://fr.web.img6.acsta.net/medias/nmedia/18/62/84/94/18680369.jpg")) {
                images[i].src = "https://fr.web.img4.acsta.net/pictures/16/06/21/09/42/573260.jpg";
                document.getElementById("paragraphe5").innerHTML = "<b>Jason Bourne : 2002-</b>";
                document.getElementById("paragraphe6").innerHTML = "The 'Jason Bourne' films center on the character, a CIA assassin suffering from amnesia. Bourne uncovers his true identity while evading his former employers. Known for intense action and intricate plots, each film reveals more about Bourne's past and the government's dark secrets. The series showcases Bourne's resourcefulness and determination in seeking the truth and justice.";
            }
        }

    }
}

function changeImageRight2To0() /*change toute l'image, les paragraph et le kind en même temps*/
{
    if(!fonction3Appelee)
    {
        var container = document.querySelector(".image-container");
        var images = container.querySelectorAll("img");
        if(images[1].src.match("https://media.senscritique.com/media/000021366045/0/mission_impossible_dead_reckoning_partie_1.jpg"))
        {
            for(var i = 1;i < images.length;i++)
            {
                if (images[i].src.match("https://media.senscritique.com/media/000021366045/0/mission_impossible_dead_reckoning_partie_1.jpg")) {
                    images[i].src = "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg";
                    /*pour qu'on appel pas les fonctions restantes si la on a bien exécuté la fonction concerné*/
                    console.log("3 : changeImageRight2To0()");
                    fonction4Appelee = true;
                    fonction5Appelee= true;
                    document.getElementById("type").innerHTML = "Kind : Super-Heroes";
                    document.getElementById("paragraphe1").innerHTML = "<b>The Dark Knight : Christopher Nolan 2008</b>";
                    document.getElementById("paragraphe2").innerHTML = "'The Dark Knight' portrays Batman's battle against the Joker, who brings chaos to Gotham. The film explores moral dilemmas as Batman faces the Joker's anarchic philosophy. Harvey Dent's tragic transformation into Two-Face adds depth, challenging notions of justice. Batman ultimately sacrifices his reputation to preserve Gotham's hope.";
                } else if (images[i].src.match("https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6c2c7ace999b2efa7d6d113f7f3ec49f83722dbd2a22b202ef8028f26a1d0b69._RI_TTW_.jpg")) {
                    images[i].src = "https://fr.web.img5.acsta.net/pictures/18/03/16/14/42/0611719.jpg";
                    document.getElementById("paragraphe3").innerHTML = "<b>Avengers Infinity Wars : Anthony and Joe Russo 2018</b>";
                    document.getElementById("paragraphe4").innerHTML = "'Avengers: Infinity War' sees the Avengers unite to stop Thanos from acquiring all Infinity Stones. Thanos succeeds, wiping out half the universe. Heroes face loss and sacrifice, with a devastating cliffhanger as Thanos achieves his goal, leaving the universe in ruins. The film sets the stage for a climactic battle in 'Avengers: Endgame.'";
                } else if (images[i].src.match("https://fr.web.img4.acsta.net/pictures/16/06/21/09/42/573260.jpg")) {
                    images[i].src = "https://musicart.xboxlive.com/7/667e3f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080";
                    document.getElementById("paragraphe5").innerHTML = "<b>Logan : James Mangold 2017</b>";
                    document.getElementById("paragraphe6").innerHTML = "'Logan' follows an aged Wolverine, caring for a dying Professor X while hiding from a world where mutants are nearly extinct. When a young mutant, Laura, enters his life, he must protect her from sinister forces. The film explores themes of redemption and mortality, culminating in a poignant farewell to the Wolverine legacy.";
                    
                }
            }
        }
        fonction3Appelee = true;
    }
    
}


function changeImageLeft()
{
    if(!fonction2Appelee)
    {
        var container = document.querySelector(".image-container");
        var images = container.querySelectorAll("img");
        for(var i = 1;i < images.length;i++)
        {
            if (images[i].src.match("https://i.ebayimg.com/images/g/3UQAAOSwroxfeYhm/s-l1600.jpg")) {
                images[i].src = "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg";
                /*pour qu'on appel pas les fonctions restantes si la on a bien exécuté la fonction concerné*/
                console.log("2: changeImageLeft()");
                fonction3Appelee = true;
                fonction4Appelee = true;
                fonction5Appelee= true;
                document.getElementById("type").innerHTML = "Kind : Super-Heroes";
                document.getElementById("paragraphe1").innerHTML = "<b>The Dark Knight : Christopher Nolan 2008</b>";
                document.getElementById("paragraphe2").innerHTML = "'The Dark Knight' portrays Batman's battle against the Joker, who brings chaos to Gotham. The film explores moral dilemmas as Batman faces the Joker's anarchic philosophy. Harvey Dent's tragic transformation into Two-Face adds depth, challenging notions of justice. Batman ultimately sacrifices his reputation to preserve Gotham's hope.";
            } else if (images[i].src.match("https://m.media-amazon.com/images/I/916VtXkyrHL._AC_UF1000,1000_QL80_.jpg")) {
                images[i].src = "https://fr.web.img5.acsta.net/pictures/18/03/16/14/42/0611719.jpg";
                document.getElementById("paragraphe3").innerHTML = "<b>Avengers Infinity Wars : Anthony and Joe Russo 2018</b>";
                document.getElementById("paragraphe4").innerHTML = "'Avengers: Infinity War' sees the Avengers unite to stop Thanos from acquiring all Infinity Stones. Thanos succeeds, wiping out half the universe. Heroes face loss and sacrifice, with a devastating cliffhanger as Thanos achieves his goal, leaving the universe in ruins. The film sets the stage for a climactic battle in 'Avengers: Endgame.'";
            } else if (images[i].src.match("https://fr.web.img6.acsta.net/medias/nmedia/18/62/84/94/18680369.jpg")) {
                images[i].src = "https://musicart.xboxlive.com/7/667e3f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080";
                document.getElementById("paragraphe5").innerHTML = "<b>Logan : James Mangold 2017</b>";
                document.getElementById("paragraphe6").innerHTML = "'Logan' follows an aged Wolverine, caring for a dying Professor X while hiding from a world where mutants are nearly extinct. When a young mutant, Laura, enters his life, he must protect her from sinister forces. The film explores themes of redemption and mortality, culminating in a poignant farewell to the Wolverine legacy.";
                
            }
        }
        fonction2Appelee = true;
    }
}
function changeImageLeft2To1() /*image 2 à 1*/
{
    if(!fonction4Appelee)
    {
        var container = document.querySelector(".image-container");
        var images = container.querySelectorAll("img");
        
        for (var i = 1; i < images.length; i++) {
            if (images[i].src.match("https://media.senscritique.com/media/000021366045/0/mission_impossible_dead_reckoning_partie_1.jpg")) {
                images[i].src = "https://i.ebayimg.com/images/g/3UQAAOSwroxfeYhm/s-l1600.jpg";
                fonction5Appelee = true;
                console.log("4: changeImageLeft2To1()");
                document.getElementById("type").innerHTML = "Kind : Thriller";
                document.getElementById("paragraphe1").innerHTML = "<b>FightClub : David Fincher 1999</b>";
                document.getElementById("paragraphe2").innerHTML = "'Fight Club' follows an unnamed narrator who creates an underground fight club with Tyler Durden, escalating into Project Mayhem, an anti-establishment movement. The twist reveals Tyler is a manifestation of the narrator's desires. Confronting Tyler, the narrator embraces responsibility. The film ends with societal implications.";
            } else if (images[i].src.match("https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6c2c7ace999b2efa7d6d113f7f3ec49f83722dbd2a22b202ef8028f26a1d0b69._RI_TTW_.jpg")) {
                images[i].src = "https://m.media-amazon.com/images/I/916VtXkyrHL._AC_UF1000,1000_QL80_.jpg";
                document.getElementById("paragraphe3").innerHTML = "<b>Martin Scorsese : 2010</b>";
                document.getElementById("paragraphe4").innerHTML = "'Shutter Island' follows U.S. Marshal Teddy Daniels investigating a disappearance at a mental institution. He unravels a web of deceit, experiencing disturbing visions. The twist reveals he's actually an inmate, Andrew Laeddis, suffering delusions to cope with killing his wife. He chooses to live in ignorance, accepting treatment.";
            } else if (images[i].src.match("https://fr.web.img4.acsta.net/pictures/16/06/21/09/42/573260.jpg")) {
                images[i].src = "https://fr.web.img6.acsta.net/medias/nmedia/18/62/84/94/18680369.jpg";
                document.getElementById("paragraphe5").innerHTML = "<b>The Prestige : Christohper Nolan 2006</b>";
                document.getElementById("paragraphe6").innerHTML = "'The Prestige' follows rival magicians Robert Angier and Alfred Borden in a feud of illusions. Borden's 'Transported Man' trick baffles Angier, who uses Tesla's machine for his own 'real' teleportation. The twist reveals Borden's sacrifice: he has been living as twin brothers. Angier's obsession leads to his death, highlighting the cost of obsession in magic.";
                document.getElementById("type").innerHTML = "Kind : Thriller";
            }
            
        }
        fonction4Appelee = true;
    }
    
}
function changeImageLeft0To2() /*change toute l'image, les paragraph et le kind en même temps*/
{
    if(!fonction6Appelee)
    {
        var container = document.querySelector(".image-container");
        var images = container.querySelectorAll("img");
        for(var i = 1;i < images.length;i++)
        {
            if (images[i].src.match("https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg")) 
            {
                images[i].src = "https://media.senscritique.com/media/000021366045/0/mission_impossible_dead_reckoning_partie_1.jpg";
                fonction5Appelee = true;
                console.log("6 : changeImageLeft0To2()");
                document.getElementById("type").innerHTML = "Kind : Thriller";
                document.getElementById("paragraphe1").innerHTML = "<b>FightClub : David Fincher 1999</b>";
                document.getElementById("paragraphe2").innerHTML = "'Fight Club' follows an unnamed narrator who creates an underground fight club with Tyler Durden, escalating into Project Mayhem, an anti-establishment movement. The twist reveals Tyler is a manifestation of the narrator's desires. Confronting Tyler, the narrator embraces responsibility. The film ends with societal implications.";
            } else if (images[i].src.match("https://fr.web.img5.acsta.net/pictures/18/03/16/14/42/0611719.jpg")) 
            {
                images[i].src = "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6c2c7ace999b2efa7d6d113f7f3ec49f83722dbd2a22b202ef8028f26a1d0b69._RI_TTW_.jpg";
                document.getElementById("paragraphe3").innerHTML = "<b>Martin Scorsese : 2010</b>";
                document.getElementById("paragraphe4").innerHTML = "'Shutter Island' follows U.S. Marshal Teddy Daniels investigating a disappearance at a mental institution. He unravels a web of deceit, experiencing disturbing visions. The twist reveals he's actually an inmate, Andrew Laeddis, suffering delusions to cope with killing his wife. He chooses to live in ignorance, accepting treatment.";
            } 
            else if (images[i].src.match("https://fr.web.img4.acsta.net/pictures/16/06/21/09/42/573260.jpg")) //BUG ICI PAS RESOLU
            {
                images[i].src = "https://fr.web.img6.acsta.net/medias/nmedia/18/62/84/94/18680369.jpg";
                document.getElementById("paragraphe5").innerHTML = "<b>The Prestige : Christohper Nolan 2006</b>";
                document.getElementById("paragraphe6").innerHTML = "'The Prestige' follows rival magicians Robert Angier and Alfred Borden in a feud of illusions. Borden's 'Transported Man' trick baffles Angier, who uses Tesla's machine for his own 'real' teleportation. The twist reveals Borden's sacrifice: he has been living as twin brothers. Angier's obsession leads to his death, highlighting the cost of obsession in magic.";
                
            }
        }
    }
}
function changeImageRight0To1() /*change toute l'image, les paragraph et le kind en même temps*/
{
    if(!fonction5Appelee)
    {
        var container = document.querySelector(".image-container");
        var images = container.querySelectorAll("img");
        for(var i = 1;i < images.length;i++)
        {
            if (images[i].src.match("https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg")) 
            {
                images[i].src = "https://i.ebayimg.com/images/g/3UQAAOSwroxfeYhm/s-l1600.jpg";
                console.log("5 : changeImageRight0To1()");
                document.getElementById("type").innerHTML = "Kind : Thriller";
                document.getElementById("paragraphe1").innerHTML = "<b>FightClub : David Fincher 1999</b>";
                document.getElementById("paragraphe2").innerHTML = "'Fight Club' follows an unnamed narrator who creates an underground fight club with Tyler Durden, escalating into Project Mayhem, an anti-establishment movement. The twist reveals Tyler is a manifestation of the narrator's desires. Confronting Tyler, the narrator embraces responsibility. The film ends with societal implications.";
            } else if (images[i].src.match("https://fr.web.img5.acsta.net/pictures/18/03/16/14/42/0611719.jpg")) 
            {
                images[i].src = "https://m.media-amazon.com/images/I/916VtXkyrHL._AC_UF1000,1000_QL80_.jpg";
                document.getElementById("paragraphe3").innerHTML = "<b>Martin Scorsese : 2010</b>";
                document.getElementById("paragraphe4").innerHTML = "'Shutter Island' follows U.S. Marshal Teddy Daniels investigating a disappearance at a mental institution. He unravels a web of deceit, experiencing disturbing visions. The twist reveals he's actually an inmate, Andrew Laeddis, suffering delusions to cope with killing his wife. He chooses to live in ignorance, accepting treatment.";
            } 
            else if (images[i].src.match("https://musicart.xboxlive.com/7/667e3f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080")) //BUG ICI PAS RESOLU
            {
                console.log("Ceci est un message dans la console !");

                images[i].src = "https://fr.web.img6.acsta.net/medias/nmedia/18/62/84/94/18680369.jpg";
                document.getElementById("paragraphe5").innerHTML = "<b>The Prestige : Christohper Nolan 2006</b>";
                document.getElementById("paragraphe6").innerHTML = "'The Prestige' follows rival magicians Robert Angier and Alfred Borden in a feud of illusions. Borden's 'Transported Man' trick baffles Angier, who uses Tesla's machine for his own 'real' teleportation. The twist reveals Borden's sacrifice: he has been living as twin brothers. Angier's obsession leads to his death, highlighting the cost of obsession in magic.";
                
            }
            console.log(images[i].src);
        }
    }
    /*images[3].src = "https://fr.web.img6.acsta.net/medias/nmedia/18/62/84/94/18680369.jpg";
    document.getElementById("paragraphe5").innerHTML = "<b>The Prestige : Christohper Nolan 2006</b>";
    document.getElementById("paragraphe6").innerHTML = "'The Prestige' follows rival magicians Robert Angier and Alfred Borden in a feud of illusions. Borden's 'Transported Man' trick baffles Angier, who uses Tesla's machine for his own 'real' teleportation. The twist reveals Borden's sacrifice: he has been living as twin brothers. Angier's obsession leads to his death, highlighting the cost of obsession in magic.";
    */
    //alert(images[3].src);
}
function executerFonctions() { /*PB ICI -> Solution = ptet faire executerFonctionsGauche() pour la fleche gauche et ...Droite() pour fleche droit*/
    changeImageRight();
    changeImageLeft();
    changeImageRight2To0();
    changeImageLeft2To1();
    changeImageRight0To1();
    fonction1Appelee = false;
    fonction2Appelee = false;
    fonction3Appelee = false;
    fonction4Appelee = false;
    fonction5Appelee = false;
    console.log(fonction1Appelee);
    console.log(fonction2Appelee);
    console.log(fonction3Appelee);
    console.log(fonction4Appelee);
    console.log(fonction5Appelee);
    console.log(fonction6Appelee);
  }
const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    // Activer le mode nuit
    document.body.classList.add('night-mode');
  } else {
    // Désactiver le mode nuit
    document.body.classList.remove('night-mode');
  }
});

const loupe = document.getElementById('Rechercher');
function ActiverLoupe()
{
    document.body.classList.remove(".sign-in .rechercheBefore");
    document.body.classList.add(".sign-in .recherche");
}
