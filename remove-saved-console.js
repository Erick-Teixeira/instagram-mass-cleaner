;(async function () {
  // --- TEMPOS NO LIMITE (Rapidez com Segurança) ---
  const Remover_MS_Base = 350; // Tempo base rápido para remover
  const Proximo_MS_Base = 450; // Tempo base rápido para pular
  const Max_Espera_MS = 3500; // Espera máxima de 3.5s
  const Verificar_MS = 50; 

  const esperar = (ms) => {
    const tempoAleatorio = ms + Math.floor(Math.random() * 250);
    return new Promise((resolve) => setTimeout(resolve, tempoAleatorio));
  }

  const clicar = (elemento) => {
    if (!elemento) throw new Error('Elemento nao encontrado');
    elemento.click();
  }

  const esperarBotaoRemover = async () => {
    const inicio = Date.now();

    while (Date.now() - inicio < Max_Espera_MS) {
      const svgs = document.querySelectorAll('svg');

      for (const svg of svgs) {
        const caminho = svg.querySelector(
          'path[d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"]'
        );

        if (caminho) {
          let botao = svg.parentElement;

          for (let i = 0; i < 5; i++) {
            if (
              botao &&
              (botao.role === 'button' ||
                botao.onclick ||
                botao.getAttribute('tabindex') !== null)
            ) {
              return botao;
            }
            botao = botao.parentElement;
          }
          return svg.parentElement;
        }
      }
      await esperar(Verificar_MS);
    }
    return null;
  }

  const irProximo = async () => {
    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        code: 'ArrowRight',
        keyCode: 39,
        which: 39,
        bubbles: true
      })
    );
  }

  const removerSalvos = async () => {
    let total = 0;
    const inicio = performance.now();

    console.log('Iniciando remoção de salvos (Com Anti-Block)...');

    while (true) {
      const botao = await esperarBotaoRemover();
      if (!botao) {
        console.log('Botão não encontrado ou fim da lista.');
        break;
      }

      clicar(botao);
      total++;

      if (total % 25 === 0) {
        const tempo = ((performance.now() - inicio) / 1000).toFixed(1);
        console.log(total + ' posts removidos em ' + tempo + 's');
      }

      await esperar(Remover_MS_Base);
      await irProximo();
      await esperar(Proximo_MS_Base);
    }

    console.log('Finalizado. Total removido: ' + total);
    console.log('Dica: Se a página travou perto dos 500, dê um F5 e rode o script novamente!');
  }

  console.log('Abra um post salvo antes de executar');
  await esperar(500);
  await removerSalvos();
})();