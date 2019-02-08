// Класс для создания фигуры
class Shape{

    constructor(id, type, x, y, width, height, color){
        
        this.id = id;
        this.type = type;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.selected = false;

    }
    stroke(){
		strokeRect(this.x, this.y, this.width, this.height);
    }
    drow(){
		fillRect(this.x, this.y, this.width, this.height);
	}

}