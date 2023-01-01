

const winWidth = window.innerWidth

console.log(winWidth)










// Header Nav

function Nav(){
  const Home = document.querySelector('h1>a')
  const Top = document.querySelector('#top')
  const mainNav = document.querySelectorAll('nav#main>ul>li>a', )
  const subNav = document.querySelectorAll('nav#sub>ul>li>a')

  const mainClose = document.querySelector('p#mainclose')
  const mainMenu = document.querySelector('p#mainicon')


// fadein fadeout 이안되...어떻게하누..

  mainMenu.addEventListener('click',function(e){
      document.querySelector('nav#main').style.display = 'block'

  })
    
 mainClose.addEventListener('click',function(e){
    document.querySelector('nav#main').style.display = 'none'}
    )


  Home.addEventListener('click',function(e){
    window.scroll({
      top:0,
      behavior:"smooth"
    })
    e.preventDefault()
  },false)

mainNav.forEach((item) => {
  item.addEventListener('click',function(e){
    const value = this.getAttribute('href')
    const topvalue = document.querySelector(value)
    const scrollvalue = topvalue.offsetTop
    window.scroll({
      top: scrollvalue - 60,
      behavior: "smooth"
    })
    e.preventDefault()
  }, false)
})

subNav.forEach((item) => {
  item.addEventListener('click',function(e){
    const value = this.getAttribute('href')
    const topvalue = document.querySelector(value)
    const scrollvalue = topvalue.offsetTop
    window.scroll({
      top: scrollvalue - 60,
      behavior: "smooth"
    })
    e.preventDefault()
  }, false)
})

Top.addEventListener('click',function(e){
    window.scroll({
      top:0,
      behavior:"smooth"
    })
},false)





}


Nav()



