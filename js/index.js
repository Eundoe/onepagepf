
const winWidth = window.innerWidth

console.log(winWidth)

if (winWidth > 1360){
  Nav()
  SlogunWrap()
  ModalWrap()
}
else if ((winWidth <= 1360)&&(winWidth > 980)){
  Nav()
  SlogunWrap()
  ModalWrap()
}
else if ((winWidth <= 980)&&(winWidth > 580)){
  Nav()
  ResizeMenu()
  SlogunWrap()
   GalleryWrap1(3)
   ModalWrap()

}
else if ((winWidth <= 580)&&(winWidth > 5)){
  Nav()
  ResizeMenu()
  SlogunWrap()
  GalleryWrap2()
  ModalWrap()
  FormCont()
}


// Header Nav

function Nav(){
  const Home = document.querySelector('h1>a')
  const Top = document.querySelector('#top')
  const mainNav = document.querySelectorAll('nav#main>ul>li>a', )
  const subNav = document.querySelectorAll('nav#sub>ul>li>a')

  Home.addEventListener('click',ScrollBase,false)

mainNav.forEach((item) => {
  item.addEventListener('click',NaviBase, false)
})

subNav.forEach((item) => {
  item.addEventListener('click',NaviBase, false)
})

Top.addEventListener('click',ScrollBase,false)

function NaviBase(e){
    const value = this.getAttribute('href')
    const topvalue = document.querySelector(value)
    const scrollvalue = topvalue.offsetTop
    window.scroll({
      top: scrollvalue - 60,
      behavior: "smooth"
    })
    e.preventDefault()
}

function ScrollBase(e){
    window.scroll({
      top:0,
      behavior:"smooth"
    })
    e.preventDefault()
}

}


function ResizeMenu(){
// fadein fadeout 이안되...어떻게하누..

const mainClose = document.querySelector('p#mainclose')
const mainMenu = document.querySelector('p#mainicon')
const TargetMenu = document.querySelector('nav#main')

  mainMenu.addEventListener('click',function(e){
    TargetMenu.style.display = 'block'

  })

  mainClose.addEventListener('click',function(e){
    TargetMenu.style.display = 'none'}
  )
}




// Slogun Gallery

function SlogunWrap(){

  const SlogunPart = document.querySelector('ul#slogungall')
  const SlogunContent = document.querySelector('ul#slogungall>li')
  
  // 시작점 
  let ContWidth = SlogunContent.offsetWidth
  let TargetV = 0 
  let EaseNum = 0
  let OpCnt = 0
  let conOp = true
  let NavCir = 0
  let contNum = document.querySelectorAll('ul#slogungall>li').length



  console.log(SlogunPart.offsetWidth)
  console.log(SlogunContent.offsetWidth)
  console.log(contNum)


  setInterval(MoveGall, 10)


  function MoveGall(){
    if (conOp){
      ++OpCnt
      if (OpCnt == 200){
        OpCnt = 0
        Next();
      }
    }
    EaseNum += 0.15 * (TargetV - EaseNum)
    SlogunPart.style.marginLeft = EaseNum + 'px'
  }
  

  function Next(){
    if (TargetV > -(ContWidth * (contNum - 1))){
      EaseNum = ContWidth ;
      TargetV -= ContWidth
    }
    else{
      TargetV = 0
      EaseNum = -ContWidth * (contNum - 1)
      NavCir = -1
    }
    NavCir++
    // if (NavCir > contNum){NavCir = 0}
      SlogunNav()
  

  }

const Circle1 = document.querySelectorAll('ul#slogunnav>li')

Circle1.forEach((item) => {
  item.addEventListener('click', function(e){
    const data = item.textContent
    NavCir = data - 1
    console.log(NavCir)
    SlogunNav();
    TargetV = -ContWidth * (data - 1)
  })
})


function SlogunNav(){
  for (let i = 0; i <= contNum - 1; i++ ){
    document.querySelectorAll('ul#slogunnav>li')[i].style.backgroundColor = 'green'
  }
  document.querySelectorAll('ul#slogunnav>li')[NavCir].style.backgroundColor = 'orange'
}

}



// PortFolio
// in 980

function GalleryWrap1(x){
const PortLi = document.querySelector('ul#portgall>li')
const PortGall = document.querySelector('ul#portgall')

let PortWidth = PortLi.offsetWidth
let GallWidth = PortGall.offsetWidth
let marginPort = 0
let EasePort = 0
let GallSize = x

const NextBtn = document.querySelector('p#next')
const PrevBtn = document.querySelector('p#prev')

function PrevPort(){
  if (marginPort == 0){
    marginPort = -(PortWidth * x)
    PortGall.style.marginLeft = marginPort + 'px'
  }
  else{
    marginPort += (PortWidth * x)
    PortGall.style.marginLeft = marginPort + 'px'
  }
}

function NextPort(){
  if (marginPort > -(PortWidth * x)){
    marginPort -= (PortWidth * x)
    PortGall.style.marginLeft = marginPort + 'px'

  }
  else{
    marginPort = 0
    PortGall.style.marginLeft = marginPort + 'px'
  }

}

NextBtn.addEventListener('click',NextPort)
PrevBtn.addEventListener('click', PrevPort)
}


