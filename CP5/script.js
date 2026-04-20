const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

const filterItems = document.querySelectorAll('.filter-list li');
const pokemonCards = document.querySelectorAll('.pokemon-card');

filterItems.forEach(item => {
  item.addEventListener('click', () => {
    filterItems.forEach(f => f.classList.remove('active'));
    item.classList.add('active');

    const filter = item.dataset.filter;

    pokemonCards.forEach(card => {
      if (filter === 'todos' || card.dataset.type === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');

pokemonCards.forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById('modal-name').textContent = card.dataset.name;
    document.getElementById('modal-altura').textContent = 'Altura: ' + card.dataset.altura;
    document.getElementById('modal-peso').textContent = 'Peso: ' + card.dataset.peso;
    document.getElementById('modal-categoria').textContent = 'Categoria: ' + card.dataset.categoria;
    document.getElementById('modal-habilidade').textContent = 'Habilidades: ' + card.dataset.habilidade;
    document.getElementById('modal-tipo').textContent = card.dataset.tipoIcon;
    document.getElementById('modal-fraqueza').textContent = card.dataset.fraquezaIcon;

    const evoDiv = document.getElementById('modal-evolution');
    evoDiv.innerHTML = '';
    const evos = [card.dataset.evo1, card.dataset.evo2, card.dataset.evo3].filter(Boolean);
    evos.forEach((src, i) => {
      if (i > 0) {
        const arrow = document.createElement('span');
        arrow.textContent = '>';
        evoDiv.appendChild(arrow);
      }
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Evolução ' + (i + 1);
      evoDiv.appendChild(img);
    });

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

const cartaNomeInput = document.getElementById('carta-nome');
const cartaVidaInput = document.getElementById('carta-vida');
const cartaPokemonSelect = document.getElementById('carta-pokemon');
const cartaAtaqueInput = document.getElementById('carta-ataque');
const cartaCategoriaSelect = document.getElementById('carta-categoria');
const cartaResistenciaInput = document.getElementById('carta-resistencia');

const cartaDisplayNome = document.getElementById('carta-display-nome');
const cartaDisplayVida = document.getElementById('carta-display-vida');
const cartaDisplayAtaque = document.getElementById('carta-display-ataque');
const cartaDisplayResistencia = document.getElementById('carta-display-resistencia');
const cartaDisplayCategoria = document.getElementById('carta-display-categoria');
const cartaPokemonImg = document.getElementById('carta-pokemon-img');

function updateCard() {
  cartaDisplayNome.textContent = cartaNomeInput.value || '—';

  cartaDisplayVida.textContent = cartaVidaInput.value
    ? cartaVidaInput.value + ' HP'
    : '';

  cartaDisplayAtaque.textContent = cartaAtaqueInput.value
    ? '⚔️ Ataque: ' + cartaAtaqueInput.value
    : '';

  cartaDisplayResistencia.textContent = cartaResistenciaInput.value
    ? '🛡️ Resistência: ' + cartaResistenciaInput.value
    : '';

  cartaDisplayCategoria.textContent = cartaCategoriaSelect.value
    ? '🏷️ Categoria: ' + cartaCategoriaSelect.value
    : '';

  const pkName = cartaPokemonSelect.value;
  if (pkName) {
    cartaPokemonImg.src = 'images/pokemons/' + pkName + '.png';
    cartaPokemonImg.alt = pkName;
  } else {
    cartaPokemonImg.src = '';
    cartaPokemonImg.alt = '';
  }
}

[cartaNomeInput, cartaVidaInput, cartaAtaqueInput, cartaResistenciaInput].forEach(el => {
  el.addEventListener('input', updateCard);
});

[cartaPokemonSelect, cartaCategoriaSelect].forEach(el => {
  el.addEventListener('change', updateCard);
});

document.getElementById('btn-enviar').addEventListener('click', () => {
  updateCard();
});
