---
layout: default
title: "Your first markdown webPage using git"
description: "index page how to show markdown files on html."
published_on: 2015-09-30
updated_on: 2015-10-06
translation_priority: 1
order: 3
---

<p id="convencao"></p>
# 15. Convenções

Este módulo permite a gestão de convenções de cada entidade.

Este módulo é composto por 3 tipos de contratos entre entidades:

* Convenções – Apenas para natureza jurídica IPSS, Privada e Cooperativa, celebrado com ARS.
* Acordos SNS - Apenas para natureza jurídica Pública, celebrado com entidades públicas se for local.
* Acordos Sociais - Para natureza jurídica IPSS ou Cooperativa.

<p id="criarConvencao"></p>
## 15.1. Registar Convenções

Aquando uma entidade convencionada, deve ser preenchido formulário com características da convenção. A funcionalidade está divida por painel, sendo que o utilizador deverá gravar um bloco antes de passar ao preenchimento do seguinte.

###Identificação do Acordo/Convenção

|  Campos Da Identificação do Acordo/Convenção |  | 
|------------------------------------|----------------|
| Nº da apólice do seguro||
| Código Contrato Público |
| Código Fornecedor (CCF)| |
| Regulamento Interno | |
| Data Celebração do Acordo | |
| Data de término do Acordo | |
| Outorgante ||
| Designação do Acordo/Convenção | |
| Natureza Jurídica ||
| Tipo Entidade ||
| Entidade ||

Apos guardar este painel, o utilizador poderá passar aos painéis seguintes.

### Áreas Convencionadas

|     |Campos  Áreas Convencionadas     ||
|-------------------------------------------------------|----------|-----|
| Identificação da Área | Área|Por defeito, as valências e os exames vêm todos selecionados nas checkboxes do sistema. Estes valores estão de acordo com o providenciado no Site da ACSS.|
|| Valência||
||Exames/Atos||
| Responsável Técnico Principal/ Responsáveis Técnicos Substitutos |Nome| Para cada área da convenção é necessário ter um responsável técnico (RT) principal e 0 ou mais substitutos.|
|| Nº Cédula da Ordem ||
|| Grupo Profissional ||
|| Especialidade ||
|| Acumula Funções? ||
|| Vínculo ao SNS? ||
|| Na Entidade ||
|| No Estabelecimento ||
|| Proprietário de uma entidade Convencionada?||
|| Qual entidade é proprietário? ||
|| Responsável Técnico em mais algum estabelecimento?| |
|| Todos os dias da semana? | Deve ser tida em conta a presença fisica|
|| Sempre o mesmo horário?|Deve ser tida em conta a presença fisica|

**Preenchimento dos dias de semana/Horários**

* **Dias da Semana** - No caso de trabalhar todos os dias da semana deverá responder que sim à pergunta, sendo que apenas é apresentada uma linha na tabela de horários. Caso a resposta seja não deverá selecionar os dias que trabalha.

* **Horários** - Se a resposta for sim. Na tabela de horários só será apresentada uma linha "Todos os dias", no caso de não trabalhar todos os dias da semana a linha aplica-se aos dias selecionados. Se o horário for rotativo deverá responder que não à pergunta.

![horariosimsim](img/pages/horariosimsim.jpg)

<p class="caption" id="horariosimsim"> Quando a resposta a ambas as perguntas é sim</p>

![horariosimnao](img/pages/horariosimnao.jpg)

<p class="caption" id="horariosimnao"> Quando a resposta à primeira pergunta é sim mas a segunda é não</p>

![horarionaosim](img/pages/horarionaosim.jpg)

<p class="caption" id="horarionaosim"> Quando a resposta à primeira pergunta é não mas a segunda é sim</p>

![horarionaonao](img/pages/horarionaonao.jpg)

<p class="caption" id="horarionaonao"> Quando a resposta a ambas as perguntas é não</p>


### Estabelecimentos

||Campos Estabelecimentos||
|-------------|----------|-----|
| Identificação do estabelecimento associado ||Os valores presentes aqui serão de acordo com os estabelecimentos criados para a entidade, logo se não tem mais estabelecimentos que o próprio não aparecerão valores|
| Áreas associadas || Os valores presentes aqui serão de acordo as áreas criadas no painel **Áreas Convencionadas**, logo se não existirem no painel anterior não aparecerão valores |
| Diretor Técnico Principal/Diretores Técnicos Substitutos |Nome||
|| Nº Cédula da Ordem ||
|| Grupo Profissional ||
|| Especialidade ||
|| Acumula Funções? ||
|| Vínculo ao SNS? ||
|| Na Entidade ||
|| No Estabelecimento ||
|| Proprietário de uma entidade Convencionada?||
|| Qual entidade é proprietário? ||
|| Responsável Técnico em mais algum estabelecimento?| |
|| Todos os dias da semana? ||
|| Sempre o mesmo horário?||

### Recursos Humanos Técnicos

|     |Campos Recursos Humanos Técnicos    ||
|-------------------------------------------------------|----------|-----|
| Identificação do Recurso Humano | Nome ||
|| Cédula Profissional ||
|| Habilitações ||
|| Atividade Clínica ||
|| Especialidade ||
|| Entidade Emissora ||
|| Secção Regional ||
| Residência | Morada||
|| Código Postal ||
|| Distrito ||
|| Concelho ||
|| Freguesias ||

<p id="editarConvencao"></p>
## 15.2. Altera Convenções

O utilizador pode navegar para a página de edição de Convenção na página de instalações de estabelecimento ([](#figPaginaEntradaEnt)) e clicar no botão **ALTERAR CONVENÇÃO**.
A edição deve respeitar o preenchimento dos campos obrigatórios identificados no ponto [15.1 Criar Convenção](#criarConvencao)
No final da edição o utilizador para gravar as alterações deve clicar no botão **SUBMETER** ou **GUARDAR**, dependendo dos painéis alterados. Após clicar irá ser notificado com o resultado da operação.

<p id="corrigeConvencao"></p>
## 15.2.1. Corrige Convenções

Quando realizado processo de alteração de dados de uma entidade convencionada [15.2 Altera Convenção](#editarConvencao), pode ainda surgir dados a corrigir antes do término do processo, assim como esclarecimento de dúvidas.

Caso existam erros a corrigir, estes devem ser corrigidos pela ARS, fazendo-se seguir para a emissão ou não do parecer por parte da ACSS através do [15.2 Altera Convenção](#editarConvencao).

Caso a ARS não consiga corrigir erros, porque possam ainda existir dúvidas por esclarecer, estas devem ser devolvidas à entidade em questão, sendo a ARS responsável pelo esclarecimento das mesmas. 

<p id="consultarConvencao"></p>
## 15.3. Consulta Convenções

O utilizador pode navegar para a página de consulta de convenção na página de convenções da entidade ([](#figPaginaEntradaEnt)) e clicar no botão **CONSULTAR CONVENÇÃO**