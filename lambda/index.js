exports.handler = async (event) => {
  // Log the event for monitoring
  console.log("Hi there! Lambda function execution started", JSON.stringify(event));
  
  // Get current time in Paris
  const now = new Date();
  const parisTime = new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    minute: '2-digit'
  }).format(now);
  
  // My name
  const name = "Baptiste JULIENNE & Thomas CATROS";
  
  // Create response message
  const message = `Hello World ! Ici ${name}, à ${parisTime}`;
  console.log("Response message created:", message);
  
  // Return response
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message
    })
  };
};