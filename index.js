/*Pour gérer la coordination des fonctions pour switcher les pages*/
/*Les Right et Left c'est pour les sens de la fleche, si c changeImageRight() = on utilise la fleche de droite*/
let fonction1AppeleeR = false; /*changeImageRight()*/
let fonction2AppeleeR = false;/*changeImageRight2To0()*/
let fonction3AppeleeR = false;/*changeImageRight0To1()*/
let fonction1AppeleeL = false;/*changeImageLeft()*/
let fonction2AppeleeL = false;/*changeImageLeft0To2()*/
let fonction3AppeleeL = false;/*changeImageLeft2To1()*/

function changeImageRight() /*image 1 à 2*/
{
    if(!fonction1AppeleeR)
    {
        var container = document.querySelector(".image-container");
        var images = container.querySelectorAll("img");
        
        for (var i = 1; i < images.length; i++) {
            if (images[i].src.match("https://i.ebayimg.com/images/g/3UQAAOSwroxfeYhm/s-l1600.jpg")) {
                images[i].src = "https://media.senscritique.com/media/000021366045/0/mission_impossible_dead_reckoning_partie_1.jpg";
                console.log("1: changeImageRight()");
                fonction2AppeleeR = true;/*pour qu'on appel pas les fonctions restantes si la on a bien exécuté la fonction concerné*/
                fonction3AppeleeR = true;
                
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
    if(!fonction2AppeleeR)
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
                    console.log("2 : changeImageRight2To0()");
                    fonction3AppeleeR = true;
                
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
    }
    
}


function changeImageLeft()
{
    if(!fonction1AppeleeL)
    {
        var container = document.querySelector(".image-container");
        var images = container.querySelectorAll("img");
        for(var i = 1;i < images.length;i++)
        {
            if (images[i].src.match("https://i.ebayimg.com/images/g/3UQAAOSwroxfeYhm/s-l1600.jpg")) {
                images[i].src = "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg";
                /*pour qu'on appel pas les fonctions restantes si la on a bien exécuté la fonction concerné*/
                console.log("1: changeImageLeft()");
                fonction2AppeleeL = true;
                fonction3AppeleeL = true;
                
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
        
    }
}
function changeImageLeft2To1() /*image 2 à 1*/
{
    if(!fonction3AppeleeL)
    {
        var container = document.querySelector(".image-container");
        var images = container.querySelectorAll("img");
        
        for (var i = 1; i < images.length; i++) {
            if (images[i].src.match("https://media.senscritique.com/media/000021366045/0/mission_impossible_dead_reckoning_partie_1.jpg")) {
                images[i].src = "https://i.ebayimg.com/images/g/3UQAAOSwroxfeYhm/s-l1600.jpg";
                
                console.log("3: changeImageLeft2To1()");
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
        
    }
    
}
function changeImageLeft0To2() /*change toute l'image, les paragraph et le kind en même temps*/
{
    if(!fonction2AppeleeL)
    {
        var container = document.querySelector(".image-container");
        var images = container.querySelectorAll("img");
        for(var i = 1;i < images.length;i++)
        {
            if (images[i].src.match("https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg")) 
            {
                images[i].src = "https://media.senscritique.com/media/000021366045/0/mission_impossible_dead_reckoning_partie_1.jpg";
                
                console.log("2 : changeImageLeft0To2()");
                fonction3AppeleeL = true;
                document.getElementById("type").innerHTML = "Kind : Action";
                document.getElementById("paragraphe1").innerHTML = "<b>Mission Impossible : Christopher McQuarrie 1996-</b>";
                document.getElementById("paragraphe2").innerHTML = "The 'Mission: Impossible' films follow Ethan Hunt and his IMF team in high-stakes espionage missions. Known for intense action and intricate plots, each film sees Hunt facing new adversaries and challenges. With thrilling stunts and twists, the series showcases teamwork and Hunt's resourcefulness in saving the day against impossible odds.";
            } else if (images[i].src.match("https://fr.web.img5.acsta.net/pictures/18/03/16/14/42/0611719.jpg")) 
            {
                images[i].src = "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6c2c7ace999b2efa7d6d113f7f3ec49f83722dbd2a22b202ef8028f26a1d0b69._RI_TTW_.jpg";
                document.getElementById("paragraphe3").innerHTML = "<b>John Wick : Chad Stahelski 2014-</b>";
                document.getElementById("paragraphe4").innerHTML = "The 'John Wick' films follow retired hitman John Wick seeking vengeance for his murdered dog and stolen car. Each movie delves into the criminal underworld, where Wick's legendary skills make him a force to be reckoned with. Known for its stylish action and world-building, the series explores themes of honor and the consequences of violence.";
            } 
            else if (images[i].src.match("https://musicart.xboxlive.com/7/667e3f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080")) //BUG ICI PAS RESOLU
            {
                images[i].src = "https://fr.web.img4.acsta.net/pictures/16/06/21/09/42/573260.jpg";
                document.getElementById("paragraphe5").innerHTML = "<b>Jason Bourne : 2002-</b>";
                document.getElementById("paragraphe6").innerHTML = "The 'Jason Bourne' films center on the character, a CIA assassin suffering from amnesia. Bourne uncovers his true identity while evading his former employers. Known for intense action and intricate plots, each film reveals more about Bourne's past and the government's dark secrets. The series showcases Bourne's resourcefulness and determination in seeking the truth and justice.";
            }
            console.log(i+": "+images[i].src);
        }
        images[3].src = "https://fr.web.img4.acsta.net/pictures/16/06/21/09/42/573260.jpg";
        document.getElementById("paragraphe5").innerHTML = "<b>Jason Bourne : 2002-</b>";
        document.getElementById("paragraphe6").innerHTML = "The 'Jason Bourne' films center on the character, a CIA assassin suffering from amnesia. Bourne uncovers his true identity while evading his former employers. Known for intense action and intricate plots, each film reveals more about Bourne's past and the government's dark secrets. The series showcases Bourne's resourcefulness and determination in seeking the truth and justice.";
    }
}
function changeImageRight0To1() /*change toute l'image, les paragraph et le kind en même temps*/
{
    if(!fonction3AppeleeR)
    {
        var container = document.querySelector(".image-container");
        var images = container.querySelectorAll("img");
        for(var i = 1;i < images.length;i++)
        {
            if (images[i].src.match("https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg")) 
            {
                images[i].src = "https://i.ebayimg.com/images/g/3UQAAOSwroxfeYhm/s-l1600.jpg";
                console.log("3 : changeImageRight0To1()");
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
        images[3].src = "https://fr.web.img6.acsta.net/medias/nmedia/18/62/84/94/18680369.jpg";
        document.getElementById("paragraphe5").innerHTML = "<b>The Prestige : Christohper Nolan 2006</b>";
        document.getElementById("paragraphe6").innerHTML = "'The Prestige' follows rival magicians Robert Angier and Alfred Borden in a feud of illusions. Borden's 'Transported Man' trick baffles Angier, who uses Tesla's machine for his own 'real' teleportation. The twist reveals Borden's sacrifice: he has been living as twin brothers. Angier's obsession leads to his death, highlighting the cost of obsession in magic.";
    }
}

function executerFonctionsRight()
{
    changeImageRight();
    changeImageRight2To0();
    changeImageRight0To1();
    fonction1AppeleeR = false;
    fonction2AppeleeR = false;
    fonction3AppeleeR = false;
}
function executerFonctionsLeft()
{
    changeImageLeft();
    changeImageLeft0To2();
    changeImageLeft2To1();
    fonction1AppeleeL = false;
    fonction2AppeleeL = false;
    fonction3AppeleeL = false;
}
//Fin partie Movies

//Debut partie Series
let Seriesfonction1AppeleeR = false; /*changeImageRight()*/
let Seriesfonction2AppeleeR = false;/*changeImageRight2To0()*/
let Seriesfonction3AppeleeR = false;/*changeImageRight0To1()*/
let Seriesfonction1AppeleeL = false;/*changeImageLeft()*/
let Seriesfonction2AppeleeL = false;/*changeImageLeft0To2()*/
let Seriesfonction3AppeleeL = false;/*changeImageLeft2To1()*/
function SerieschangeImageRight() /*image 1 à 2*/
{
    if(!Seriesfonction1AppeleeR)
    {
        var container = document.querySelector(".image-containerSeries");
        var images = container.querySelectorAll("img");
        
        for (var i = 1; i < images.length; i++) {
            if (images[i].src.match("Reacher.jpg")) {
                images[i].src = "onepiece.webp";
                console.log("1: SerieschangeImageRight()");
                Seriesfonction2AppeleeR = true;/*pour qu'on appel pas les fonctions restantes si la on a bien exécuté la fonction concerné*/
                Seriesfonction3AppeleeR = true;
                
                document.getElementById("Seriestype").innerHTML = "Kind : Action";
                document.getElementById("Seriesparagraphe1").innerHTML = "<b>One Piece : Eichiro Oda 2023-</b>";
                document.getElementById("Seriesparagraphe2").innerHTML = "The live-action 'One Piece' film is an adaptation of the popular manga and anime series. It follows Monkey D. Luffy and his pirate crew, the Straw Hat Pirates, on their quest for the legendary One Piece treasure. With vibrant characters, epic battles, and a sense of adventure, the film captures the spirit of the beloved series, bringing the world of pirates and Devil Fruits to life on the big screen.";
            } else if (images[i].src.match("You.jpg")) {
                images[i].src = "thelastofus.jpg";
                document.getElementById("Seriesparagraphe3").innerHTML = "<b>The Last Of Us : 2023-</b>";
                document.getElementById("Seriesparagraphe4").innerHTML = "'The Last of Us' series follows Joel and Ellie in a post-apocalyptic world ravaged by a fungal infection. Tasked with escorting Ellie, who may hold the key to a cure, they navigate dangerous territories and face moral dilemmas. The series explores their evolving bond amidst survival, loss, and the dark nature of humanity.";
            } else if (images[i].src.match("GameOfThrones.jpg")) {
                images[i].src = "thenightagent.webp";
                document.getElementById("Seriesparagraphe5").innerHTML = "<b>The Night Agent : Seth Gordon 2023-</b>";
                document.getElementById("Seriesparagraphe6").innerHTML = "'The Night Agent' series on Netflix follows FBI agent Jack Dunlap as he uncovers a dangerous conspiracy within the government. Jack navigates a web of deception and betrayal, struggling to uncover the truth while protecting his family. The series delves into espionage, political intrigue, and the personal sacrifices made in the pursuit of justice.";
            }
            console.log(images[i].src);
        }
    }
}
function SerieschangeImageRight2To0() /*change toute l'image, les paragraph et le kind en même temps*/
{
    if(!Seriesfonction2AppeleeR)
    {
        var container = document.querySelector(".image-containerSeries");
        var images = container.querySelectorAll("img");
        if(images[1].src.match("onepiece.webp"))
        {
            for(var i = 1;i < images.length;i++)
            {
                if (images[i].src.match("onepiece.webp")) {
                    images[i].src = "theboys.jpg";
                    /*pour qu'on appel pas les fonctions restantes si la on a bien exécuté la fonction concerné*/
                    console.log("2 : SerieschangeImageRight2To0()");
                    Seriesfonction3AppeleeR = true;
                    document.getElementById("Seriestype").innerHTML = "Kind : Super-Heroes";
                    document.getElementById("Seriesparagraphe1").innerHTML = "<b>The Boys : 2019-</b>";
                    document.getElementById("Seriesparagraphe2").innerHTML = "'The Boys' series explores a world where superheroes, managed by a corporation, often abuse their powers. A group, The Boys, led by Billy Butcher, seeks to expose and take down corrupt heroes. The series delves into themes of power, celebrity, and morality, showcasing the darker side of superhero culture through its gritty and satirical lens.";
                } else if (images[i].src.match("thelastofus.jpg")) {
                    images[i].src = "loki.jpg";
                    document.getElementById("Seriesparagraphe3").innerHTML = "<b>Loki : Kate Herron 2021-2023</b>";
                    document.getElementById("Seriesparagraphe4").innerHTML = "'Loki' follows the God of Mischief after the events of 'Avengers: Endgame', where he escapes with the Tesseract. Captured by the Time Variance Authority (TVA), Loki is tasked with fixing timeline disruptions. The series explores identity, fate, and multiverse concepts, with Loki confronting versions of himself and challenging the TVA's authority.";
                } else if (images[i].src.match("thenightagent.webp")) {
                    images[i].src = "supermanetlois.webp";
                    document.getElementById("Seriesparagraphe5").innerHTML = "<b>Superman And Lois : 2021-</b>";
                    document.getElementById("Seriesparagraphe6").innerHTML = "'Superman and Lois' follows Clark Kent/Superman and Lois Lane as they navigate the challenges of parenthood with their teenage sons, Jonathan and Jordan. The series balances family drama with superhero action, exploring Clark's dual identity and the complexities of raising super-powered children in Smallville. It delves into themes of legacy, responsibility, and the pressures of heroism.";    
                }
            }
        }
    }
    
}
function SerieschangeImageRight0To1() /*change toute l'image, les paragraph et le kind en même temps*/
{
    if(!Seriesfonction3AppeleeR)
    {
        var container = document.querySelector(".image-containerSeries");
        var images = container.querySelectorAll("img");
        for(var i = 1;i < images.length;i++)
        {
            if (images[i].src.match("theboys.jpg")) 
            {
                images[i].src = "Reacher.jpg";
                console.log("3 : SerieschangeImageRight0To1()");
                document.getElementById("Seriestype").innerHTML = "Kind : Thriller";
                document.getElementById("Seriesparagraphe1").innerHTML = "<b>Reacher : M.J.Bassett 2022</b>";
                document.getElementById("Seriesparagraphe2").innerHTML = "The 'Jack Reacher' series follows ex-military police officer Jack Reacher, a nomadic drifter and relentless investigator. Each book features Reacher stumbling into dangerous situations, using his wits and combat skills to solve mysteries and deliver justice. The series showcases Reacher's moral code, intelligence, and physical prowess in thrilling and suspenseful plots.";
            } else if (images[i].src.match("loki.jpg")) 
            {
                images[i].src = "You.jpg";
                document.getElementById("Seriesparagraphe3").innerHTML = "<b>You : 2018-</b>";
                document.getElementById("Seriesparagraphe4").innerHTML = "'You' follows bookstore manager Joe Goldberg, who becomes obsessed with women and resorts to extreme measures for love. Season 1 sees his fixation on Guinevere Beck, leading to manipulation and murder. Season 2 with Love Quinn explores his darker tendencies. The series delves into toxic love, identity, and societal commentary.";
            } 
            else if (images[i].src.match("supermanetlois.webp")) //BUG ICI PAS RESOLU
            {
                console.log("Ceci est un message dans la console !");

                images[i].src = "GameOfThrones.jpg";
                document.getElementById("Seriesparagraphe5").innerHTML = "<b>Game of Thrones : 2011-2019</b>";
                document.getElementById("Seriesparagraphe6").innerHTML = "'Game of Thrones' depicts the power struggles among noble families in the fictional continents of Westeros and Essos. Focused on the Iron Throne, key families vie for control amidst supernatural threats and political intrigue. The series culminates in the battle against the White Walkers and the ultimate quest for rulership, revealing unexpected alliances and betrayals.";
            }
            console.log(images[i].src);
        }
        images[3].src = "GameOfThrones.jpg";
        document.getElementById("Seriesparagraphe5").innerHTML = "<b>Game of Thrones : 2011-2019</b>";
        document.getElementById("Seriesparagraphe6").innerHTML = "'Game of Thrones' depicts the power struggles among noble families in the fictional continents of Westeros and Essos. Focused on the Iron Throne, key families vie for control amidst supernatural threats and political intrigue. The series culminates in the battle against the White Walkers and the ultimate quest for rulership, revealing unexpected alliances and betrayals.";
    }
}
function SerieschangeImageLeft() /*image 1 à 0*/
{
    if(!Seriesfonction1AppeleeL)
    {
        var container = document.querySelector(".image-containerSeries");
        var images = container.querySelectorAll("img");
        
        for (var i = 1; i < images.length; i++) {
            if (images[i].src.match("Reacher.jpg")) {
                images[i].src = "theboys.jpg";
                console.log("1: SerieschangeImageLeft()");
                Seriesfonction2AppeleeL = true;/*pour qu'on appel pas les fonctions restantes si la on a bien exécuté la fonction concerné*/
                Seriesfonction3AppeleeL = true;
                
                document.getElementById("Seriestype").innerHTML = "Kind : Super-Heroes";
                document.getElementById("Seriesparagraphe1").innerHTML = "<b>The Boys : 2019-</b>";
                document.getElementById("Seriesparagraphe2").innerHTML = "'The Boys' series explores a world where superheroes, managed by a corporation, often abuse their powers. A group, The Boys, led by Billy Butcher, seeks to expose and take down corrupt heroes. The series delves into themes of power, celebrity, and morality, showcasing the darker side of superhero culture through its gritty and satirical lens.";
            } else if (images[i].src.match("You.jpg")) {
                images[i].src = "loki.jpg";
                document.getElementById("Seriesparagraphe3").innerHTML = "<b>Loki : Kate Herron 2021-2023</b>";
                document.getElementById("Seriesparagraphe4").innerHTML = "'Loki' follows the God of Mischief after the events of 'Avengers: Endgame', where he escapes with the Tesseract. Captured by the Time Variance Authority (TVA), Loki is tasked with fixing timeline disruptions. The series explores identity, fate, and multiverse concepts, with Loki confronting versions of himself and challenging the TVA's authority.";
            } else if (images[i].src.match("GameOfThrones.jpg")) {
                images[i].src = "supermanetlois.webp";
                document.getElementById("Seriesparagraphe5").innerHTML = "<b>Superman And Lois : 2021-</b>";
                document.getElementById("Seriesparagraphe6").innerHTML = "'Superman and Lois' follows Clark Kent/Superman and Lois Lane as they navigate the challenges of parenthood with their teenage sons, Jonathan and Jordan. The series balances family drama with superhero action, exploring Clark's dual identity and the complexities of raising super-powered children in Smallville. It delves into themes of legacy, responsibility, and the pressures of heroism.";
            }
        }

    }
}
function SerieschangeImageLeft0To2() /*change toute l'image, les paragraph et le kind en même temps*/
{
    if(!Seriesfonction2AppeleeL)
    {
        var container = document.querySelector(".image-containerSeries");
        var images = container.querySelectorAll("img");
        for(var i = 1;i < images.length;i++)
        {
            if (images[i].src.match("theboys.jpg")) 
            {
                images[i].src = "onepiece.webp";
                console.log("2 : SerieschangeImageLeft0To2()");
                document.getElementById("Seriestype").innerHTML = "Kind : Action";
                document.getElementById("Seriesparagraphe1").innerHTML = "<b>One Piece : Eichiro Oda 2023-</b>";
                document.getElementById("Seriesparagraphe2").innerHTML = "The live-action 'One Piece' film is an adaptation of the popular manga and anime series. It follows Monkey D. Luffy and his pirate crew, the Straw Hat Pirates, on their quest for the legendary One Piece treasure. With vibrant characters, epic battles, and a sense of adventure, the film captures the spirit of the beloved series, bringing the world of pirates and Devil Fruits to life on the big screen.";
                Seriesfonction3AppeleeL = true;
            } else if (images[i].src.match("loki.jpg")) 
            {
                images[i].src = "thelastofus.jpg";
                document.getElementById("Seriesparagraphe3").innerHTML = "<b>The Last Of Us : 2023-</b>";
                document.getElementById("Seriesparagraphe4").innerHTML = "'The Last of Us' series follows Joel and Ellie in a post-apocalyptic world ravaged by a fungal infection. Tasked with escorting Ellie, who may hold the key to a cure, they navigate dangerous territories and face moral dilemmas. The series explores their evolving bond amidst survival, loss, and the dark nature of humanity.";
            } 
            else if (images[i].src.match("supermanetlois.webp")) //BUG ICI PAS RESOLU
            {
                console.log("Ceci est un message dans la console !");

                images[i].src = "thenightagent.webp";
                document.getElementById("Seriesparagraphe5").innerHTML = "<b>The Night Agent : Seth Gordon 2023-</b>";
                document.getElementById("Seriesparagraphe6").innerHTML = "'The Night Agent' series on Netflix follows FBI agent Jack Dunlap as he uncovers a dangerous conspiracy within the government. Jack navigates a web of deception and betrayal, struggling to uncover the truth while protecting his family. The series delves into espionage, political intrigue, and the personal sacrifices made in the pursuit of justice.";
            }
            console.log(images[i].src);
        }
        images[3].src = "thenightagent.webp";
        document.getElementById("Seriesparagraphe5").innerHTML = "<b>The Night Agent : Seth Gordon 2023-</b>";
        document.getElementById("Seriesparagraphe6").innerHTML = "'The Night Agent' series on Netflix follows FBI agent Jack Dunlap as he uncovers a dangerous conspiracy within the government. Jack navigates a web of deception and betrayal, struggling to uncover the truth while protecting his family. The series delves into espionage, political intrigue, and the personal sacrifices made in the pursuit of justice.";
    }
}
function SerieschangeImageLeft2To1() /*change toute l'image, les paragraph et le kind en même temps*/
{
    if(!Seriesfonction3AppeleeL)
    {
        var container = document.querySelector(".image-containerSeries");
        var images = container.querySelectorAll("img");
        if(images[1].src.match("onepiece.webp"))
        {
            for(var i = 1;i < images.length;i++)
            {
                if (images[i].src.match("onepiece.webp")) {
                    images[i].src = "Reacher.jpg";
                    /*pour qu'on appel pas les fonctions restantes si la on a bien exécuté la fonction concerné*/
                    console.log("3 : SerieschangeImageLeft2To1()");
                    document.getElementById("Seriestype").innerHTML = "Kind : Thriller";
                    document.getElementById("Seriesparagraphe1").innerHTML = "<b>Reacher : M.J.Bassett 2022</b>";
                    document.getElementById("Seriesparagraphe2").innerHTML = "The 'Jack Reacher' series follows ex-military police officer Jack Reacher, a nomadic drifter and relentless investigator. Each book features Reacher stumbling into dangerous situations, using his wits and combat skills to solve mysteries and deliver justice. The series showcases Reacher's moral code, intelligence, and physical prowess in thrilling and suspenseful plots.";
                } else if (images[i].src.match("thelastofus.jpg")) {
                    images[i].src = "You.jpg";
                    document.getElementById("Seriesparagraphe3").innerHTML = "<b>You : 2018-</b>";
                    document.getElementById("Seriesparagraphe4").innerHTML = "'You' follows bookstore manager Joe Goldberg, who becomes obsessed with women and resorts to extreme measures for love. Season 1 sees his fixation on Guinevere Beck, leading to manipulation and murder. Season 2 with Love Quinn explores his darker tendencies. The series delves into toxic love, identity, and societal commentary.";
                } else if (images[i].src.match("thenightagent.webp")) {
                    images[i].src = "GameOfThrones.jpg";
                    document.getElementById("Seriesparagraphe5").innerHTML = "<b>Game of Thrones : 2011-2019</b>";
                    document.getElementById("Seriesparagraphe6").innerHTML = "'Game of Thrones' depicts the power struggles among noble families in the fictional continents of Westeros and Essos. Focused on the Iron Throne, key families vie for control amidst supernatural threats and political intrigue. The series culminates in the battle against the White Walkers and the ultimate quest for rulership, revealing unexpected alliances and betrayals.";    
                }
            }
        }
    }
    
}
function SeriesexecuterFonctionsRight()
{
    SerieschangeImageRight();
    SerieschangeImageRight2To0();
    SerieschangeImageRight0To1();
    Seriesfonction1AppeleeR = false;
    Seriesfonction2AppeleeR = false;
    Seriesfonction3AppeleeR = false;
}
function SeriesexecuterFonctionsLeft()
{
    SerieschangeImageLeft();
    SerieschangeImageLeft0To2();
    SerieschangeImageLeft2To1();
    Seriesfonction1AppeleeL = false;
    Seriesfonction2AppeleeL = false;
    Seriesfonction3AppeleeL = false;
}
//Fin Series
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
/*Fonctionne pas encore
const loupe = document.getElementById('Rechercher'); 
function ActiverLoupe()
{
    document.body.classList.remove(".sign-in .rechercheBefore");
    document.body.classList.add(".sign-in .recherche");
}*/
function toggleSearch() {
    var searchBar = document.getElementById("searchBar");
    searchBar.style.display = (searchBar.style.display === "block") ? "none" : "block";
  }
