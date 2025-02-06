document.getElementById('romanInput').addEventListener('input', function () {
  const romanizedText = document.getElementById('romanInput').value;
  const nepaliText = Sanscript.t(romanizedText, 'itrans', 'devanagari');
  document.getElementById('result').innerText = nepaliText;
});

document.getElementById('copyAllBtn').addEventListener('click', function () {
  const resultDiv = document.getElementById('result');
  const range = document.createRange();
  range.selectNodeContents(resultDiv);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  // selection.removeAllRanges();
});

function applyTheme(theme) {
  if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

document.querySelectorAll('.theme-toggle input').forEach(input => {
  input.addEventListener('change', function () {
    applyTheme(this.value);
  });
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
  if (document.querySelector('input[name="theme"]:checked').value === 'system') {
    applyTheme('system');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  applyTheme(document.querySelector('input[name="theme"]:checked').value);
});
