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
  