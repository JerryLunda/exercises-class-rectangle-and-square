class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    get isValid(){
        return this.height > 0 && this.width > 0;
    }

    get perimeter(){
        if (this.isValid) {
            return (this.height + this.width) * 2;
        }
    }

    isBiggerThan(geometric_figure){
        return this.perimeter > geometric_figure.perimeter
    }
}

class Square extends Rectangle{
    constructor(height){
        super(height,height)
    }
}


const r = new Rectangle(10,20);
console.log(r.perimeter);
console.log(r.isValid);

const r2 = new Rectangle(-10,20);
console.log(r2.isValid);

const c = new Square(10);
console.log(c.perimeter);
console.log(r.isBiggerThan(c));

