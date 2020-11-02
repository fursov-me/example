let app = document.querySelectorAll("#app")[0]
let clickCount = 0

app.innerHTML = "Привет, наведи курсор!"

app.addEventListener("click", function(event){
  clickCount > 9 ? clickCount = 0 : clickCount++
  app.innerHTML = `Хороший мальчик, кликай: ${clickCount}`
})

app.addEventListener("mouseover", function(event){
  app.innerHTML = `Хороший мальчик, кликай: ${clickCount}`
})

app.addEventListener("mouseout", function(event){
  app.innerHTML = "Эй, верни курсор и кликни на меня!"
})