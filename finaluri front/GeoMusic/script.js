
/* ===========================
   BURGER MENU
=========================== */



alert("JS Works!");






const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* */

const searchInput = document.getElementById("searchInput");

const artistCards = document.querySelectorAll(".artist-card");
console.log(searchInput);
searchInput.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    artistCards.forEach(card => {

        let name = card.querySelector("h3").innerText.toLowerCase();

        if (name.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


/*  */

// ვქმნი cookie
if (!localStorage.getItem("cookieAccepted")) {

    let cookie = document.createElement("div");

    cookie.innerHTML = `
        <div style="
            position:fixed;
            bottom:20px;
            left:20px;
            right:20px;
            background:#111;
            color:white;
            padding:20px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            border-radius:10px;
            z-index:9999;
        ">
            <p>We use cookies to improve experience.</p>
            <button id="acceptBtn" style="padding:10px 20px; cursor:pointer;">
                Accept
            </button>
        </div>
    `;

    document.body.appendChild(cookie);

    document.getElementById("acceptBtn").addEventListener("click", () => {

        localStorage.setItem("cookieAccepted", "true");

        cookie.remove();

    });

}




/* */

burger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});




/* ===========================
   FETCH 
*/

const latestContainer = document.getElementById("latestContainer");

fetch("data.json")
    .then(response => response.json())
    .then(data => {

        data.forEach(artist => {

            const card = document.createElement("div");
            card.classList.add("artist-card");

            card.innerHTML = `
                <h3>${artist.name}</h3>
                <p class="genre">${artist.genre}</p>
                <p>${artist.desc}</p>
            `;

            latestContainer.appendChild(card);

        });

    })
    .catch(error => {
        console.log("Error loading data:", error);
    });



/**/

const scrollBtn = document.getElementById("scrollTopBtn");

// როცა მომხმარებელი ასქროლავს
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

// ღილაკზე დაჭერისას
scrollBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});