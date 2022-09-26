document.getElementById("Submit").innerHTML = "Submit Karo";
let questionArray = [{
     "question": "Which is a markup language",
     "a": "HTML",
     "b": "CSS",
     "c": "MARKDOWN",
     "d": "PHP",
     "ans": "a",
     "Solution": "Beacuse nmae suggest hyper text markup language"
}, {
     "question": "Which is a cascade language",
     "a": "HTML",
     "b": "CSS",
     "c": "MARKDOWN",
     "d": "PHP",
     "ans": "b",
     "Solution": "Beacuse nmae suggest hyper text cascase language"
}, {
     "question": "Which is a server language",
     "a": "HTML",
     "b": "CSS",
     "c": "MARKDOWN",
     "d": "PHP",
     "ans": "d",
     "Solution": "Beacuse nmae php is server language language"
}]

var counter = 0;
var right = 0;
var wrong = 0;
var total = questionArray.length;

function loadQuestion() {
     var questionCounter = document.getElementsByClassName("question")[0];
     var OptionACounter = document.getElementById("optionAText");
     var OptionBCounter = document.getElementById("optionBText");
     var OptionCCounter = document.getElementById("optionCText");
     var OptionDCounter = document.getElementById("optionDText");

     questionCounter.innerHTML = questionArray[counter].question;
     OptionACounter.innerHTML = questionArray[counter].a;
     OptionBCounter.innerHTML = questionArray[counter].b;
     OptionCCounter.innerHTML = questionArray[counter].c;
     OptionDCounter.innerHTML = questionArray[counter].d;
}


var buttonSumbit = document.getElementById("Submit");
buttonSumbit.addEventListener("click", submitKaro)

function submitKaro() {
     if (counter >= questionArray.length) {
          console.log("limit reached");
     } else {
          var ans = questionArray[counter].ans;
          var Selected;

          //getting checkboxes using dom
          var option = [
               document.getElementById("option1"),
               document.getElementById("option2"),
               document.getElementById("option3"),
               document.getElementById("option4"),
          ]
           

          //selecting checked out of all checkboxes
          for (var i = 0; i < 4; i++) {
               if (option[i].checked) {
                    console.log("yes");
                    Selected = option[i];
               } else {
                    console.log("no");
               }
          }


          //comparing selected with actuall
          console.log(Selected)
          if (Selected.value == ans) {
               right++ ;
               Selected.checked = false;
          } else {
               wrong++;
               Selected.checked = false ;
          }

          counter++;
          
          if (counter > (questionArray.length - 1)) {
               console.log("limit reached 1");
               document.getElementsByClassName("optionForUser")[0].innerHTML = `
               right = ${right} <br> wrong = ${wrong}
               <!--<br> <button id=restart>REstart</button>-->
               `
               document.getElementsByClassName("question")[0].innerHTML = "Limit reached"
               document.getElementById("Submit").innerHTML = "Done" ;
               // console.log("restart is callwa");
               // counter = 0 ;
               // right = 0 ;
               // wrong = 0 ;
          } else {
               loadQuestion();
          }
          
          // console.log(wrong)
          // console.log(right)
           // loadQuestion();
     }
}
// document.getElementById("restart").addEventListener("click", ()=>loadQuestion())
loadQuestion();