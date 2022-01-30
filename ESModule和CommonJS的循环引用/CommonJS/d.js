var { message } = require('./c.js');
exports.count=5;
setTimeout(function(){
    console.log(message);
},0)

// 正确做法
var obj=require('./c.js');
exports.count=5;
setTimeout(function(){
    console.log(obj.message);
},0)