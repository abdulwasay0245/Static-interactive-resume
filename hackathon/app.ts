const toggleButton = document.querySelector(".toggle-button") as HTMLButtonElement | null;
const hiddenElements = document.querySelectorAll(".hidden") as NodeListOf<HTMLElement>;

toggleButton?.addEventListener('click', () => {
  hiddenElements.forEach(element => {
    element.classList.toggle('show');
  });
});