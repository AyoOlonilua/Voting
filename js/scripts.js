$(document).ready(function() {
    $("form#status").submit(function(e){
        const age = parseInt($("input#age").val());
        
        if (age >= 18) {
            $(".age").text(age);
            $("#yes").show();
            // window.location = "./education.html";
        } else {
            $("#no").show();
        }

        e.preventDefault();
      });

  
});