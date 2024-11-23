const repeatString = function(str,num) {
    if(num<0)return "ERROR";
    and="";
    for(let i=0;i<num;i++){
        and+=str;
    }
    return and;
};

// Do not edit below this line
module.exports = repeatString;
