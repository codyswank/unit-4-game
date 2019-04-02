
$(document).ready(function () {
    var targetNumber = Math.floor(Math.random() * (+120 - +19)+ +19)

    $("#number-to-guess").text(targetNumber);


    var number1 = Math.floor(Math.random()* 12) + 1;
    var number2 = Math.floor(Math.random()* 12) + 1;
    var number3 = Math.floor(Math.random()* 12) + 1;
    var number4 = Math.floor(Math.random()* 12) + 1;

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#Wins").text(wins);
    $("#Losses").text(losses);

    $("#one").on ("click", function() {
        userTotal = userTotal + number1;
        console.log("New userTotal=" + userTotal);

        $("#total").text(userTotal);

        if (userTotal == targetNumber) {
            wins++;
            $("#Wins").text(wins);
                targetNumber = Math.floor(Math.random()* (+120 - +19)+ +19);
                $("#number-to-guess").text(targetNumber)
                number1 = Math.floor(Math.random()* 12) + 1;
                userTotal= 0;
                $("#total").text(userTotal);

        }  
        
        else if (userTotal > targetNumber) {
            losses++;
            $("#Losses").text(losses);
                targetNumber = Math.floor(Math.random()* (+120 - +19)+ +19);
                $("#number-to-guess").text(targetNumber)
                number1 = Math.floor(Math.random()* 12) + 1;
                userTotal= 0;
                $("#total").text(userTotal);

        }
    });

    $("#two").on ("click", function() {
        userTotal = userTotal + number2;
        console.log("New userTotal=" + userTotal);

        $("#total").text(userTotal);

        if (userTotal == targetNumber) {
            wins++;
            $("#Wins").text(wins);
                targetNumber = Math.floor(Math.random()* (+120 - +19)+ +19);
                $("#number-to-guess").text(targetNumber)
                number2 = Math.floor(Math.random()* 12) + 1;
                userTotal= 0;
                $("#total").text(userTotal);

        } 
        else if (userTotal > targetNumber) {
            losses++;
            $("#Losses").text(losses);
                targetNumber = Math.floor(Math.random()* (+120 - +19)+ +19);
                $("#number-to-guess").text(targetNumber)
                number2 = Math.floor(Math.random()* 12) + 1;
                userTotal= 0;
                $("#total").text(userTotal);

        }
    });

    $("#three").on ("click", function() {
        userTotal = userTotal + number3;
        console.log("New userTotal=" + userTotal);

        $("#total").text(userTotal);

        if (userTotal == targetNumber) {
            wins++;
            $("#Wins").text(wins);
                targetNumber = Math.floor(Math.random()* (+120 - +19)+ +19);
                $("#number-to-guess").text(targetNumber)
                number3 = Math.floor(Math.random()* 12) + 1;
                userTotal= 0;
                $("#total").text(userTotal);

        } 
         else if (userTotal > targetNumber) {
            losses++;
            $("#Losses").text(losses);
                targetNumber = Math.floor(Math.random()* (+120 - +19)+ +19);
                $("#number-to-guess").text(targetNumber)
                number3 = Math.floor(Math.random()* 12) + 1;
                userTotal= 0;
                $("#total").text(userTotal);

        }
    });

    $("#four").on ("click", function() {
        userTotal = userTotal + number4;
        console.log("New userTotal=" + userTotal);

        $("#total").text(userTotal);

        if (userTotal == targetNumber) {
            wins++;
            $("#Wins").text(wins);
                targetNumber = Math.floor(Math.random()* (+120 - +19)+ +19);
                $("#number-to-guess").text(targetNumber)
                number4 = Math.floor(Math.random()* 12) + 1;
                userTotal= 0;
                $("#total").text(userTotal);

        } 
        else if (userTotal > targetNumber) {
            losses++;
            $("#Losses").text(losses);
                targetNumber = Math.floor(Math.random()* (+120 - +19)+ +19);
                $("#number-to-guess").text(targetNumber)
                number4 = Math.floor(Math.random()* 12) + 1;
                userTotal= 0;
                $("#total").text(userTotal);

        }
    });




 })
