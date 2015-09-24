
var margin = {top: 30, right: 10, bottom: 20, left: 10},
    width = 960 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

var x = d3.scale.ordinal().rangePoints([0, width], 1),
    y = {};

var line = d3.svg.line(),
    axis = d3.svg.axis().orient("left"),
    background,
    foreground,
    circles,
    filtered;

var svg = d3.select(".svg").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



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


  function draw (data) {

    svg.selectAll("g").remove();

    var filteredNames = [];

    data.forEach(function (d) {
        
          filteredNames.push(d.university);  
 
    
    })    

    //console.log(data[1].ACCESS,data[1].university)

    createBarCharts("ACCESS",data[1].university);

    // Extract the list of dimensions and create a scale for each.
    x.domain(dimensions = d3.keys(data[0]).filter(function(d) {

      return d != "university" && (y[d] = d3.scale.linear() 
          .domain(d3.extent(defaultData, function(p) { return +p[d]; }))
          .range([height, 0]));

    }));


    // Add a group element for each dimension.
    var g = svg.selectAll(".dimension")
        .data(dimensions)
      .enter().append("g")
        .attr("class", "dimension")
        .attr("transform", function(d) { return "translate(" + x(d) + ")"; });

    // Add an axis and title.
    g.append("g")
        .attr("class", "axis")
        .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
      .append("text")
        .style("text-anchor", "middle")
        .attr("y", -9)
        .text(function(d) { return d; });




    var pathContainers = svg.selectAll('g.line')
    .data(data);

    pathContainers.enter().append('g')
    .attr('class', 'line');


    pathContainers.selectAll('path')
    .data(function (d) { return [d]; }) // continues the data from the pathContainer
    .enter().append('path')
      .attr('d', path)
        .attr("class", function (d) {
          return d.university === "AVERAGE" ? "average" : "other"
        });      


    // add circles
    pathContainers.selectAll('circle')
    //.data(function (d) { return d; })
    .data(function (d) { 
      //console.log(dimensions.map(function(p) { return {x:x(p), y:y[p](d[p]), what:p, university: d}; }))
      return dimensions.map(function(p) { return {x:x(p), y:y[p](d[p]), what:p, university: d.university}; })
     })
    .enter().append('circle')
    .attr('cx', function (d) { return d.x; })
    .attr('cy', function (d) { return d.y; })
    .attr('r', 10)
        .attr("class", function (d) {
          return d.university === "AVERAGE" ? "averageCircle" : "otherCircle"
        }).on("click", function (d) {
          if (d.university !== "AVERAGE") {
            createBarCharts(d.what, d.university);
          }                   
        });      







  }  


  filtered = defaultData.filter(function (d) {
    return d.university === defaultData[1].university || d.university === "AVERAGE";
  })


  draw(filtered);


  d3.select("select#select").on("change", function () {

    var value = d3.select("select#select").node().value;

    

    filtered = defaultData.filter(function (d) {
      return d.university === value || d.university === "AVERAGE";
    })

    d3.select(".svg1svg").remove();

    draw(filtered);

  })  


