# 🎃 The Hollow — Notas do Evento · v7.0

> ## 🚀 v7.0: o app se atualiza sozinho
> - ⬆️ **Atualização automática e obrigatória:** ao abrir, o app confere se tem versão nova. No celular, baixa e troca
>   de versão com segurança (confere o arquivo e, se algo falhar, continua na anterior). Dá para voltar a versões
>   antigas pelo Histórico de versões, enquanto elas forem permitidas.
> - 🎓 **Como jogar?** em cada jogo: o passo a passo da missão do evento, curto, visual e pesquisado.
> - 🤖 **Piloto automático:** percebe quando você sai de um jogo do Roblox, confere seus emblemas e marca sozinho,
>   com um radar ao vivo do seu esquadrão de amigos.
> - ✨ **Interface moderna** (ou a clássica, à sua escolha) e **Configurações em seções**.
> - 💀 Página do **The Hollow Skull**, o item mais raro do evento.
>
> Para publicar versões novas, veja `supabase/COMO-CONFIGURAR.md` (rode o `schema.sql` de novo) e `tools/publicar-versao.ps1`.

---

~~🏁 v6.0: A MAIOR ATUALIZAÇÃO E A MAIOR CORREÇÃO DE TODO O PROJETO~~      **DESCONTINUADA**
> A **v6.0** é a versão final e a mais completa de todas. Ela junta **tudo** o que o app já teve, **chega ao
> celular pela primeira vez** e passou pela **maior revisão de erros da história do projeto**: cada tela, cada
> botão e cada cargo foram testados um por um, e tudo o que estava quebrado foi consertado.
>
> **O que muda de uma vez:**
> - 📲 **App de celular (Android)**, pela primeira vez: o código para gerar o The Hollow como app de Android.
> - 🔍 **Tamanho da tela ajustável** para cada jogador, em celulares e tablets.
> - 🪟 **Programa para Windows renovado**, com o ícone certo na barra de tarefas.
> - 🩺 **Diagnóstico** só para a equipe, com o mapa redesenhado.
> - 🛠️ **Correções em todo o app:** servidor, rastreamento, perfil do Roblox, ícones, layout e mais.
>
> E tudo isso **em cima da v5.2**, que já tinha reformulado o app de ponta a ponta com o painel do evento, o museu de
> emblemas, o perfil no estilo do Roblox, o Oráculo com memória e o rastreamento de jogos novos.

## 🛠️ O que foi corrigido na v6.0
- **Servidor:** o rastreamento de jogos e o perfil do Roblox estouravam o tempo limite do Supabase e eram cancelados (a
  lista de emblemas do evento nunca enchia). Agora cada um tem um limite de tempo e termina sempre.
- **Fontes do rastreamento:** o Roblox Wiki bloqueava o servidor. Agora ele é lido pela API oficial do Wiki.
- **Ícone no Windows:** a barra de tarefas mostrava o ícone antigo. Agora mostra a abóbora nova, em todos os tamanhos.
- **Tamanho no celular:** em alguns aparelhos e emuladores o app ficava gigante, seguindo a fonte do sistema. Agora ele
  tem tamanho fixo e cada jogador ajusta como preferir.
- **Minha conta:** a foto, o nome e os botões ficavam desalinhados, e os itens que você está vestindo apareciam como
  links azuis. Agora tudo está alinhado e no estilo do app.
- **Diagnóstico:** qualquer pessoa via e o mapa ficava espremido. Agora só Admin e Dev veem (o Admin sem poder mudar
  nada), o mapa ocupa a tela toda, mostra o motivo de cada problema e é mais preciso.
- **Museu:** emblemas de teste dos jogos eram escolhidos como "provável emblema do evento". Não são mais.

O **The Hollow** é o evento de Halloween 2026 do Roblox: nove noites, nove monstros de nove jogos de terror e dezenas
de jogos participando, cada um com o seu emblema. Este app nasceu para responder uma pergunta simples, *"o que eu já
fiz e o que ainda falta?"*, e foi crescendo até virar um painel completo do evento.

---

## 📲 Onde usar

| Onde | Como |
|---|---|
| **Navegador** | Abra o site publicado (ou o `index.html`). Funciona no computador, no celular e no tablet, e dá para instalar como app pelo menu do navegador ("Instalar app" / "Adicionar à tela inicial"). |
| **Android / Windows** | Este repositório tem só o **código-fonte**. Quem quiser pode gerar o app a partir dele: veja `celular/LEIA-ME.md` (Android) e `launcher/build.bat` (Windows). Nenhum programa pronto é distribuído aqui. |

---

## ✨ O que o app faz

### 🏠 Painel do evento
O seu **progresso geral**, os próximos jogos que valem a pena em **"Continue de onde parou"**, o **próximo evento ao vivo**
do hub com contagem regressiva, o jogo em destaque do momento e a sua **atividade recente**.
Também mostra quanto falta para o **evento acabar**, tem um botão para **copiar o seu progresso** e mandar aos amigos, e um
🔔 em cada evento ao vivo do hub para ser **avisado 10 minutos antes** (com o app aberto).

