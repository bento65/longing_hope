document.getElementById("revealButton").addEventListener("click", function() {
    const letter = document.getElementById("letter");
    letter.classList.remove("hidden"); // Remove a classe hidden
    this.style.display = "none"; // Esconde o botão após clicar
});
