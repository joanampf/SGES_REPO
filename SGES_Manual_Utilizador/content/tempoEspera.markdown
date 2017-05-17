---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---

<p id="tempos-de-espera"></p>
# 10.Tempos de Espera

Os tempos de espera correspondem ao nº máximo de dias que decorrem desde que surge a necessidade de marcar um exame até à sua realização, para um doente programado, não urgente e seguido em ambulatório.
O registo desta informação deve ser feito trimestralmente ([Despacho nº. 10430](http://www.sg.min-saude.pt/NR/rdonlyres/4D921E90-4382-4E9E-B682-3FE85F261D87/27261/3387133871.pdf)), preferencialmente nas datas 31 de Março, 30 de Junho, 30 de Setembro e 31 de Dezembro.

O utilizador pode consultar os tempos de espera numa entidade no separador **Tempos de Espera** ([](#figTempoEspera)), através do ponto [6.3 Consultar Entidade](#consultar-entidade).

![figTempoEspera](img/pages/11_0_1.jpg)

<p class="caption" id="figTempoEspera"> Tempos de Espera</p>

|  | Permissões               | 
|----|--------------------------------------------|
|**Funcionalidade** |**Perfil**|
| Consultar Tempos de Espera | ACSS, SGES_EQUIPAMENTOS|
| Preencher/Alterar Tempos de Espera | ACSS, SGES_EQUIPAMENTOS |
| Importar de Ficheiro Tempos de Espera| ACSS, SGES_EQUIPAMENTOS |

<p id="tERealizacaoExames"></p>

## 10.1.Consultar Tempos de Espera

O utilizador pode consultar os tempos de espera para a realização de exames após navegar para o separador **Tempos de Espera** ([](#figTempoEspera)), 
selecionar o período que pretende consultar e clicar no botão **CONSULTAR**;

![criarTempoEspera](img/pages/11_1_1.jpg)

<p class="caption" id="criarTempoEspera"> Tempos de Espera</p>

| Campos Obrigatórios da ([](#criarTempoEspera))    |
|---------------------------------------------------|
| 	Área                                             |
| 	Exames                                           |
|  Total dias espera                                |



## 10.2. Preencher/Alterar Tempos de Espera

O utilizador pode preencher ou alterar o *Total dias de espera* após navegar para o separador **Tempos de Espera**  ([](#figTempoEspera)), selecionar o período que pretende preencher ou alterar e clicar no botão **PREENCHER/ALTERAR**.
No final da edição o utilizador para gravar as alterações deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.


<p id="importExames"></p>
## 10.3. Importar de Ficheiro Tempos de Espera

O utilizador pode importar dados em massa de exames na produção realizada dos equipamentos após navegar no separador **Tempos de Espera** ([](#figTempoEspera)), selecionar o ano que pretende importar e clicar no botão **Importar de Ficheiro**.

Será enviado para o seguinte painel:

![figPainelProdIntEnt](img/pages/9_3_1.jpg)

<p class="caption" id="figPainelProdIntEnt"> Painel de importação de ficheiro dos Tempos de Espera de uma Entidade</p>

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
