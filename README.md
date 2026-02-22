# 🧹 Instagram Mass Cleaner (Scripts de Limpeza em Massa) / PT-br

Este repositório contém um conjunto de scripts em JavaScript criados para automatizar a limpeza do seu perfil no Instagram. Se você precisa apagar milhares de interações, estes scripts fazem o trabalho pesado por você.

O pacote inclui quatro ferramentas principais:
1. **Removedor de Comentários**
2. **Removedor de Curtidas (Unlike)**
3. **Limpador de Posts Salvos (Versão Simples via Console)**
4. **Limpador de Posts Salvos (Versão Automática via Tampermonkey)**

## ✨ Funcionalidades

* **Proteção Anti-Bloqueio (Humanização):** Os scripts utilizam pausas aleatórias após cada lote processado para simular o comportamento humano e evitar as restrições de *Rate Limit* do Instagram.
* **Modo Turbo:** Seleciona dezenas de itens da grade de forma quase instantânea (em milissegundos), economizando horas de cliques manuais.
* **Busca Dinâmica de Elementos:** Sobrevive às atualizações recentes de layout do Instagram na web varrendo o texto da tela.

---

## ⚠️ Avisos e Limitações Importantes

1. **Limites do Instagram:** Mesmo com os atrasos aleatórios programados no código, o Instagram possui limites rígidos de ações por hora/dia. Se o script parar ou o site exibir um erro (como falha ao excluir), **você atingiu o limite da rede social**. Pause o script e tente novamente após algumas horas.
2. **Layouts Dinâmicos:** Estes scripts interagem diretamente com a estrutura HTML (DOM) do site. Se o Instagram fizer uma grande atualização visual, os seletores podem quebrar e o código precisará de manutenção.
3. **Responsabilidade:** O uso de scripts de automação pode violar os termos de serviço de algumas plataformas. Use por sua conta e risco.

---

## 🌐 Requisito Obrigatório: Idioma do Instagram

Para que os scripts de **Comentários** e **Curtidas** funcionem corretamente, o seu Instagram **DEVE estar no idioma Inglês (English - US)**. Como o Instagram muda constantemente o código do site, forçar o idioma para inglês garante que o robô encontre os botões corretos com precisão.

**Como alterar o idioma do Instagram no computador:**
1. Clique em **Mais (More)** no menu lateral esquerdo (ícone de três linhas).
2. Vá em **Configurações (Settings)**.
3. No menu lateral esquerdo, desça até encontrar **Idioma (Language)**.
4. Altere para **English (US)**.
*(Você pode voltar para o Português normalmente após terminar de usar os scripts!)*

---

## 🛠️ Preparação: O Truque do Console

Para rodar os scripts 1, 2 e 3, você precisará usar o Console do Desenvolvedor (DevTools) no seu navegador:
* **Windows/Linux:** Pressione `Ctrl + Shift + J` (ou `F12` e vá na aba "Console").
* **Mac:** Pressione `Cmd + Option + J`.

> **🛑 Aviso de Segurança do Navegador (Self-XSS):**
> Se for a sua primeira vez usando o Console, navegadores como Chrome ou Edge vão bloquear a colagem do código e exibir um alerta (muitas vezes com um erro de formatação como `{PH1}`). 
> **Para liberar:** Clique na linha de digitação do console, digite a frase `allow pasting` (ou `permitir colar`, se o seu navegador estiver em português) e aperte **Enter**. Após isso, você poderá colar os scripts normalmente usando `Ctrl + V`.

---

## 🚀 Como Usar os Scripts

