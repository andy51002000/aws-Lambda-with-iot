    var mythingstate = {
        "state": {
            "desired": {
                "monitor": "on" //update your state here.
            },
            
            "reported": {
                "monitor": "off" //update your state here.
            }
            
        }
    }
    
    var params = {
        payload: JSON.stringify(mythingstate),
        /* required */
        thingName: 'mytestclient2' /* required */
    };
    iotdata.updateThingShadow(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data); // successful response
    });