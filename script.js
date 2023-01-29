function handleClick() {
  
  const buttonImg = document.querySelector("img")
  const buttonBtn = document.querySelector("button")

  buttonImg.addEventListener('click', function() {
    document.querySelector(".home").classList.add("hide")
    document.querySelector(".sorte").classList.remove("hide")
  })  

  buttonBtn.addEventListener('click', function() {
    document.querySelector(".sorte").classList.add('hide')
    document.querySelector(".home").classList.remove('hide')
  })

}

