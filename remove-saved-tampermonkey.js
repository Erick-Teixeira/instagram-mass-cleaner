// ==UserScript==
// @name         Limpeza Automática Instagram (Salvos)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove posts salvos automaticamente com F5 a cada 400 posts
// @match        https://www.instagram.com/*/saved/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // --- CONFIGURAÇÕES ---
    const Remover_MS_Base = 350;
    const Proximo_MS_Base = 450;
    const Max_Espera_MS = 3500;
    const Verificar_MS = 50;
    const Limite_Reload = 400; // Limite antes de dar F5 para não travar a memória

    const esperar = (ms) => {
        const tempoAleatorio = ms + Math.floor(Math.random() * 250);
        return new Promise((resolve) => setTimeout(resolve, tempoAleatorio));
    };

    const clicar = (elemento) => {
        if (!elemento) return;
        elemento.click();
    };

    const esperarBotaoRemover = async () => {
        const inicio = Date.now();
        while (Date.now() - inicio < Max_Espera_MS) {
            const svgs = document.querySelectorAll('svg');
            for (const svg of svgs) {
                const caminho = svg.querySelector('path[d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"]');
                if (caminho) {
                    let botao = svg.parentElement;
                    for (let i = 0; i < 5; i++) {
                        if (botao && (botao.role === 'button' || botao.onclick || botao.getAttribute('tabindex') !== null)) {
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
    };

    const irProximo = async () => {
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', code: 'ArrowRight', keyCode: 39, which: 39, bubbles: true }));
    };

    const abrirPrimeiroPost = async () => {
        console.log("Procurando o primeiro post salvo para iniciar...");
        const inicio = Date.now();
        while (Date.now() - inicio < 10000) { 
            const posts = document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]');
            if (posts.length > 0) {
                clicar(posts[0]); 
                return true;
            }
            await esperar(500);
        }
        return false;
    };

    const removerSalvos = async () => {
        let total = 0;
        console.log('Iniciando ciclo de limpeza...');

        while (true) {
            const botao = await esperarBotaoRemover();
            if (!botao) {
                console.log('Fim da lista ou erro ao carregar. Dando F5 por segurança...');
                setTimeout(() => window.location.reload(), 2000);
                break;
            }

            clicar(botao);
            total++;

            if (total >= Limite_Reload) {
                console.log(`Chegamos em ${Limite_Reload} posts! Recarregando a página para limpar a memória...`);
                setTimeout(() => window.location.reload(), 1500);
                break; 
            }

            await esperar(Remover_MS_Base);
            await irProximo();
            await esperar(Proximo_MS_Base);
        }
    };

    window.addEventListener('load', async () => {
        await esperar(3500); 
        
        if (window.location.href.includes('/saved/')) {
            const abriu = await abrirPrimeiroPost();
            if (abriu) {
                await esperar(2000); 
                await removerSalvos();
            }
        }
    });
})();