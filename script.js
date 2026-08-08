// =========================
// MUSIC
// =========================

const music =
    document.getElementById("backgroundMusic");

let isPlaying = false;


// =========================
// ENTER GALLERY
// =========================

function enterGallery() {

    music.play();

    isPlaying = true;

    document.getElementById("entrance").style.animation =
        "fadeOut 1s ease forwards";


    setTimeout(function () {

        document.getElementById("entrance").style.display =
            "none";

        document.getElementById("gallery").style.display =
            "block";

        window.scrollTo(0, 0);

    }, 900);
}


// =========================
// MUSIC BUTTON
// =========================

function toggleMusic() {

    if (isPlaying) {

        music.pause();

        isPlaying = false;

        document.getElementById("musicButton").textContent =
            "🔇";

    } else {

        music.play();

        isPlaying = true;

        document.getElementById("musicButton").textContent =
            "♫";
    }
}


// =========================
// ARTWORK INFORMATION
// =========================

const artworks = {

    1: {

        image: "images/us1.jpeg",

        title: "Our Beginning",

        year: "01",

        letter: `
            <p>Dear my love,</p>

            <p>
                Happy birthday to the person who
                makes my days brighter and my heart
                happier.
            </p>

            <p>
                I made this little museum especially
                for you because I wanted to keep our
                memories somewhere special.
            </p>

            <p>
                This picture reminds me of the
                beautiful beginning of our story.
            </p>

            <p>
                Thank you for becoming one of the
                most beautiful parts of my life.
            </p>

            <p class="signature">
                With all my love,<br>
                Your Love ♡
            </p>
        `
    },


    2: {

        image: "images/us2.jpeg",

        title: "A Beautiful Moment",

        year: "02",

        letter: `
            <p>To my love,</p>

            <p>
                Some moments are ordinary,
                but somehow they become special
                when I spend them with you.
            </p>

            <p>
                This is one of those memories
                that I will always want to keep.
            </p>

            <p>
                I hope we continue making many
                more memories together.
            </p>

            <p class="signature">
                I love you always. ♡
            </p>
        `
    },


    3: {

        image: "images/us3.jpeg",

        title: "With You",

        year: "03",

        letter: `
            <p>My love,</p>

            <p>
                Being with you makes even the
                simplest days feel meaningful.
            </p>

            <p>
                Thank you for every laugh,
                every conversation, and every
                little moment we share.
            </p>

            <p>
                You are someone I will always
                be grateful for.
            </p>

            <p class="signature">
                Forever grateful for you. ♡
            </p>
        `
    },


    4: {

        image: "images/us4.jpeg",

        title: "One Of My Favorites",

        year: "04",

        letter: `
            <p>Happy birthday, my love.</p>

            <p>
                This picture is one of the memories
                that I want to keep close to my heart.
            </p>

            <p>
                Looking at it reminds me of how
                lucky I am to have experienced
                these moments with you.
            </p>

            <p>
                I hope this little gallery makes
                you smile today.
            </p>

            <p class="signature">
                I love you so much. ♡
            </p>
        `
    },


    5: {

        image: "images/us5.jpeg",

        title: "Our Little Moments",

        year: "05",

        letter: `
            <p>To my favorite person,</p>

            <p>
                It is not always the big moments
                that matter the most.
            </p>

            <p>
                Sometimes it is the little things,
                the random conversations, the laughs,
                and simply being together.
            </p>

            <p>
                Those are the moments I treasure.
            </p>

            <p class="signature">
                Always yours. ♡
            </p>
        `
    },


    6: {

        image: "images/us6.jpeg",

        title: "Always You",

        year: "06",

        letter: `
            <p>My love,</p>

            <p>
                Through all the memories we have
                made, one thing remains the same:
                I am always happy that it is you.
            </p>

            <p>
                Thank you for being someone who
                makes my world feel a little warmer.
            </p>

            <p>
                I hope your birthday is as special
                as you are to me.
            </p>

            <p class="signature">
                Always you. ♡
            </p>
        `
    },


    7: {

        image: "images/us7.jpeg",

        title: "Forever",

        year: "07",

        letter: `
            <p>Happy birthday, my love.</p>

            <p>
                If I could put every memory we have
                into this little museum, I would.
            </p>

            <p>
                These seven pictures are only a
                small part of our story, but every
                one of them means something to me.
            </p>

            <p>
                Thank you for being part of my life
                and for giving me so many moments
                worth remembering.
            </p>

            <p>
                I hope we get to create many,
                many more memories together.
            </p>

            <p class="signature">
                Happy birthday, my love.<br><br>
                I love you. ♡
            </p>
        `
    }

};


// =========================
// OPEN ARTWORK
// =========================

function openArtwork(number) {

    const artwork = artworks[number];


    document.getElementById("detailImage").src =
        artwork.image;


    document.getElementById("detailTitle").textContent =
        artwork.title;


    document.getElementById("detailYear").textContent =
        artwork.year;


    document.getElementById("letterText").innerHTML =
        artwork.letter;


    document.getElementById("gallery").style.display =
        "none";


    document.getElementById("artworkPage").style.display =
        "block";


    window.scrollTo(0, 0);
}


// =========================
// BACK TO WALL
// =========================

function backToGallery() {

    document.getElementById("artworkPage").style.display =
        "none";


    document.getElementById("gallery").style.display =
        "block";


    window.scrollTo(0, 0);
}