class Person {
  constructor(email){
    this._email = email;
  }
  get email(){
    return this._email.toLowerCase();
  }
  set email(email){
    this._email = email;
  }
}
var p = new Person("Simon@Cats.Org");
console.log(p.email);

p.email = "Tilda@Dogs.Org";
console.log(p.email);
