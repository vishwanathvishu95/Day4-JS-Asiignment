const student = {
   name:"Helsinki",
   
   age:24,

   projects:{
     dicegame : "Two player dice game using Javascript"
   }
};
function whois({name,age, projects:{dicegame:projects}}){
  return `His ${name} and ${age} and they are ${projects}`;
}
 console.log(whois(student));