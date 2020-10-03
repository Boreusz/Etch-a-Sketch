function createPad(number){
    let clearAllCells = document.querySelectorAll('.cell');
        clearAllCells.forEach(cell => cell.remove());
    document.getElementById("container").style.gridTemplateColumns = `repeat(${number}, 1fr)`
    grid = number*number;
    const cont = document.querySelector("#container");
    for(let i = 0; i < grid; i++){
        var padCell = document.createElement('div');
        padCell.classList.add("cell");
        container.appendChild(padCell);
    }

    let allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => cell.addEventListener("mouseover", function() {
        event.target.style.backgroundColor = "green";
    }));

  
}

function clearPad(){
    let clearCells = document.querySelectorAll('.cell');
        clearCells.forEach(cell => cell.style['background-color'] = '#11a8ee');
}

const custom = document.querySelector('#custom');

function resizeGrid() {
    let gridSize = prompt("Enter grid size(try to pick number < 100 - optimization matter): ");
    if (gridSize < 1) {
      alert("Invalid input");
      return;
    }
    createPad(gridSize);
  }
custom.addEventListener("click", resizeGrid)