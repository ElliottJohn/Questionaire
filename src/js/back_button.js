function back_button()
            { 
                session.SubmittedAnswers.length = 0;
                $( ".remove" ).remove();
                $("ul").hide(500);
                $("#back_btn").hide(500);
                $("form").show(500);

            }