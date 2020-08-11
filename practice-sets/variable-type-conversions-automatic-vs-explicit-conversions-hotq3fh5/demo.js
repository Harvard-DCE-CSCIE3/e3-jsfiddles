/************* FIRST PRACTICE ITEM ***************/ 
/* We get the value '220' from the page using document.getElementById().
 You don't have to fully understand this yet (don't worry, you will soon!) - just know that we've extracted the contents of the <span> element on the page so that we can add one to it. */
var theFirstNumber = document.getElementById("twotwenty").innerHTML;

/* Now we add one. You can see that theFirstNumber is being treated like a String, and so we must convert it to a number using parseInt() before we add one to it, to get the result we intended. You should do that here, so that theSecondNumber is ends up being 221. */
var theSecondNumber = theFirstNumber + 1;

/* Now we write the resulting value out to the second <span> element on the page.  Again, you don't need to do anything with this part - we're just using it to make the example work by outputting the result to the page. */
document.getElementById("twotwentyone").innerHTML = theSecondNumber;


/************* SECOND PRACTICE ITEM ***************/ 
/* Here we're assigning a phone number to a variable. It's kind of a silly example, but gives us a chance to practice forcing numbers into strings.  Make a change to the following line to change the number expression below to a string, so that the number appearing on the page looks like a phone number.  */
var myNumber = 555-1212;

/* Now we write the value out to the third <span> element on the page.  */
document.getElementById("phonenumber").innerHTML = myNumber;


