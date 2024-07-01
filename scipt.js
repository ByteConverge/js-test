// Array and Object

let outPutDisplay = document.querySelector(".displayOutput")



let hobbies = ["Dancing", "Singing" , "mIning", "cooking"]

let numbers = [3 , 44 ,56, 434]


let filtered = hobbies.filter((hobby)=>{
    if(hobby[1]=== hobby[1].toLowerCase() ){
      return hobby
    }
}); 

let sliced = numbers.slice(0,2,4)

console.log(filtered);
console.log(hobbies);
console.log(sliced);
console.log(numbers);