### 🎮 48 jogos do evento
9 principais, 36 secundários e 3 **jogos secretos** (a missão secreta do The Block: The Mimic, Blade Ball e The Block),
cada um com página própria: descrição, todos os emblemas, marcações próprias, anotações e avisos de quem já jogou.
Nos principais, uma **contagem até o emblema liberar** (sempre 1 dia antes da live do jogo no hub).

### 🏅 Museu de emblemas
Todos os emblemas do evento, separados por jogo. Os que você **conquistou ficam iluminados**; os que faltam ficam
**escuros e bloqueados**, com como conseguir. Filtros de conquistados, faltando e **raros** (menos de 5% dos jogadores).

### 🔎 Conferência automática dos emblemas
Ligue a sua conta do Roblox **sem senha** (você só cola um código na descrição do perfil) e o app confere quais
emblemas do evento você já pegou. Ele reconhece os emblemas do evento pela **moldura oficial do The Hollow** e pela
lista do Gunterverse.

### 👤 Perfil no estilo do Roblox
Avatar de corpo inteiro, amigos, seguidores, **o que você está vestindo** e os seus emblemas do evento, num só lugar.

### 🔄 Rastreamento de jogos novos
A cada 30 segundos o app consulta fontes confiáveis (Gunterverse, Roblox Wiki, thehollowroblox.com) e avisa quando
aparece **jogo ou emblema novo**, com histórico de cada verificação.

### 🔮 Oráculo com memória
Assistente com IA (Gemini ou Claude) que **pesquisa os guias na web** e guarda o que descobriu: conclusão, fontes com a
data, fatos confirmados, hipóteses e dúvidas. Em perguntas parecidas, ele reaproveita e confere se continua valendo.

### 🩺 Diagnóstico em mapa
Um mapa da saúde do app (servidor, conta, rastreamento, dados, Oráculo, Roblox): 🟢 funcionando, 🟡 possível falha,
🔴 falha total. Correções sempre pedem confirmação e fazem backup antes.

### 💜 Cuidado com quem joga
Depois de muitas horas seguidas no app, um aviso gentil sugere uma pausa, com um botão para quem não estiver bem e os
contatos de ajuda (CVV 188).

### 🔍 Tamanho da tela ajustável
Na primeira vez no celular ou tablet, cada jogador escolhe o tamanho do app (60% a 150%), vendo a mudança na hora.

### 🛡️ Contas e equipe
Progresso salvo na nuvem e quatro cargos:
- **Moderador:** advertências e suspensões de usuários comuns.
- **Admin:** avisos para todo mundo no topo do app e o diagnóstico em modo leitura.
- **Dev:** Central de comandos (`Ctrl+K`) e modo manutenção do site inteiro.

---

## 🚀 Configurar as contas (opcional)
Sem configurar nada, o app já funciona e salva tudo no aparelho. Para ter **contas e progresso na nuvem**:
1. Crie um projeto grátis no [Supabase](https://supabase.com).
2. Rode o arquivo `supabase/schema.sql` no **SQL Editor**.
3. Coloque o endereço e a chave **pública** (anon/publishable) no `config.js`.

O passo a passo completo está em [`supabase/COMO-CONFIGURAR.md`](supabase/COMO-CONFIGURAR.md).
Para usar o **Oráculo**, cole uma chave grátis do Gemini (ou do Claude) em Configurações. Com uma chave grátis do
[Tavily](https://tavily.com) (`tvly-`), ele pesquisa na web mesmo na cota grátis do Gemini; logado, a chave vale em todos os aparelhos.

---

## 🛠️ Para quem vai mexer no código

| Pasta / arquivo | O que é |
|---|---|
| `index.html` | O app inteiro (telas, estilos e código). |
| `games-data.js` | Dados dos jogos, emblemas e agenda do hub, baixados do Roblox. Atualize com `tools/atualizar-dados.ps1`. |
| `supabase/schema.sql` | Tabelas, regras de acesso e funções do servidor. Pode rodar de novo sem perder nada. |
| `celular/` | O app de Android. `build-apk.ps1` monta e assina o `.apk` (sem Android Studio). Veja o `celular/LEIA-ME.md`. |
| `launcher/` | O programa para Windows (`TheHollow.exe`). `build.bat` compila. |
| `CHANGELOG.md` | O que mudou em cada versão. |

---

## 📜 Histórico
Da v1.0 (uma lista de jogos com anotações) até a v6.0. Tudo está no [CHANGELOG.md](CHANGELOG.md), e dentro do app,
em **Configurações → Versões do app**, dá para ver como ele era em cada versão.

> Projeto de fã, sem ligação com a Roblox Corporation. Nomes, jogos e emblemas pertencem aos seus criadores.
