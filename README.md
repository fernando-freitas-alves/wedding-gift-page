# Lista de Presentes - Fernando & Flavia

Um site moderno e responsivo para lista de presentes de casamento, onde os convidados podem escolher e contribuir com presentes para o casal.

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** em qualquer navegador moderno
2. O site funcionará localmente sem necessidade de servidor
3. Para publicar online, faça upload dos arquivos para qualquer serviço de hospedagem

## ✨ Funcionalidades

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Filtros por Categoria**: Filtre presentes por "Preparação para o casamento", "Lua de mel" ou "Casa nova"
- **Ordenação por Preço**: Ordene do menor para o maior valor ou vice-versa
- **Modal de Detalhes**: Clique em qualquer presente para ver detalhes completos em um modal
- **Contador de Dias**: Atualização automática dos dias restantes até o casamento
- **Contador de Visitantes**: Simula visitantes únicos
- **Links de Pagamento Individualizados**: Cada presente tem seu próprio link de pagamento
- **Suporte a Imagens Reais**: Fácil adição de fotos para cada presente
- **Design Elegante**: Cores suaves em tons de verde e dourado, tipografia refinada

## 🖼️ Como Adicionar Imagens aos Presentes

### Passo 1: Prepare suas imagens

1. **Crie a pasta `images/`** (já criada automaticamente)
2. **Adicione suas fotos** na pasta `images/`
3. **Use nomes simples** como: `cha.png`, `dogo.png`, etc.

### Passo 2: Conecte as imagens aos presentes

No arquivo `script.js`, cada presente tem um campo `image`. Simplesmente coloque o nome do arquivo:

```javascript
{
    id: 1,
    title: "Chá para aguentar a ansiedade",
    description: "Serve pra acalmar o coração...",
    price: 25,
    category: "preparacao",
    image: "cha.png",  // ← Coloque aqui o nome do seu arquivo
}
```

### Formatos Suportados

- **JPG/JPEG**: `presente.jpg`
- **PNG**: `presente.png`
- **GIF**: `presente.gif`
- **WebP**: `presente.webp`

### Exemplo Prático

Se você tem uma foto chamada `meu-presente.jpg`:

1. Coloque `meu-presente.jpg` na pasta `images/`
2. No `script.js`, mude `image: "🎁"` para `image: "meu-presente.jpg"`
3. Pronto! A imagem aparecerá automaticamente

### Fallback Automático

Se uma imagem não carregar, o site mostrará automaticamente um emoji 🎁 como backup.

## 🛠️ Como Personalizar

### 1. Informações do Casal

Edite o arquivo `index.html`:

```html
<div class="couple-names">Fernando & Flavia</div>
<div class="wedding-date">23 DE NOVEMBRO DE 2025</div>
```

### 2. Data do Casamento

Edite o arquivo `script.js`:

```javascript
const WEDDING_DATE = new Date("2025-11-23T00:00:00");
```

### 3. Links de Pagamento Individualizados

Cada presente tem seu próprio link de pagamento. Para manter a segurança, os links são armazenados como variáveis de ambiente.

#### Configuração para Vercel (Produção):

1. **No dashboard do Vercel**, vá para "Settings" → "Environment Variables"
2. **Adicione uma variável para cada presente**:
   - Key: `GIFT_1_PAYMENT_LINK`
   - Value: `https://SEU-LINK-AQUI`
   - Repita para todos os presentes (GIFT_2_PAYMENT_LINK, GIFT_3_PAYMENT_LINK, etc.)

#### Desenvolvimento Local:

1. **Copie o template**: `cp .env.sample .env`
2. **Edite o arquivo `.env`** com seus links reais
3. **O arquivo `.env` é ignorado pelo Git** para manter os links seguros

#### Template de Variáveis:

Use o arquivo `.env.sample` como referência para criar seu `.env`:

```
GIFT_1_PAYMENT_LINK=https://your-payment-link-1.com
GIFT_2_PAYMENT_LINK=https://your-payment-link-2.com
... (continue para todos os 30 presentes)
```

#### Segurança:

- **Repositório público**: Pode ser publicado com segurança
- **Links privados**: Armazenados em `.env` (local) ou variáveis do Vercel (produção)
- **Template**: Use `.env.sample` como referência

### 4. Lista de Presentes

Edite o array `gifts` no arquivo `script.js`. Cada presente deve seguir este formato:

```javascript
{
    id: 1,                                    // ID único (não repetir)
    title: "Nome do Presente",                // Título do presente
    description: "Descrição do presente",     // Descrição detalhada
    price: 100.00,                           // Preço em reais (sem R$) ou string como "Você decide"
    category: "categoria",                   // "preparacao", "lua-de-mel", ou "casa-nova"
    image: "nome-da-imagem.jpg"              // Nome do arquivo na pasta images/
}
```

