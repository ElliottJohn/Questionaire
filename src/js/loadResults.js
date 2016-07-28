function loadResults()
            {

                $(".radio_btn:checked").each(function(){
                    session.SubmittedAnswers.push($(this).val());
                });

                $.getJSON('/dist/jquery/data.json', function(data) 
                {
                    for (i=0; i < data.question.length; i++)
                    {
                        var results = "<h3 class='remove'>" + data.question[i].label + "</h3> <p class='remove'> Your answer was '" + session.SubmittedAnswers[i].replace(/_/g, ' ') + "' the correct answer was '" + data.question[i].answer + "'. </p>";
                        $(".js-results").append(results);   
                    }
                });

                $("form").hide(500);
                $("ul").show(500);
                $("#back_btn").show(500);
            };