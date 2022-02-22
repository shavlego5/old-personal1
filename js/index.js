let rect = $("#about div div div:nth-child(1)");

for (let i = 0; i < 100; i++) {
    let cube = document.createElement("div");
    rect.append(cube);
}

let clock = document.getElementsByClassName('clock');

function time() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    for( let i = 0; i < clock.length; i++) {
        clock[i].innerHTML = h + ":" + m + "<br>" + `<span>${s}</span>`;
    }
    
    let t = setTimeout(time, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

time();

let second = document.getElementsByClassName("second-screen");
let bottom = document.getElementsByClassName("bottom");
let top0 = document.getElementsByClassName("top");

function changeScreen(event) {
    if(event.target.dataset.check === "closed") {
        second[Number(event.target.dataset.screen)].style.height = "100%";
        setTimeout(() => {
            bottom[Number(event.target.dataset.screen)].style.transform = "scale(1)";
        }, 500);
        setTimeout(() => {
            top0[Number(event.target.dataset.screen)].style.transform = "scale(1)";
        }, 700);
        event.target.dataset.check = "open";
    } else {
        bottom[Number(event.target.dataset.screen)].style.transform = "scale(0)";
        top0[Number(event.target.dataset.screen)].style.transform = "scale(0)";
        setTimeout(() => {
            second[Number(event.target.dataset.screen)].style.height = "0%";
        }, 500);
        event.target.dataset.check = "closed";
    }
}

