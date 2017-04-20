
/**colocar tabela mais apresentavel*/
 function atualizarTabela(){
	 
 var line=1;
 
 $('tr').each(function(){
	
	var cell=1;
	var idline= "line"+line;
	var col=1;
	var row=1;
	
	$(this).attr('id', idline);
	
	$(this).find('td').each(function(){
		var idcell=idline+"cell"+cell;
		
		$(this).attr('id', idcell);
		
		if(($(this).html() == "&nbsp;")){
			col++;
			$(this).css("display","none");
		}
		else if(($(this).html() == "\\")){
			$(this).css("display","none");
			if($('#line'+(line-1)+'cell'+cell+'[rowSpan]') == undefined)
				$('#line'+(line-1)+'cell'+cell).attr('rowspan',1);
			$('#line'+(line-1)+'cell'+cell).attr('rowspan', ($('#line'+(line-1)+'cell'+cell).attr('rowspan') + 1) );
		}
			
	cell++;
	});
	$('cell'+ (cell-col)).attr('colspan',col);
	line++;
 });
 }
 
 /**preparar imagem para zoom*/
 function zommClickImagem() {
	 $('#paginas p>img:not([alt="logo"])').each(function(){
		 var alt = $(this).attr("alt")
		 if(alt != "figAlteracaoSenha" && alt != "figLogin" && alt !="figLoginRecuperacao")
		 $(this).wrap("<a class='imagem' href='"+$(this).attr( "src" ) + "' onclick='return hs.expand(this)'></a>"); 
});
}

/**adicionar legendas com numeração automática*/
function autoFigureNumber() {
	
var n="1";
var textRef ="Fig."

$('.caption').each(function () {
    var alt = $(this).attr("id");
    var text = $(this).html();
    /**acrescentar a label (Fig) à legenda*/
    if(!$(this).is(".legendaNum .caption")){
		$(this).html("<b>"+textRef + n + "</b>"+ "  -  " + text);
		$(this).wrap("<div class='legendaNum'></div>");
    /**alterar id da legenda e colocar na imagem*/
		($(this)).attr("id",alt+"Capt");
		$("img[alt='"+alt+"']").each(function () {
			($(this)).attr("id",alt);
		});
    
		$("[href='#" + alt + "']").each(function () {
			$(this).text(textRef + n);
		});
    n++;
	}
});
}

 













