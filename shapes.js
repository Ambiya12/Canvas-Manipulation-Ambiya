class Shape {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
    }
  }
  
  class Rectangle extends Shape {
    constructor(x, y, color, width, height) {
      super(x, y, color);
      this.width = width;
      this.height = height;
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  
  class Circle extends Shape {
    constructor(x, y, color, radius) {
      super(x, y, color);
      this.radius = radius;
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  export { Rectangle, Circle };
  