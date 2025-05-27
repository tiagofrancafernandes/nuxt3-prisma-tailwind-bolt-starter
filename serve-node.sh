#!/bin/sh

## Inicia a aplicação com PM2 em modo cluster para melhor performance
## O modo cluster aproveita múltiplos núcleos de CPU
#pm2-runtime start .output/server/index.mjs --name "nuxt-app" -i max

### Alternativa sem PM2 Via nodejs. Eu testei e gostei
node .output/server/index.mjs
