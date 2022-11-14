const para = document.getElementById('paragraph')
const colorBtns = document.querySelectorAll('.color-btn')
const sizeBtns = document.querySelectorAll('.size-btn')
const fontBtns = document.querySelectorAll('.font-btn')
 
const changeColor = (e) => {
   const color = e.target.innerText.toLowerCase();
   para.style.color = color

   colorBtns.forEach((btn) => {
      btn.style.backgroundColor = "#ababab"
   })

   e.target.style.backgroundColor = 'green'
}
 
const changeSize = (e) => {
   const size = parseInt(e.target.innerText.toLowerCase())
   console.log(size)
   para.style.fontSize = `${size}px`

   sizeBtns.forEach((btn) => {
      btn.style.backgroundColor = "#ababab"
   })

   e.target.style.backgroundColor = 'green'
}
 
const changeFont = (e) => {
   const font = e.target.innerText;
   console.log(font)
   para.style.fontFamily = font

   fontBtns.forEach((btn) => {
      btn.style.backgroundColor = "#ababab"
   })

   e.target.style.backgroundColor = 'green'
}
 
colorBtns.forEach((btn)=>{
   btn.addEventListener("click", changeColor)
})
 
sizeBtns.forEach((btn)=>{
   btn.addEventListener("click", changeSize)
})
 
fontBtns.forEach((btn)=> {
   btn.addEventListener('click', changeFont)
})
