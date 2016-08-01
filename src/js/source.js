/*global $, jQuery*/
/*jslint plusplus: true */
var session = {
    'SubmittedAnswers': [
    ]
};

function back_button() {
    "use strict";
    session.SubmittedAnswers.length = 0;
    $(".remove").remove();
    $("ul").hide(500);
    $("#back_btn").hide(500);
    $("form").show(500);
}

function loadResults() {
    "use strict";
    var i;
    var results;
    $(".radio_btn:checked").each(function () {
        session.SubmittedAnswers.push($(this).val());
    });

    $.getJSON('/dist/jquery/data.json', function (data) {
        for (i = 0; i < data.question.length; i++) {
            results = "<h3 class='remove'>" + data.question[i].label + "</h3> <p class='remove'> Your answer was '" + session.SubmittedAnswers[i].replace(/_/g, ' ') + "' the correct answer was '" + data.question[i].answer + "'. </p>";
            $(".js-results").append(results);
        }
    });

    $("form").hide(500);
    $("ul").show(500);
    $("#back_btn").show(500);
}

function on_load() {
    "use strict";
    var i;
    var n;
    var questions;
    var options;
    var q_options;
    $("ul").hide();
    $("#back_btn").hide();
    $.getJSON('/dist/jquery/data.json', function (data) {
        for (i = 0; i < data.question.length; i++) {
            questions = "<p>" + data.question[i].label + "</p>";
            options = {'options': []};
            $(".js-form").append(questions);
            for (n = 0; n < data.question[i].options.length; n++) {
                q_options = data.question[i].options[n];
                options.options[n] = "<label> <input type=" + q_options.type + " name=" + q_options.name + " id=" + q_options.id + " value=" + q_options.value + ">" + q_options.label + "</label>";
                $(".js-form").append(options.options[n]);
                $("input[type=radio]").addClass("radio_btn");
                $("input[type=radio]").attr("required", true);
            }
        }
    });
}
