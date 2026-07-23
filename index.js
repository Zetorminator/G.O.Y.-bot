require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/goy-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command('/goy-meaningoflife', async ({ command, ack, respond }) => {
  await ack();

  const responses = [
    "The meaning of life to me is to find a purpose in this never ending misery.",
    "The meaning of life is 42!"
  ];

  const randomIndex = Math.floor(Math.random() * responses.length);
  const chosenResponse = responses[randomIndex];

  try {
    await respond({ 
      text: chosenResponse,
      response_type: "in_channel" 
    });
  } catch (error) {
    console.error('something went horrible worng, like there was and explosion wrong:', error);
  }
});

app.command('/goy-fact', async ({ command, ack, respond }) => {
  await ack();

  try {
  
    const apiResponse = await fetch("https://jsph.pl", {
      headers: {
        "Accept": "application/json"
      }
    });
    
    if (!apiResponse.ok) {
      throw new Error(`API responded with status code ${apiResponse.status}`);
    }

    const data = await apiResponse.json();
    const randomFact = data.text;

    await respond({ 
      text: `*Did you know?* \n${randomFact}`,
      response_type: "in_channel" 
    });
  } catch (error) {
    console.error('Error fetching random fact from API:', error.message || error);
    await respond({ text: "Sorry, the facts service is currently unavailable or returning an error page. Please try again later!" });
  }
});

app.command('/goy-coin', async ({ command, ack, respond }) => {
  await ack();

  const outcomes = ["Heads", "Tails"];
  const randomIndex = Math.floor(Math.random() * outcomes.length);
  const result = outcomes[randomIndex];

  try {
    await respond({
      text: `The coin landed on: ${result}`,
      response_type: "in_channel"
    });
  } catch (error) {
    console.error('Error running coinflip command:', error);
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("bot is not just running but its sprinting to deliver some anwser to your questions!");
})();

process.on('uncaughtException', (err) => {
  console.error('The bot crashed due to an unhandled error:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});