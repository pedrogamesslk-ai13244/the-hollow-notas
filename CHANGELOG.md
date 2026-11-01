# Changelog — The Hollow: Notas do Evento

Tudo o que mudou em cada versão do app. Dá para ver como o app era em cada versão em
**Configurações → 📜 Versões do app** e voltar para a atual quando quiser.

> A mesma lista fica no `index.html` (constante `CHANGELOG`). Se mudar um, atualize o outro.

## 🚀 V7.0 — Atualização automática e interface nova (31/10/2026)

**Atualização automática**
- Toda vez que o app abre, ele confere no servidor (tabela `app_versions`) se tem versão nova. Versão antiga = tela de **atualização obrigatória**, com a versão instalada, a mais recente e o botão Atualizar.
- No celular (app 7.0), a atualização baixa só o pacote do app (`www.zip`), confere o sha256, descompacta numa pasta nova e troca de versão de uma vez. Se a internet cair, o arquivo vier errado ou a versão nova não abrir duas vezes seguidas, o app continua (ou volta) na anterior. Antes de atualizar, é feito um backup do progresso no aparelho.
- No site e no programa do Windows, a atualização apaga a cópia do modo sem internet e recarrega.
- Histórico de versões com três tipos: **disponível**, **antiga** (pode voltar e usar) e **descontinuada** (bloqueada). Uma versão antiga em uso que for descontinuada pede a atualização de novo na próxima vez que o app abrir.
- Dev: `tools/publicar-versao.ps1` publica uma versão nova; `/versao 6.0 descontinuada` e `/versoes` na Central de comandos.

**Como jogar?**
- Nova aba em cada jogo (e no hub) com o passo a passo da missão do evento: objetivo, passos curtos com ícones, teclas destacadas, avisos e o prêmio. Pesquisado em guias do evento e nas descrições oficiais dos emblemas; os passos pouco confirmados têm aviso.
- Modo interativo (um passo de cada vez, arrastando para o lado ou com as setas) ou tudo de uma vez.

**Piloto automático**
- O app percebe quando você entra e sai de um jogo do Roblox. Quando você sai (ou volta para o app depois de um tempo), ele confere sozinho os emblemas do evento, marca os jogos concluídos e comemora.
- Radar ao vivo do seu esquadrão (amigos adicionados pelo nome de usuário): offline, online ou jogando. Selo "Jogando agora" em todas as telas e linha do tempo de tudo o que o piloto fez.

**Interface**
- Interface moderna nova: menu agrupado por seções, cartões translúcidos, transições entre telas e, no celular, menu de abas embaixo.
- Na primeira vez que abre a V7.0, escolha entre a interface clássica e a moderna; troque quando quiser em Configurações → Aparência.
- Configurações em seções: Aparência, Atualizações, Histórico de versões, Tutoriais, Piloto automático, Progresso, Oráculo, Desenvolvedor e Dados.

**The Hollow Skull**
- Página própria com efeitos de fogo e fumaça, raridade ao vivo, caminho até a caveira, onde pegar (Andar 10 do hub), combinações de skin com itens reais do catálogo e a caveira que fala.

## 🏁 V6.0 — Versão final (25/10/2026)
**A versão final do The Hollow — Notas do Evento.** Revisão completa do app, com tudo testado tela por tela e cargo por cargo, mais os últimos ajustes.

**App de celular (Android)**
- `celular/TheHollow-6.0.apk`: o The Hollow inteiro dentro de um app de Android, sem precisar de site. Backup salvo na pasta Downloads, botão Jogar abrindo o app do Roblox, links de fora no navegador do celular e botão Voltar do Android.
- Tamanho da tela ajustável: na primeira vez no celular ou tablet, cada jogador escolhe o tamanho do app (60% a 150%), vendo a mudança na hora. Dá para mudar depois em Configurações → Tamanho da tela.
- O texto do app não segue mais o tamanho de fonte do sistema (o app ficava enorme em alguns aparelhos e emuladores).
- `celular/build-apk.ps1` monta e assina o `.apk` de novo, sem Android Studio.

**Programa para Windows**
- `TheHollow.exe` 6.0: a janela do programa mostra o ícone novo na barra de tarefas. Antes, o Edge mostrava o ícone antigo que tinha guardado. O programa coloca o ícone na janela e fica em segundo plano, sem janela, até o app fechar.
- Ícone do app em vários tamanhos (16 a 512 px), trocado em todos os lugares, e o modo sem internet guardando os ícones novos.

