exports.handler = async (event) => {
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