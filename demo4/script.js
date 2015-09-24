
var margin1 = {top: 5, right: 50, bottom: 5, left: 70},
    width1 = 960 - margin1.left - margin1.right,
    height1 = 400 - margin1.top - margin1.bottom,
    dimensions1;   


var x1 = {},
    y1 = d3.scale.ordinal().rangePoints([0, height1], 1);


var svg1 = d3.select(".svg1").append("svg")
    .attr("width", 960)
    .attr("height", 400)
    .attr("class","svg1svg").append("g")
        .attr("transform", "translate(" + margin1.left + "," + margin1.top + ")");


var names = [];

defaultData.forEach(function (d) {
      names.push(d.university);        
})


names.forEach(function (d) {
  if (d !== "AVERAGE") {
    d3.select("#select")
      .append("option")
        .attr("value", d)
        .text(d);
  }    
});   

// Extract the list of dimensions and create a scale for each.
y1.domain(dimensions1 = d3.keys(cat1[0]).filter(function(d) {
  return d != "university" && (x1[d] = d3.scale.linear() 
      .domain(d3.extent(cat1, function(p) { return +p[d]; }))
      .range([10, width1]));
}));    




d3.select("select#select").on("change", function () {

  var value = d3.select("select#select").node().value;

  d3.selectAll("circle").style("opacity", 0.2)
  d3.selectAll("." + value.split("'")[0]).style("opacity", 1)

  // filtered = defaultData.filter(function (d) {
  //   return d.university === value || d.university === "AVERAGE";
  // })

  // d3.select(".svg1svg").remove();

  // draw(filtered);

}) 

var circleContainers1 = svg1.selectAll("g").data(cat1);
  

circleContainers1.enter().append('g')
  .attr('class', 'circleGroup');


circleContainers1.selectAll("circle")
  .data(function (d) { 
      return dimensions1.map(function(p) { return {y:y1(p), x:x1[p](d[p]), what:p, university: d.university}; })
     })
  .enter().append("circle")
  .attr({
    r: 10,
    cx: function (d) { return d.x;},
    cy: function (d) { return d.y;},
    class: function (d) { return d.university.split("'")[0];}
  })


svg1.selectAll("text")
  .data(dimensions1)
  .enter()
  .append("text")
  .text(function (d) {return d})
  .attr({    
    "transform": function (d) {return "translate(-5," + (4 + y1(d)) + ")"},
    "text-anchor": "end",
    "font-size": 13
  })


////////////////////////////////////////


var margin2 = {top: 5, right: 50, bottom: 5, left: 70},
    width2 = 960 - margin2.left - margin2.right,
    height2 = 330 - margin2.top - margin2.bottom,
    dimensions2;   


var x2 = {},
    y2 = d3.scale.ordinal().rangePoints([0, height2], 1);


var svg2 = d3.select(".svg2").append("svg")
    .attr("width", 960)
    .attr("height", 330)
    .attr("class","svg1svg").append("g")
        .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");


// var names = [];

// defaultData.forEach(function (d) {
//       names.push(d.university);        
// })


// names.forEach(function (d) {
//   if (d !== "AVERAGE") {
//     d3.select("#select")
//       .append("option")
//         .attr("value", d)
//         .text(d);
//   }    
// });   

// Extract the list of dimensions and create a scale for each.
y2.domain(dimensions2 = d3.keys(cat2[0]).filter(function(d) {
  return d != "university" && (x2[d] = d3.scale.linear() 
      .domain(d3.extent(cat2, function(p) { return +p[d]; }))
      .range([10, width2]));
}));    




// d3.select("select#select").on("change", function () {

//   var value = d3.select("select#select").node().value;

//   d3.selectAll("circle").style("opacity", 0.2)
//   d3.selectAll("." + value.split("'")[0]).style("opacity", 1)

//   // filtered = defaultData.filter(function (d) {
//   //   return d.university === value || d.university === "AVERAGE";
//   // })

//   // d3.select(".svg1svg").remove();

//   // draw(filtered);

// }) 

var circleContainers2 = svg2.selectAll("g").data(cat2);
  

circleContainers2.enter().append('g')
  .attr('class', 'circleGroup');


circleContainers2.selectAll("circle")
  .data(function (d) { 
      return dimensions2.map(function(p) { return {y:y2(p), x:x2[p](d[p]), what:p, university: d.university}; })
     })
  .enter().append("circle")
  .attr({
    r: 10,
    cx: function (d) { return d.x;},
    cy: function (d) { return d.y;},
    class: function (d) { return d.university.split("'")[0];}
  })


svg2.selectAll("text")
  .data(dimensions2)
  .enter()
  .append("text")
  .text(function (d) {return d})
  .attr({    
    "transform": function (d) {return "translate(-5," + (4 + y2(d)) + ")"},
    "text-anchor": "end",
    "font-size": 13
  })  