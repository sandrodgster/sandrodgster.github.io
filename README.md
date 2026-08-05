# Projeto Orion

Portfólio profissional desenvolvido por **Sandro Alves** para apresentar projetos de design gráfico, comunicação visual, branding, design editorial, e-commerce e desenvolvimento front-end.

O Projeto Orion une minha experiência como designer à evolução dos meus conhecimentos em HTML, CSS, JavaScript, Git e GitHub.

## Versão atual

**Versão atual:** v1.5.0 — Galerias responsivas e estudos de caso aprimorados

Esta versão amplia a apresentação visual dos projetos com galerias responsivas, imagens complementares, legendas, textos alternativos e conteúdos mais completos nos estudos de caso.

## Ciclo em desenvolvimento

**Próxima versão:** v1.6.0 — Interatividade e acessibilidade das galerias

O novo ciclo começou com a implementação de um lightbox acessível para ampliar as imagens dos estudos de caso, mantendo navegação por teclado, controle de foco e adaptação para diferentes tamanhos de tela.

## Visualizar o projeto

Acesse o portfólio publicado:

https://sandrodgster.github.io

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* GitHub Pages

## Recursos do projeto

* Estrutura HTML semântica
* Layout responsivo para desktop, tablet e celular
* Navegação por âncoras e rolagem suave
* Menu mobile acessível
* Controle do menu pelas teclas `Enter` e `Escape`
* Navegação por teclado com foco visível
* Suporte à preferência de redução de movimento
* Cards de habilidades, projetos e contatos
* Seis estudos de caso individuais
* Galerias responsivas nos estudos de caso
- Lightbox para ampliação das imagens das galerias
- Abertura das imagens por clique ou teclado
- Fechamento do lightbox pelo botão, tecla `Escape` ou fundo escuro
- Retorno do foco para a imagem que iniciou a visualização
- Bloqueio da rolagem da página durante a ampliação
- Implementação sem bibliotecas externas
* Imagens organizadas em pastas específicas para cada projeto
* Suporte a imagens horizontais e verticais
* Exibição de artes completas sem cortes
* Legendas descritivas nas galerias
* Textos alternativos nas imagens
* Imagens responsivas com dimensões declaradas
* Carregamento preguiçoso nas imagens complementares
* Decodificação assíncrona de imagens
* Ano automático no rodapé
* Metadados para mecanismos de busca
* Open Graph e Twitter Card
* URLs canônicas
* Favicons em diferentes formatos
* Integração do monograma pessoal desenvolvido no Projeto Polaris

## Estudos de caso

O portfólio possui seis estudos de caso:

* Projeto Orion
* Agência 4V Comunicação
* Identidade Visual 4V Comunicação
* Revista NaMídia
* Loja Universo 4V
* Campanha para Redes Sociais

Cada estudo pode apresentar:

* visão geral;
* desafio do projeto;
* soluções desenvolvidas;
* estratégia ou processo de criação;
* galeria de imagens;
* tecnologias e competências;
* resultados ou principais aprendizados.

## Galerias dos projetos

As galerias foram desenvolvidas com uma estrutura reutilizável para manter consistência entre os estudos de caso.

Entre os recursos implementados estão:

* imagem principal em destaque;
* grade com imagens complementares;
* adaptação para uma coluna em celulares;
* suporte a imagens verticais;
* preservação de artes que não devem ser cortadas;
* legendas com contexto sobre cada imagem;
* textos alternativos para acessibilidade;
* carregamento preguiçoso com `loading="lazy"`;
* decodificação assíncrona com `decoding="async"`.

As principais classes utilizadas são:

```css
.case-gallery
.case-gallery-header
.case-gallery-featured
.case-gallery-featured-portrait
.case-gallery-grid
.case-gallery-item
.case-gallery-item-contain
.case-gallery-item-mobile
```

## Lightbox acessível

As imagens das galerias podem ser abertas em uma visualização ampliada por meio de um lightbox desenvolvido com JavaScript e CSS, sem dependências externas.

O recurso inclui:

* abertura por clique;
* abertura pelas teclas `Tab` e `Enter`;
* fechamento pelo botão de fechar;
* fechamento pela tecla `Escape`;
* fechamento ao selecionar o fundo escuro;
* bloqueio da rolagem da página enquanto o lightbox está aberto;
* retorno do foco ao elemento que iniciou a visualização;
* uso de `role="dialog"` e `aria-modal="true"`;
* legenda correspondente à imagem ampliada;
* preservação do texto alternativo da imagem;
* adaptação para desktop, tablet e celular.

