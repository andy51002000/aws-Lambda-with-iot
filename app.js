
var AWS = require("aws-sdk");
var iotdata = new AWS.IotData({endpoint: ''});

exports.handler = function index(event, context, callback) {

            var clientId = getDeviceByUser(event.session.user.userId)
            var params = {
                topic: clientId+'/monitor',
                payload:  JSON.stringify('off'),
                qos: 0
                };
                
         
            iotdata.publish(params, function(err, data){
                if(err){
                    console.log('err:'+err);
                     context.fail(event); 
                }
                else{
                    console.log("success?");
                    context.succeed(event);
                }
 
            });
                            


}

