// here's our object
var myAddrBookEntry = {
    "fname": "Larry",
    "lname": "Bouthillier",
    "addr": "Rhode Island",
    "email": "lbouthillier@fas.harvard.edu",
    "person-role" : "instructor",
	"getFullName":function(){
			return this.fname + " " + this.lname;
	}
}

for (var key in myAddrBookEntry){
   console.log(key + ":" + myAddrBookEntry[key]);
}

