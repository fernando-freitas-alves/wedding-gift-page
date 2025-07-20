# Lista de Presentes - Flavia & Fernando

Um site moderno e responsivo para lista de presentes de casamento, onde os convidados podem escolher e contribuir com presentes para o casal.

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** em qualquer navegador moderno
2. O site funcionará localmente sem necessidade de servidor
3. Para publicar online, faça upload dos arquivos para qualquer serviço de hospedagem

## ✨ Funcionalidades

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Filtros por Categoria**: Filtre presentes por "Chá de Casa Nova", "Casa" ou "Experiências"
- **Ordenação por Preço**: Ordene do menor para o maior valor ou vice-versa
- **Contador de Dias**: Atualização automática dos dias restantes até o casamento
- **Contador de Visitantes**: Simula visitantes únicos
- **Links de Pagamento**: Redirecionamento direto para o link de pagamento
- **Suporte a Imagens Reais**: Fácil adição de fotos para cada presente

## 🖼️ Como Adicionar Imagens aos Presentes

### Passo 1: Prepare suas imagens

1. **Crie a pasta `images/`** (já criada automaticamente)
2. **Adicione suas fotos** na pasta `images/`
3. **Use nomes simples** como: `cha-ansiedade.jpg`, `doguinha.png`, etc.

### Passo 2: Conecte as imagens aos presentes

No arquivo `script.js`, cada presente tem um campo `image`. Simplesmente coloque o nome do arquivo:

```javascript
{
    id: 1,
    title: "Chá para aguentar a ansiedade",
    description: "Uma seleção especial de chás...",
    price: 381.80,
    category: "cha-casa-nova",
    image: "cha-ansiedade.jpg"  // ← Coloque aqui o nome do seu arquivo
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
<div class="couple-names">Flavia & Fernando</div>
<div class="wedding-date">23 DE NOVEMBRO DE 2025</div>
```

### 2. Data do Casamento

Edite o arquivo `script.js`:

```javascript
const WEDDING_DATE = new Date("2025-11-23T00:00:00");
```

### 3. Link de Pagamento

Edite o arquivo `script.js`:

```javascript
const PAYMENT_LINK = "https://YOUR-LINK-HERE";
```

### 4. Lista de Presentes

Edite o array `gifts` no arquivo `script.js`. Cada presente deve seguir este formato:

```javascript
{
    id: 1,                                    // ID único (não repetir)
    title: "Nome do Presente",                // Título do presente
    description: "Descrição do presente",     // Descrição detalhada
    price: 100.00,                           // Preço em reais (sem R$)
    category: "categoria",                   // "cha-casa-nova", "casa", ou "experiencias"
    image: "nome-da-imagem.jpg"              // Nome do arquivo na pasta images/
}
```

### 5. Categorias

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
  "cha-casa-nova": "Chá de Casa Nova",
  casa: "Casa",
  experiencias: "Experiências",
  "nova-categoria": "Nova Categoria", // Adicione aqui
};
```

### 6. Cores e Estilo

Edite o arquivo `styles.css` para personalizar:

- **Cores principais**: Procure por `#667eea`, `#764ba2`, `#20bf6b`
- **Fontes**: As fontes são carregadas do Google Fonts
- **Layout**: O grid se adapta automaticamente ao número de presentes

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:

- **Desktop**: Grid de 3 colunas
- **Tablet**: Grid de 2 colunas
- **Mobile**: Grid de 1 coluna

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
├── images/             # Pasta para suas imagens
│   ├── cha-ansiedade.jpg
│   ├── doguinha.jpg
│   └── ... (suas imagens aqui)
└── README.md           # Este arquivo
```

## 🌟 Dicas

1. **Teste em Diferentes Dispositivos**: Use as ferramentas de desenvolvedor do navegador
2. **Otimize Imagens**: Comprima suas fotos para carregamento mais rápido
3. **Backup**: Mantenha uma cópia dos arquivos antes de fazer alterações
4. **Hospedagem**: Use serviços como GitHub Pages, Netlify ou Vercel para hospedar gratuitamente
5. **Nomes de Arquivos**: Use nomes simples, sem espaços ou caracteres especiais

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ para Flavia & Fernando**
