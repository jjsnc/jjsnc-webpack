/*
* @Author: jjsnc
* @Date:   2018-07-28 19:06:57
* @Last Modified by:   jjsnc
* @Last Modified time: 2018-07-28 19:08:41
*/

@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

console.log(MyTestableClass.isTestable )// true