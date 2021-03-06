var h = window.innerHeight;
var w = window.innerWidth;

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
  .attr('height', 0.5)
  .attr('width', 500)
  .attr('fill', 'black')
  .attr('stroke','black')
  .attr('stroke-width',1.2)
  .attr('x', w/2-250)
  .attr('y', h/2-0.25);

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
    rect.attr('fill','rgb(3,85,145)');
  }else {
    rect.attr('fill','rgb(0,92,82)');
  }

  counter++;
  if (counter >= students.length-1) {
    counter = 0;
  }
}, 1500);
})