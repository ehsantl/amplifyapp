const fetch = require('node-fetch')

exports.handler = async (event) => {
    // TODO implement
    // gather cat fact
    const fact = await fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(json => json.fact)
        .catch(err => callback(Error(err)))
        
    return fact;
    /*    
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
    */
};




