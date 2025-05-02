exports.lambdaHandler = async (event, context) => {
    console.log("Received event: ", event);  // Log the event for debugging
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello, World!' }),
    };
  };
  