### 1. Limpeza de Comentários (`remove-comments.js`)
*Lembre-se de colocar o Instagram em Inglês antes de iniciar!*
1. Acesse: [https://www.instagram.com/your_activity/interactions/comments](https://www.instagram.com/your_activity/interactions/comments)
2. Abra o Console do navegador.
3. Cole o código do arquivo `remove-comments.js` e aperte `Enter`.

### 2. Remoção de Curtidas (`remove-likes.js`)
*Lembre-se de colocar o Instagram em Inglês antes de iniciar!*
1. Acesse: [https://www.instagram.com/your_activity/interactions/likes](https://www.instagram.com/your_activity/interactions/likes)
2. Abra o Console do navegador.
3. Cole o código do arquivo `remove-likes.js` e aperte `Enter`.

### 3. Limpeza de Salvos - Simples (`remove-saved-console.js`)
Ideal para quem tem poucas fotos salvas ou não quer instalar extensões.
1. Acesse: [https://www.instagram.com/your_username/saved/](https://www.instagram.com/your_username/saved/)
2. Clique na primeira foto salva para abri-la na tela.
3. Abra o Console do navegador, cole o código do arquivo `remove-saved-console.js` e aperte `Enter`.
   *(Nota: Se a página travar após algumas centenas de exclusões devido à memória do navegador, atualize a página com F5 e repita o processo).*

### 4. Limpeza de Salvos - Automática (`remove-saved-tampermonkey.js`)
Recomendado para quem tem **milhares** de posts salvos. A página do Instagram consome muita RAM, então este script usa uma extensão para atualizar a página sozinho e evitar travamentos.

**Como instalar o Tampermonkey:**
O Tampermonkey é um gerenciador de scripts de navegador seguro e muito popular.
1. Acesse a loja oficial do seu navegador e instale a extensão:
   - [Tampermonkey para Google Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Tampermonkey para Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
   - [Tampermonkey para Mozilla Firefox](https://addons.mozilla.org/pt-BR/firefox/addon/tampermonkey/)
2. Após instalar, fixe o ícone do Tampermonkey (um quadrado escuro com dois "olhinhos") na barra superior do navegador.

**Como rodar o script Automático:**
1. Clique no ícone da extensão Tampermonkey e selecione **"Adicionar novo script"** (Create a new script).
2. O editor abrirá com um texto padrão. **Apague tudo.**
3. Copie todo o código do arquivo `remove-saved-tampermonkey.js` deste repositório, cole no editor em branco e salve (`Ctrl + S`).
4. Acesse a aba de salvos do seu perfil: [https://www.instagram.com/your_username/saved/](https://www.instagram.com/your_username/saved/)
5. **Não clique em nada.** O script iniciará sozinho após 3 segundos, apagará um lote (ex: 400 fotos), dará um F5 automático e continuará o processo em loop.
   *(Importante: Lembre-se de clicar no ícone do Tampermonkey e desligar a chave do script quando finalizar sua limpeza!)*

---

## ⚙️ Configurações Customizáveis

Você pode ajustar a velocidade ou a quantidade de itens por lote alterando as variáveis no topo de cada arquivo `.js`:

```javascript
const DELETION_BATCH_SIZE = 25; // Define quantos itens serão selecionados por vez
const DELAY_BETWEEN_CHECKBOX_CLICKS_MS = 10; // Velocidade (em milissegundos) dos cliques
```

# 🧹 Instagram Mass Cleaner (Mass Deletion Scripts) / en-US

This repository contains a set of JavaScript scripts designed to automate the cleaning of your Instagram profile. If you need to delete thousands of interactions, these scripts do the heavy lifting for you.

The package includes four main tools:
1. **Comment Remover**
2. **Likes Remover (Unlike)**
3. **Saved Posts Cleaner (Simple version via Console)**
4. **Saved Posts Cleaner (Automatic version via Tampermonkey)**

## ✨ Features

* **Anti-Block Protection (Humanization):** The scripts use random pauses after each processed batch to simulate human behavior and avoid Instagram's *Rate Limit* restrictions.
* **Turbo Mode:** Selects dozens of grid items almost instantly (in milliseconds), saving hours of manual clicking.
* **Dynamic Element Search:** Survives recent Instagram web layout updates by scanning the screen text for clickable elements.

---

## ⚠️ Important Warnings and Limitations

1. **Instagram Limits:** Even with the programmed random delays, Instagram has strict hourly/daily action limits. If the script stops or the site displays an error (like failing to delete), **you have hit the social network's limit**. Pause the script and try again after a few hours.
2. **Dynamic Layouts:** These scripts interact directly with the site's HTML structure (DOM). If Instagram rolls out a major visual update, the selectors might break and the code will need maintenance.
3. **Disclaimer:** Using automation scripts may violate the terms of service of some platforms. Use at your own risk.

---

## 🌐 Mandatory Requirement: Instagram Language

For the **Comments** and **Likes** scripts to work properly, your Instagram **MUST be set to English (US)**. Since Instagram constantly changes the site's code, forcing the language to English ensures the bot accurately finds the correct buttons.

**How to change your Instagram language on desktop:**
1. Click on **More** in the left sidebar (three lines icon).
2. Go to **Settings**.
3. In the left menu, scroll down until you find **Language**.
4. Change it to **English (US)**.
*(You can switch back to your native language after you finish using the scripts!)*

---

## 🛠️ Preparation: The Console Trick

To run scripts 1, 2, and 3, you will need to use your browser's Developer Console (DevTools):
* **Windows/Linux:** Press `Ctrl + Shift + J` (or `F12` and go to the "Console" tab).
* **Mac:** Press `Cmd + Option + J`.

> **🛑 Browser Security Warning (Self-XSS):**
> If this is your first time using the Console, browsers like Chrome or Edge will block you from pasting code and display a warning (often with a formatting error like `{PH1}`). 
> **How to bypass:** Click on the console's typing line, type the exact phrase `allow pasting` and press **Enter**. After that, you can paste the scripts normally using `Ctrl + V`.

---

## 🚀 How to Use the Scripts

### 1. Comment Cleaning (`remove-comments.js`)
*Remember to set Instagram to English before starting!*
1. Go to: [https://www.instagram.com/your_activity/interactions/comments](https://www.instagram.com/your_activity/interactions/comments)
2. Open the browser Console.
3. Paste the code from the `remove-comments.js` file and press `Enter`.

### 2. Removing Likes (`remove-likes.js`)
*Remember to set Instagram to English before starting!*
1. Go to: [https://www.instagram.com/your_activity/interactions/likes](https://www.instagram.com/your_activity/interactions/likes)
2. Open the browser Console.
3. Paste the code from the `remove-likes.js` file and press `Enter`.

### 3. Saved Posts Cleaning - Simple (`remove-saved-console.js`)
Ideal for users with a few saved photos or those who prefer not to install extensions.
1. Go to: [https://www.instagram.com/your_username/saved/](https://www.instagram.com/your_username/saved/)
2. Click on the first saved photo to open it on the screen.
3. Open the browser Console, paste the `remove-saved-console.js` code, and press `Enter`.
   *(Note: If the page freezes after a few hundred deletions due to browser memory, refresh the page with F5 and repeat the process).*

### 4. Saved Posts Cleaning - Automatic (`remove-saved-tampermonkey.js`)
Recommended for users with **thousands** of saved posts. The Instagram page consumes a lot of RAM, so this script uses an extension to refresh the page automatically and prevent crashes.

**How to install Tampermonkey:**
Tampermonkey is a secure and highly popular userscript manager.
1. Go to your browser's official store and install the extension:
   - [Tampermonkey for Google Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Tampermonkey for Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
   - [Tampermonkey for Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
2. Pin the Tampermonkey icon to your browser's top bar.

**How to run the Automatic script:**
1. Click the Tampermonkey extension icon and select **"Create a new script"**.
2. The editor will open with default text. **Delete everything.**
3. Copy the entire code from the `remove-saved-tampermonkey.js` file in this repository, paste it into the blank editor, and save (`Ctrl + S`).
4. Go to your profile's saved tab: [https://www.instagram.com/your_username/saved/](https://www.instagram.com/your_username/saved/)
5. **Do not click anything.** The script will start automatically after 3 seconds, delete a batch (e.g., 400 photos), auto-refresh (F5), and continue the loop.
   *(Important: Remember to click the Tampermonkey icon and toggle the script off when you are done!)*

---

## ⚙️ Customizable Settings

You can adjust the speed or batch size by changing the variables at the top of each `.js` file:

```javascript
const DELETION_BATCH_SIZE = 25; // Defines how many items will be selected per batch
const DELAY_BETWEEN_CHECKBOX_CLICKS_MS = 10; // Speed (in milliseconds) of the clicks
