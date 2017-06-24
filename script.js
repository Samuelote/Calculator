$(document).ready(function(){
  var inputs = [""];
  var totalString;
  var operators1 = ["+", "-", "/", "*"]
  var operators2 = ['.'];
  var nums = [1,2,3,4,5,6,7,8,9]
  
  function getValue(input){
     if(operators2.includes(inputs[inputs.length-1])===true && input==="."){
    console.log("Duplicate '.'");
  }
      //Validation so it doesn't start with an operator
    else if(inputs.length===1 && operators1.includes(input)===false){
      inputs.push(input);
    }
    //If last character was not an operator add operator to the array
  else if(operators1.includes(inputs[inputs.length-1])===false){
    inputs.push(input);
  }
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
  }
  
  function update(){
    totalString = inputs.join("");
    $('#steps').html(totalString)
    console.log(inputs);
  }
  
   function getTotal(){
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  }

  $('button').on("click", function (){
    if(this.id === "deleteAll"){
      inputs = [""];
      update();
    }
    else if (this.id === "backOne"){
      inputs.pop();
      update();
    }
    else if (this.id === "total"){
      getTotal();
    }
    else {
      if (inputs[inputs.length-1].indexOf["+", "-", "/", "*"] === -1){
          getValue(this.id);
          }
          else{
        getValue(this.id)
      }
    }
  });
  
  
  
//   $("#1").click(function(){
//     fin.push(1)
//   });
  
//   $("#2").click(function(){
//     fin.push(2)
//   });
  
//   $("#plus").click(function(a, b){
//     return "fck"; 
//   });
 
//   $("#calculate").click(function(){
//     $("#final").empty();
//     // fin.join(',')
//     document.getElementById("final").innerHTML = fin.join('');  
    
//   });
  
});