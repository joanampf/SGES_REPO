---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---

# 9.Produção Equipamentos

É neste módulo que serão feitas ações sobre a produção realizada pelos equipamentos.
O utilizador pode consultar a produção interna e para exterior dos equipamentos de uma entidade no separador **Produção Equipamentos** ([](#figProdEquipamento)), através do ponto [6.3 Consultar Entidade](#consultar-entidade).

|  | Permissões               | 
|----|--------------------------------------------|
|**Funcionalidade** |**Perfil**|
| Consultar Produção Equipamentos | ACSS, SGES_EQUIPAMENTOS|
| Preencher/Alterar Produção Equipamentos | ACSS, SGES_EQUIPAMENTOS |
| Importar de Ficheiro Produção Equipamentos| ACSS, SGES_EQUIPAMENTOS |

<p id="consultaProdEquipamento"></p>

![figProdEquipamento](img/pages/9_0_1.jpg)

<p class="caption" id="figProdEquipamento">Produção Equipamentos</p>

Como é possivel consultar na imagem anterior, o utilizador pode preencher:

 - **Produção Interna** - produção feita pelos seus equipamentos para a própria Entidade.
 
 - **Produção Para Exterior** - produção feita pelos seus equipamentos para outras Entidades. 
 
 De seguida deverá escolher o ano a preencher, e selecionar se quer **CONSULTAR**, **PREENCHER/ALTERAR** ou **IMPORTAR DE FICHEIRO** que serão explicados nas Secções seguintes.

## 9.1.Consultar Produção Equipamentos

O utilizador pode consultar a produção dos equipamentos após navegar para o subseparador de produção *Interna* ou *Para Exterior* do separador **Produção Equipamentos** ([](#figProdEquipamento)), selecionar o ano que pretende consultar e clicar no botão **CONSULTAR**.

![figExProdIntEnt](img/pages/9_1_1.jpg)

<p class="caption" id="figExProdIntEnt"> Exemplo de Produção Interna de uma Entidade</p>

Na consulta será apresentada uma página separada por áreas de afetação dos equipamentos, em que cada separador disponibiliza uma lista organizada da seguinte forma:

| Colunas de Produção Equipamento ([](#figExProdIntEnt))  | 
|------------------------------------------------------|
| Capítulo                                             |
| Subcapítulo                                          |
| Indicador                                            |
| Total Exames                                         |

<p id="alteraProdEquipamento"></p>

## 9.2.Preencher/Alterar Produção Equipamentos

O utilizador pode preencher ou alterar o total de exames na produção realizada dos equipamentos após navegar para o subseparador de produção *Interna* ou *Para Exterior* do separador **Produção Equipamentos** ([](#figProdEquipamento)), selecionar o ano que pretende preencher ou alterar e clicar no botão **PREENCHER/ALTERAR**.
No final da edição o utilizador para gravar as alterações deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.

![figPreencheProdIntEnt](img/pages/9_2_1.jpg)

<p class="caption" id="figPreencheProdIntEnt"> Exemplo do ecrã de preenchimento da Produção Interna de uma Entidade</p>

## 9.3.Importar Ficheiro Produção Equipamentos

O utilizador pode importar dados em massa de exames na produção realizada dos equipamentos após navegar para o subseparador de produção *Interna* ou *Para Exterior* do separador **Produção Equipamentos** ([](#figProdEquipamento)), selecionar o ano que pretende importar e clicar no botão **Importar de Ficheiro**.

Será enviado para o seguinte painel:

![figPainelProdIntEnt](img/pages/9_3_1.jpg)

<p class="caption" id="figPainelProdIntEnt"> Painel de importação de ficheiro da Produção Interna de uma Entidade</p>

Onde deverá seguir os seguintes passos:

   - Fazer download do template **TemplateUploadProd** (clicar no nome do ficheiro);

   - Preencher o ficheiro do template com os dados. No campo código bastará indicar o código do indicador e no campo total deverá indicar o número de exames realizados para aquele código;
   
   ![figficheiroProdIntEnt](img/pages/9_3_2.jpg)

<p class="caption" id="figficheiroProdIntEnt"> Exemplo de preenchimento do ficheiro TemplateUploadProd</p>

   - Clicar no botão Anexar;

   - Selecionar o ficheiro preenchido;

   - Clicar em carregar;

   - Verificar os dados;

   - Clicar em Submeter; 

# 10.Produção no Exterior

É neste módulo que serão feitas ações sobre a produção realizada no exterior.
O utilizador pode consultar a produção no exterior por uma entidade no separador **Produção no Exterior** ([](#figProdExterior)) através do ponto [6.3 Consultar Entidade](#consultar-entidade).

![figProdExterior](img/pages/10_0_1.jpg)

<p class="caption" id="figProdExterior"> Produção no Exterior</p>

<p id="consultarProducaoRealizadaExterior"></p>

|  | Permissões               | 
|----|--------------------------------------------|
|**Funcionalidade** |**Perfil**|
| Consultar Produção no Exterior | ACSS, SGES_EQUIPAMENTOS|
| Preencher/Alterar Produção no Exterior | ACSS, SGES_EQUIPAMENTOS |
| Importar de Ficheiro Produção no Exterior| ACSS, SGES_EQUIPAMENTOS |

## 10.1.Consultar Produção no Exterior

O utilizador pode consultar a produção realizada no exterior após navegar para o subseparador do ano pretendido no separador **Produção no Exterior** ([](#figProdExterior)), selecionar o ano que pretende consultar e clicar no botão **CONSULTAR**.
A consulta será apresentada da mesma forma que a demonstrada no ponto [9.1 Consultar Produção Equipamentos](#consultar-producao-equipamentos).

<p id="alterarProducaoRealizadaExterior"></p>

## 10.2. Preencher/Alterar Produção no Exterior

O utilizador pode preencher ou alterar o total de exames na produção realizada no exterior após navegar para o subseparador do ano pretendido no separador **Produção no Exterior** ([](#figProdExterior)), selecionar o ano que pretende preencher/alterar e clicar no botão **PREENCHER/ALTERAR**.
No final da edição o utilizador para gravar as alterações deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.

## 10.3. Importar Ficheiro Produção no Exterior 

O utilizador pode importar dados em massa de exames na produção realizada dos equipamentos após navegar no separador **Produção no Exterior** ([](#figProdExterior)), selecionar o ano que pretende importar e clicar no botão **Importar de Ficheiro**.

Será enviado para o seguinte painel:

![figPainelProdIntEnt](img/pages/9_3_1.jpg)

<p class="caption" id="figPainelProdIntEnt"> Painel de importação de ficheiro da Produção No Exterior de uma Entidade</p>

Onde deverá seguir os seguintes passos:

   - Fazer download do template **TemplateUploadProd** (clicar no nome do ficheiro);

   - Preencher o ficheiro do template com os dados. No campo código bastará indicar o código do indicador e no campo total deverá indicar o número de exames realizados para aquele código;
   
   ![figficheiroProdIntEnt](img/pages/9_3_2.jpg)

<p class="caption" id="figficheiroProdIntEnt"> Exemplo de preenchimento do ficheiro TemplateUploadProd</p>

   - Clicar no botão Anexar;

   - Selecionar o ficheiro preenchido;

   - Clicar em carregar;

   - Verificar os dados;

   - Clicar em Submeter; 