O JavaScript identifica automaticamente as imagens localizadas dentro de `.case-gallery`, cria os controles necessários e adiciona o lightbox ao documento.

## Estrutura de pastas

```text
sandrodgster.github.io/
├── css/
│   └── style.css
├── images/
│   ├── favicon/
│   │   ├── apple-touch-icon.png
│   │   ├── avatar-SA-512.png
│   │   ├── favicon.ico
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   └── favicon.svg
│   ├── marca/
│   │   └── monograma-sa.svg
│   ├── perfil/
│   │   └── sandro-alves.jpg
│   └── projetos/
│       ├── agencia-4v/
│       │   ├── agencia-4v-desktop.jpg
│       │   ├── agencia-4v-mobile.jpg
│       │   └── agencia-4v-secoes.jpg
│       ├── identidade-4v/
│       │   ├── identidade-4v-aplicacoes.jpg
│       │   ├── identidade-4v-elementos.jpg
│       │   └── identidade-4v-marca.jpg
│       ├── loja-universo-4v/
│       │   ├── loja-universo-home.jpg
│       │   ├── loja-universo-mobile.jpg
│       │   └── loja-universo-produtos.jpg
│       ├── orion/
│       │   ├── orion-desktop.jpg
│       │   ├── orion-mobile.jpg
│       │   └── orion-projetos.jpg
│       ├── revista-namidia/
│       │   ├── revista-namidia-capa.jpg
│       │   ├── revista-namidia-diagramacao.jpg
│       │   └── revista-namidia-paginas.jpg
│       ├── social-media/
│       │   ├── social-media-campanha.jpg
│       │   ├── social-media-feed.jpg
│       │   └── social-media-stories.jpg
│       ├── agencia-4v-site.jpg
│       ├── identidade-4v.png
│       ├── loja-universo-4v.jpg
│       ├── projeto-orion.jpg
│       ├── revista-namidia.jpg
│       └── social-media.jpg
├── js/
│   └── script.js
├── projetos/
│   ├── agencia-4v.html
│   ├── identidade-4v.html
│   ├── loja-universo-4v.html
│   ├── projeto-orion.html
│   ├── revista-namidia.html
│   └── social-media.html
├── index.html
└── README.md
```

## Responsividade

O layout foi desenvolvido para funcionar em diferentes tamanhos de tela:

* desktop;
* notebook;
* tablet;
* celular;
* celulares com telas menores.

Os principais breakpoints utilizados são:

```css
@media (max-width: 900px)
@media (max-width: 600px)
```

Entre os ajustes responsivos estão:

* reorganização do Hero;
* menu de navegação mobile;
* adaptação das grades;
* redimensionamento da foto de perfil;
* reorganização dos cards de resumo;
* botões em largura total no celular;
* ajuste das capas dos estudos de caso;
* transformação das galerias em uma coluna;
* redimensionamento das imagens verticais;
* preservação de artes e capturas sem cortes.

## Acessibilidade

O projeto inclui recursos básicos de acessibilidade:

* HTML semântico;
* textos alternativos em imagens;
* legendas nas imagens das galerias;
* atributos ARIA no menu mobile;
* estado atualizado com `aria-expanded`;
* foco visível para teclado;
* fechamento do menu pela tecla `Escape`;
* retorno do foco ao botão do menu;
* suporte a `prefers-reduced-motion`;
* contraste visual revisado;
* áreas de clique adaptadas para dispositivos móveis;
* definição de largura e altura nas imagens;
* identificação do idioma principal da página.

## SEO e compartilhamento

A página principal e os estudos de caso possuem:

* título individual;
* descrição;
* URL canônica;
* metadados Open Graph;
* Twitter Card;
* imagem de compartilhamento;
* texto alternativo para imagem de compartilhamento;
* identificação de idioma e localidade;
* favicon;
* cor do navegador em dispositivos compatíveis.

## Auditoria Lighthouse

A versão `v1.5.0` foi auditada com o Lighthouse em ambientes mobile e desktop.

### Página principal

```text
Mobile
Performance: 100
Acessibilidade: 100
Boas práticas: 100
SEO: 100

Desktop
Performance: 100
Acessibilidade: 100
Boas práticas: 100
SEO: 100
```

### Estudo de caso da Loja Universo 4V

