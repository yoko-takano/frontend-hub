# Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Componentes e Funcionalidades](#componentes-e-funcionalidades)
- [Imagens Representativas](#imagens-representativas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

# Descrição do Projeto
O projeto consiste no desenvolvimento de um site utilizando a biblioteca `ReactJS`, destinado a apresentar o portfólio do Centro de Pesquisa, Tecnologia e Inovação HUB, situado na Universidade do Estado do amazonas - UEA. Este ambiente online foi elaborado para oferecer uma experiência informativa aos visitantes, destacando os principais projetos, integrantes e áreas de atuação dos projetos.

# Componentes e Funcionalidades

## Sobre a barra de navegação:

:heavy_check_mark: A navbar é responsiva para telas grandes, medias e pequenas, recolhendo no padrão menu hamburguinho.

:heavy_check_mark: Também é do tipo flutuante e não some caso o usuário vá navegando para baixo na página.

:heavy_check_mark: O ícone do HUB retorna para a página principal (que é a página dos projetos, chamada também de Project).

:heavy_check_mark: O ícone About leva para a página sobre o HUB.

:heavy_check_mark: O ícone Contact e Sign Up são representativos apenas para fins visuais, ambas não têm funcionalidade de navegação.

:heavy_check_mark: Sobre o ícone de Sign Up, este tem um design diferente dos outros para chamar a atenção do usuário.

:heavy_check_mark: Tanto os ícones quanto a descrição do ícone (Projects, About, Contact e Sign Up) provem do arquivo `MenuData.js` e são dinâmicamente apresentados.

:heavy_check_mark: Os ícones são provenientes do <a href="https://fontawesome.com/" target="_blank">`fontawesome.com`</a>.

:heavy_check_mark: Gradiente para fundo da página e ideias de estilização de botões foram feitas com o auxílio do site <a href="https://cssgradient.io/" target="_blank">`cssgradient.io`</a>.

:heavy_check_mark: Detalhe do favicon da logo do HUB na página! :sparkles:

## Sobre o conteúdo da página:

### Projects

:heavy_check_mark: Nela temos o portfólio de todos os projetos a serem apresentados.

:heavy_check_mark: Cores, ícones, informações sobre os projetos e sobre os integrantes provem do arquivo `db.json` e são dinâmicamente apresentados.

:heavy_check_mark: Primeiramente, temos o ícone do projeto. Este ícone é clicável, que irá redirecionar o usuário para a página do projeto em uma nova guia. Apresenta um leve hover da cor do projeto para o cinza. É possível alterar o ícone para o ícone do projeto alterando a fonte `db.json`. Ícone meramente ilustrativo. Ao lado, tem-se o nome do projeto.

:heavy_check_mark: Abaixo temos as datas de início e término, descrição e nome da companhia.

:heavy_check_mark: Em relação ao ícone da companhia, também é meramente ilustrativa e pode ser alterado, assim como as outras informações contidas na base de dados.

:heavy_check_mark: Temos também as tags de cada projeto, responsivo de forma que, quando a tela fica menor, as tags respodem e acontece uma quebra de linha. Tem uma fonte diferente para ficar com aspecto de tag.

#### Cards

:heavy_check_mark: Os integrantes são apresentados por `cards`. Temos a foto do integrante, o seu cargo e qual a responsabilidade do integrante no projeto. 

:heavy_check_mark: Atualmente, todas imagens estão com a mesma photoURL, que é `https://github.com/yoko-takano.png` para ilustração. A intenção é colocar a URL dos participantes a partir da imagem do `GitHub`, como no exemplo.

:heavy_check_mark: A cor de fundo do `card` é um tom mais suave que o utilizado no título do projeto. Foi utilizado o `Figma` para organização da paleta de cores do site.

![image](https://github.com/yoko-takano/frontend-hub/assets/148287663/8938cda1-e759-40e1-8f2b-fbd482906acb)

### About

:heavy_check_mark: Informações sobre o HUB retiradas do `LinkedIn` do próprio. Contém visão geral, setor, sede, ano de fundação e localização.

:heavy_check_mark: Em específico, a locação foi inserida a partir de `<iframe>` diretamente do GoogleMaps.

## Sobre o rodapé:

:heavy_check_mark: É apresentado no rodapé, mais para a esquerda, os ícones do LinkedIn e Instagram. Todos são links que direcionam o cliente para as páginas das redes sociais do HUB.

:heavy_check_mark: Para a direita temos os dizeres "Developed by HUB".

# Imagens Representativas

## Telas pequenas

https://github.com/yoko-takano/frontend-hub/assets/148287663/8d10d2b4-cd52-4067-b1b1-2456cba466fb

## Telas médias
![image](https://github.com/yoko-takano/frontend-hub/assets/148287663/fcfbfe27-27cc-4527-9cc2-b023dd9e0553)
![image](https://github.com/yoko-takano/frontend-hub/assets/148287663/5f23a854-7c60-42d9-bd48-7af0ae4f0517)
![image](https://github.com/yoko-takano/frontend-hub/assets/148287663/bc42fb93-080c-4fb6-80b9-c90481f6ee9c)
![image](https://github.com/yoko-takano/frontend-hub/assets/148287663/2efaa4af-f9c3-40b1-947b-07001c256038)
![image](https://github.com/yoko-takano/frontend-hub/assets/148287663/6b94cae9-46c9-4c46-a5f6-fa8268fd7aa1)
![image](https://github.com/yoko-takano/frontend-hub/assets/148287663/e7aec598-079e-4bce-af03-973fdee42583)

## Telas grandes
![image](https://github.com/yoko-takano/frontend-hub/assets/148287663/f23c9ab2-8525-4920-b3bf-42a8a6bee57d)

# Tecnologias Utilizadas

:heavy_check_mark: `ReactJS:` Escolhido pela sua eficiência no desenvolvimento de interfaces interativas e reativas.

:heavy_check_mark: `Figma:` Utilizado para o design e prototipagem, proporcionando uma abordagem colaborativa no desenvolvimento da interface do usuário.
