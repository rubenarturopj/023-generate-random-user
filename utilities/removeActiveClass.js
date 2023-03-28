export default function removeActiveClass(items) {
    items.forEach((btn) => {
        // to remove the active class from the other buttons
        btn.classList.remove("active");
    });
}
