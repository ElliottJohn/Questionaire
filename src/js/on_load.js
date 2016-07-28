function on_load() 
            {
                $("ul").hide();
                $("#back_btn").hide();
                $.getJSON('/dist/jquery/data.json', function(data) 
                {
                    for (i=0; i < data.question.length; i++)
                    {
                        var questions = "<p>" + data.question[i].label + "</p>";
                        var options = {'options': []};
                        $(".js-form").append(questions);   
                        for (n=0; n < data.question[i].options.length; n++)
                        {
                            var q_options = data.question[i].options[n];
                            options.options[n] = "<label> <input type=" + q_options.type +" name=" + q_options.name + " id=" + q_options.id + " value=" + q_options.value + ">" + q_options.label + "</label>";

                            $(".js-form").append(options.options[n]); 
                            $("input[type=radio]").addClass("radio_btn");
                            $("input[type=radio]").attr("required", true);
                        }
                    }
                });