**Diagnóstico**
- Só Admin e Dev veem. O Admin vê em modo somente leitura; só o Dev aplica correções.
- O mapa ocupa a largura toda, abre enquadrado nos pontos e mostra o motivo de cada problema sem precisar clicar.
- Mais preciso: espera a verificação do rastreamento e busca o perfil do Roblox antes de conferir. O modo sem internet aberto pelo arquivo do computador não aparece mais como problema.

**Minha conta**
- Foto, nome e botões alinhados embaixo da faixa do avatar.
- Os itens que você está vestindo seguem o estilo do app (antes apareciam como links azuis).

**Servidor e fontes**
- O Roblox Wiki passou a ser lido pela API oficial, já que a página bloqueava o servidor.
- O rastreamento e o perfil do Roblox têm limite de tempo e não são mais cancelados pelo Supabase.

> Para a V6.0 funcionar inteira, rode o `supabase/schema.sql` de novo no Supabase e use o `TheHollow.exe` novo.

## V5.2 — Painel do evento e museu (25/10/2026)
**A maior atualização de todo o projeto.** O app foi reformulado de ponta a ponta.

**Novidades**
- Início novo: painel do evento com continue de onde parou, acesso rápido, eventos em destaque, próximos eventos e atividade recente.
- Contagem nos jogos principais: quanto falta para liberar o emblema de cada jogo (1 dia antes da live dele no hub) e, depois, quanto falta para a live.
- Museu de emblemas: todos os emblemas do evento por jogo; os conquistados ficam iluminados e os outros bloqueados, com como conseguir. Os que ainda não liberaram aparecem com a contagem. Filtros de conquistados, faltando e raros (menos de 5% dos jogadores).
- Minha conta no estilo do perfil do Roblox: avatar de corpo inteiro, amigos, seguidores, o que você está vestindo e os emblemas do evento conquistados.
- Oráculo com memória de investigação: guarda conclusões, fontes, fatos, hipóteses e dúvidas, e reaproveita e confere em perguntas parecidas.
- Fontes confiáveis no rastreamento: além do Gunterverse, o app confere o Roblox Wiki e o thehollowroblox.com e mostra de quais fontes vem cada jogo fora da lista.
- Faixa nas abas Jogos Principais e Secundários com a hora da última verificação, quanto falta para a próxima e o que foi encontrado.
- Diagnóstico em mapa: cada parte do app é um ponto ligado ao seu grupo, verde (funcionando), amarelo (possível falha, mas funcionando) ou vermelho (falha total), com zoom, o motivo de cada problema e correções com backup.
- Saúde: depois de muitas horas seguidas no app (ou de madrugada), aparece um aviso na tela com "entendo e concordo" e "não estou me sentindo bem" (com onde buscar ajuda). Ninguém é bloqueado e o Dev não recebe o aviso.

**Equipe**
- Moderação: advertências para contas de cargo menor, que aparecem para a pessoa até ela confirmar que leu. A equipe vê o histórico de advertências de cada conta.
- Dev: Central de comandos (Ctrl+K) e /shutdown para desligar o site para todo mundo, menos o Dev.

**Correções**
- Emblemas de teste dos jogos não são mais escolhidos como "provável emblema do evento".

> Para a V5.2 funcionar inteira, rode o `supabase/schema.sql` de novo no Supabase.

## V5.1 — Rastreamento do evento (25/10/2026)
- Rastreamento do evento: a cada 30 segundos o app procura jogos e emblemas novos (Gunterverse, jogos adicionados pelo Dev e versão nova do app), com painel e histórico na aba Evento.
- A conferência de emblemas reconhece os emblemas do evento pela moldura oficial do The Hollow e pela lista do Gunterverse, e atualiza os emblemas de cada jogo antes de conferir.
- Quando o RoProxy bloqueia, a conferência e os emblemas dos jogos usam o servidor.
- Novos jogos: Guts & Blackpowder, Sleep Paralysis, Prism Runway Show, Royale High, Racket Rivals, Carve Wood! e Toons Universe. Petapeta saiu da lista.
- Dev: adicionar jogos com base nas badges do The Hollow e pelo painel de rastreamento.
- Admin e Dev: aviso para todos no topo do app, por tempo limitado.

