# Projeto Orion

Portfólio profissional desenvolvido por **Sandro Alves** para apresentar projetos de design gráfico, comunicação visual, branding, design editorial, e-commerce e desenvolvimento front-end.

O Projeto Orion une minha experiência como designer à evolução dos meus conhecimentos em HTML, CSS, JavaScript, Git e GitHub.

## Versão atual

**Versão atual:** v1.10.0 — SEO técnico e descoberta

A versão `v1.10.0` amplia a base técnica de SEO do Projeto Orion, facilitando a descoberta das páginas públicas e tornando mais explícitas as informações fornecidas aos mecanismos de busca.

Foi adicionado um `sitemap.xml` com as 14 URLs canônicas da experiência bilíngue, contemplando as duas páginas principais e os doze estudos de caso em português e inglês.

Também foi criado um `robots.txt` na raiz do site, permitindo o rastreamento das páginas públicas e indicando diretamente a localização do sitemap.

A página principal passou a fornecer dados estruturados em JSON-LD com o tipo `WebSite`, identificando o nome do site como `Sandro Alves` e sua URL principal por meio do vocabulário Schema.org.

A implementação passou por auditoria local envolvendo os 14 documentos HTML, com validação de URLs canônicas, `hreflang`, idiomas, sitemap, `robots.txt` e dados estruturados, sem inconsistências detectadas.

Na homologação em produção, `robots.txt` e `sitemap.xml` responderam com HTTP 200, as 14 URLs presentes no sitemap responderam com HTTP 200 e o JSON-LD publicado na página principal foi validado com sucesso.

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
* Lightbox para ampliação das imagens das galerias
    * Abertura das imagens por clique ou teclado
    * Fechamento pelo botão, pela tecla `Escape` ou pelo fundo escuro
    * Retorno do foco para a imagem que iniciou a visualização
    * Bloqueio da rolagem da página durante a ampliação
    * Implementação sem bibliotecas externas
    * Navegação pelos botões Anterior e Próxima
    * Navegação pelas teclas de seta `←` e `→`
    * Contador com a posição atual da imagem
    * Atualização automática da legenda durante a navegação
    * Navegação circular entre a primeira e a última imagem
    * Foco mantido dentro dos controles do diálogo
    * Gestos de deslizar em dispositivos com tela sensível ao toque
    * Preservação dos movimentos verticais naturais da página
* Imagens organizadas em pastas específicas para cada projeto
* Suporte a imagens horizontais e verticais
* Exibição de artes completas sem cortes
* Legendas descritivas nas galerias
* Textos alternativos nas imagens
* Imagens responsivas com dimensões declaradas
* Carregamento preguiçoso nas imagens complementares
* Decodificação assíncrona de imagens
* Otimização das imagens LCP da página principal e dos estudos de caso com `fetchpriority="high"` e, quando necessário, WebP responsivo, `<picture>`, `srcset` e `sizes`
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
* acesso por teclado com `Tab` e abertura pela tecla `Enter`;
* fechamento pelo botão de fechar;
* fechamento pela tecla `Escape`;
* fechamento ao clicar no fundo escuro;
* navegação pelos botões Anterior e Próxima;
* navegação pelas teclas de seta `←` e `→`;
* navegação circular entre a primeira e a última imagem;
* contador com a posição atual e o total de imagens;
* atualização sincronizada da imagem, da legenda e do texto alternativo;
* navegação por gestos de deslizar em dispositivos com tela sensível ao toque;
* avanço para a próxima imagem ao deslizar para a esquerda;
* retorno à imagem anterior ao deslizar para a direita;
* preservação dos movimentos verticais naturais da página;
* bloqueio da rolagem enquanto o diálogo está aberto;
* manutenção do foco nos controles do lightbox;
* retorno do foco ao elemento que iniciou a visualização;
* uso de `role="dialog"` e `aria-modal="true"`;
* adaptação para desktop, tablet e celular.

O JavaScript identifica automaticamente as imagens localizadas dentro de `.case-gallery`, cria os botões de abertura e adiciona ao documento o diálogo com seus controles de navegação.

## Estrutura de pastas

