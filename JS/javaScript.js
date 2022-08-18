$(function(){
'use strict';

let myJSONObj = '{"username":"brahim", "Age": 400}';
let myJsObj = JSON.parse(myJSONObj);

$('#name').text(myJsObj.username);
$('#age').text(myJsObj.Age);

});