$(document).ready(() => {
    var ox;
    $("#okbtn").click(function () {
        $("#tictactoe").empty();
        ox = $('input[name="ox"]:checked').val();
        console.log(ox);
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var classes = "cell row" + i + " col" + j;
                var id = "c" + i + j;
                var cell = $("<div></div>").addClass(classes).attr("id", id);
                $("#tictactoe").append(cell);
            }
        }
    });
    
    $("#tictactoe").on("click", ".cell", function() {
        $(this).text(ox);
    })
});