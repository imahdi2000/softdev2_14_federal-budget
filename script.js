var data_9 = [2.1,3.52,1.41,9.8,14.4];
var data_16 = [2.99,3.54,.552,3.3,16.5];
var svg = d3.select("svg");
var space = 0;
var control = true;


var graphgen = function(data){
    svg.selectAll("rect").remove();
    space = 0;
  	var rects = svg.selectAll("rect").data(data).enter();
    rects.append("rect")
      .transition()
      .duration(2000)
  		.attr("x",function(d) { return space +=70 })
  		.attr("y",function(d) { return 500 - (d * 20) })
      .attr("width",function(d) { return 30 })
      .attr("height",function(d) { return (d * 20) })
      .style("fill", "red");

    svg.selectAll("text").remove();
    space = 0;
  	var text = svg.selectAll("text").data(data).enter();
    rects.append("text")
      .transition()
      .duration(2000)
  		.attr("x",function(d) { return space +=70 })
  		.attr("y",function(d) { return 500 - (d * 20) })
      .text(function(d) { return d })
      .attr("font-family","Verdana")
      .attr("font-size","25")
      .style("fill", "blue")
    };

var transition = function(){
  if (control == true){
    graphgen(data_9);
    control = false;
    console.log(control);
    document.getElementById("butt").innerHTML = "Click for 2016";
  }
  else if (control == false){
    graphgen(data_16);
    control = true;
    console.log(control);
    document.getElementById("butt").innerHTML = "Click for  2009";
  }
}