// size 580 under

function GalleryWrap2(){
  const PortLi = document.querySelector('ul#portgall>li')
  const PortGall = document.querySelector('ul#portgall')
  const PortLength = document.querySelectorAll('ul#portgall>li').length

  let PortWidth = PortLi.offsetWidth
  let GallWidth = PortGall.offsetWidth
  let marginPort = 0
  let EasePort = 0
  let GallSize = 2
  
  const NextBtn = document.querySelector('p#next')
  const PrevBtn = document.querySelector('p#prev')
  
  function PrevPort(){
    if (marginPort == 0){
      marginPort = -(PortWidth * 4)
      PortGall.style.marginLeft = marginPort + 'px'
    }
    else{
      marginPort += (PortWidth * 2)
      PortGall.style.marginLeft = marginPort + 'px'
    }
  }
  
  function NextPort(){
    if (marginPort > -(PortWidth * 4)){
      marginPort -= (PortWidth * 2)
      PortGall.style.marginLeft = marginPort + 'px'
  
    }
    else{
      marginPort = 0
      PortGall.style.marginLeft = marginPort + 'px'
    }
  
  }
  
  NextBtn.addEventListener('click',NextPort)
  PrevBtn.addEventListener('click', PrevPort)
  }

  // Modal Page



function ModalWrap(){

  const mTitle = document.querySelector('h3#mtitle')
  const mImage = document.querySelector('img#mimg')
  const mDate = document.querySelector('dd#mdate')
  const mLang = document.querySelector('dd#mlang')
  const mUrl = document.querySelector('dd#murl')
  const mIntro = document.querySelector('dd#mintro')

  function ModalInput(title,img,imr,year,lang,url,intro){
    this.title = title
    this.img = img
    this.imr = imr
    this.year = year
    this.lang = lang
    this.url = url
    this.intro = intro
  }

  ModalInput.prototype.input = function(){
    mTitle.innerHTML = this.title
    mImage.setAttribute('src', this.img)
    mImage.setAttribute('alt', this.imr)
    mDate.innerHTML = this.year
    mLang.innerHTML = this.lang
    mUrl.innerHTML = this.url
    mIntro.innerHTML = this.intro
  }


  let ModalData = [
    new ModalInput('workname1','./images/pic01.png','work1','2001','HTML','<a href="#">http:work1</a>','1234'),
    new ModalInput('workname2','./images/pic02.png','work2','2002','Javascript','<a href="#">http:work3</a>','5679'),
    new ModalInput('workname3','./images/pic03.png','work3','2004','React','<a href="#">http:work3</a>','45567'),
    new ModalInput('workname4','./images/pic02.png','work4','2005','Vue','<a href="#">http:work4</a>','12314'),
    new ModalInput('workname5','./images/pic04.png','work5','2008','CSS','<a href="#">http:work5</a>','123456465'),
    new ModalInput('workname6','./images/pic01.png','work6','2011','Babel','<a href="#">http:work6</a>','12324124')
  ]

  const ModalLink = document.querySelectorAll('ul#portgall>li')
  const ModalCl = document.querySelector('p#modalclose')

  function ModalClick(){
    document.querySelector('div#modal').style.display = 'block'
    let num = this.getAttribute('data-value')
    console.log(num)
    ModalData[num - 1].input()
  }

  function ModalClose(){
    document.querySelector('div#modal').style.display = 'none'
  }


  ModalLink.forEach((item) => {
    item.addEventListener('click', ModalClick)
  })

  ModalCl.addEventListener('click', ModalClose)
}

// form on 

function FormCont (){
  const formInput = document.querySelectorAll('div#contactform>form>fieldset>ul>li>input')
  const formText = document.querySelector('div#contactform>form>fieldset>ul>li>textarea')


  formInput.forEach((item) => {
    item.addEventListener('focus', function(e){
      this.previousElementSibling.style.display ='none'
    })
    item.addEventListener('blur', function(e){
      this.previousElementSibling.style.display ='block'
    })
  })

  formText.addEventListener('focus', function(e){
    this.previousElementSibling.style.display ='none'
  })
  formText.addEventListener('blur', function(e){
    this.previousElementSibling.style.display ='block'
  })
  
}

