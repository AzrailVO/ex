const sec2SquareForHeight = document.querySelector('.sec-sec2-square')
const sec2SquareWidth = getComputedStyle(sec2SquareForHeight).width.replace(/px/,'')*1
sec2SquareForHeight.style.height = `${sec2SquareWidth}px`