### 5. Categorias

As categorias atuais são:

- **preparacao**: "Preparação para o casamento"
- **lua-de-mel**: "Lua de mel"
- **casa-nova**: "Casa nova"

Para adicionar novas categorias:

1. Adicione o botão no `index.html`:

```html
<button class="filter-btn" data-category="nova-categoria">
  Nova Categoria
</button>
```

2. Atualize a função `getCategoryName()` no `script.js`:

```javascript
const categories = {
  preparacao: "Preparação para o casamento",
  "lua-de-mel": "Lua de mel",
  "casa-nova": "Casa nova",
  "nova-categoria": "Nova Categoria", // Adicione aqui
};
```

### 6. Cores e Estilo

O site usa uma paleta de cores suaves em tons de verde e dourado:

- **Verdes principais**: `#73995C`, `#AAB296`, `#4A523A`
- **Dourados**: `#E6D9C2`, `#8C8273`
- **Fontes**: Allura para nomes do casal, Lato para o resto do texto

Edite o arquivo `styles.css` para personalizar as cores.

## 🎭 Modal de Detalhes

O site agora inclui um modal que abre quando os usuários clicam em qualquer presente (exceto no botão de pagamento). O modal mostra:

- **Imagem completa** do presente
- **Título e descrição** detalhados
- **Preço** formatado
- **Categoria** do presente
- **Botão de pagamento** individualizado

### Funcionalidades do Modal

- **Abertura**: Clique em qualquer área do card do presente
- **Fechamento**: Botão X, clique fora do modal, ou tecla Escape
- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Animações suaves**: Transições elegantes de abertura e fechamento

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:

- **Desktop**: Grid de 3 colunas
- **Tablet**: Grid de 2 colunas
- **Mobile**: Grid de 1 coluna

O modal também é responsivo e se adapta a diferentes tamanhos de tela.

## 🎨 Personalização Avançada

### Dicas para Imagens

- **Tamanho recomendado**: 400x300 pixels ou similar
- **Formato**: JPG para fotos, PNG para imagens com transparência
- **Peso**: Mantenha abaixo de 500KB para carregamento rápido
- **Proporção**: Use imagens horizontais para melhor visualização

### Adicionar Animações

O site já inclui animações suaves. Para personalizar, edite as transições no `styles.css`.

## 🔧 Estrutura dos Arquivos

```
lista-de-presentes/
├── index.html          # Página principal
├── styles.css          # Estilos e layout
├── script.js           # Funcionalidades e dados
├── .env.sample         # Template para variáveis de ambiente
├── .env                # Variáveis de ambiente (não versionado)
├── .gitignore          # Arquivos ignorados pelo Git
├── images/             # Pasta para suas imagens
│   ├── cha.png
│   ├── dogo.png
│   └── ... (suas imagens aqui)
└── README.md           # Este arquivo
```

## 🔒 Segurança e Deploy

### Configuração Segura

- **Links de Pagamento**: Armazenados como variáveis de ambiente no Vercel
- **Repositório Público**: Pode ser publicado com segurança
- **Segurança**: Links de pagamento não ficam expostos no código

### Deploy no Vercel (Recomendado)

1. **Importe seu repositório** no Vercel
2. **Configure as variáveis de ambiente** (Settings → Environment Variables)
3. **Adicione todas as variáveis** GIFT_1_PAYMENT_LINK até GIFT_30_PAYMENT_LINK
4. **Deploy automático** a cada push no GitHub

### Deploy no GitHub Pages

1. **Torne o repositório público** (Settings → Danger Zone → Make public)
2. **Ative GitHub Pages** (Settings → Pages → Deploy from branch → main)
3. **Seu site estará em**: `https://seu-usuario.github.io/wedding-gift-page/`
4. **Para links de pagamento**: Use os links incluídos no código (fallback)

### Vantagens do Vercel

- ✅ **Repositório privado** permitido
- ✅ **Variáveis de ambiente** seguras
- ✅ **Deploy automático** a cada push
- ✅ **Hospedagem gratuita** para projetos pessoais

## 🌟 Dicas

1. **Teste em Diferentes Dispositivos**: Use as ferramentas de desenvolvedor do navegador
2. **Otimize Imagens**: Comprima suas fotos para carregamento mais rápido
3. **Backup**: Mantenha uma cópia dos arquivos antes de fazer alterações
4. **Hospedagem**: Use serviços como GitHub Pages, Netlify ou Vercel para hospedar gratuitamente
5. **Nomes de Arquivos**: Use nomes simples, sem espaços ou caracteres especiais
6. **Links de Pagamento**: Cada presente pode ter um link diferente para melhor controle
7. **Segurança**: Use variáveis de ambiente no Vercel para manter os links seguros

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ para Fernando & Flavia**
