var h = window.innerHeight;
var w = window.innerWidth;

var hRect = 100;
var wRect = 100;

var age = [];
var name = [];
var gender = [];

var svg = d3.select('body') // Select body element of HTML
           .append('svg'); // Append SVG element to HTML body

           svg.attr('height', h)
           .attr('width', w);
// var rect = svg.append('rect') // Add rect element to SVG element
//                .attr('height', 0)
//                .attr('width', 0)
//                .attr('fill', none)
//                .attr('x', w/2-hRect/2)
//                .attr('y', h/2-wRect/2);

function rectTransition() { 

    var timeCircle = svg.append('rect') // Add rect element to SVG element
               .attr('fill', 'black')
               .attr('stroke','black')
               .attr('stroke-width',1);
    repeat();
    
    function repeat() {
      timeCircle
        .attr('height', 80*4)
        .attr('width', 40*4)
        .attr('x', w/2-20*4)
        .attr('y', h/2-40*4) 
        .attr('fill', 'Maroon')
        .transition()
        .duration(700)
        .delay(3000)
        .attr('height', 20*4)
        .attr('width', 70*4)
        .attr('x', w/2-35*4)
        .attr('y', h/2-10*4)
        .attr('fill', 'RoyalBlue') 
        .transition()
        .duration(700)
        .delay(3000)
        .attr('height', 80*4)
        .attr('width', 40*4)
        .attr('x', w/2-20*4)
        .attr('y', h/2-40*4)
        .attr('fill', 'Maroon') 
        .on("end", repeat);
    };

};

rectTransition();