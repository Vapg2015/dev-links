function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    html.style.transition("0.5s")
  } else {
    html.classList.add("light")
  }

  //   html.classList.toggle("light")
}
