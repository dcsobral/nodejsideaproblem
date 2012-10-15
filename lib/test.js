/**
 * Created with IntelliJ IDEA.
 * User: dcs
 * Date: 10/15/12
 * Time: 1:59 PM
 * To change this template use File | Settings | File Templates.
 */

var Test = function(){};

Test.prototype = {
    testIt: function() {
        console.log("Testing from Test's testIt");
    }
};

module.exports = new Test();
