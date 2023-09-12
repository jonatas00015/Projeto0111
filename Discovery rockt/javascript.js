function toggleMode() {
    const html = document.documentElement

    /*if(html.classList.contains("light")) {
        html.classList.remove("light")
    } else {
        html.classList.add("light")
    }*/
    //ou
    html.classList.toggle("light")

    const img = document.querySelector("#avatar")

    if(html.classList.contains("light")) {
        img.setAttribute("src", "assets/assets/avatar-light.png")
    } else {
        img.settAtribute("src", "assets/assets/Avatar.png")
    }

}
