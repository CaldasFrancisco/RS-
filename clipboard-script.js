function copiarCorrecoes() {
  const caixaCorrecoes = document.getElementById('corrections-box');
  if (caixaCorrecoes.value) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(caixaCorrecoes.value)
        .then(() => {
          alert('Texto copiado para a área de transferência!');
        })
        .catch(err => {
          console.error('Erro ao copiar texto: ', err);
          fallbackCopyText(caixaCorrecoes.value);
        });
    } else {
      fallbackCopyText(caixaCorrecoes.value);
    }
  } else {
    alert('Nenhum texto para copiar!');
  }
}

function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência usando método alternativo!');
  } catch (err) {
    console.error('Falha ao copiar texto usando método alternativo: ', err);
    alert('Falha ao copiar texto. Por favor, copie manualmente.');
  }
  document.body.removeChild(textArea);
}