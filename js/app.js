let index = 1
changeImg = function(){
    let imgs = ["./img/1.png", "./img/2.jpg"]
    document.getElementById('img').src = imgs[index]
    index++
    if(index==2){
        index = 0
    }
}

// Choosed-color
let colorEl = document.querySelectorAll('.color')
let colorIconEl = document.querySelectorAll('.choosed-color')
let sizeEl = document.querySelectorAll('.size')
let sizeIconEl = document.querySelectorAll('.choosed-size')

Array.from(colorEl).forEach(function(color){
    color.addEventListener('click', function(){
        let colorNumber = this.getAttribute('color-number')
        let colorIcon = document.querySelector(`.choosed-color-${colorNumber}`)
        
        Array.from(colorIconEl).forEach(function(el) { 
            el.classList.add('hidden')
        })
        colorIcon.classList.remove('hidden')
    })
})

// choosed-size
Array.from(sizeEl).forEach(function(size){
    size.addEventListener('click', function(){
        let sizeNumber = this.getAttribute('size-number')
        let sizeIcon = document.querySelector(`.choosed-size-${sizeNumber}`)
        
        Array.from(sizeIconEl).forEach(function(el) { 
            el.classList.add('hidden')
        })
        sizeIcon.classList.remove('hidden')
    })
})

// Qty Update
document.querySelector('.minus_action').addEventListener('click', function(){
    let qty = parseInt(document.querySelector('.pr_qty').innerText) 

    if(qty > 0){
        qty--
    }
    document.querySelector('.pr_qty').innerText = qty
})

document.querySelector('.plus_action').addEventListener('click', function(){
    let qty = parseInt(document.querySelector('.pr_qty').innerText) + 1
    document.querySelector('.pr_qty').innerText = qty
})

// Add-to-cart
