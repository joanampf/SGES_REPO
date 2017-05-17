---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---
<p id="rh-servios"></p>
# 7. RH Serviços

É neste módulo que são feitas ações sobre os recursos humanos afetos a serviços.
O utilizador pode consultar a lista dos recursos humanos afetos a serviços que tenham EPM numa entidade no separador **RH Serviços**  ([](#figRhEquipEntidade)), através do ponto [6.3 Consultar Entidade](##consultar-entidade).

![figRhEquipEntidade](img/pages/8_0_1.jpg)

<p class="caption" id="figRhEquipEntidade"> Recursos Humanos afetos a serviços que tenham EPM numa Entidade</p>

|  | Permissões               | 
|----|--------------------------------------------|
|**Funcionalidade** |**Perfil**|
| Criar RH Serviço | ACSS, SGES_EQUIPAMENTOS|
| Editar RH Serviço | ACSS, SGES_EQUIPAMENTOS |
| Consultar RH Serviço | ACSS, SGES_EQUIPAMENTOS |
| Apagar RH Serviço| ACSS, SGES_EQUIPAMENTOS|

<p id="criaRhEquipamento"></p>

## 7.1. Criar RH Serviço

| |  Campos         ||
|---------------------------------------------------|----------|--|
|Grupo Profissional|Grupo Profissional||
|Area de Afetação| Especialidade à qual o Grupo Profissional está afeto| |
|Modalidade de Vinculção|Tipo de contrato celebrado com a entidade||
|Nº de Efectivos|Nº de efectivos nestas condições||
|Nº horas semanais constantes no contrato profissional|N.º horas por semana que constam no contrato||
|Nº de horas semanais atribuidas à realização de exames|Nº de horas unicamente dedicadas a exames||
|Nº horas extraordinárias/ano|Nº de horas unicamente dedicadas a exames||
|Nº horas prevenção|Nº de horas dispendidadas por semana em pervenção||
|Nº de atos contratados|NA||
|Trabalho em regime de telerradiologia?|NA|Só aplicável quando Grupo profissional = Médico e Área de afetação = Radiologia, Radiologia/Neurorradiologia||
|Observações|||

![figCriarRhServicos](img/pages/8_1_1.jpg)

<p class="caption" id="figCriarRhServicos"> Criar RH Serviços</p>

Após o registo dos dados deve clicar em **GUARDAR** para gravar o RH Serviço. Após clicar irá ser notificado com o resultado da operação.

<p id="consultaRhEquipamento"></p>

## 7.2. Consultar RH Serviço

O utilizador pode navegar para a página de consulta de RH Serviços após selecionar um RH Serviço da lista de RH Serviços existentes numa entidade ([](#figRhEquipEntidade))  e clicar no botão **CONSULTAR**.

<p id="alteraRhEquipamento"></p>

## 7.3. Editar RH Serviço

Através da página de consulta de RH Serviços existentes numa entidade ([](#figRhEquipEntidade)) , o utilizador pode navegar diretamente para a edição após selecionar um RH Serviço da lista e clicar no botão **EDITAR**.
A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [8.1 Criar RH Serviço](#criar-rh-servico).
No final da edição o utilizador para gravar as alterações deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.

<p id="removeRhEquipamento"></p>

## 7.4. Apagar RH Serviço
 
 O utilizador pode apagar um RH Serviço após selecionar um RH Serviço da lista de RH Serviços existentes numa entidade ([](#figRhEquipEntidade)) e clicar no botão **APAGAR**. 
 Após clicar irá ser notificado com o resultado da operação.
