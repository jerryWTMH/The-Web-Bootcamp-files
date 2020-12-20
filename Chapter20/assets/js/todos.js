//check out specific to do by clicking


$("ul").on("click", "li", function(){  // the reason for using "on" is that we could remove the new input with clicking the trash icon.
    $(this).toggleClass("completed");   
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){   //$(this).parent().fadeOut().remove() 只會變成remove而沒有fadeOut()
        $(this).remove(); //這邊的this已經是有.Parent的了，所以是li
    });
    event.stopPropagation(); // 防止bubble往上執行
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();//grabbing new todo text from input
        $(this).val(""); //clean up the input text bar
        
        $("ul").append("<li><span><i class='fa fa-trash'></i> "+ todoText +"</span></li>"); // create a new li
    }

    
});

$(".fa-plus-square").click(function(){
    $("input[type = 'text']").fadeToggle();
});
