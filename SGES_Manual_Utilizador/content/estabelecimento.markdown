---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---


# 7.Estabelecimentos
É neste módulo que são feitas ações sobre os estabelecimentos.
O utilizador pode consultar a lista de estabelecimentos associados a uma entidade através do separador **Estabelecimentos** ([](#figEstEntidade)).

![figEstEntidade](img/pages/7_1.jpg)

<p class="caption" id="figEstEntidade"> Estabelecimentos da Entidade</p>

|  | Permissões               | 
|----|--------------------------------------------|
|**Funcionalidade** |**Perfil**|
| Criar Estabelecimento | ACSS, SGES_ENTIDADE |
| Editar Estabelecimento | ACSS, SGES_ENTIDADE |
| Consultar Estabelecimento | ACSS, SGES_ENTIDADE, SGES_EQUIPAMENTOS |
| Transferir Estabelecimento| ACSS |
| Encerrar Estabelecimento | ACSS |
| Histórico Estabelecimento | ACSS |

<p id="criarEstabelecimento"></p>

## 7.1.Criar Estabelecimento

Para criar um novo estabelecimento, o utilizador deve clicar em **CRIAR** na página de estabelecimentos associados a uma entidade ([](#figEstEntidade)). De seguida, será encaminhado para a página de criação de estabelecimento, onde deverá preencher os campos obrigatórios para cada **painel** de modo a poder efetuar o registo do estabelecimento.
Após o registo dos dados em cada Painel, deve clicar em **GUARDAR** para gravar o estabelecimento. Após clicar irá ser notificado com o resultado da operação.


<p id="painelIdEstabelecimento"></p>
### 7.1.1. Painel de Identificação do Estabelecimento
Neste painel identificam-se os dados básicos da entidade. O utilizador deverá preencher os campos obrigatórios para concluir a ação:

|    | Campos Obrigatórios ([](#figCriarEstabelecimento))         |      |
|----|---------------------------------------------------|----------|
| a) | Tipo de Estabelecimento                          |  Hospital | 
||                                                      |  Unidade funcional| 
||                                                      |  Consultório| 
||                                                      |  Laboratório| 
| b) |Tipo de Unidade Funcional (se Tipo de Estabelecimento = Unidade Funcional)|UCC| 
||                                                      |  UCSP| 
||                                                      |  USF| 
||                                                      |  USP| 
||                                                      |  URAP| 
| c) |Estado                                            | Ativa|
||                                                      | Encerrado|
||                                                      | Suspenso|
||                                                      | Transferido|
| d) |Nome/Designação social                       | |
| e) |Morada                                       | |
| f) |Código-Postal                                | |
| g) |Distrito                                     | |
| h) |Concelho                                     | |
| i) |Freguesia                                    | |
| j) |Telefone                                     | |
| k) |Fax                                          | |
| l) |Email                                        | |
| m) |Site                                         | |

![figCriarEstabelecimento](img/pages/7_1_1.jpg)

<p class="caption" id="figCriarEstabelecimento"> Criar Estabelecimento</p>

Após o preenchimento da identificação do estabelecimento, dependendo do tipo deste, será necessário o preenchimento dos módulos adicionais.

