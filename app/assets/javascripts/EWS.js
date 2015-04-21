'use strict';


function httpGet(winery,varietal)
{
    var xmlHttp = null;

  var search = winery + '+' + varietal;
  console.log(search);

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( 'GET', 'http://services.wine.com/api/beta/service.svc/json/catalog?search=' + winery+'+'+varietal + '&apikey=2817cb958835ff3537c87ff4cf0e9e4e', false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


function selectWine(i){

}



function parseJSON(wine) {

  var obj = JSON.parse(wine);

  var i = 0;

  $('#wine_table').append('<tr><th><center>Label</center></th><th><center>Name</center></th><th><center>Varietal</center></th><th><center>Winery</center></th></tr>');








  for (i = 0; i < obj.Products.List.length; i++) {


	  var cray = [];

    var label = '<tr id="wine_row'+i+'" ><td><center><img src = ' + obj.Products.List[i].Labels[0].Url + ' width = "100" height = "160"></center></td>';
    var name = '<td><center>' + obj.Products.List[i].Name + '</center</td>';
    var varietal = '<td><center>' + obj.Products.List[i].Varietal.Name + '</center></td>';
    var vineyard = '<td><center>' + obj.Products.List[i].Vineyard.Name + '</center>';
		var beg_form='<form method="post" action="/wines" id="row_form'+i+'" >'+
	               '<input type="hidden" name="wine[name]" value="'+obj.Products.List[i].Name+'" ></input>'+
	               '<input type="hidden" name="wine[varietal]" value="'+obj.Products.List[i].Varietal.Name+'" ></input>'+
                 '<input type="hidden" name="wine[url]" value="'+obj.Products.List[i].Labels[0].Url+'" ></input>'+
	               '<input type="hidden" name="wine[winery]" value="'+obj.Products.List[i].Vineyard.Name+'" ></input></form>';


		//var select = '<center><input type="submit" name="sub" value="Choose Wine" ></input></center></form>';
		var setup = '<script type="text/javascript">' +

		              ' $("#wine_row'+i+'").click(function(){ '+
                                   			  'console.log("row click handler running  '+i+'" );'+
																		       '$("#row_form'+i+'").submit();'+
                            '});'+


 		             '</script></td></tr>';



    $('#wine_table').append(label + name + varietal + vineyard +beg_form + setup );









  }

	//$('#wine_table > tbody > tr').click(selectWine);


}




function changeStuff(e) {

  e.preventDefault();
  console.log('In changeStuff');
  var winery = $('#winery').val();
  var varietal = $('#varietal').val();
  console.log('winery '+winery);
  console.log('varietal '+varietal);

  /*var search = winery + "+" + varietal;
  console.log(search);

  var url = "http://services.wine.com/api/beta/service.svc/json/catalog?search=" + search + "&apikey=2817cb958835ff3537c87ff4cf0e9e4e";*/


  var wine = httpGet(winery,varietal);

  //console.log(wine);

  parseJSON(wine);


}
/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

 }



// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  console.log("ready to run");
	$('#submitBtn').click(changeStuff);




});
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  //var name1 = button.data('name'); // Extract info from data-* attributes
	//var winery = button.data('winery');
	//var varietal = button.data('varietal');
	//console.log("try 1" + name1)
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  /*var modal = $(this);
  modal.find('.modal-title').text('Add Wine');
  var form =  modal.find('.modal-body form').val(add_wine);
	console.log("try 2" + form);*/


		 ///adding click to primary button '#add'
	   /*$('#add').click(//callback
		   function(){
			   form.submit();
     });*/
		 /////

		 /*$('#add').click(function(){
         var data = $.parseJSON($(this).attr('data-button'));
         console.log('selected modal form');
         console.log(data);


     });*/



 });



/*$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data('whatever'); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  modal.find('.modal-title').text('Add Wine');
  //modal.find('.modal-body input').val(recipient)
});*/
