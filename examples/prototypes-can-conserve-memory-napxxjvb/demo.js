// Let's define an object that represents the pixels in an image
//  An entire image may have an array of 60,000 or more 
//  of these objects 
function InefficentPixel(r, g, b, a){
    this.red = r;
    this.green = g;
    this.blue = b;
    this.alpha = a;

    // Now make a method that will calculate a grayscale value for      
    //  this pixel - used to turn an image into black-and-white 
    this.blackAndWhite = function(){
         var y = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
         this.red = y;
         this.green = y;
         this.blue = y;
    }
}

// In the second version, the blackAndWhite() method
//  is part of the prototype. Here, that method and 
//  only exists once for all 60,000 pixels. 
function EfficientPixel(r, g, b, a){
    this.red = r;
    this.green = g;
    this.blue = b;
    this.alpha = a;
}
EfficientPixel.prototype.blackAndWhite = function(){
    var y = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
    this.red = y;
    this.green = y;
    this.blue = y;
}

