function ToggleMode() {
  const html = document.documentElement

  html.classList.toggle("modo-claro")

  const img = document.querySelector('#perfil img')

  if (html.classList.contains("modo-claro")) {

    img.setAttribute("src", "./assets/avatar2.png")

  } else {

    img.setAttribute("src", "./assets/avatar.png")

  }

  // if(html.classList.contains('modo-claro')) {

  //     html.classList.remove('modo-claro')

  // } else {

  //   html.classList.add("modo-claro")

  // }
}
