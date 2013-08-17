var dataset = [9, 10, 15, 20, 25];

var chart = d3.select("body").append("div").attr("class","chart");


d3.select("body").selectAll("p").data(dataset).enter().append("p")
    .text(function(d) {
        return d;
    }).style("color", function(d) {
        if (d > 15) {
            return "red";
        } else {
            return "black";
        }
    });

d3.select("p").append('<div>').attr("class","bar");

var chart = d3.select("body").append("svg").
