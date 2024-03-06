// IIFE
(() => {

// Global Vars

// Functions
// Make a clickable divider & scroll-down indicator
const getDivider = () => {
   let divider = document.createElement('div');
   divider.innerHTML = "<hr><i class='fa-solid fa-angles-down'></i>";
   divider.classList.add("text-center", "text-secondary");
   return divider;
};

// Function Calls
window.onload = () => {
   const wrapper = document.querySelector('nav').parentNode;
   wrapper.append(getDivider());

}


})();