|  Tipo de Estabelecimento | Módulos de preenchimento  | 
|------------------------------------|
| **Hospital**          |Urgências ([7.1.3. Painel de Urgências](#painelUrgencia)) |
|                       |Especialidades ([7.1.4. Painel de Especialidades](#painelEspecialidades)) |
|                       |Capacidade ([7.1.5. Painel de Capacidade](#painelCapacidade)) - Se Entidade Pública |
| **Consultório**       |Especialidades ([7.1.4. Painel de Especialidades](#painelEspecialidades)) |
| **Laboratório**        |Especialidades ([7.1.4. Painel de Especialidades](#painelEspecialidades)) |
|                       |Postos de colheita ([7.1.6. Painel de Postos de Colheita](#painelPostoColheita))|
| **Unidade Funcional** |Unidade Funcional ([7.1.6. Painel de Unidade Funcional](#painelUnidadeFuncional)) |

<p id="painelApoioCidadão"></p>
### 7.1.2. Painel de Balcão de Apoio ao Cidadão

Este painel ([](#figPainelGabCidadao)) apenas deve ser preenchido se aplicável à entidade em questão. O utilizador deverá preencher os campos obrigatórios para concluir a ação:

|    | Campos Obrigatórios |      |
|----|---------------------------------------------------|----------|
| m) |E-mail do Gabinete Cidadão ||
| n) |Telefone do Gabinete Cidadão ||
| m) |Site Tabela Preços em vigor (É uma tabela de preços em vigor para os cuidados a prestar pelo hospital. (São os preços a pagar por um utente independente, sem qualquer sistema de saúde))||


![figPainelGabCidadao](img/pages/7_1_2.jpg)

<p class="caption" id="figPainelGabCidadao"> Painel Gabinete ao cidadão</p>

<p id="painelUrgencia"></p>
### 7.1.3. Painel de Urgências
Este painel permite ao utilizador identificar as urgências da entidade de acordo com os seguintes campos obrigatórios:

|    | Campos Obrigatórios    |      |
|----|--------------------------------------------------------|------|
| a) | Urgências                         |  Sim| 
| |                                      |  Não| 
| b) | 	Se urgências                     |  Tipo de urgência| 
||                                       |Classificação do Serviço de Urgência| 

![figUrgencias](img/pages/7_1_3.jpg)

<p class="caption" id="figUrgencias"> Estabelecimento do tipo Hospital - Urgências</p>


<p id="painelEspecialidades"></p>
### 7.1.4. Painel de Especialidades

O painel de especialidades permite ao utilizador indicar as especialidades com que a entidade lida através dos seguintes campos obrigatórios:

|    | Campos Obrigatórios   |                         |
|----|---------------------------------------|-------------------------|
| a) | 	Especialidades e Exames              | Área                    |
|    | 	                                     | Especialidade           |
|    | 	                                     | Adultos e/ou Pediátricos|

Para adicionar uma nova especialidade o utilizador deverá pressionar **Adicionar Linha**
![figEspecialidade](img/pages/7_1_4.jpg)

<p class="caption" id="figEspecialidade"> Painel das Especialidades s/ Exames</p>
Se a especialidade de uma determinada entidade puder ter acesso a exames, o painel apresentar-se-á ao utilizador como se segue:
![figEspecialidade2](img/pages/7_1_4_1.jpg)

<p class="caption" id="figEspecialidade2"> Painel das Especialidades c/ Exames</p>
Na lista o utilizador deverá indicar quais os exames que o hospital realiza para aquela especialidade.
<p id="painelCapacidade"></p>
### 7.1.5. Separador de Capacidade
No painel de capacidade, deve ser indicada a lotação do hospital relativamente aos vários tipos de áreas existentes na entidade.

|    | Campos Obrigatórios   |      |
|----|--------------------------------------------------------|------|
| a) | 	Ano                       								| |
| b) | 	Capacidade                       |Tipo Área Capacidade |
||                                       |  Área Capacidade| 
||                                       |  Tipo Capacidade| 
||                                       |  Capacidade Lotação| 

![figCapacidade](img/pages/7_1_5.jpg)

<p class="caption" id="figCapacidade"> Painel das Capacidades </p>

Quando o utilizador regista a capacidade dos quartos de isolamento, deverá indicar o nível de isolamento do quarto como especificado de seguida no campo **Área de Capacidade**:

•	**Quarto de Isolamento de GRAU III** – Quarto individual fechado, bem ventilado

•	**Quarto de Isolamento de GRAU IV**  – Quarto individual fechado, bem ventilado, com desinfeção da ventilação e pressão negativa

•	**Quarto de Isolamento de GRAU VI**  – Quarto individual com porta dupla e pressão negativa. 

<p id="painelUnidadeFuncional"></p>
### 7.1.6. Painel de Unidade Funcional
No caso da entidade em que se está a criar o estabelecimento ser um ACES, então apresenta-se o seguinte painel:

|    | Campos Obrigatórios – Unidade Funcional  | |
|----|--------------------------------------------------------|------|
| a) | Centro de Saúde                                        | | 
| b) |População Abrangida                          | Distrito |
||                                                 | Concelho | 
||                                                 | Freguesias| 
| c) | Se Unidade Funcional = USF, UCSP            | Nº de Gabinetes Médicos| 
||                                                 | Nº de Gabinetes Tratamento| 
| d) | Se Unidade Funcional = USF                  | Modelo USF| 


![figUnidadeFunc](img/pages/7_1_6.jpg)

<p class="caption" id="figUnidadeFunc"> Estabelecimento do tipo Unidade Funcional</p>
 
<p id="painelPostoColheita"></p>
### 7.1.6. Painel de Postos de Colheita
No caso do estabelecimento a criar ser um laboratório , terá de ser preenchido o seguinte painel:

|    | Campos Obrigatórios - Posto Colheita  | 
|----|--------------------------------------------------------|
| a) | Nome                                                   |
| b) | Morada                                                 |
| c) | Código-Postal                                          |
| d) | Distrito                                               |
| e) | Concelho                                               |
| f) | Freguesia                                              |