```text
Mobile
Performance: 96
Acessibilidade: 100
Boas práticas: 100
SEO: 100

Desktop
Performance: 100
Acessibilidade: 100
Boas práticas: 100
SEO: 100
```

A auditoria mobile da Loja Universo 4V foi repetida para confirmar o resultado, mantendo as mesmas pontuações.

Também foram realizados testes de:

* responsividade;
* navegação por teclado;
* funcionamento do menu mobile;
* carregamento das imagens;
* galerias em desktop, tablet e celular;
* links internos;
* Console do navegador;
* arquivos não encontrados na aba Network;
* adaptação de imagens horizontais e verticais;
* carregamento das imagens complementares;
* exibição de legendas e textos alternativos.

Os resultados confirmam a estabilidade, a acessibilidade e a qualidade técnica da versão `v1.5.0`.

## Aprendizados

Durante o desenvolvimento do Projeto Orion, pratiquei:

* organização semântica do HTML;
* Flexbox e CSS Grid;
* responsividade com media queries;
* manipulação do DOM;
* tratamento de imagens com `object-fit`;
* criação de componentes visuais reutilizáveis;
* organização de galerias responsivas;
* adaptação de imagens horizontais e verticais;
* acessibilidade básica;
* metadados e compartilhamento;
* versionamento com Git;
* organização de commits;
* criação de tags de versão;
* resolução de conflitos;
* sincronização do projeto em diferentes computadores;
* publicação com GitHub Pages;
* integração entre design e desenvolvimento front-end.
- criação dinâmica de elementos com JavaScript;
- gerenciamento de foco em componentes interativos;
- desenvolvimento de diálogos acessíveis;
- controle da rolagem da página;
- tratamento de eventos de clique e teclado;
- desenvolvimento de componentes sem bibliotecas externas;
- uso de branches para implementar e testar novos recursos.

## Histórico recente

### v1.5.0 — Galerias e estudos de caso aprimorados

* Adição de galerias responsivas aos seis estudos de caso.
* Organização das imagens em pastas específicas para cada projeto.
* Criação de uma estrutura reutilizável para galerias.
* Suporte a imagens horizontais, verticais e artes sem cortes.
* Inclusão de legendas nas imagens.
* Inclusão de textos alternativos para acessibilidade.
* Uso de carregamento preguiçoso nas imagens complementares.
* Aprimoramento do estudo de caso de Redes Sociais.
* Aprimoramento do estudo de caso da Revista NaMídia.
* Aprimoramento do estudo de caso da Loja Universo 4V.
* Melhoria da apresentação visual em diferentes tamanhos de tela.
* Ampliação da documentação do projeto.

### v1.4.0 — Refinamento visual e integração do Projeto Polaris

* Refinamento da hierarquia visual.
* Melhoria do contraste.
* Centralização dos conteúdos em telas grandes.
* Aprimoramento do menu mobile.
* Revisão das capas dos projetos.
* Reorganização dos estudos de caso.
* Melhoria dos cards de resumo.
* Refinamento dos botões e tecnologias.
* Inclusão de metadados individuais nos estudos de caso.
* Definição das dimensões das imagens.
* Integração visual do Projeto Polaris.
* Auditoria de desempenho, acessibilidade e SEO.

### v1.3.0

Versão anterior mantida como registro histórico no repositório remoto.

### v1.2.0

* Inclusão e organização dos estudos de caso.
* Atualização da documentação.
* Evolução da estrutura inicial do portfólio.

## Próximas melhorias

* Realizar uma nova auditoria Lighthouse na versão `v1.5.0`.
* Revisar o peso e a otimização das novas imagens.
* Adicionar projetos futuros ao portfólio.
* Ampliar os conhecimentos em JavaScript.
* Explorar animações leves sem comprometer a acessibilidade.
- Realizar uma auditoria Lighthouse após a conclusão da versão `v1.6.0`.
- Avaliar navegação entre imagens pelo lightbox.
- Avaliar indicadores de imagem atual e total.
* Avaliar futuramente a utilização de um domínio personalizado.
* Continuar a evolução da identidade pessoal do Projeto Polaris.

## Autor

**Sandro Alves**

* GitHub: https://github.com/sandrodgster
* LinkedIn: https://www.linkedin.com/in/sandro-alves-46789851/
* E-mail: [sandrodgster@gmail.com](mailto:sandrodgster@gmail.com)

---

Projeto desenvolvido como parte da minha evolução profissional em design e desenvolvimento front-end.
