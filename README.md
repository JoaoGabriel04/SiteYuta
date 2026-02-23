
# 🎮 Yuta — Website Oficial do Jogo

Website desenvolvido com **Next.js** e **Tailwind CSS** para apresentação do jogo **Yuta**, contendo informações sobre modos de jogo, descrição e navegação interativa.

---

## 🚀 Tecnologias Utilizadas

- Next.js
- React
- Tailwind CSS
- TypeScript (quando habilitado)

---

## 📸 Funcionalidades

- Header fixo durante o scroll
- Layout totalmente responsivo
- Showcase interativo dos modos de jogo
- Troca sincronizada de imagens e textos
- Interface inspirada em páginas modernas de jogos

---



## ⚙️ Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/RicardoAlSi/SiteYuta.git
````

### 2. Entrar na pasta

```bash
cd yuta
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Iniciar o servidor

```bash
npm run dev
```

Abra no navegador:

```
http://localhost:3000
```

---

## 🧪 Scripts Disponíveis

| Comando       | Descrição                            |
| ------------- | ------------------------------------ |
| npm run dev   | Inicia o ambiente de desenvolvimento |
| npm run build | Gera a build de produção             |
| npm run start | Executa a build otimizada            |
| npm run lint  | Verifica problemas no código         |

---

## 🖼️ Uso de Imagens

Todas as imagens devem ficar dentro da pasta:

```
public/images/
```

Uso no código:

```jsx
<img src="/images/exemplo.png" alt="Exemplo" />
```

---

## 📱 Responsividade

O projeto utiliza abordagem **mobile-first**, com:

* Grid responsivo do Tailwind
* Breakpoints automáticos
* Ajustes para desktop e dispositivos móveis
