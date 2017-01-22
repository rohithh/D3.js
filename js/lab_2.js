
var data = [];

//define row information
function row(d) {
  return {
    year: +d.year, // convert "Year" column to number
    gender: d.gender,
    winner_ace: +d.winner_ace,
    winner: d.winner,
    winner_country: d.winner_country
  };
}



//load csv file
d3.csv("USOpenFinals_2016.csv", row, function(error, csv_data){
    csv_data.forEach(function (d) {
        data.push({ year: d.year, gender: d.gender, winner_ace: d.winner_ace, winner: d.winner, winner_country: d.winner_country });
    });

    var scale_year = d3.scaleLinear()
                    .domain([2006, 2016])
                    .range([0, 550]);
    var scale=d3.scaleLinear()
                    .domain([0,20])
                    .range([0, 550]);
    var scale_y = d3.scaleLinear()
                    .domain([20,0])
                    .range([0, 500]);
    var scale_year = d3.scaleLinear()
                    .domain([2006, 2016])
                    .range([0, 550]);                
    
var yaxis=d3.axisLeft().scale(scale_y);

var xaxis=d3.axisBottom().scale(scale_year);
      
           var stat=true;

//var canvas=d3.select('body').append('svg').attr('width',50).attr('height',1000).append('g').attr('transform','translate(40,0)').call(yaxis);
var data_svg = d3.select("#display")
    .append("svg")
        .attr("width", 100)
        .attr("height", 100);
    var data_g = data_svg.selectAll("circle")
        .data(data)
        .enter()
        .append("g")
        .filter(function(d) { return d.gender =="w"; });
    var data_circles = data_g.append("circle")
        .attr("cx", function(d) {
            return 50 + scale_year(d.year);
        })
        .attr("cy", function(d) {
            return 50 + scale_y(d.winner_ace);
        })
        .attr("r", 20)
        .attr("fill", "red")

        .on('click',function(d){
            if(stat == true){
                d3.select(this).attr('fill','green');
                stat=false;
            }
            else{
                d3.select(this).attr('fill','red');
                stat=true;
            }
        })
        .on('mouseover',function(d){
        data_g.selectAll('text').attr('opacity',0);

           data_g.append("text")
        .text(function(d){return d.winner_country;})
        .attr("x", function(d) {
            return 50 + scale_year(d.year);
        })
        .attr("y", function(d) {
            return 50 + scale_y(d.winner_ace);
        })
        })
        .on('mouseout',function(d){
            data_g.selectAll('text').attr('opacity',0);

           data_g.append("text")
        .text(function(d){return d.winner;})
        .attr("x", function(d) {
            return 50 + scale_year(d.year);
        })
        .attr("y", function(d) {
            return 50 + scale_y(d.winner_ace);
        })
        });
        

    var data_text = data_g.append("text")
        .text(function(d){return d.winner;})
        .attr("x", function(d) {
            return 50 + scale_year(d.year);
        })
        .attr("y", function(d) {
            return 50 + scale_y(d.winner_ace);
        })
        ;   
  

var yyaxis=data_svg.append('g').attr('transform','translate(20,50)').call(yaxis);
var canvas=data_svg.append('g').attr('transform','translate(40,560)').call(xaxis);
});



