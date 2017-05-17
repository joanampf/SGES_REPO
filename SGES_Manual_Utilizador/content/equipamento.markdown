---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---

<p id="equipamentos"></p>
# 13. Equipamentos

É neste módulo que são feitas ações sobre os equipamentos. 
Apenas as entidades do SNS (excepto ACES) é que têm acesso a esta funcionalidade.
O utilizador pode consultar a lista de equipamentos associados a um estabelecimento através do separador Equipamentos ([](#figEqpEstabelecimento))

![figEqpEstabelecimento](img/pages/12_1.jpg)

<p class="caption" id="figEqpEstabelecimento"> Equipamentos de um estabelecimento</p>

<p id="criaEquipamento"></p>

## 13.1. Criar Equipamento
Para criar um novo equipamento, o utilizador deve clicar em **CRIAR** na página de equipamentos de um estabelecimento ([](#figEqpEstabelecimento)). De seguida, será encaminhado para a página de criação de equipamento, onde deverá preencher os campos obrigatórios do painel Identificação para poder efetuar o registo do equipamento.



### 13.1.1. Identificação

| Campos Obrigatórios da ([](#figCriarEquipamento))         |      |
|----------------------------------------------------|----------|
| Designação                                         |      |
| Número de Série                                    |      |
| Posto de Trabalho (Todos os serviços a que um equipamento se encontra associado devem ser considerados)                           |      |
| Marca                                              |      |
| Modelo                                             |      |
|Se Designação = Acelerador Linear,Angiógrafo,Câmara Gama, Câmara Hiperbárica,RM, RM (Dedicada exclusivamente à Radioterapia,TC ou TC (Dedicada exclusivamente à Radioterapia                           |Característica Técnica| 
| Produção para Exterior?                          | Sim     |


![figCriarEquipamento](img/pages/12_1_1_1.jpg)

<p class="caption" id="figCriarEquipamento"> Criar novo Equipamento - Identificação</p>

Após o registo dos dados deve clicar em **GUARDAR** para gravar o equipamento. Após clicar irá ser notificado com o resultado da operação.

### 13.1.2. Outros painéis

| Outros módulos a preencher                 |
|--------------------------------------------|
| Contratação ([](#figContratacao))            |
| Localização/Estado ([](#figLocalizacao))     |
| Atividade   ([](#figAtividade))            |
|Autorização Ministerial / Licença de Instalação ([](#figAutorizacao))|
| Manutenção  ([](#figManutencao))            |
| Recursos Humanos Afetos ([](#figRhAfetos))|


| Campos Contratação ([](#figContratacao)) | |
|----------------------------------------------------|----------|
| Tipo de Contrato                                   | Aquisição    |
|                                                        | Concessão    |
|                                                        | Locação/Leasing |
|                                                        | Oferta       |
| Data de Início de Funcionamento                     || 
| Se Tipo de Contrato diferente de Concessão         |Nº inventário/ID Equipamento |
| Se Tipo de Contrato= Aquisição (apenas para novas aquisições)| Data de Publicação da abertura de concurso |
| Se Tipo de Contrato= Aquisição                     | Custo Aquisição |
| Se Tipo de Contrato= Aquisição                     | Data de Receção  |

![figContratacao](img/pages/12_1_2_1.jpg)

<p class="caption" id="figContratacao"> Criar novo Equipamento - Contratação</p>

| Campos Localização/Estado ([](#figLocalizacao)) | | |
|----------------------------------------------------|----------||
| Estado                               		      | Abatido    ||
|                                                        | Avariado    ||
|                                                        | Em Funcionamento ||
|                                                        | Não Instalado ||
|                                                        | Parado       ||
| Instalação Fixa				                      | Sim| Localização |
|                                                        | Não ||
| Se Estado = Não Instalado,Parado ou Avariado       | Motivo||
| Se Estado = Abatido                    	          | Data de Abate|

![figLocalizacao](img/pages/12_1_2_2.jpg)

<p class="caption" id="figLocalizacao"> Criar novo Equipamento - Localização/Estado</p>

| Campos Atividade ([](#figAtividade)) | | 
|----------------------------------------------------|----------|
| Tipo Atividade                               	| Partilhada (Programada/Urgência) |
|                                                      | Programada    |
|                                                      | Urgência ||
| Se Estado diferente urgência				        | Carga Semanal| 
| Se Estado diferente urgência				        | Nº dias por semana| 
| Tipo de Utilização                    	        ||

![figAtividade](img/pages/12_1_2_2.jpg)

<p class="caption" id="figAtividade"> Criar novo Equipamento - Atividade</p>


| Campos Obrigatórios do módulo Autorização Ministeria/ Licença de Instalação ([](#figAutorizacao)) | | |
|----------------------------------------------------|----------|--|
| Autorização Ministerial                         	  | Sim||
|                                                   	  | Não||
| Instalação licenciada pela DGS?                    | Sim| Data da Licença |
|                                                   	  | Não||


![figAutorizacao](img/pages/12_1_2_3.jpg)

<p class="caption" id="figAutorizacao"> Criar novo Equipamento - Autorização Ministeria/ Licença de Instalação</p>

| Campos Manutenção ([](#figManutencao)) | | 
|----------------------------------------------------|----------|
| Ano               			                	  | |
| Tipo de Manutenção                           	  | Corretiva|
|        		                         	          | Preventiva |
|        		                         	          | Preventiva e Corretiva |
| Duração   Contrato                           	  | Anual|
|        		                         	          | Bianual |
|        		                         	          | Quadrienal |
|        		                         	          | Quinquenal |
|        		                         	          | Semestral |
|        		                         	          | Trianual |
|  Se Tipo de Manutenção = Preventiva ou Preventiva e Corretiva           	  | Preventiva com Peças|
| Com ampola                              	          | Sim |
|        		                         	          | Não |
| Detetores                              	          | Sim |
|        		                         	          | Não |
| Custo                             	          	  |  |

![figManutencao](img/pages/12_1_2_4.jpg)

<p class="caption" id="figManutencao"> Criar novo Equipamento - Manutenção</p>

| Campos Recursos Humanos Afetos ([](#figRhAfetos)) | | 
|----------------------------------------------------|----------|
| Ano               			                	  | |
| Grupo Profissional                         	      | |
| Área Afetação   		                           	  | |
| ECTS 		   		                           	   | |


![figRhAfetos](img/pages/12_1_2_5.jpg)

<p class="caption" id="figRhAfetos"> Criar novo Equipamento - Recursos Humanos Afetos</p>

Para o utilizador aceder ao painel *Manutenção* ([](#figManutencao)) e *Recursos Humanos Afetos*([](#figRhAfetos)) deverá clicar na tab respectiva, e selecionar o ano pretendido. 
Após preencher os campos em cada painel, o utilizador deve clicar em  **GUARDAR** no painel respectivo, para gravar o equipamento. 
Após clicar irá ser notificado com o resultado da operação.

<p id="alteraEquipamento"></p>

## 13.2. Editar Equipamento

A página de edição de um equipamento está disponível através da consulta de equipamento clicando no botão **EDITAR EQUIPAMENTO**. Na página de equipamentos de um estabelecimento ([](#figEqpEstabelecimento)) o utilizador pode navegar diretamente para a edição após selecionar um equipamento da lista e clicar no botão **ALTERAR**.
A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [13.1 Criar Equipamento](#criar-equipamento).
No final da edição o utilizador para gravar as alterações deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.
O utilizador pode navegar entre os equipamentos do estabelecimento clicando em **SEGUINTE** ou **ANTERIOR**.

<p id="consultaEquipamento"></p>

## 13.3. Consultar Equipamento

Na página de equipamentos de um estabelecimento ([](#figEqpEstabelecimento)), o utilizador pode navegar diretamente para a consulta após selecionar um equipamento da lista e clicar no botão **CONSULTAR**. 

<p id="transfereEquipamento"></p>

## 13.4. Transferir Equipamento

Na página de equipamentos de um estabelecimento([](#figEqpEstabelecimento)), o utilizador pode navegar diretamente para a página de transferência de equipamento após selecionar um equipamento da lista e clicar no botão **TRANSFERIR**.
Para poder transferir o equipamento, o utilizador deve preencher os campos obrigatórios e clicar em **TRANSFERIR**.

| Campos Transferir Equipamento ([](#figTransfEquipamento)) |
|----------------------------------------------------|
| Data de Fim                                        | 
| Motivo                                             | 
| Entidade de Destino                                | 
| Estabelecimento de Destino                         | 


![figTransfEquipamento](img/pages/12_4_1.jpg)

<p class="caption" id="figTransfEquipamento"> Transferir Equipamento</p>

<p id="historicoEquipamento"></p>

## 13.5. Histórico de Equipamento
A página de histórico de um equipamento pode ser acedida através da página de equipamentos de estabelecimento ([](#figEqpEstabelecimento)) e clicando no botão **HISTÓRICO**.
Uma vez na página de histórico poderá visualizar todas as versões resultantes da edição do equipamento, bem como a identificação dos campos alterados.
