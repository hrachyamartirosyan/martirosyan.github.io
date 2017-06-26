var currentPlayer=1;
var grid=new Array(3);
grid[0]=new Array(3);
grid[1]=new Array(3);
grid[2]=new Array(3);

for (var i = 0; i < grid.length; i++) {
  for (var j = 0; j < grid.length; j++) {
    grid[i][j]=0;
  }
}

function clickCell(x,y) {
  if (grid[x][y]>0) {
    alert("This cell is not empty");
  } else {
    if (currentPlayer==1) {
      document.getElementById("cell_"+x+"_"+y).innerHTML="X";
      grid[x][y]=1;
      currentPlayer=2;
    } else {
       document.getElementById("cell_"+x+"_"+y).innerHTML="O";
      grid[x][y]=2;
      currentPlayer=1;
    }
  }
  checkWinner();
  checkEnd();
}

function reset() {
for (var i = 0; i < grid.length; i++) {
  for (var j = 0; j < grid.length; j++) {
    grid[i][j]=0;
    document.getElementById("cell_"+i+"_"+j).innerHTML=" ";
  }
}
 currentPlayer=1;
}

window.onload = function render() {
  for(var i = 0; i < 3; i++) {
    var new_row = document.createElement('div');
    new_row.setAttribute("class", "row" );
    new_row.setAttribute("id", "row"+i);
    document.getElementById('board').appendChild(new_row);

    for(var j = 0; j < 3; j++) {
      var new_cell = document.createElement('div');
      new_cell.setAttribute("class", "cell" );
      new_cell.setAttribute("id", "cell_"+i+"_"+j );
      new_cell.setAttribute('onclick','clickCell('+i+','+j+');');
      document.getElementById('row'+i).appendChild(new_cell);
    }
  }
}

function checkEnd() {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid.length; j++) {
      if (grid[i][j]==0) {
        return;
      }
    }
  }
  alert("It's draw")
}

function checkWinner() {
  for (var i = 0; i < grid.length; i++) {
    if(grid[i][0] == grid[i][1] && grid[i][0]==grid[i][2] && grid[i][0] != 0){
      alert("Player" + grid[i][0] + " Wins");
      return;
    }
  }
  for (var i = 0; i < grid.length; i++) {
    if(grid[0][i] == grid[1][i] && grid[0][i]==grid[2][i]  && grid[0][i]!=0){
      alert("Player" + grid[0][i] + " Wins");
      return;
    }
  }

  if(grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2]  && grid[0][0] != 0){
    alert("Player" + grid[0][0] + " Wins");
    return;
  }

  if(grid[0][2] == grid[1][1] && grid[0][2] == grid[2][0]  && grid[2][0] != 0){
    alert("Player" + grid[1][1] + " Wins");
    return;
  }
}