![figPostosColheita](img/pages/7_1_7.jpg)

<p class="caption" id="figPostosColheita"> Estabelecimento do tipo Laboratório - Postos de Colheita</p>

<p id="alteraEstabelecimento"></p>

## 7.2. Editar Estabelecimento

 Existem duas possibilidades de editar um estabelecimento no SGES:
 
 - Na página de Pesquisa de Estabelecimentos ([](#figPesquisaExEntidade)): a página de edição de um estabelecimento está disponível através da consulta de estabelecimento clicando no botão **EDITAR ESTABELECIMENTO**.
 
 - Na página de estabelecimentos associados a uma entidade ([](#figEstEntidade)): pode navegar diretamente para a edição após selecionar um estabelecimento da lista de resultados e clicar no botão **EDITAR**.

A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [7.1 Criar Estabelecimento](#criar-estabelecimento).
No final da edição o utilizador para gravar as alterações deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.

<p id="consultarEstabelecimento"></p>

## 7.3. Consultar Estabelecimento

Se o utilizador tiver acesso à pesquisa de estabelecimentos ([](#figPesquisaEstabelecimento)) ou à página de estabelecimentos associados a uma entidade ([](#figEstEntidade)) pode navegar diretamente para a consulta após selecionar um estabelecimento da lista de resultados e clicar no botão **CONSULTAR**. 

<p id="transfereEstabelecimento"></p>

## 7.4. Transferir Estabelecimento 
Na página de estabelecimentos associados a uma entidade ([](#figEstEntidade)), o utilizador pode navegar diretamente para a página de transferência de equipamento após selecionar um estabelecimento da lista e clicar no botão **TRANSFERIR**.
Para poder transferir o equipamento, o utilizador deve preencher os campos obrigatórios e clicar em **TRANSFERIR**.

|    | Campos Obrigatórios – ([](#figTransfEstabelecimento))  | 
|----|--------------------------------------------------------|
| a) | Entidade destino                                       |

![figTransfEstabelecimento](img/pages/7_4_1.jpg)

<p class="caption" id="figTransfEstabelecimento"> Transferir Estabelecimento</p>

Após clicar no botão surge alerta a questionar se pretende mesmo encerrar o estabelecimento, se confirmar irá ser notificado com o resultado da operação.

<p id="encerrarEstabelecimento"></p>

## 7.5. Encerrar Estabelecimento 

Para encerrar um estabelecimento tem de pesquisar pelo mesmo ([](#figPesquisaEstabelecimento)) e depois de o selecionar na lista de resultados deve clicar no botão **ENCERRAR**.
Uma vez na página de **Encerrar Estabelecimento** ([](#figEncerraEstabelecimento)) deve preencher os campos *Mês*, *Ano*, *Motivo*, *Observação* se for necessário e depois clicar no botão “Encerrar”. Após clicar no botão surge alerta a questionar se pretende mesmo encerrar o estabelecimento, se confirmar irá ser notificado com o resultado da operação.

![figEncerraEstabelecimento](img/pages/7_5_1.jpg)

<p class="caption" id="figEncerraEstabelecimento"> Encerrar Estabelecimento</p>

<p id="historicoEstabelecimento"></p>

## 7.6. Histórico Estabelecimento 

A página de histórico de um estabelecimento pode ser acedida através da pesquisa de estabelecimentos ([](#figPesquisaEstabelecimento))  ou através da página de estabelecimentos associados a uma entidade ([](#figEstEntidade)) , selecionando uma entidade da lista de resultados e clicando no botão **HISTÓRICO**.
Uma vez na página de histórico ([](#figHistoricoEstabelecimento))  poderá visualizar todas as versões resultantes da edição do estabelecimento, bem como a identificação dos campos alterados.

![figHistoricoEstabelecimento](img/pages/7_6_1.jpg)

<p class="caption" id="figHistoricoEstabelecimento"> Histórico de Estabelecimento </p>