> Para a V5.1 funcionar inteira, rode o `supabase/schema.sql` de novo no Supabase.

## V5.0 — Versão estável (24/10/2026)
- O progresso da conta não é mais apagado quando a internet falha na hora de entrar.
- Com o app aberto em duas abas ou janelas, uma não apaga mais o que foi feito na outra.
- Ao sair da conta sem internet, o app avisa antes de perder as últimas mudanças.
- Moderadores não conseguem mais ver o e-mail das contas; Admin e Dev bloqueados não fazem ações da equipe.
- Conferência de emblemas mais rápida: pula os que já estão marcados e usa o navegador e o servidor ao mesmo tempo; se algum emblema não puder ser conferido, o app avisa.
- O bloqueio do F12 não dispara mais por causa do zoom do navegador nem no celular.
- O cursor não sai mais do lugar quando os números ao vivo chegam enquanto você digita.
- A agenda de eventos se atualiza sozinha a cada 15 minutos; o Oráculo sabe o que já aconteceu e o que está ao vivo.
- Os emblemas ao vivo carregam mesmo quando os números do jogo falham.
- Backups antigos são convertidos ao importar, e dá para importar o mesmo arquivo de novo.
- O modo sem internet não mostra mais uma página no lugar de imagens que faltam.

> Para a V5.0 funcionar inteira, rode o `supabase/schema.sql` de novo no Supabase.

## V4.0 — Contas e emblemas (23/10/2026)
- Contas com e-mail e senha: o progresso, as anotações e as marcações ficam salvos na nuvem (Supabase).
- Entrar carrega tudo o que estava marcado; sair limpa a lista do aparelho.
- Ligação com a conta do Roblox sem senha, com um código na descrição do perfil.
- Conferência automática dos emblemas do evento que você já pegou no Roblox.
- Quatro cargos: Dev, Admin, Moderador e Usuário comum, com a aba "Gerenciar contas".
- O Oráculo diz quando a missão de um jogo ainda não lançou em vez de inventar passos.
- Programa para Windows (`TheHollow.exe`): abre o app numa janela própria, sem barra de endereço; sem internet, abre os arquivos da pasta.
- Histórico de versões nas Configurações, com a opção de ver como o app era em cada versão e voltar.
- Página "Evento": o hub The Hollow com Jogar, emblemas, marcações e a aba Eventos.
- Próximo evento e agenda dia a dia na aba "Quanto tempo falta", com contagem e aviso de AO VIVO.
- Todos os emblemas de cada jogo (antes faltavam alguns) e emblemas do Halloween criados desde 15/09, como o Solar Requiem do Tower Defense.
- Script `tools/atualizar-dados.ps1` para baixar de novo os dados dos jogos, os emblemas e a agenda do hub.

## V3.0 — Visual novo e página dos jogos (23/10/2026)
- Página de cada jogo no estilo do Roblox, com as abas Sobre, Emblemas e Marcações.
- Botão Jogar: abre o jogo no app do Roblox ou no site.
- Ícones oficiais dos jogos no lugar dos emojis.
- Aba "Quanto tempo falta" com a contagem regressiva até o fim do evento.
- Título com a fonte Cinzel Decorative e cores laranja mais suaves.
- Proteções contra o F12 e contra código colado no Oráculo, e o modo desenvolvedor.
- Warden no lugar do The Overseer, e The Block removido.

## V2.0 — Oráculo 2.0 (23/10/2026)
- Pesquisa na web pelo Tavily, que funciona mesmo na cota grátis do Gemini.
- A própria IA escreve as buscas: entende troca de assunto e nomes escritos de outro jeito.
- Respostas mais completas, com passo a passo detalhado e fontes.
- Skill do Oráculo com as regras de como pesquisar e responder (`oraculo-skill.md`).
- Novos jogos: Paranormal e Clean Crew; Grow a Garden sem o "2".
- Ícone novo do app.

## V1.0 — Primeira versão (22/10/2026)
- Lista dos jogos principais e secundários do evento The Hollow.
- Marcar jogos como concluídos e acompanhar o progresso.
- Anotações em cada jogo e backup do progresso.
- Oráculo: assistente com IA (Gemini ou Claude) e pesquisa no Google.
