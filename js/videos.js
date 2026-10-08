/* ============================================================
   VITRINE — como incluir ou remover um atleta
   ------------------------------------------------------------
   1. Suba o vídeo no YouTube e copie o ID da URL.
      Exemplo: https://www.youtube.com/watch?v=abc123xyz → abc123xyz
   2. Adicione um bloco { ... } na lista abaixo.
   3. Para remover, apague o bloco inteiro daquele atleta.
   Opcional: start = segundo em que o vídeo começa;
             inactive: true = mostra a etiqueta "Exemplo · atleta inativo";
             external: true = mostra a capa e abre no YouTube (para vídeos
             que o YouTube não deixa tocar dentro de outros sites).

   Posições (use exatamente estes códigos):
     gk  = Goleiro
     cb  = Zagueiro
     rb  = Lateral Direito
     lb  = Lateral Esquerdo
     dmf = Volante
     cm  = Meio de Campo
     am  = Meia Armador
     rw  = Ponta Direita
     lw  = Ponta Esquerda
     st  = Centro Avante
   ============================================================ */

const VITRINE_VIDEOS = [
  {
    youtubeId: "cjJ5JYocJU4",
    start: 84,
    position: "lb",
    name: "Danilo",
    inactive: true,
    external: true,
  },
  {
    youtubeId: "wijWYdInC7M",
    start: 52,
    position: "cb",
    name: "João",
    inactive: true,
  },
];