```text
sandrodgster.github.io/
├── css/
│   └── style.css
├── images/
│   ├── favicon/
│   │   ├── apple-touch-icon.png
│   │   ├── avatar-SA-512.png
│   │   ├── favicon.ico
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   └── favicon.svg
│   ├── marca/
│   │   └── monograma-sa.svg
│   ├── perfil/
│   │   └── sandro-alves.jpg
│   └── projetos/
│       ├── agencia-4v/
│       │   ├── agencia-4v-desktop.jpg
│       │   ├── agencia-4v-mobile.jpg
│       │   └── agencia-4v-secoes.jpg
│       ├── identidade-4v/
│       │   ├── identidade-4v-aplicacoes.jpg
│       │   ├── identidade-4v-elementos.jpg
│       │   └── identidade-4v-marca.jpg
│       ├── loja-universo-4v/
│       │   ├── loja-universo-home.jpg
│       │   ├── loja-universo-mobile.jpg
│       │   └── loja-universo-produtos.jpg
│       ├── orion/
│       │   ├── orion-desktop.jpg
│       │   ├── orion-mobile.jpg
│       │   └── orion-projetos.jpg
│       ├── revista-namidia/
│       │   ├── revista-namidia-capa.jpg
│       │   ├── revista-namidia-diagramacao.jpg
│       │   └── revista-namidia-paginas.jpg
│       ├── social-media/
│       │   ├── social-media-campanha.jpg
│       │   ├── social-media-feed.jpg
│       │   └── social-media-stories.jpg
│       ├── agencia-4v-site.jpg
│       ├── agencia-4v-site-480.webp
│       ├── agencia-4v-site-768.webp
│       ├── agencia-4v-site.webp
│       ├── identidade-4v.png
│       ├── loja-universo-4v.jpg
│       ├── loja-universo-4v-480.webp
│       ├── loja-universo-4v-768.webp
│       ├── loja-universo-4v.webp
│       ├── projeto-orion.jpg
│       ├── projeto-orion-480.webp
│       ├── projeto-orion-768.webp
│       ├── projeto-orion.webp
│       ├── revista-namidia.jpg
│       ├── revista-namidia-480.webp
│       ├── revista-namidia-768.webp
│       ├── revista-namidia.webp
│       ├── social-media.jpg
│       ├── social-media-480.webp
│       ├── social-media-768.webp
│       └── social-media.webp
├── js/
│   └── script.js
├── projetos/
│   ├── agencia-4v.html
│   ├── identidade-4v.html
│   ├── loja-universo-4v.html
│   ├── projeto-orion.html
│   ├── revista-namidia.html
│   └── social-media.html
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
* uso de `role="dialog"` e `aria-modal="true"` no lightbox;
* manutenção do foco dentro do diálogo;
* retorno do foco ao elemento que abriu o lightbox;
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

A versão `v1.8.0` foi submetida a uma nova auditoria da página principal após os refinamentos de conteúdo e experiência. Os testes foram realizados na URL canônica do projeto, em ambientes desktop e mobile.

### Página principal

Na auditoria final da versão `v1.8.0`, a página principal atingiu a pontuação máxima nas quatro categorias avaliadas pelo Lighthouse, tanto em desktop quanto em mobile:

```text
Performance: 100
Acessibilidade: 100
Boas práticas: 100
SEO: 100
```

Durante a auditoria, foi identificada uma insuficiência de contraste no botão principal do Hero. A correção preservou a cor azul do botão e passou a utilizar uma cor de texto escura, elevando a pontuação de Acessibilidade para 100.

Também foi confirmado que a URL canônica correta da página principal é `https://sandrodgster.github.io/`. A auditoria realizada diretamente nessa URL atingiu SEO 100.


### Otimização sistemática das imagens LCP dos estudos de caso

Os seis estudos de caso foram analisados individualmente para identificar oportunidades de melhoria no carregamento das imagens principais.

As otimizações aplicadas incluíram:

* uso de `fetchpriority="high"` nas imagens responsáveis pelo LCP;
* conversão das capas mais pesadas para WebP;
* criação de versões responsivas em diferentes larguras;
* utilização de `<picture>`, `srcset` e `sizes`;
* manutenção dos arquivos originais como fallback;
* preservação das dimensões `width` e `height`;
* verificação dos recursos efetivamente carregados pela aba Network;
* comparação das métricas antes e depois das alterações.

Os resultados finais das auditorias mobile foram:

```text
Loja Universo 4V
Performance: 100
LCP: 1,2 s

Agência 4V Comunicação
Performance: 100
LCP: 1,2 s

Projeto Orion
Performance: 100
LCP: 1,1 s

Identidade Visual 4V
Performance: 100
LCP: 1,1 s

Revista NaMídia
Performance: 100
LCP: 1,4 s

Campanha para Redes Sociais
Performance: 100
LCP: 1,4 s
```

