var myAddrBookEntry = {
    "fname": "Larry",
        "lname": "Bouthillier",
        "addr": "Rhode Island",
        "email": "lbouthillier@fas.harvard.edu",
        "person-role": "instructor",
        "getFullName": function () {
        // keyword 'this' refers to enclosing context for this function
        return this.fname + " " + this.lname;
    },
    // printMe method outputs useful info for this object
    "printMe": function () {
        return "This person is " + this.fname + " " + this.lname + " and lives in " + this.addr + " and can be reached at " + this.email;
    }
}

// totally different kind of object, but it has a printMe method
var myCompanyEntry = {
    "name": "Google",
        "location": "Mountain View, CA",
        "isPublic": true,
        "symbol": "GOGL",
        "products": ["Android", "Chrome", "Google Search", "Google Earth"],
        "printMe": function () {
        var out = "The company is " + this.name + " in " + this.location + ".  "
        if (this.isPublic) {
            out += 'Our stock symbol is ' + this.symbol + ".  "
        }
        if (this.products) {
            out += "We are known for: <ul>";
            for (var i = 0; i < this.products.length; i++) {
                out += "<li>" + this.products[i] + "</li> ";
            }
            out += "</ul>";
        }
        return out;
    }
}

// prints any object that has printMe capability
// (this is just what toString() does in most JS objects)
    function printObject(obj) {
        // First, test for the *existence of the property* printMe 
        //   in the object
        if (obj.printMe) {
            var el = document.getElementById("output");
            el.innerHTML += obj.printMe() + "<br><br>";
        }
    }

    // Print both objects!
    printObject(myAddrBookEntry);
printObject(myCompanyEntry);