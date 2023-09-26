  // add consectuive integers until we get to 100
  let i=0, sum=0;
  while(sum<=100){
    //here we increment i, then add it to sum
    sum += ++i;
  }
  // the loop exits when sum reaches or exceeds 100
  console.log("We added up to "+i+" to get to 100");



  // count the 'o's in the string
  const s = "oh To boldly go where no one has gone before";
  let count = 0, position = -1;
  //we need the loop to run at least once to look for 'o's 
  do{
      position = s.indexOf('o', position+1);
      if (position != -1){
         count++;
      }
  }while(position != -1);
  console.log("there are "+count+" 'o's in the string" );
