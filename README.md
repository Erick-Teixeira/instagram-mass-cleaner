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
* **Busca Dinâmica de Elementos:** Sobrevive às atualizações recentes de layout do Instagram na web. O código varre a tela buscando elementos clicáveis pelo texto, ignorando conflitos com menus laterais.
* **Suporte Bilíngue:** Funciona perfeitamente se o seu Instagram estiver configurado em Português (PT-BR) ou Inglês (EN-US).

---

## ⚠️ Avisos e Limitações Importantes

1. **Limites do Instagram:** Mesmo com os atrasos aleatórios programados no código, o Instagram possui limites rígidos de ações por hora/dia. Se o script parar ou o site exibir um erro (como falha ao excluir), **você atingiu o limite da rede social**. Pause o script e tente novamente após algumas horas.
2. **Layouts Dinâmicos:** Estes scripts interagem diretamente com a estrutura HTML (DOM) do site. Se o Instagram fizer uma grande atualização visual, os seletores podem quebrar e o código precisará de manutenção.
3. **Responsabilidade:** O uso de scripts de automação viola os termos de serviço de algumas plataformas. Use por sua conta e risco.

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
1. Acesse: [https://www.instagram.com/your_activity/interactions/comments](https://www.instagram.com/your_activity/interactions/comments)
2. Abra o Console do navegador.
3. Cole o código do arquivo `remove-comments.js` e aperte `Enter`.

### 2. Remoção de Curtidas (`remove-likes.js`)
1. Acesse: [https://www.instagram.com/your_activity/interactions/likes](https://www.instagram.com/your_activity/interactions/likes)
2. Abra o Console do navegador.
3. Cole o código do arquivo `remove-likes.js` e aperte `Enter`.

### 3. Limpeza de Salvos - Simples (`remove-saved-console.js`)
Ideal para quem tem poucas fotos salvas ou não quer instalar extensões.
1. Acesse: [https://www.instagram.com/your_username/saved/](https://www.instagram.com/your_username/saved/)
2. Clique na primeira foto salva para abri-la na tela.
3. Abra o Console do navegador, cole o código do arquivo `remove-saved-console.js` e aperte `Enter`.
   *(Nota: Se a página travar após cerca de 500 exclusões devido à memória do navegador, atualize a página (F5) e repita o processo).*

### 4. Limpeza de Salvos - Automática (`remove-saved-tampermonkey.js`)
Recomendado para quem tem **milhares** de posts salvos. A página do Instagram consome muita RAM, então este script atualiza a página sozinho para evitar travamentos.
1. Instale a extensão [Tampermonkey](https://www.tampermonkey.net/) no seu navegador.
2. Crie um novo script no Tampermonkey, cole o código do arquivo `remove-saved-tampermonkey.js` e salve.
3. Acesse a aba de salvos do seu perfil.
4. **Não clique em nada.** O script iniciará sozinho, apagará um lote (ex: 400 fotos), dará um F5 automático e continuará o processo em loop.
   *(Lembre-se de desativar o script na extensão quando terminar!)*

---

## ⚙️ Configurações Customizáveis

Você pode ajustar a velocidade ou a quantidade de itens por lote alterando as variáveis no topo de cada arquivo `.js`:

```javascript
const DELETION_BATCH_SIZE = 25; // Define quantos itens serão selecionados por vez
const DELAY_BETWEEN_CHECKBOX_CLICKS_MS = 10; // Velocidade (em milissegundos) dos cliques
