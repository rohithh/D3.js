// for extracting data

for(var elem in final){
document.write("[\""+final[elem][0]+"\","+"\""+final[elem][1]+"\","+"\""+final[elem][2]+"\"]<br>,");
}

// For getting counts of players

var obj={};
var start=;
var end=;
for(var i=start;i<end;i++){
if(!(datax[i][0] in obj)){
obj["\""+datax[i][0]+"\""]=1;
}
else{
obj["\""+datax[i][0]+"\""]=obj["\""+datax[i][0]+"\""]+1;
}}

for(var i=start;i<end;i++){
obj["\""+datax[i][0]+"\""]+=1;
}

// Create items array
var items = Object.keys(obj).map(function(key) {
    return [key, obj[key]];
});

// Sort the array based on the second element
items.sort(function(first, second) {
    return second[1] - first[1];
});

for(var i=0;i<items.length;i++){
document.write(items[i][0]+"<br>,");
}