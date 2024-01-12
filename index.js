let button = Array.from(document.querySelectorAll("#ctr"));

let ct1 = document.getElementById("score1");
let ct2 = document.getElementById("score2");

let ps1 = 0;
let ps2 = 0;

let winner = document.querySelector("#winner");

let reset = document.getElementById("reset");

button.forEach((item) => {
    item.addEventListener("click", function() {
        if (item == button[0]) {
            let limit = document.querySelector("#limit");

            ps1++;

            ct1.textContent = ps1;

            if(ps1 == 1) {
                limit.disabled = true;
            }

            if (ps1 == limit.value || (ps1 > ps2 && ps1 > limit.value)) {
                ct1.classList.add("green");
                button[0].setAttribute("disabled", "true");
                button[1].setAttribute("disabled", "true");
                limit.disabled = false;

                printWinner();
            }
        } else {
            let limit = document.querySelector("#limit");

            ps2++;

            ct2.textContent = ps2;
            if(ps2 == 1) {
                limit.disabled = true;
            }

            if (ps2 == limit.value || (ps2 > ps1 && ps2 > limit.value)) {
                ct2.classList.add("green");
                button[0].setAttribute("disabled", "true");
                button[1].setAttribute("disabled", "true");
                limit.disabled = false;

                printWinner();
            }
        }
    });
});

reset.addEventListener("click", function() {
    button[0].removeAttribute("disabled");
    button[1].removeAttribute("disabled");
    const limit = document.querySelector("#limit");

    ct1.classList.remove("green");
    ct2.classList.remove("green");

    ps1 = 0;
    ps2 = 0;

    ct1.textContent = ps1;
    ct2.textContent = ps2;

    limit.value = 5;
    limit.disabled = false;

    winner.textContent = " ";
});

function printWinner() {
    if (ps1 > ps2) {
        winner.textContent = "Player One";
    } else {
        winner.textContent = "Player Two";
    }
}