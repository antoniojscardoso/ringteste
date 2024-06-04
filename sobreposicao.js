function toggleMarcaDagua(imagem) {
  var marcaDagua = document.querySelector('.marca-dagua');
  marcaDagua.style.top = imagem.offsetTop + 'px';
  marcaDagua.style.left = imagem.offsetLeft + 'px';
  
  // Verifica se a imagem já possui a marca d'água
  if (imagem.classList.contains('has-watermark')) {
      // Remove a marca d'água da imagem
      imagem.classList.remove('has-watermark');
      marcaDagua.classList.remove('show');
      marcaDagua.classList.add('grid'); // Adiciona a classe para mostrar no fundo do grid
  } else {
      // Adiciona a marca d'água à imagem
      imagem.classList.add('has-watermark');
      marcaDagua.classList.remove('grid'); // Remove a classe para mostrar no fundo do grid
      marcaDagua.classList.add('show');
  }
}