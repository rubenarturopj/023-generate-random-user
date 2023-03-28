import { getElement } from "./utilities/getElement.js";
import { getUser } from "./utilities/fetchUser.js";
import { displayUser } from "./utilities/displayUser.js";

const btn = getElement(".btn");

const showUser = async () => {
    //get user from API
    const person = await getUser();
    // console.log(person);

    // display user
    displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
