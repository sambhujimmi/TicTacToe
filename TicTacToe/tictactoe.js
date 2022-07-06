$(document).ready(() => {
    var xo;
    var currentPlayer;
    var cells = Array(9);
    var gameOver;
    console.log(cells);

    $("#okbtn").click(function () {
        gameOver = false;
        $("#tictactoe").empty();
        xo = $('input[name="xo"]:checked').val();
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var classes = "cell row" + i + " col" + j;
                var id = "c" + (i * 3 + j);
                var cell = $("<div></div>").addClass(classes).attr("id", id);
                $("#tictactoe").append(cell);
            }
        }

        if (xo == "x") {
            currentPlayer = "player";
        } else {
            currentPlayer = "computer";
            computer();
        }

    });

    $("#tictactoe").on("click", ".cell", function () {
        if (currentPlayer == "player" && !gameOver && $(this).text() == "") {
            var id = $(this).attr("id");
            console.log("player's turn");
            $(this).text("X");
            cells[id[1]] = "x";
            currentPlayer = "computer";
            checkWin();
            if (!gameOver) {
                computer();
            }
        }
    });

    function computer() {
        console.log("computer's turn");
        // var rand = Math.floor(Math.random() * 9);
        // var rand = 0;
        // var randId = "#c" + rand;
        // while ($("#tictactoe").children(randId).text() != "" || rand < 9) {
        //     rand = Math.floor(Math.random() * 9);
        //     ++rand;
        //     randId = "#c" + rand;
        // }
        // console.log(randId);
        // $("#tictactoe").children(randId).text("O");
        // cells[rand] = "o";
        // currentPlayer = "player";
        // computer();
        var rand = Math.floor(Math.random() * 9);
        var randId = "#c" + rand;
        if($("#tictactoe").children(randId).text() == "") {
            $("#tictactoe").children(randId).text("O");
            cells[rand] = "o";
            currentPlayer = "player";
        } else {
            computer();
        }
        
    }
    checkWin();

    function checkWin() {
        var row1 = $(".row0").text();
        var row2 = $(".row1").text();
        var row3 = $(".row2").text();
        var col1 = $(".col0").text();
        var col2 = $(".col1").text();
        var col3 = $(".col2").text();
        var dia1 = $("#c0").text() + $("#c4").text() + $("#c8").text();
        var dia2 = $("#c2").text() + $("#c4").text() + $("#c6").text();
        if (row1 == "XXX" || row2 == "XXX" || row3 == "XXX" || col1 == "XXX" || col2 == "XXX" || col3 == "XXX" || dia1 == "XXX" || dia2 == "XXX") {
            alert("You won");
            gameOver = true;
        } else if (row1 == "OOO" || row2 == "OOO" || row3 == "OOO" || col1 == "OOO" || col2 == "OOO" || col3 == "OOO" || dia1 == "OOO" || dia2 == "OOO") {
            alert("Computer won");
            gameOver = true;
        }
    }
});
