document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const copyButton = document.getElementById("copy-bibtex");
  const bibtex = document.getElementById("bibtex");

  if (copyButton && bibtex) {
    copyButton.addEventListener("click", async () => {
      const originalText = copyButton.textContent;
      try {
        await navigator.clipboard.writeText(bibtex.textContent.trim());
        copyButton.textContent = "Copied!";
      } catch (error) {
        copyButton.textContent = "Copy manually";
      }
      window.setTimeout(() => {
        copyButton.textContent = originalText;
      }, 1400);
    });
  }
});
