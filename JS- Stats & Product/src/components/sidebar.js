export function sidebar() {

    let sidebar = document.querySelector(".sidebar");
    let btn = document.querySelector(".btn");


    btn.addEventListener("click", () => {
        sidebar.classList.toggle("dis-none");
        document.querySelector(".main").classList.toggle("left");
    })
}