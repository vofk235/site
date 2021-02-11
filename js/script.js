let v = document.querySelectorAll('video');

    v.forEach(e => {
        e.parentElement.addEventListener('click', function () {
            if (e.paused) {
                e.play();
                e.parentElement.classList.remove("video");
            } else {
                e.pause();
                e.parentElement.classList.add("video");
            }
        }, false);
    });

let b = document.querySelector(".burg-menu"),
    m = document.querySelector(".menu");

b.addEventListener("click", () => {
    console.log("f");
    m.classList.toggle("views");
});

let sort = document.querySelector(".sort-text");

sort.addEventListener("click", () => {
    document.querySelector(".sort-button-block").classList.toggle("vi");
    document.querySelectorAll(".sort-button span").forEach(el => {
        el.addEventListener("click", () => {
            document.querySelectorAll(".sort-button").forEach(er => {
                er.classList.remove("active");
            });
            document.querySelector(".sort-button-block").classList.remove("vi");
            el.parentElement.classList.add("active");
        });
    });
});

document.querySelectorAll(".sort-button span").forEach(el => {
        el.addEventListener("click", () => {
            document.querySelectorAll(".sort-button").forEach(er => {
                er.classList.remove("active");
            });
            el.parentElement.classList.add("active");
        });
    });