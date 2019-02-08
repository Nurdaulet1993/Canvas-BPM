// Массив фигур в паллете
let shape_container = [];

// Массив фигур на canvas
let shapes_canvas = [];

// Создаем фигуры нужно сделать функцию созлания фигур
for(let i = 0; i < 5; i++){
    let shape_one = new Shape('num_'+ i, 'squear', 100, 10, 150, 80, '#000');
    shape_container.push(shape_one);
}

// Ложим их в левое меню
drowShapes(shape_container);

let mouse = {
	x: 0,
	y: 0
}

let selected = false;

let isCursorInRect = function(item){

	return mouse.x > item.x && mouse.x < item.x + item.width &&
    mouse.y > item.y && mouse.y < item.y + item.height;  

}

setInterval(function(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
	for(i in shapes_canvas){
		// shapes_canvas[i].drow();
        shapes_canvas[i].stroke();
		// if(isCursorInRect(shapes_canvas[i])){
			
		// }
	}

	if(selected){
		selected.x = mouse.x - selected.width / 2;
		selected.y = mouse.y - selected.height / 2;
	}
},10);

window.onmousemove = function(e){
	mouse.x = e.pageX - 330;
	mouse.y = e.pageY - 40;
}

window.onmousedown = function(){

    console.log(selected);
    
	if(!selected){

        shapes_canvas.forEach(function(item, i, shapes_canvas){

             console.log(shapes_canvas);

            if(isCursorInRect(item)){
                selected = item;
                console.log(selected);
            }
        });

	}
}

window.onmouseup = function(){
	selected = false;
}