// Returns the path for a given data point.
function path(d) {
  return line(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
}

function createBarCharts (what, university) {

  // d3.entries({foo: 42, bar: true}); // [{key: "foo", value: 42}, {key: "bar", value: true}]

  d3.select(".svg1svg").remove();

  var data1, data2;

  var margin1 = {top: 100, right: 550, bottom: 20, left: 30},
      width1 = 960 - margin1.left - margin1.right,
      height1 = 500 - margin1.top - margin1.bottom,
      dimensions1;

  var margin2 = {top: 100, right: 10, bottom: 20, left: 500},
      width2 = 960 - margin1.left - margin1.right,
      height2 = 500 - margin1.top - margin1.bottom,
      dimensions2;      


  var x1 = {},
      y1 = d3.scale.ordinal().rangePoints([0, height1], 1);


  var x2 = {},
      y2 = d3.scale.ordinal().rangePoints([0, height2], 1);


  var svg0 = d3.select(".svg1").append("svg")
      .attr("width", 960)
      .attr("height", 500)
      .attr("class","svg1svg");

  // title    
  svg0.append("text").text(what + " at " + university)
    .attr("transform","translate(" +[960 / 2, 20]+ ")")
    .style("text-anchor", "middle") 
    .style("font-size", 14)

  //"Percent"
  svg0.append("text").text("Percent:")
    .attr("transform","translate(" +[margin1.left + 150, 70] + ")")
    .style("font-size", 13)    

  //"Rank"
  svg0.append("text").text("Rank:")
    .attr("transform","translate(" +[margin2.left + 150, 70] + ")")
    .style("font-size", 13)       
            

  var svg1 = svg0.append("g")
        .attr("transform", "translate(" + margin1.left + "," + margin1.top + ")");

  var svg2 = svg0.append("g")
        .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");  


  if (what === "ACCESS") {
    //cat1
    data1 = d3.entries(cat11.filter(function (d) {return d.university === university})[0]);
    data2 = d3.entries(cat12.filter(function (d) {return d.university === university})[0]);


    // Extract the list of dimensions and create a scale for each.
    y1.domain(dimensions1 = d3.keys(cat11[0]).filter(function(d) {
      return d != "university" && (x1[d] = d3.scale.linear() 
          .domain(d3.extent(cat11, function(p) { return +p[d]; }))
          .range([10, width1]));
    }));

    // Extract the list of dimensions and create a scale for each.
    y2.domain(dimensions2 = d3.keys(cat12[0]).filter(function(d) {
      return d != "university" && (x2[d] = d3.scale.linear() 
          .domain(d3.extent(cat12, function(p) { return +p[d]; }))
          .range([110, width2]));
    }));    
    


  } else if (what === "SUPPLY AND DEMAND") {
    //cat2
    data1 = d3.entries(cat21.filter(function (d) {return d.university === university})[0]);
    data2 = d3.entries(cat22.filter(function (d) {return d.university === university})[0]);  

    // Extract the list of dimensions and create a scale for each.
    y1.domain(dimensions1 = d3.keys(cat21[0]).filter(function(d) {
      return d != "university" && (x1[d] = d3.scale.linear() 
          .domain(d3.extent(cat21, function(p) { return +p[d]; }))
          .range([10, width1]));
    }));

    // Extract the list of dimensions and create a scale for each.
    y2.domain(dimensions2 = d3.keys(cat22[0]).filter(function(d) {
      return d != "university" && (x2[d] = d3.scale.linear() 
          .domain(d3.extent(cat22, function(p) { return +p[d]; }))
          .range([10, width2]));
    }));


  } else if (what === "LEARNING JOURNEY") {
    //cat3
    data1 = d3.entries(cat31.filter(function (d) {return d.university === university})[0]);
    data2 = d3.entries(cat32.filter(function (d) {return d.university === university})[0]); 

    // Extract the list of dimensions and create a scale for each.
    y1.domain(dimensions1 = d3.keys(cat31[0]).filter(function(d) {
      return d != "university" && (x1[d] = d3.scale.linear() 
          .domain(d3.extent(cat31, function(p) { return +p[d]; }))
          .range([10, width1]));
    }));

    // Extract the list of dimensions and create a scale for each.
    y2.domain(dimensions2 = d3.keys(cat32[0]).filter(function(d) {
      return d != "university" && (x2[d] = d3.scale.linear() 
          .domain(d3.extent(cat32, function(p) { return +p[d]; }))
          .range([10, width2]));
    }));

  } else if (what === "POST GRADUATE OUTCOMES") {
    //cat4
    data1 = d3.entries(cat41.filter(function (d) {return d.university === university})[0]);
    data2 = d3.entries(cat42.filter(function (d) {return d.university === university})[0]); 

    // Extract the list of dimensions and create a scale for each.
    y1.domain(dimensions1 = d3.keys(cat41[0]).filter(function(d) {
      return d != "university" && (x1[d] = d3.scale.linear() 
          .domain(d3.extent(cat41, function(p) { return +p[d]; }))
          .range([10, width1]));
    }));

    // Extract the list of dimensions and create a scale for each.
    y2.domain(dimensions2 = d3.keys(cat42[0]).filter(function(d) {
      return d != "university" && (x2[d] = d3.scale.linear() 
          .domain(d3.extent(cat42, function(p) { return +p[d]; }))
          .range([10, width2]));
    }));

  } else {
    // "RESEARCH INTENSITY"
    //cat5
    data1 = d3.entries(cat51.filter(function (d) {return d.university === university})[0]);
    data2 = d3.entries(cat52.filter(function (d) {return d.university === university})[0]);  

    // Extract the list of dimensions and create a scale for each.
    y1.domain(dimensions1 = d3.keys(cat51[0]).filter(function(d) {
      return d != "university" && (x1[d] = d3.scale.linear() 
          .domain(d3.extent(cat51, function(p) { return +p[d]; }))
          .range([10, width1]));
    }));

    // Extract the list of dimensions and create a scale for each.
    y2.domain(dimensions2 = d3.keys(cat52[0]).filter(function(d) {
      return d != "university" && (x2[d] = d3.scale.linear() 
          .domain(d3.extent(cat52, function(p) { return +p[d]; }))
          .range([10, width2]));
    }));

  }

  data1.shift();
  data2.shift();

  console.log(data1)

  // http://codepen.io/pyche/pen/Bmzds

  // Add a group element for each dimension
  // left
  var leftBars = svg1.selectAll(".left")
    .data(data1)
    .enter().append("g")
      .attr("class", "left")
      .attr("transform", function(d,i) { return "translate(0," + 50 * i + ")"; }); 

  var labelsLeft = leftBars.append("text")
                .text(function(d){return d.key})  

  var barsLeft = leftBars.append("rect")
                  .attr({
                    x: 0,
                    y: 5,
                    width: function (d,i) {return x1[d.key](d.value)},
                    height: 20,
                    fill: "darkred"
                  })        

  // right
  var rightBars = svg2.selectAll(".right")
    .data(data2)
    .enter().append("g")
      .attr("class", "right")
      .attr("transform", function(d,i) { return "translate(0," + 50 * i + ")"; }); 

  var labelsRight = rightBars.append("text")
                .text(function(d){return d.key})  

  var barsRight = rightBars.append("rect")
                  .attr({
                    x: 0,
                    y: 5,
                    width: function (d,i) {return x2[d.key](d.value)},
                    height: 20,
                    fill: "steelblue"
                  })                               

}