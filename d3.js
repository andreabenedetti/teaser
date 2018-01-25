var h = window.innerHeight;
var w = window.innerWidth;

var hRect = 100;
var wRect = 100;

var age=[23,24,25,24,27,24];
var letters=[14,13,26,15,16,16];
var gender=["f","f","f","m","f","m"];

var svg = d3.select('#trick') // Select body element of HTML
           .append('svg'); // Append SVG element to HTML body

           svg.attr('width',w)
           .attr('height',h);
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
    
    // function repeat() {
    //   timeCircle
    //     .attr('height', 80*4)
    //     .attr('width', 40*4)
    //     .attr('x', w/2-20*4)
    //     .attr('y', h/2-40*4) 
    //     .attr('fill', 'Maroon')
    //     .transition()
    //     .duration(700)
    //     .delay(3000)
    //     .attr('height', 20*4)
    //     .attr('width', 70*4)
    //     .attr('x', w/2-35*4)
    //     .attr('y', h/2-10*4)
    //     .attr('fill', 'rgb(3,85,145)') 
    //     .transition()
    //     .duration(700)
    //     .delay(3000)
    //     .attr('height', 80*4)
    //     .attr('width', 40*4)
    //     .attr('x', w/2-20*4)
    //     .attr('y', h/2-40*4)
    //     .attr('fill', 'Maroon') 
    //     .on("end", repeat);
    // };

    function repeat() {
      var i = 0;
      if(i<5){
        timeCircle
          .transition()
          .duration(700)
          .delay(3000)
          .attr('width', age[i]*10)
          .attr('height', letters[i]*10)
          .attr('y', h/2-age[i]*5)
          .attr('x', w/2-letters[i]*5) 
          .attr('fill', 'Maroon');
          i++;
      }else{
        i=0
      };
    };

};

rectTransition();