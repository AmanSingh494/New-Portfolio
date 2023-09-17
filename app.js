const dynamicText = document.querySelector('.dynamic-text')
const profileImg = document.querySelector('.profile-img')
const dynamicH2 = document.querySelector('.dynamic-h2')
const works = document.querySelector('.work-img')
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const msssgBox = document.querySelector('.message')
const mssgText = document.querySelector('.message-text')
const contacts = document.querySelector('#contact')
const body = document.querySelector('body')

let contactsAnimated = true
let textArr = [
  'H',
  'e',
  'y',
  ',',
  ' ',
  't',
  'h',
  'e',
  'r',
  'e',
  '<br>',
  'A',
  'm',
  'a',
  'n',
  ' ',
  't',
  'h',
  'i',
  's',
  ' ',
  's',
  'i',
  'd',
  'e',
  '<br>',
  'S',
  't',
  'u',
  'd',
  'e',
  'n',
  't',
  ' ',
  'a',
  'n',
  'd',
  ' ',
  'W',
  'e',
  'b',
  ' ',
  'D',
  'e',
  'v',
  'e',
  'l',
  'o',
  'p',
  'e',
  'r',
  '<br>'
]
let mssgArr = [
  'H',
  'o',
  'p',
  'i',
  'n',
  'g',
  ' ',
  't',
  'h',
  'a',
  't',
  ' ',
  'w',
  'e',
  ' ',
  'w',
  'i',
  'l',
  'l',
  ' ',
  'w',
  'o',
  'r',
  'k',
  ' ',
  't',
  'o',
  'g',
  'e',
  't',
  'h',
  'e',
  'r',
  '.'
]
const worksArr = [
  {
    name: 'Foodie website',
    img: './Assets/img/foodie.png',
    link: 'https://amansingh494.github.io/Foodie-Website/'
  },
  {
    name: 'Black Gym website',
    img: './Assets/img/black gym.png',
    link: 'https://amansingh494.github.io/Black-gym-website/'
  },
  {
    name: 'Black Gym website',
    img: './Assets/img/drum kit.png',
    link: 'https://amansingh494.github.io/DRUM-KIT/'
  },
  {
    name: 'Black Gym website',
    img: './Assets/img/simon.png',
    link: 'https://amansingh494.github.io/Simon-Game/'
  }
]
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
let itemNo = 0
const worksRender = () => {
  const worksNewArr = worksArr.map((item) => {
    return ` <a href="${item.link}"><img height='500px' width='950px'src="${item.img}" alt="${item.name}"></a>`
  })
  worksNewArr.join(' ')
  works.innerHTML = worksNewArr
}
// const contactsAnimation = () => {
//   if (s)
// }
const textDisplay = async (array, container) => {
  await sleep(1000)
  profileImg.classList.add('scale')
  for (let i = 0; i < array.length; i++) {
    container.innerHTML += `${array[i]}`
    await sleep(80)
  }
}
window.addEventListener('DOMContentLoaded', () => {
  textDisplay(textArr, dynamicH2)
  worksRender()
  console.log(itemNo)
})
// making an animation when the document is scrolled to the bottom
window.addEventListener('scroll', async () => {
  if (
    Math.floor(window.scrollY) + window.innerHeight ===
      document.body.scrollHeight &&
    contactsAnimated
  ) {
    contactsAnimated = false
    await textDisplay(mssgArr, mssgText)
    await sleep(1000)
    msssgBox.classList.add('hide')
    contacts.classList.remove('hide')
  }
})
// horizontal scroll js logic
leftArrow.addEventListener('click', () => {
  console.log(itemNo)
  if (itemNo > 0) {
    itemNo--
    works.scroll(itemNo * 955, 0)
  } else if (itemNo === 0) {
    itemNo = worksArr.length
    works.scroll(itemNo * 955, 0)
    itemNo = 3
  }
})
rightArrow.addEventListener('click', () => {
  console.log(itemNo)
  if (itemNo < 3) {
    itemNo++
    works.scroll(itemNo * 955, 0)
  } else if (itemNo === 3) {
    works.scroll(0, 0)
    itemNo = 0
  }
})
