// Функция подгоняет размер canvas под block
function makeCanvasSize(block, canvas){
    let computedStyle = getComputedStyle(block);

    let width = computedStyle.width.substring(0, computedStyle.width.length - 2);
    let height = computedStyle.height.substring(0, computedStyle.height.length - 2);

    canvas.width = width;
    canvas.height = height;

    console.log(canvas);
    console.log(computedStyle.height.substring(0, computedStyle.height.length - 2));

};

// Функция для вставки фигур из массива фигур mass в левое меню в .shapes_container
function drowShapes(mass){

    let shapesContainer = document.querySelector('.shapes_container'); 

    mass.forEach(function(item, i, mass){
        let shapeWrap = document.createElement('div');
        shapeWrap.className = "shape-wrap";
        let shape = document.createElement('div');
        shape.className = item.type;

        shape.setAttribute('draggable', true);
        shape.setAttribute('ondragstart', 'drag(event)');
        shape.setAttribute('id', item.id);

        shapeWrap.appendChild(shape);
        shapesContainer.appendChild(shapeWrap);
    });
}
let cursorInClick;
// Drag and Drop для фигур
function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    cursorInClick = [ev.pageY, ev.pageX]; 
}

// В момент drop  рисует фигуру drowOnCanvas
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    newelement = document.getElementById(data).cloneNode(false);
    ev.target.append(newelement);

    
    let y = cursorInClick[0] - document.getElementById(data).offsetTop;
    let x = cursorInClick[1] - document.getElementById(data).offsetLeft;

    console.log(y);
    a = ev.pageX - 330 - x;
    b = ev.pageY - 40 - y;
    drowOnCanvas(a, b, data); 
}
// Функция рисования залитого прямоугольника
let fillRect = function(x, y, w, h){
	ctx.fillRect(x, y, w, h);
}
// Функция рисования обведенного прямоугольника
let strokeRect = function(x, y, w, h){
	ctx.strokeRect(x, y, w, h);
}

let id_count = 0;
// Функция прорисовывания фигуры на canvas
function drowOnCanvas(a, b, id){
    shape_container.forEach(function(item, i, shape_container){
        if(item.id == id){
            
            id ='canvas-item'+ id_count;
            id_count++;

            let copy = new Shape(id, item.type, a, b, item.width, item.height, item.color);

            shapes_canvas.push(copy);

            shapes_canvas.forEach(function(item, i, shapes_canvas){
                item.stroke();
            })
        } 
    })
}

