// IIFE
(() => {

window.onload = () => {
   // set hover effects to svg icons
   let contactIcons = document.querySelectorAll('.contactIcons');
   contactIcons.forEach(icon => {
      icon.parentNode.addEventListener('mouseover', () => {
         let path = icon.childNodes[2];
         path.setAttribute('fill', '#ffffff');
      });
      icon.parentNode.addEventListener('mouseout', () => {
         let path = icon.childNodes[2];
         path.setAttribute('fill', '#198754');
      });
   });

};

})();