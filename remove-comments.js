;(async function () {
  // --- CONFIGURAÇÕES TURBO COM ANTI-BLOCK (COMENTÁRIOS) ---
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

  const deleteSelectedComments = async () => {
    try {
      await waitForAndClickTextButton(['delete', 'excluir', 'apagar'], 10000);
      await delay