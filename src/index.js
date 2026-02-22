function createQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Quote incoming!..",
    autoStart: true,
    delay: 10,
    cursor: "✍️",
  });
}

let quoteElement = document.querySelector("#quote-maker");
quoteElement.addEventListener("submit", createQuote);
