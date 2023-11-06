var request = new XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    //console.log(data);
           var result = JSON.parse(data)
           console.log(result)
for(var i=0;i<result.length;i++)
console.log(result[i].area)

}



//Question 3;

var request1 = new XMLHttpRequest();
request1.open("Get","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload=function(){
    var data1 = request1.response;
    //console.log(data);
           var result1 = JSON.parse(data1)
          // console.log(result1);
for(var i=0;i<result1.length;i++)
console.log(result1[i].name.common)

}

