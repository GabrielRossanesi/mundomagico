# Mundo Mágico | Pegue e Monte

Landing page mobile-first para a marca de decoração de festas na Zona Leste de São Paulo. O site usa Next.js App Router, TypeScript, Tailwind CSS, GSAP e ScrollTrigger. As fontes Fraunces e DM Sans são servidas pelo próprio site.

[Repositório do projeto no GitHub](https://github.com/GabrielRossanesi/mundomagico)

## Execução local

Use Node.js 20.9 ou superior e npm. No PowerShell:

```powershell
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Acesse [a página local](http://localhost:3000). Os campos em `.env.local` podem ficar vazios durante a prévia.

```powershell
npm run lint
npm run typecheck
npm run build
npm run start
```

## Configuração e conteúdo

| Informação | Local | O que preencher |
| --- | --- | --- |
| WhatsApp | `NEXT_PUBLIC_WHATSAPP_NUMBER` em `.env.local` | Número comercial com DDI e DDD. O site usa o Instagram oficial enquanto o número estiver ausente ou inválido. |
| Domínio | `NEXT_PUBLIC_SITE_URL` em `.env.local` | Origem HTTPS oficial, sem caminho. Esse valor habilita o canonical, a URL e a imagem Open Graph, a indexação e a entrada no sitemap. |
| Logo | `public/images/mm pegue e monte - logo.jpg` e `src/lib/business.ts` | O cabeçalho e o rodapé usam o arquivo oficial. Para atualizar a imagem, ajuste `business.logo` com `src`, `alt`, `width` e `height`. |
| Hero | `public/images/` e `src/lib/content.ts` | Substitua `heroPhoto.image` por uma foto autorizada e marque `illustrative: false`. |
| Temas | `themes` em `src/lib/content.ts` | Cadastre nomes, categorias, descrições e fotos confirmados. Ao adicionar o primeiro tema, o catálogo deixa de exibir os exemplos. Cada tema real gera uma mensagem própria para o WhatsApp. |
| Galeria | `galleryPhotos` em `src/lib/content.ts` | Inclua somente imagens autorizadas, com texto alternativo e dimensões. Ao adicionar a primeira foto, a galeria passa a mostrar o acervo real. |
| Feedbacks | `testimonials` em `src/lib/content.ts` | Insira apenas depoimentos reais com autorização e identificação adequada. A seção aparece quando há conteúdo. |
| FAQ | `src/components/faq.tsx` | Atualize detalhes de retirada, devolução e itens do kit após confirmação comercial. |

Reinicie o servidor de desenvolvimento após mudar as variáveis. Para publicar futuramente, configure as duas variáveis no ambiente de produção antes de gerar a build. Confirme o contato em um dispositivo móvel e valide Core Web Vitals com dados reais depois da publicação.

## Arquitetura

- `src/app/` compõe a página e define metadata, dados estruturados, robots e sitemap.
- `src/components/` contém os componentes por seção. Menu, filtro, galeria e animações têm JavaScript no cliente. O FAQ usa o comportamento nativo do HTML.
- `src/lib/` reúne os dados da empresa, o catálogo tipado e a geração das URLs de contato.
- `src/components/page-motion.tsx` carrega GSAP e ScrollTrigger sob demanda. As timelines respeitam o tamanho da tela e a preferência por movimento reduzido. O conteúdo é renderizado antes das animações.
- `src/app/fonts/` contém as duas instâncias WOFF2 da Fraunces Latin, de origem Fontsource. A fonte usa tamanho óptico 62 e pesos 660 no estilo normal e 620 no itálico. A licença SIL OFL acompanha os arquivos.

## Imagens de demonstração

As quatro imagens da prévia foram geradas com a ferramenta integrada ImageGen e são identificadas na interface como ilustrativas. São referências visuais para a prévia do catálogo e da galeria.

| Arquivo | Direção usada na geração |
| --- | --- |
| `castelo-magico.webp` | Fotografia editorial vertical de decoração infantil em estúdio, com castelo lilás, balões roxos e champanhe, lua crescente, estrelas e pedestais. |
| `princesas.webp` | Cenário em estúdio com castelo rosa, coroas douradas, flores, balões e bolo sobre um pedestal. |
| `safari.webp` | Cenário em verde e terracota com girafa de pelúcia, leão, folhagens e balões orgânicos. |
| `cha-revelacao.webp` | Cenário de chá revelação com ursinho, arco inspirado em balão de ar quente e balões em azul e rosa. |

<details>
<summary>Prompts originais da prévia</summary>

**`public/images/castelo-magico.webp`**

> Premium editorial lifestyle photograph for Brazilian children's birthday party decor rental website design, aspect ratio vertical 4:5. Realistic physical set built in a warm off-white stucco studio with soft natural daylight and light neutral matte floor. Center view of a beautiful purple and lilac fairytale castle silhouette cut out of wood with two little towers, narrow gold star accents, crescent yellow moon to the right, large luxury organic balloon garland of lavender, deep plum, ivory and soft golden champagne to the left and over top. Low cylindrical plinths in matching purple and a small elegant cake on pedestal, two tiny star accents. The whole miniature party staging is visible from floor to the top of the balloons, enough clear edge around. Modern rental kit furniture, playful but high-end real photography, violet should be vibrant (not faded), polished and tactile, natural tones with no people. No writing, no words, no letters, no names, no logo, no typographic signs, no watermark. Scene fills the crop but leave safe margins.

**`public/images/princesas.webp`**

> Landscape 4:3 photo for a party styling editorial, warm ivory studio, full view of exquisite children's princess birthday decor theme, rounded pastel pink tall castle panels, pink and blush balloons, luxe soft gold crowns and tiny floral decoration, three cylindrical plinths and a tiny pastel cake, white light, refined soft but colorful, realistic studio photography, no people and no text, no lettering, no logos or watermark. Distinct composition and colors, clean real photo, all physical materials, fully framed with negative space on perimeter.

**`public/images/safari.webp`**

> Landscape 4:3 editorial studio photograph, full view of a high-end Brazilian children's safari birthday decoration set, styled like actual rental party decor on easy to assemble round fin-painted plinths, green and warm tan arches, plush giraffe to the right, classic wooden lion prop, bunch of olive, sage and terracotta balloons to the left, tasteful tropical leaves, beige/cream sunny studio, warm inviting natural light, no people, no letters, no writing, no names, no logos, no watermark. Framed with room around all edges.

**`public/images/cha-revelacao.webp`**

> Landscape 4:3 editorial studio photo of tasteful Brazilian gender reveal party decoration rental set, a centered cute small teddy bear with hot air balloon inspired wooden arch in cream, blue and blush, balloon garland gathered on upper right with blush pink, powder blue, and white balloons, small cake and simple sculptural round plinth, physical tactile materials, warm ivory studio, daylight, airy intentional luxury compositional balance, no writing, letters, signs, logos, watermark or people. Fully framed with negative space on edges.

</details>
