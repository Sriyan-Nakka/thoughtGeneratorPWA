if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("SW registered");
      console.log(registration);
    })
    .catch((error) => {
      console.log("SW Registration failed");
      console.log(error);
    });
}

function getThought() {
  const randNum = Math.floor(Math.random() * 75) + 1;
  const thoughtNum = `thought${randNum}`;
  console.log(thoughtNum);

  fetch("thoughts.json")
    .then((response) => response.json())
    .then((thoughts) => {
      document.querySelector("#thoughtSpan").innerText = thoughts[thoughtNum];
    })
    .catch((error) =>
      console.error("Error fetching or parsing thoughts.json:", error)
    );
}

getThought();

document.querySelector("#changesButton").addEventListener("click", function () {
  let borderColor = document.querySelector("#borderColor").value;
  let textColor = document.querySelector("#textColor").value;
  document.querySelector("#mainContainer").style.borderColor = borderColor;
  document.querySelector("#thoughtDisplay").style.color = textColor;
});
