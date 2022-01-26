function splitText() {
  const buttons = document.querySelectorAll('.mainlist-link');
  buttons.forEach(button => {
    const words = Array.from(button.children).filter(function (item) {
      return item.matches('.word');
    });
    words.forEach(word => {
      let text = document.createElement('span');
      text.classList.add('full-text');
      text.innerHTML = word.getAttribute('data-word');
      word.appendChild(text);
    });
  });
}

Splitting();
splitText();

// Splitting();

// const target = document.querySelector('#target');
// const results = Splitting({ target: target, by: 'words' });