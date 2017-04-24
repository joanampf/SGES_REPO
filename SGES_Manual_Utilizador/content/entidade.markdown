---
layout: default
title: "Entidade"
---

# 6.Entidades

Este módulo permite a manipulação das entidades de acordo com as permissões de cada utilizador.

|  | Permissões               | 
|----|--------------------------------------------|
|**Funcionalidade** |**Perfil**|
| Criar Entidade | ACSS |
| Editar Entidade | ACSS, SGES_ENTIDADE |
| Consultar Entidade | ACSS, SGES_ENTIDADE, SGES_EQUIPAMENTOS |
| Encerrar Entidade | ACSS |
| Histórico Entidade | ACSS |

<p id="criarEntidade"></p>

## 6.1.Criar Entidade

Para poder criar uma entidade o utilizador deve preencher, pelo menos, os campos obrigatórios e clicar em **CRIAR**;

|   Campos Obrigatórios ([](#figCamposPesquisaEntidade))               |   
|------------------------------------------------|
|  Campo de identificação do tipo de pesquisa | 
|  NIPC da entidade a criar |  



![figCamposPesquisaEntidade](img/pages/6_1_1.jpg)

<p class="caption" id="figCamposPesquisaEntidade"> Campos de preenchimento para pesquisa Entidade </p>
  
  
Se ainda não existir a entidade, o utilizador será encaminhado para a página de criação de entidade, com os dados pré-preenchidos da página de pesquisa [](#figPesquisaEntidade). 
Deverá preencher o formulário com os campos, descritos na tabela que se segue, para poder efetuar o registo da entidade.
Após o registo dos dados deve clicar em **GUARDAR** para gravar a entidade. Após clicar irá ser notificado com o resultado da operação.

|       											  | Campos ([](#figCriarEntidade))      |                 			   |
|-----------------------------------------------------|-------------------------------------|------------------------------|
|**Nome Campo**                                       | **Descrição Campo**                 |**Condições de Preenchimento**|
| Estado                                              | Estado da entidade (Activa ou Suspensa) | Por defeito o sistema assumirá que a entidade activa|
| Denominação                                         |Nome identificativo da Entidade		|		&nbsp;&nbsp;		   |
| Nº Registo ERS									  | NA									|		&nbsp;&nbsp;		   |
| Natureza Jurídica                                   |	NA   								|Valores = pública, privada, cooperativa, IPSS (Instituições Particulares de Solidariedade Social)          |
| Morada                                              |   Indicar Morada da Entidade           |        &nbsp;&nbsp;       |  
| Código Postal                                       |  Indicar Código Postal da Entidade     |         &nbsp;&nbsp;      |     
| Distrito                                            |      Indicar Distrito da Entidade  	   |          &nbsp;&nbsp;     |  
| Concelho                                            |        Indicar Concelho da Entidade    |           &nbsp;&nbsp;    |     
| Freguesia                                           |      Indicar Freguesia da Entidade     |          &nbsp;&nbsp;     |      
| Região											  | Zona Regional em que se enquadra a entidade| Preenchido automaticamente de acordo com o distrito e o concelho |
| NUT III                                             | NA                                     |Preenchido automaticamente de acordo com o distrito e o concelho|
| Telefone                                            | Nº Telefone da Entidade                |         &nbsp;&nbsp;      |     
| Fax                                                 | Nº Fax da Entidade                     |          &nbsp;&nbsp;     |     
| E-mail                                              | Endereço de contacto da Entidade       |          &nbsp;&nbsp;     |         
| Site                                                | Site da Entidade                       |           &nbsp;&nbsp;    |         
| Capital estatuário ou social (€)                    | NA                                     |            &nbsp;&nbsp;   |    
| Fonte de informação                                 | NA         							   |           &nbsp;&nbsp;    | 
| Identificação dos corpos Gerentes/ Conselho de administração|  Identidicação do corpo Administrativo que constitui a entidade                              |   &nbsp;&nbsp;     |
||<b>CAMPOS A PREENCHER NO CASO DE NATUREZA JURÍDICA = PÚBLICA</b||
| Tipo Entidade 									  |Indicar o tipo de entidade           |Valores = Hospital, Centro Hospitalar, ACES, ULS| 
| ARS                                                 |ARS a que a Entidade está associada  ||
|Tipo Entidade Jurídica                               |Tipo de contrato celebrado entre a entidade e a Administração Publica (EPE, PPP, IP,SPA)	|Apenas visível quando Tipo Entidade = Hospital, Centro Hospitalar, ULS|
| Integra ULS     									  |Indicar se o ACES a criar pertence a alguma ULS e se sim indicar a ULS| Apenas visível quando Tipo Entidade = ACES| 
||<b>CAMPOS A PREENCHER NO CASO DE NATUREZA JURÍDICA = PRIVADA, COOPERATIVA, IPSS</b||
| Matricula                                           |NA|   |
| Volume de negócios global (€)                       | Movimentos monetários anuais feitos pela entidade |   | 
| Tipo de Atividade Principal (CAE)                   |Indicar o tipo de atividade que exerce a Entidade. Os valores vêm de acordo com a Classificação Portuguesa das Atividades Económicas (CAE) |    | 
| Tipo de Atividade Secundária (CAE)                  |Indicar (se existir) o tipo de atividade secundária que exerce a Entidade. Os valores vêm de acordo com a Classificação Portuguesa das Atividades Económicas (CAE) |     | 
| Convencionada                                       | Indicar se existe ou não alguma convenção/acordo com outra entidade | Apenas visível quando Natureza Jurídica = Privada, IPSS, Cooperativa|    
||<b>CAMPOS A PREENCHER NO CASO DE NATUREZA JURÍDICA = PRIVADA</b||
| Identificação dos Sócios/Acionistas  |   Indicar a estrutura accionista da instituição               |Apenas visível quando Natureza Jurídica = Privada|  

![figCriarEntidade](img/pages/6_1_2.jpg)

<p class="caption" id="figCriarEntidade">Criar Entidade </p>

<p id="alteraEntidade"></p>

## 6.2.Editar Entidade

Existem duas possibilidades de Editar uma entidade no SGES:

 - Na página de Consulta de Entidade/Página Inicial do SGES ([](#figPaginaEntradaEnt)): que aparece na página de edição de uma entidade está disponível através da consulta de entidade clicando no botão **EDITAR ENTIDADE**  
	
 - Na página de Pesquisa de Entidade ([](#figPesquisaExEntidade)): se tiver acesso à pesquisa de entidades pode navegar diretamente para a edição após selecionar uma entidade da lista de resultados e clicar no botão **EDITAR**.

A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [6.1 Criar Entidade](#criar-entidade).
No final da edição o utilizador para gravar as alterações deve clicar no botão **GUARDAR**. Após clicar irá ser notificado com o resultado da operação.

<p id="consultaEntidade"></p>

## 6.3.Consultar Entidade

A consulta de Entidades pode ser feita de duas formas:

 - Na página de Consulta de Entidade/Página Inicial do SGES ([](#figPaginaEntradaEnt)).
	
 - Na página de Pesquisa de Entidade ([](#figPesquisaExEntidade)): Se tiver acesso à pesquisa de entidades pode navegar diretamente para a consulta após selecionar uma entidade da lista de resultados e clicar no botão **CONSULTAR**.

<p id="encerrarEntidade"></p>

## 6.4.Encerrar Entidade

Para encerrar uma entidade é necessário ter acesso à página de Pesquisa de Entidade. Deverá ser selecionada uma entidade da lista de resultados e ser clicado o botão **ENCERRAR** ([](#figPesquisaExEntidade) ).
Uma vez na página de **Encerrar Entidade** ([](#figEncerraEntidade)) devem ser preenchidos os campos *Mês*, *Ano*, *Observações* se for necessário e depois selecionado o botão **Encerrar**. 
Após se clicar no botão surge alerta a questionar se pretende mesmo encerrar a entidade, se confirmar irá ser notificado com o resultado da operação.

![figEncerraEntidade](img/pages/6_4_1.jpg)

<p class="caption" id="figEncerraEntidade"> Encerrar entidade</p>

<div id="historicoEntidade"></div>

## 6.5.Histórico Entidade

A página de histórico de uma entidade pode ser acedida se houver permissões para aceder à página de Pesquisa de Entidade. Quando selecionada uma entidade da lista de resultados deverá ser selecionado o botão **HISTÓRICO**  ([](#figPesquisaExEntidade) ).
Uma vez na página de histórico ([](#figHistoricoEntidade)) poderá visualizar todas as versões resultantes da edição da entidade, bem como a identificação dos campos alterados.

![figHistoricoEntidade](img/pages/6_5_1.jpg)

<p class="caption" id="figHistoricoEntidade"> Histórico de Entidade</p>

Estão também registados os estabelecimentos transferidos e encerrados da entidade.  
