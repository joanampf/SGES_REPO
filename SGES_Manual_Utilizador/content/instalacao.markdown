---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---

# 13. Instalações

É neste módulo que serão feitas ações sobre as instalações.
O utilizador pode consultar as instalações de um estabelecimento no separador “Instalações” ([](#13_1) e [](#13_2)), através do ponto [7.3 Consultar Estabelecimento](#consultar-estabelecimento), ou selecionando um estabelecimento e clicando em **Instalações** ([](#figEstEntidade)) na página de consulta de estabelecimentos existentes numa entidade, através do ponto [7. Estabelecimentos](#estabelecimentos).

![img/pages/13_1](img/pages/13_1.jpg)

<p class="caption" id="13_1"> Exemplo de Estabelecimento com Instalações</p>

![img/pages/13_2](img/pages/13_2.jpg)

<p class="caption" id="13_2"> Exemplo de Estabelecimento sem Instalações</p>

![img/pages/13_3](img/pages/13_3.jpg)

<p class="caption" id="13_3"> Botões disponiveis no módulo Instalações </p>

## 13.1. Criar Instalações

Caso ainda não exista informação acerca das instalações de um estabelecimento, o utilizador pode criar instalações.
Para criar instalações, o utilizador deve clicar em **CRIAR** na página de instalações de estabelecimento ([Fig. 38](#fig38)). De seguida, será encaminhado para a página de criação de instalações, onde deverá preencher os campos obrigatórios para poder efetuar o registo das instalações.
Para o Registo de Instalações será necessário primeiro submeter os campos da Caracterização Geral do(s) edifício(s), sem estes submetidos não é possível preencher outros campos.

### 13.1.1 Caracterização

Para poder criar a instalação o utilizador deve preencher, pelo menos, os campos obrigatórios da *Caracterização Geral*, campos esses que dizem respeito ao estabelecimento em si, e clicar em **SUBMETER**. 


|  |   Campos – Caracterização Geral - [](#13_1_1) | | |
|----------------------------------------------------------------|----|-|-|
|O estabelecimento tem múltiplos edifícios?|Sim|||
|                                          |Não|||
|Os edifícios que compõem o estabelecimento estão localizados no mesmo terreno?|Sim|||
|                                          |Não|||
| Propriedade do Terreno     |Estado  | | |
|                            |Privado com cedência de direito de superfície|||
|                            |SCM|| |
| Propriedade do(s) Edifício(s)   |Arrendado| | |
|                                    |Estado| | |
|                                    |PPP| | |
|                                    |SCM| | |
| **Lista de Edifícios**  || | |
| Se morada do edifício ≠ morada do estabelecimento   | Morada | | |
|                                                        | Código-Postal| | |
|                                                        | Distrito | | |
|                                                        | Concelho | | |
|                                                        | Freguesia| | |
| Edifícios construídos na mesma fase? |Sim|||
|                                          |Não| Número de fases de construção||
| Heliporto?                           |Sim| Heliporto Certificado?| Sim|
|||                                                                   | Não|
|||                                             Heliporto Operacional?| Sim|
|||                                                                   | Não|
|                                          |Não|||

![img/pages/13_1_1](img/pages/13_1_1.jpg)

<p class="caption" id="13_1_1"> Criar Instalações – Caracterização Geral</p>

Pode inserir informação acerca das áreas e estacionamento, submetendo no final de cada um de ambos os módulos.

|    | Campos Áreas Totais e Estacionamento - [](#13_1_2)  | |
|----|-----------------------------------------------------------|-|
| a) | Áreas Totais    |    Área bruta de construção             |
||                     |    Área de Estacionamento Construído     |
||                     |    Área implantação do(s) edifício(s)    |
||                     |    Área terreno                          |
||                     |    Área útil                             |
| b) | Estacionamento  |  N.º Lugares de estacionamento em área construída |
||                     |  N.º Lugares de estacionamento à superfície |

![img/pages/13_1_2](img/pages/13_1_2.jpg)

<p class="caption" id="13_1_2"> Criar Instalação - Áreas Totais e Estacionamento</p>

**Separador Caracterização do Edifício** - no que diz respeito à caracterização do edifício, aparecerá uma lista com o mesmo número de edifícios que os indicados no separador da **Caracterização Geral**. O utilizador deverá proceder a seleção de um (ou do único) edifício, tal como indicado na mensagem no início do painel.

![img/pages/13_1_3](img/pages/13_1_3.jpg)

<p class="caption" id="13_1_3"> Lista de edifícios Caracterização do Edifício</p>

Após selecionar o botão de **EDITAR** os campos não editáveis ficaram preenchíveis.

![img/pages/13_1_4](img/pages/13_1_4.jpg)

<p class="caption" id="13_1_4">Caracterização do Edifício com os campos preenchíveis</p>

**Separador Projeto** - contém a caracterização do projeto, como os custos e datas chave do projecto. Estes dados devem ser inseridos para cada fase de construção dos edifícios;

![img/pages/13_1_5](img/pages/13_1_5.jpg)

<p class="caption" id="13_1_5"> Caracterização do Projeto </p>


![img/pages/13_1_6](img/pages/13_1_6.jpg)

<p class="caption" id="13_1_6"> Caracterização do Projeto - Datas Chaves </p>

**Separador Construção** - contém a caracterização da construção, como os seus custos e custos de equipamentos. Estes dados devem ser inseridos para cada fase de construção dos edifícios;

![img/pages/13_1_7](img/pages/13_1_7.jpg)

<p class="caption" id="13_1_7"> Caracterização da Construção </p>

### 13.1.2 Detalhe

Contém informação acerca da energia, águas e gases medicinais utilizados na instalação, assim como a produção de resíduos. O utilizador deverá preencher os campos obrigatórios e selecionar **SUBMETER**.

|  | Campos no Separador Detalhe                            ||
|-----------------------------------------------------------|-|-|
| Energia ([](# 13_2_1))   | Ano de alteração;            | |
|                                  | Nível da tensão de alimentação – rede elétrica de distribuição pública;  | |
|                                  | Topologia de alimentação de energia elétrica; | |
|                                  | Potência Contratada; | |
|                                  | Nº grupos eletrogéneos; | |
|                                  | Potência instalada; | |
|                                  | Existe sistema de Cogeração; | |
|                                  | Existe sistema de Trigeração; | |
|                                  | Painéis Solares Térmicos; | |
|                                  | Painéis Fotovoltaicos;  | |
|                                  | Aero-geradores;         | |
|                                  | Certificação Energética; | |
|Água / Águas Residuais  ([](# 13_2_2))  | Ano de alteração;            | |
|                                               | Volume de armazenamento total; | |
|                                               | Volume de armazenamento de água para rede de incêndios; | |
|                                               | Furo de captação de águas subterrâneas; | |
|                                               | ETAR / ETARI;| |
| Gases Medicinais  ([](# 13_2_3)) | Ano de alteração;            | |
|                                         | Instalação registada no Infarmed como Dispositivo Médico?| |
| Produção de Resíduos  ([](# 13_2_4)) | Ano                   | |
|                                   |Quantidade de Resíduos Produzidos |Grupo I e II; |
|                                   |                                  |Grupo III; |
|                                   |                                  |Grupo IV; |

![img/pages/13_2_1](img/pages/13_2_1.jpg)

<p class="caption" id="13_2_1"> Detalhe Energia </p>

![img/pages/13_2_2](img/pages/13_2_2.jpg)

<p class="caption" id="13_2_2"> Detalhe Água/Águas Residuais </p>

![img/pages/13_2_3](img/pages/13_2_3.jpg)

<p class="caption" id="13_2_3"> Detalhe Gases Medicinais </p>

![img/pages/13_2_5](img/pages/13_2_4.jpg)

<p class="caption" id="13_2_4"> Detalhe Produção de Resíduos </p>


### 13.1.3 Equipamentos Críticos

Contém a informação de todos os equipamentos críticos para o funcionamento da instalação, como as instalações elétricas, instalações mecânicas e instalações de águas e esgotos.
Após guardar cada registo na tabela, e para não se perder os dados será necessário submeter.

|    | Campos Obrigatórios em Equipamentos Críticos              | |
|----|-----------------------------------------------------------|-|
| a) | Instalações Elétricas ([Fig. 51](#fig51)), Instalações Mecânicas ([Fig. 52](#fig52)) ,Instalações de Águas e Esgotos ([Fig. 53](#fig53)) | Designação do Equipamento    ||
||                                                       | Edificio  | |
||                                                       | Marca   | |
||                                                       | Modelo   | |
||                                                       | Nº Serie   | |
||                                                       | Data de entrada em funcionamento  | |
||                                                       | Estado   | |
||                                                       | Data de Abate (caso Estado=Abatido)   | |

![img/pages/fig51](img/pages/fig51.jpg)

<p class="caption" id="fig51">Equipamentos Críticos - Instalações Elétricas</p>

![img/pages/fig52](img/pages/fig52.jpg)

<p class="caption" id="fig52">Equipamentos Críticos - Instalações Mecânicas</p>

![img/pages/fig53](img/pages/fig53.jpg)

<p class="caption" id="fig53">Equipamentos Críticos - Instalações de Águas e Esgotos</p>

### 13.1.4 Serviços

Contém toda a informação relacionada com os serviços que foram realizados nas instalações do estabelecimento, assim como os seus custos e serviços de apoio.

|    | Campos Obrigatórios em Equipamentos Críticos              | |
|----|-----------------------------------------------------------|-|
|a)  | Serviço de Instalação e Equipamento ([Fig. 54](#fig54)) | Ano de Alteração (Ano em que acontece a alteração, se estiver a criar o ano de alteração deve ser igual ao ano actual) |
|    |                                     | Equipa de Manutenção Permanente;|
|    |                                     | Serviço de Instalações e Equipamentos – Em regime de outsourcing;|
|    |                                     | Número de elementos;|
|    |                                     | Nome da Empresa (caso Serviço de Instalações e Equipamentos – Em regime de outsourcing = Sim)|
| b) | Custos do Serviço ([Fig. 55](#fig55))| Custos anuais com manutenção;|
| |                                         | Custos anuais com contratos de manutenção;|
| |                                         |Custos anuais com substituição de equipamento;|

![img/pages/fig54](img/pages/fig54.jpg)

<p class="caption" id="fig54">Fig. 54 -Serviços - Serviço de Instalação e Equipamento</p>

![img/pages/fig55](img/pages/fig55.jpg)

<p class="caption" id="fig55">Fig. 55 -Serviços - Custos do Serviço</p>

![img/pages/fig56](img/pages/fig56.jpg)

<p class="caption" id="fig56">Fig. 56 -Serviços - Serviços de Apoio</p>

### 13.1.5 Contratos de Manutenção

Contém a informação dos contratos de manutenção dos equipamentos das instalações.

|    | Campos em Contratos de Manutenção – [Fig. 57](#fig57)     | |
|----|-----------------------------------------------------------|-|
|a)  | Equipamento com contrato de manutenção | Bomba(s) rede de incêndios |
| |                                           | Bomba(s) circuladoras |
| |                                           | Gerador(es) de emergência |
| |                                           | UPS |
| |                                           | Posto de transformação (PT) |
| |                                           | Quadro geral de baixa tensão (QGBT) |
| |                                           | Bomba(s) circuladoras |
| |                                           | Unidade de tratamento de ar (UTA) |
| |                                           | Unidade de tratamento de ar novo (UTAN) |
| |                                           | Bomba(s) de vácuo |
| |                                           | Bomba(s) de ar comprimido medicinal |
| |                                           | Central de protóxido |
| |                                           | Central de extração de gases anestésicos |
| |                                           | Ventilador(es) associado(s) ao sistema de incêndios |
| c) |      Tipo de Manutenção                | Preventiva |
| |                                           | Corretiva |
| |                                           | Preventiva e Corretiva |
|  d)|Com peças? (Se Tipo de Manutenção = “Preventiva” ou ”Corretiva ou Preventiva”)       |                                               Sim |
| |                                           | Não |
| e) |      Duração do Contrato               | Semestral |
| |                                           | Anual |
| |                                           | Bianual|
| |                                           | Trianual|
| |                                           | Quadrienal|
| |                                           | Quinquenal|
| f) |   Contrato contém SLA – Service Level Agreement?    | Sim|
| |                                                        | Não|

![img/pages/fig57](img/pages/fig57.jpg)

<p class="caption" id="fig57"> Contratos de Manutenção </p>


### 13.1.6 Avaliação Pós-Ocupação

Contém a informação acerca da avaliação dos edifícios da instalação; útil instrumento na implementação de melhorias na criação de edifícios no futuro.

|    | Campos em Avaliação Pós-Ocupação – [Fig. 58](#fig58)     | |
|----|-----------------------------------------------------------|-|
|a)  | Existe APO efetuada?                | Data de realização |
|b)  | Serviços avaliados?                						||
|c)  | Upload para repositório?            | Ficheiro           |

![img/pages/fig58](img/pages/fig58.jpg)

<p class="caption" id="fig58"> Avaliação Pós-Ocupação </p>

### 13.1.7 Ações ACSS

Contém a informação de todas as ações que a ACSS executou naquelas instalações.

|    | Campos em Ações ACSS – [Fig. 59](#fig59)     | |
|----|-----------------------------------------------------------|-|
| a) | Existem ações realizadas no estabelecimento, pela ACSS? |Data de realização |
| b) | Tipo de Ação                          |Avaliações do estado das instalações |
||                                           |Estudo-piloto |
||                                           |Outros |
||                                           |Visita |
| c) | Serviços Visitados                           ||
| d) | Descrição Sumária                            ||
| e) | Upload para repositório?              |Ficheiro |


![img/pages/fig59](img/pages/fig59.jpg)

<p class="caption" id="fig59"> Ações ACSS </p>

## 13.2. Editar Instalações

O utilizador pode navegar para a página de edição de instalação na página de instalações de estabelecimento ([Fig. 39](#fig39)) e clicar no botão **ALTERAR INSTALAÇÃO**.
A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [13.1 Criar Instalações](#criar-instalaes)
No final da edição o utilizador para gravar as alterações deve clicar no botão **SUBMETER** ou **GUARDAR**, dependendo dos painéis alterados. Após clicar irá ser notificado com o resultado da operação.

## 13.3. Consultar Instalações
O utilizador pode navegar para a página de consulta de instalação na página de instalações de estabelecimento ([Fig. 39](#fig39)) e clicar no botão **CONSULTAR INSTALAÇÃO**.

## 13.4. Histórico Instalações

A página de histórico de uma entidade pode ser acedida através da página de instalações de estabelecimento ([Fig. 39](#fig39)) e clicando no botão **HISTÓRICO INSTALAÇÃO** .
Uma vez na página de histórico poderá visualizar todas as versões resultantes da edição das instalações, bem como a identificação dos campos alterados.
