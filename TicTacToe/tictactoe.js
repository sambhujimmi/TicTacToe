$(document).ready(() => {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var cell = $("<div></div>").addClass("cell").attr("id", "cell" + i + j);
            $("#tictactoe").append(cell);
        }
    }
});