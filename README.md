idk what to write here so ill paste the description of my bot and its devlog
G.O.Y. bot anwsers philosophical questions , helps you make decisons with coinflip, and it also teaches random facts if you ask him nicely.

devlog #1
    Randomized Philosophical anwser (/goy-meaningoflife)

Purpose: Returns a random answer to the question of
the meaning of life.

How it works: The command uses Math.random() and
Math.floor() to randomly select one response from a fixed array of possible
answers.

    Fetches random facts (/goy-fact)

Purpose: (self explanatory) Fetches random facts

How it works: The command fetches data from the
external API. It sends the Accept: application/json header and checks
apiResponse.ok to make sure the request was successful before processing the
JSON response.

    Coinflip(/goy-coin)

Purpose: a simple heads or tails result directly in
the execution channel.

How it works: The command uses an array containing
two possible results, [“Heads”, “Tails”], and randomly
selects one of them using a mathematical array index.