Em todas essas auditorias finais, Acessibilidade, Boas práticas e SEO também atingiram 100 pontos.

Entre os ganhos mais expressivos estiveram:

```text
Loja Universo 4V
LCP: 2,7 s → 1,2 s

Agência 4V Comunicação
LCP: 4,1 s → 1,2 s

Projeto Orion
LCP: 2,1 s → 1,1 s

Revista NaMídia
LCP: 7,2 s → 1,4 s
```

A Identidade Visual 4V já apresentava bom desempenho e recebeu apenas a priorização do recurso LCP, reduzindo o indicador de aproximadamente `1,2 s` para `1,1 s`.

Os testes confirmaram que a otimização das imagens trouxe ganhos significativos sem comprometer qualidade visual, responsividade ou acessibilidade.

### Auditoria funcional final

Também foram realizados testes de:

* responsividade em diferentes tamanhos de tela;
* funcionamento do menu mobile;
* navegação por teclado;
* abertura e fechamento do lightbox;
* navegação pelas teclas de seta;
* navegação circular entre as imagens;
* sincronização do contador e das legendas;
* manutenção do foco dentro do diálogo;
* retorno do foco ao elemento que abriu o lightbox;
* gestos de deslizar em dispositivos móveis;
* preservação dos movimentos verticais;
* carregamento das imagens WebP e dos fallbacks;
* Console do navegador sem erros;
* Network sem respostas `404` ou `5xx`.

A auditoria final confirmou a estabilidade técnica da versão `v1.8.0`.

### Decisões técnicas da auditoria

A auditoria final da `v1.8.0` confirmou que os refinamentos visuais e de conteúdo não provocaram regressões relevantes de desempenho.

O Lighthouse continuou apresentando oportunidades relacionadas ao tempo de cache e à entrega da imagem de perfil. Como a página principal atingiu Performance 100 e os ganhos estimados eram pequenos, essas recomendações não justificaram aumento de complexidade nesta versão.

A auditoria também confirmou que o `rel="canonical"` da página principal deve apontar para a raiz do domínio. A pontuação reduzida observada em uma execução usando `/index.html` não representava um problema no canonical do projeto.

A correção efetivamente necessária foi o contraste do botão principal do Hero, ajustado durante a auditoria final.

### Homologação da internacionalização — v1.9.0

A internacionalização foi homologada após a integração da branch de desenvolvimento à `main` e a publicação da nova estrutura no GitHub Pages.

A auditoria contemplou as duas páginas principais e as doze páginas de estudos de caso, totalizando 14 documentos HTML.

Foram verificados:

* existência e correspondência das versões em português e inglês;
* presença de uma URL canônica por página;
* presença dos três links `alternate` com `pt-BR`, `en` e `x-default`;
* funcionamento do seletor de idioma com indicação da versão ativa;
* navegação direta entre o mesmo conteúdo em idiomas diferentes;
* existência dos arquivos e recursos referenciados;
* carregamento das imagens e recursos responsivos;
* preservação de `width`, `height`, `loading`, `decoding` e `fetchpriority`;
* metadados de SEO e compartilhamento;
* títulos, descrições e estrutura principal de conteúdo;
* links dos seis estudos de caso na página principal em inglês;
* responsividade em desktop e mobile;
* navegação e foco por teclado;
* Console do navegador sem erros originados pelo projeto;
* Network sem recursos do projeto retornando `404` ou `5xx`;
* funcionamento da versão publicada pelo GitHub Pages.

A página principal em português e a página principal em inglês foram novamente submetidas ao Lighthouse no ambiente publicado.

Nas execuções finais em desktop e mobile, ambas atingiram:

```text
Performance: 100
Acessibilidade: 100
Boas práticas: 100
SEO: 100
```

A homologação confirmou que a internacionalização foi incorporada sem regressões relevantes na experiência, acessibilidade, responsividade ou desempenho do Projeto Orion.

### Homologação do SEO técnico — v1.10.0

O SEO técnico foi homologado após a integração da branch de desenvolvimento à `main` e a publicação das alterações pelo GitHub Pages.

A auditoria local contemplou os 14 documentos HTML da experiência bilíngue e os novos arquivos destinados à descoberta e ao rastreamento do site.

Foram verificados:

