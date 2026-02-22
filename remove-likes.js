;(async function () {
  // --- CONFIGURAÇÕES TURBO COM ANTI-BLOCK (CURTIDAS) ---
  const DELETION_BATCH_SIZE = 25; 
  const DELAY_BETWEEN_CHECKBOX_CLICKS_MS = 10; 
  const MAX_RETRIES = 60;

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const randomDelay = (min, max) => delay(Math.floor(Math.random() * (max - min + 1) + min));

  const clickElement = async (element) => {
    if (!element) throw new Error('Elemento não encontrado');
    element.click();
  };

  const findSelectButton = () => {
      const elements = document.querySelectorAll('span, div, [role="button"]');
      for (let el of elements) {
          const texto = el.innerText || el.textContent;
          if (texto && (texto.trim() === 'Select' || texto.trim() === 'Selecionar')) {
              if (!el.children.length) return el;
          }
      }
      return null;
  };

  const waitForSelectButton = async () => {
    for (let i = 0; i < MAX_RETRIES; i++) {
      if (findSelectButton() !== null) return;
      await delay(500);
    }
    throw new Error('Botão de Select demorou muito para voltar na tela');
  };

  const waitForAndClickTextButton = async (texts, timeout = 10000) => {
      const startTime = Date.now();
      while (Date.now() - startTime < timeout) {
          const elements = document.querySelectorAll('button, [role="button"], span, div');
          
          for (let i = elements.length - 1; i >= 0; i--) {
              const el = elements[i];
              const text = (el.innerText || '').trim().toLowerCase();
              
              if (texts.some(t => text === t || text.startsWith(`${t} (`) || text.startsWith(`${t} `))) {
                  let clickable = el.closest('button') || el.closest('[role="button"]');
                  if (!clickable && !el.children.length) clickable = el;

                  if (clickable) {
                      clickable.click();
                      return;
                  }
              }
          }
          await delay(100);
      }
      throw new Error(`Botão para [${texts.join(', ')}] não encontrado.`);
  };

  const unlikeSelectedItems = async () => {
    try {
      console.log('Procurando barra de Descurtir...');
      await waitForAndClickTextButton(['unlike', 'descurtir'], 10000);
      
      await delay(500); 
      
      console.log('Confirmando a remoção da curtida...');
      await waitForAndClickTextButton(['unlike', 'descurtir'], 10000);
    } catch (error) {
      console.error('Erro na etapa de descurtir:', error.message);
    }
  };

  const removeLikesActivity = async () => {
    try {
      while (true) {
        const selectButton = findSelectButton();
        if (!selectButton) {
            const caixas = document.querySelectorAll('[aria-label="Alternar caixa de seleção"], [aria-label="Toggle checkbox"], [role="checkbox"]');
            if (caixas.length === 0) throw new Error('Botão "Select" não encontrado.');
        } else {
            await clickElement(selectButton);
            await delay(500);
        }

        const checkboxes = document.querySelectorAll('[aria-label="Alternar caixa de seleção"], [aria-label="Toggle checkbox"], [role="checkbox"]');
        
        if (checkboxes.length === 0) {
          console.log('Nenhuma curtida extra para remover. Fim!');
          break;
        }

        const totalParaClicar = Math.min(DELETION_BATCH_SIZE, checkboxes.length);
        for (let i = 0; i < totalParaClicar; i++) {
          await clickElement(checkboxes[i]);
          await delay(DELAY_BETWEEN_CHECKBOX_CLICKS_MS);
        }

        console.log(`${totalParaClicar} curtidas selecionadas rapidamente.`);
        await delay(300);
        
        await unlikeSelectedItems();
        
        console.log('Descurtido! Pausa humana para evitar bloqueio...');
        await randomDelay(1500, 3500); 
        
        await waitForSelectButton();
      }
    } catch (error) {
      console.error('Aviso:', error.message);
    }
  };

  try {
    console.log('Iniciando remoção de curtidas na Velocidade Máxima Segura...');
    await removeLikesActivity();
    console.log('Limpeza de curtidas concluída!');
  } catch (error) {
    console.error('Erro fatal:', error.message);
  }
})();