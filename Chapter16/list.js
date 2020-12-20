var todos = [];

var input = prompt("What would you like to do?");


while(input !== "quit"){
    if (input === "list"){
        listAll();
    } else if (input ==="new"){
        addNew();
    } else if (input ==="delete"){
        deLete();
    }
    
    input = prompt("What would you like to do?");
}
console.log("OK, You QUIt");

function addNew(){
    var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log("Added Todo");
        console.log(newTodo + "has added to the list");
}

function deLete(){
    var deleteNumber = prompt("Which index of the Array do you want to delete?");
        todos.splice(deleteNumber,1);
        console.log("Deleted Todo");
}

function listAll(){
    console.log("**************");
        todos.forEach(function(todo){
            console.log(todos.indexOf(todo) +": "+todo);
            // console.log(i + ":" + todo);
        });
        console.log("**************");
}