* correspondência entre as 14 URLs canônicas e as 14 URLs do `sitemap.xml`;
* ausência de URLs duplicadas no sitemap;
* validade estrutural do XML;
* presença e correspondência dos atributos `lang`;
* presença de uma URL canônica por documento HTML;
* presença dos três links `alternate` com `pt-BR`, `en` e `x-default`;
* validade do `robots.txt`;
* referência do `robots.txt` ao sitemap publicado;
* presença de um único JSON-LD do tipo `WebSite` na página principal;
* ausência desse JSON-LD na página principal em inglês;
* validade do conteúdo JSON-LD;
* ausência de inconsistências na auditoria SEO local.

Na homologação do ambiente publicado pelo GitHub Pages:

* `robots.txt` respondeu com HTTP 200 e `Content-Type` compatível com texto;
* `sitemap.xml` respondeu com HTTP 200 e `Content-Type` XML;
* o sitemap publicado foi interpretado como XML válido;
* foram confirmadas 14 URLs no sitemap publicado;
* as 14 URLs responderam individualmente com HTTP 200;
* o JSON-LD publicado na página principal foi encontrado e interpretado corretamente;
* o objeto `WebSite` publicado confirmou `https://schema.org`, o tipo `WebSite`, o nome `Sandro Alves` e a URL principal do portfólio.

A homologação confirmou a publicação da nova infraestrutura de SEO técnico sem alterações nas URLs existentes da experiência bilíngue.

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
* integração entre design e desenvolvimento front-end;
* criação dinâmica de elementos com JavaScript;
* gerenciamento de foco em componentes interativos;
* desenvolvimento de diálogos acessíveis;
* controle da rolagem da página;
* tratamento de eventos de clique e teclado;
* desenvolvimento de componentes sem bibliotecas externas;
* uso de branches para implementar e testar novos recursos;
* navegação circular em coleções de imagens;
* controle de índices em JavaScript;
* atualização dinâmica de imagens, legendas e contadores;
* criação de armadilha de foco para diálogos;
* navegação por teclas direcionais;
* diagnóstico de cache e publicação no GitHub Pages;
* tratamento dos eventos `touchstart` e `touchend`;
* identificação da direção e da distância dos gestos;
* diferenciação entre movimentos horizontais e verticais;
* uso da propriedade `touch-action` para melhorar a interação em dispositivos móveis;
* diagnóstico de Largest Contentful Paint com Lighthouse;
* identificação do elemento responsável pelo LCP;
* uso de `fetchpriority` para recursos críticos;
* otimização de imagens com WebP;
* implementação de imagens responsivas com `<picture>`, `srcset` e `sizes`;
* identificação de gargalos causados por imagens superdimensionadas;
* análise dos recursos efetivamente carregados pela aba Network;
* validação de `currentSrc` e dos recursos escolhidos pelo navegador;
* interpretação das recomendações de entrega de imagens do Lighthouse;
* criação de estratégias de otimização proporcionais ao peso de cada recurso;
* otimização orientada por métricas antes e depois das alterações.

## Histórico recente

### v1.10.0 — SEO técnico e descoberta

* Criação do `sitemap.xml` com as 14 URLs canônicas públicas do Projeto Orion.
* Inclusão das páginas principais e dos doze estudos de caso em português e inglês no sitemap.
* Validação da correspondência entre sitemap e URLs canônicas.
* Verificação de ausência de URLs duplicadas no sitemap.
* Criação do `robots.txt` com liberação do rastreamento das páginas públicas.
* Inclusão da referência ao `sitemap.xml` no `robots.txt`.
* Implementação de dados estruturados em JSON-LD na página principal.
* Uso do tipo `WebSite` com nome e URL principal do portfólio.
* Preservação da estrutura de `canonical` e `hreflang` dos 14 documentos HTML.
* Auditoria SEO local dos 14 documentos sem inconsistências detectadas.
* Homologação de `robots.txt` e `sitemap.xml` no GitHub Pages com HTTP 200.
* Validação das 14 URLs publicadas do sitemap com HTTP 200.
* Validação do JSON-LD `WebSite` diretamente no ambiente publicado.

### v1.9.0 — Internacionalização e experiência bilíngue

