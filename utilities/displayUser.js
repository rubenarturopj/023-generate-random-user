import { getElement } from "./getElement.js";
import removeActiveClass from "./removeActiveClass.js";

const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
//const btns = document.querySelectorAll(".icon"); // this returns a Nodelist
const btns = [...document.querySelectorAll(".icon")]; // this returns an Array

export const displayUser = (person) => {
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = `My name is`;
    removeActiveClass(btns);
    btns[0].classList.add("active");
    btns.forEach((btn) => {
        const label = btn.dataset.label;
        btn.addEventListener("click", () => {
            title.textContent = `My ${label} is`;
            value.textContent = person[label];
            removeActiveClass(btns);
            btn.classList.add("active");
        });
    });
};
