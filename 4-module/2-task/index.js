
function makeDiagonalRed(table) {
    let arr = Array.from(table.rows) 
    let h = arr.filter(function(item,index){
    	let row = arr[index];
    	row.cells[index].style.backgroundColor = 'red';
    }) 
}

