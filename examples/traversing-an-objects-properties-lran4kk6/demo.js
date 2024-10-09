// here's our object
const myAddrBookEntry = {
    "fname": "Larry",
    "lname": "Bouthillier",
    "addr": "Maine",
    "email": "lbouthillier@fas.harvard.edu",
    "person-role" : "instructor",
	"getFullName":function(){
			return this.fname + " " + this.lname;
	}
}

for (let key in myAddrBookEntry){
   console.log(key + ":" + myAddrBookEntry[key]);
}

