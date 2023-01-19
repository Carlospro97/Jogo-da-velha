document.addEventListener('DOMContentLoaded',()=>{
    let reset = document.querySelectorAll(".reset");
    reset.forEach((reset)=>{
        reset.addEventListener('click', handleClick);
    })

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })
})


function handleClick(event) {
   
   
    let square = event.target;
    let postion = square.id;

    if(handleMove(postion)) {

    setTimeout(()=>{
        alert(" O Jogo Acabou - O vencedor foi " + playerTime);
      }, 10);

    
};
    updateSquare(postion);
}

function updateSquare(postion) {
    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`
        }
