// QUESTION NO.1 JSON iterate over all for loops (for, for in, for of, forEach)

// For Loop condition
let studentname=[{"name":"DHARAN", "bloodgroup":"O+ve"},
                 {"name":"GOKUL", "bloodgroup":"A+ve"}]
for(let i=0;i<studentname.length;i++)
{
    console.log(studentname[i].name);
    console.log(studentname[i].bloodgroup);
}

//For in Loop condition
{
let college=[{"department":"automobile", "year":"2017"}]
 for (let x in college)
     {
    console.log(x)
     }
    console.log(college[0].department,college[0].year)
}

//For of Loop condition   
 let car=[{"Brand":"KIA","Model":"Seltos", "price":"1250000"},
          {"Brand":"MG","Model":"Hector", "price":"2220000"}]
for ( const best of car)
    {
        console.log(best)
    }
   
//for for each condition
let student=[{"Name":"Nandhakumar r"},{"Mark":"Good"}]

student.forEach(i=> 
    console.log(i));