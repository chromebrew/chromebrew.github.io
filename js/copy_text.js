// copy_text.js: Save text to clipboard on click

const elements = Array.prototype.slice.call(document.getElementsByClassName('can-copy'));

elements.forEach(e => {
  const code    = e.getElementsByTagName('code')[0].innerText.replace(/^\$ /, '');
  e.onmouseover = () => e.setAttribute('data-before', 'Click to copy');
  e.onclick     = () => {
    navigator.clipboard.writeText(code);
    e.setAttribute('data-before', 'Copied!');
  };
});