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


Credits

API Provider: Joseph Paul (jsphpl) for providing free-to-use [Random Useless Facts API] 

AI Attribution
Artificial Intelligence (AI) assistance was used exclusively to help write, structure, and handle errors for the `/goy-fact` command integration (connecting to the jsph.pl API). All other features, architecture setups, and command logic were developed independently.
