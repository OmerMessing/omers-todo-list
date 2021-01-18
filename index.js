// require('./todos-cmd.js')




    function buttonListener() {

        var buttonsNodeList = document.querySelectorAll(".todoContain");
      //  console.log(buttonsNodeList);
        

        return buttonsNodeList;

    }

            function addFunction() {

           //     console.log( document.getElementsByClassName("todoList")[0]);
                document.getElementsByClassName("todoList")[0].innerHTML += '<li class="todoContain"><textarea id="todoId" name="todoInput" rows="1" cols="15">a</textarea></li>'
        
        
            }



            function removeFunction() {
             let todoLines = document.querySelectorAll(".todoContain");
             const todoLast = todoLines.length-1;
             console.log(todoLast);
 
             todoLines[todoLast].remove();
             
       
            
            }


    function startUp() {


        let addButton = document.getElementsByClassName("add")[0];
        console.log(addButton);
        addButton.addEventListener('click', addFunction);

      //  console.log(document.getElementsByClassName("add"));
     document.getElementsByClassName("remove")[0].addEventListener('click', removeFunction);

            buttonListener();
            
    }





    startUp();


