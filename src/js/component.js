// IIFE
(() => {

// Global Vars

// Functions
const dummyText = () => {
   let dest = document.getElementById('dummy');
   dest.innerHTML = "<h1>Test Deployment</h1><hr>" + "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda praesentium vitae perspiciatis debitis, quisquam alias ab nemo harum dolor, ducimus hic placeat delectus! Sapiente, sit delectus aliquid laborum est sequi.</p>";
};


// Function Calls
window.onload = () => {
   dummyText();
}


})();