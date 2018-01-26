var h = window.innerHeight;
var w = window.innerWidth;

var hRect = 100;
var wRect = 100;

// var age=[23,24,25,24,27,24];
// var letters=[14,13,26,15,16,16];
// var gender=["f","f","f","m","f","m"];

d3.tsv('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4gScrT35HsL4tO2UbWqpfvc_WDKUfrOFlllqJqJyjONBWsNAsaD7GUPjufBxUof8y8Cfd8WD2Ym4e/pub?gid=542385431&single=true&output=tsv', function(err,data){
  if (err) throw err;
  console.log(data);
  students = data;
  var rect = d3.select('#trick') // Select body element of HTML
            .append('svg') // Append SVG element to HTML body
            .attr('width',w)
            .attr('height',h)
            .append('rect');

  rect
  .attr('height', 0)
  .attr('width', 0)
  .attr('fill', 'black')
  .attr('stroke','black')
  .attr('stroke-width',1)
  .attr('x', w/2)
  .attr('y', h/2);

var counter = 0;

d3.interval(function(){
  console.log(counter)
  rect.transition()
    .duration(400)
    .attr('width', students[counter].age*20)
    .attr('height', students[counter].letters*20)
    .attr('x', w/2-students[counter].age*10)
    .attr('y', h/2-students[counter].letters*12);

  if (students[counter].gender == 'f'){
    rect
    .attr('fill','Maroon');
  }else {
    rect
    .attr('fill','rgb(0,92,82)');
  }

  counter++;
  if (counter >= students.length-1) {
    counter = 0;
  }
}, 1500);
})