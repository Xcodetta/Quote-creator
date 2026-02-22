function typeQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "✍️",
  });
  console.log(response.data.answer);
}

function createQuote(event) {
  event.preventDefault();

  let transmitInput = document.querySelector("#transmitting");
  let apiKey = "e7b3f4obebt21aeffd4fe6d8a0da7143";
  let prompt = `User Instructions: Generate a motivational, inspirational, or funny ${transmitInput.value}`;
  let context =
    "You are a motivational AI assistant that generates short quotes. Your objective is to generate a short quote. Make sure to follow the user's instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("sending quote");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  let quoteForm = document.querySelector("#quote");
  quoteForm.innerHTML = `<div class="blink">"Quote incoming..."</div>`;

  axios.get(apiURL).then(typeQuote);
}

let quoteElement = document.querySelector("#quote-maker");
quoteElement.addEventListener("submit", createQuote);
