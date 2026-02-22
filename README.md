# 🧹 Instagram Mass Cleaner (Scripts de Limpeza em Massa)

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
