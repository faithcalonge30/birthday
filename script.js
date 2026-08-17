/* =====================================
   BACKGROUND MUSIC
===================================== */

const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");


/* =====================================
   ENTER GALLERY
===================================== */

function enterGallery() {

    const entrance = document.getElementById("entrance");
    const gallery = document.getElementById("gallery");

    entrance.classList.add("hidden");
    gallery.classList.add("active");

    backgroundMusic.volume = 0.35;

    backgroundMusic.play().catch(() => {
        console.log("Music needs to be started manually.");
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================
   MUSIC BUTTON
===================================== */

function toggleMusic() {

    if (backgroundMusic.paused) {

        backgroundMusic.play();

        musicButton.textContent = "♫";

    } else {

        backgroundMusic.pause();

        musicButton.textContent = "🔇";
    }
}


/* =====================================
   LETTERS
===================================== */

const letters = {

    1: `
        <p><strong>Dear Ella,</strong></p>

        <p>
        Happy birthday, my Ella! I personally made and coded this little
        gallery just for you. I wanted to create something simple but
        special, something you can always come back to whenever you miss
        me or just want to smile a little. I hope that every part of this
        feels personal, because it truly is. Every line, every detail,
        was made with you in mind.
        </p>

        <p>
        I just want you to know how grateful I am that you exist in my
        life. You've brought so much warmth, comfort, and happiness into
        my days in ways I can't even fully explain. Loving you has been
        one of the most beautiful things I've ever experienced, and I
        wouldn't trade it for anything in the world.
        </p>

        <p>
        As you step into this new chapter of your life, I hope it's filled
        with so much joy, peace, and growth. I hope you get closer to your
        dreams, discover new things about yourself, and continue becoming
        the amazing person you already are. No matter what happens or how
        far life takes you, I'll always be here for you, supporting you,
        believing in you, and celebrating every single win, no matter how
        small.
        </p>

        <p>
        And on the hard days, I hope you remember that you are loved
        deeply, not just by me, but by the people who are lucky enough to
        know you. You are enough, just as you are.
        </p>

        <p>
        Happy birthday, my baby. You deserve all the love, happiness, and
        beautiful things this world has to offer. I love you so much. ♡
        </p>
    `,


    2: `
        <p><strong>Hey baby,</strong></p>

        <p>
        In this letter, I just want to remind you that you're already
        enough. Walang hihigit sa mga “300 reasons why I love you” na
        ginagawa nila sa TikTok, dahil walang hangganan ang mga rason
        kung bakit kita minahal, at kung bakit patuloy kitang minamahal.
        </p>

        <p>
        I love you for the little things you probably don't even notice
        about yourself. I love the way you talk, the way you laugh, the
        way you get excited about the things you love, and even the little
        habits that you probably think are annoying. I love you not because
        you're perfect, but because you're you.
        </p>

        <p>
        So please, kung dumating man sa panahon na nafefeel mong hindi ka
        enough, never feel like you have to change yourself just to be
        worthy of love. You don't have to be prettier, smarter, stronger,
        or better than anyone else. You don't have to compare yourself to
        other people or wonder if you're doing enough. For me, you have
        always been enough.
        </p>

        <p>
        And if there are days when you forget how special you are, I hope
        this little gallery reminds you. There is someone here who sees
        you, appreciates you, chooses you, and loves you more than words
        could ever properly explain. I appreciate you a lot.
        </p>

        <p>
        I could write a thousand reasons, then another thousand after
        that, and I still wouldn't be finished. Because loving you was
        never about having a list of reasons. It's simply something my
        heart keeps choosing, every single day.
        </p>

        <p>
        I love you always. 
        </p>
    `,


    3: `
    <p>
        <strong>And lastly,</strong>
    </p>

    <p>
        Thank you for being part of my life and for making ordinary
        moments feel so special. Thank you for all the little things
        you do, the laughs we share, the random conversations, the
        quiet moments, and even the days when we don’t really do
        anything but somehow, being with you still makes everything
        feel better.
    </p>

    <p>
        I hope we continue creating many beautiful memories together.
        I hope there will be more places we get to see, more things we
        get to experience, more pictures we get to take, more silly
        moments we get to laugh about, and more birthdays we get to
        celebrate together.
    </p>

    <p>
        I know life won’t always be perfect, and there will be days
        when things get difficult, but I hope that through everything,
        we continue choosing each other and finding our way back to
        the little things that made us fall in love in the first place.
    </p>

    <p>
        When you look back at this little gallery someday, I hope you
        don’t just see pictures and letters. I hope you see how much
        love was put into every little detail, and I hope it reminds
        you of how special you are to me.
    </p>

    <p>
        Thank you for letting me love you, for trusting me with your
        heart, and for being someone I can call my home. I’m so grateful
        for every memory we’ve made so far, and I’m even more excited
        for all the memories we haven’t made yet.
    </p>

    <p>
        No matter how many pictures we take or how many memories we
        create, I know I’ll always want more time with you.
    </p>

    <p>
        <strong>I love you always.</strong>
        <br>
        And I’ll keep choosing you, loving you, and making memories
        with you, one moment at a time.
    </p>
    `
};


/* =====================================
   ARTWORK INFORMATION
===================================== */

const artworks = {

    1: {
        image: "images/us3.jpeg",
        title: "1"
    },

    2: {
        image: "images/us4.jpeg",
        title: "2"
    },

    3: {
        image: "images/us5.jpeg",
        title: "3"
    }

};


/* =====================================
   OPEN ARTWORK
===================================== */

function openArtwork(number) {

    const artworkPage = document.getElementById("artworkPage");
    const gallery = document.getElementById("gallery");

    const detailImage = document.getElementById("detailImage");
    const detailTitle = document.getElementById("detailTitle");
    const letterText = document.getElementById("letterText");

    const artwork = artworks[number];


    /* Click animation */

    detailImage.style.opacity = "0";
    detailImage.style.transform = "scale(0.9)";


    /* Hide gallery */

    gallery.classList.remove("active");


    /* Show artwork page */

    artworkPage.classList.add("active");


    /* Put correct picture */

    detailImage.src = artwork.image;


    /* Put title: 1, 2, or 3 */

    detailTitle.textContent = artwork.title;


    /* Put correct letter */

    letterText.innerHTML = letters[number];


    /* Animate picture */

    setTimeout(() => {

        detailImage.style.opacity = "1";
        detailImage.style.transform = "scale(1)";

    }, 100);


    /* Go to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================
   BACK TO WALL
===================================== */

function backToGallery() {

    const artworkPage = document.getElementById("artworkPage");
    const gallery = document.getElementById("gallery");

    artworkPage.classList.remove("active");

    gallery.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}