* Criação da versão em inglês da página principal.
* Criação das versões em inglês dos seis estudos de caso.
* Organização da experiência internacional em `/en/` e `/en/projects/`.
* Atualização dos links da página principal em inglês para os respectivos estudos de caso.
* Inclusão do seletor de idioma PT/EN nas páginas principais.
* Inclusão do seletor de idioma PT/EN nas doze páginas de estudos de caso.
* Navegação direta entre as versões correspondentes de cada estudo de caso.
* Implementação de `hreflang="pt-BR"`, `hreflang="en"` e `hreflang="x-default"`.
* Manutenção de URLs canônicas específicas para cada página.
* Validação estrutural dos 14 documentos HTML da experiência bilíngue.
* Auditoria de metadados, imagens, recursos locais e caminhos relativos.
* Validação funcional em desktop e mobile.
* Validação da navegação por teclado e dos estados de foco.
* Verificação de Console e Network.
* Homologação da estrutura publicada no GitHub Pages.
* Lighthouse final da página principal PT e EN com Performance, Acessibilidade, Boas práticas e SEO em 100, em desktop e mobile.

### v1.8.0 — Experiência, conteúdo e refinamento visual

* Refinamento do conteúdo e da identidade visual do Hero.
* Atualização da apresentação profissional para destacar design e desenvolvimento front-end.
* Refinamento dos textos da seção Sobre.
* Reorganização das Habilidades em grupos de Desenvolvimento e Design.
* Melhoria da responsividade da seção Habilidades em dispositivos móveis.
* Refinamento dos textos dos cards de Projetos.
* Preservação da estrutura responsiva e das microinterações já consolidadas nos projetos.
* Refinamento do conteúdo e da interação da seção Contato.
* Adição de sombra discreta nos cards de Contato durante o hover.
* Revisão geral de hover, foco visível, transições e preferência por redução de movimento.
* Correção do contraste do botão principal do Hero.
* Validação funcional de navegação, responsividade, Console e Network.
* Lighthouse final com Performance, Acessibilidade, Boas práticas e SEO em 100, em desktop e mobile.

### v1.7.0 — Performance e refinamento da experiência

* Otimização sistemática das imagens responsáveis pelo Largest Contentful Paint.
* Criação de versões WebP responsivas para as capas mais pesadas.
* Implementação de `<picture>`, `srcset` e `sizes` nos estudos de caso apropriados.
* Uso de `fetchpriority="high"` nos recursos LCP da página principal e dos estudos de caso.
* Preservação dos arquivos originais como fallback.
* Manutenção de `width` e `height` para estabilidade de layout.
* Priorização da foto de perfil da página principal sem conversão desnecessária de formato.
* Validação dos recursos carregados pela aba Network.
* Auditorias Lighthouse com Performance 100 nas execuções finais dos seis estudos de caso.
* Página principal com Performance, Acessibilidade, Boas práticas e SEO em 100 na auditoria mobile final.
* Auditoria funcional com Console sem erros e Network sem respostas `404` ou `5xx`.
* Validação do menu mobile, teclado, lightbox, foco, gestos de deslizar e rolagem vertical.
* Refinamento da documentação técnica do projeto.

### v1.6.0 — Lightbox acessível e interatividade das galerias

* Inclusão de lightbox para ampliação das imagens.
* Abertura das imagens por clique e teclado.
* Fechamento pelo botão, tecla `Escape` e fundo escuro.
* Navegação pelos botões Anterior e Próxima.
* Navegação pelas teclas de seta.
* Navegação circular entre a primeira e a última imagem.
* Inclusão de contador com posição atual e total de imagens.
* Atualização sincronizada da imagem, legenda e texto alternativo.
* Manutenção do foco dentro do diálogo.
* Retorno do foco ao elemento que abriu o lightbox.
* Bloqueio da rolagem enquanto o lightbox está aberto.
* Inclusão de gestos de deslizar em dispositivos móveis.
* Preservação dos movimentos verticais naturais.
* Implementação sem bibliotecas externas.
* Nova auditoria Lighthouse em ambientes mobile e desktop.

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

* Revisar o peso das imagens complementares das galerias quando novas medições indicarem necessidade.
* Adicionar projetos futuros ao portfólio.
* Ampliar os conhecimentos em JavaScript.
* Explorar animações leves sem comprometer a acessibilidade e a preferência por redução de movimento.
* Avaliar futuramente a utilização de um domínio personalizado.
* Continuar a evolução da identidade pessoal do Projeto Polaris.
* Manter auditorias periódicas de desempenho, acessibilidade, SEO e estabilidade conforme o projeto evoluir.

## Autor

**Sandro Alves**

* GitHub: https://github.com/sandrodgster
* LinkedIn: https://www.linkedin.com/in/sandro-alves-46789851/
* E-mail: [sandrodgster@gmail.com](mailto:sandrodgster@gmail.com)

---

Projeto desenvolvido como parte da minha evolução profissional em design e desenvolvimento front-end.
