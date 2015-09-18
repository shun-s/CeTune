/*********************************
   JavaScript Document
   Author: Sean,Lin
   E-mail:  xiangx.lin@intel.com
   Date:2015-09-10
   Descrption: 
**********************************/

//Create Data Table for Configuration
function CreateDataTableForConfiguration(jsonObj_Config,jsonObj_benchmark,request_type){	
       
	   //(1) remove the elements    	
	   $("#div_Configuration_right_table_id").children("table").remove();
	   $("#div_Configuration_right_table_id").children("div").remove();
	   
	   //(2) get the configuration table html, and get the benchmark table html when the request_type is benchmark 
	   var tableHTML = CreateTableHtml_Configuation(jsonObj_Config);
	   //if this request_type is benchmark	   
	   if(request_type == "benchmark"){
		  tableHTML += CreateTableHTML_Benchmark(jsonObj_benchmark); 
	   }
	   
       //(3) add the table elemnet 
	   $("#div_Configuration_right_table_id").append($(tableHTML));
	   
	   //(4) set the tr's style	
	   $("table.table_class tr:nth-child(odd)").addClass("altrow");
							
	   //(5) traverse the json data ,if the check  value is "false" ,set the "error" style for this td;
	   $.each(jsonObj_Config,function(index,val){
	        if(val.check == "False"){
			  $("#td_value_id_"+index).addClass("error");
			}		 
	   });
	   
}

//create table html for configuation
function CreateTableHtml_Configuation(jsonObj){
	var tableClass = "table_class";
	var tableID = "table_id";
	var tableHtml;
	var cols;
	var rows;

	tableHtml =  "<table id='"+tableID+"' class='"+tableClass+"'>";
	tableHtml += "<tbody>";
	
	//table head
	tableHtml += "<tr>"; 
	      tableHtml += "<th class='checkbox_td_class'>";
		  tableHtml += "<input type='checkbox' class = 'checkbox_all_configuration_class' id= 'checkbox_all_configuration_id' onclick= 'Check_ALL(&quot;configuration&quot;)' name='checkbox_all'>";
		  tableHtml += "</th>";
		 	  
		  tableHtml += "<th>";
		  tableHtml += "Key";
		  tableHtml += "</th>";
		  
		  tableHtml += "<th>";
		  tableHtml += "Value";
		  tableHtml += "</th>";
		  
		  tableHtml += "<th>";
		  tableHtml += "Describe";
		  tableHtml += "</th>";
		  
		  tableHtml += "</th>"
	tableHtml += "</tr>";
	 
	//table row
    $.each(jsonObj,function(index,val){
	
		 tableHtml += "<tr id='tr_id_"+index+"'>";
	
		  tableHtml += "<td class='checkbox_td_class'>";
		  tableHtml += "<input type='checkbox' class = 'checkbox_configuration_class' id='checkbox_configuration_'+ "+index+" name='checkbox'+"+index+">";
		  tableHtml += "</td>";
		  
		  tableHtml += "<td class='td_key_class'>";
		  tableHtml += "<label>"
		  tableHtml +=  val.key;
		  tableHtml += "</label>"
		  tableHtml += "</td>";
		  
		  
		  tableHtml += "<td class='td_value_class' id='td_value_id_"+index+"'>";
		  tableHtml += "<label id='label_id_"+index+"'  class = 'label_class' onclick = 'Label_Click("+index+" ,&quot;"+ val.value+"&quot;)'>" + val.value;
		  tableHtml +=  "</label>";
		  tableHtml += "</td>";
		  
		  tableHtml += "<td class='td_Desc_class'>";
		  tableHtml += "<label>"
		  tableHtml += val.dsc;
		  tableHtml += "</label>"
		  tableHtml += "</td>";
		  
		tableHtml += "</tr>";
		
		return tableHtml;
	 });	
	 
	 
	tableHtml += "</tbody>";
	tableHtml += "</table>"
	return tableHtml;
}

//create table html from benchmark
function CreateTableHTML_Benchmark(jsonObj){

	var tableClass = "table_class";
	var tableID = "table_benchmark_id";
	var tableHtml;
	var cols;
	var rows;
	
	
	tableHtml=   "<div id='div_benchmark_button_id'>";             
    //tableHtml +=   "<input id='bnt_benchmark_Submit_id' class='bnt_Confguration_tableOper_class' type='button' value='Submit'/>";
	
	
    //tableHtml +=   "<input id='bnt_benchmark_delete_id' class='bnt_Confguration_tableOper_class' type='button' value='Delete' onclick='DeleteModal_OK(&quot;benchmark&quot;)'/>";
    //onclick='DeleteModal_OK(&quot;benchmark&quot;)'
	tableHtml +="<button id='bnt_benchmark_delete_id' type='button' class='btn btn-primary' data-toggle='modal'  data-target='#DeleteBenchmarkModal' data-whatever='@mdo' >Delete</button>";
	
	tableHtml +="<button id='bnt_benchmark_add_id' type='button' class='btn btn-primary' data-toggle='modal'  data-target='#BenchmarkModel' data-whatever='@mdo' >Add</button>";
	//onclick='DeleteModal_OK(&quot;benchmark&quot;)'
	
	//tableHtml +=   "<input id='bnt_benchmark_add_id'    class='bnt_Confguration_tableOper_class' type='button' value='Add'/>";
    tableHtml +=  "</div>"

	tableHtml +=  "<table id='"+tableID+"' class='"+tableClass+"'>";
	tableHtml += "<tbody>";
	
	//table head
	tableHtml += "<tr>"; 
	      tableHtml += "<th class='checkbox_td_class'>";
		  tableHtml += "<input type='checkbox' class = 'checkbox_all_benchmark_class' id= 'checkbox_all_benchmark_id' onclick= 'Check_ALL(&quot;benchmark&quot;)' name='checkbox_all'>";
		  tableHtml += "</th>";
		 	  
		  tableHtml += "<th>";
		  tableHtml += "benchmark_driver";
		  tableHtml += "</th>";
		  
		  tableHtml += "<th>";
		  tableHtml += "worker";
		  tableHtml += "</th>";
		  
		  tableHtml += "<th>";
		  tableHtml += "container_size";
		  tableHtml += "</th>";
		  
		  tableHtml += "<th>";
		  tableHtml += "iopattern";
		  tableHtml += "</th>";
		  
		  tableHtml += "<th>";
		  tableHtml += "opsize";
		  tableHtml += "</th>";
		  
		  tableHtml += "<th>";
		  tableHtml += "object_size/QD";
		  tableHtml += "</th>";
		  
		  tableHtml += "<th>";
		  tableHtml += "rampup";
		  tableHtml += "</th>";
		  
		  tableHtml += "<th>";
		  tableHtml += "runtime";
		  tableHtml += "</th>";
		  
		  tableHtml += "<th>";
		  tableHtml += "device";
		  tableHtml += "</th>";
		  
		  tableHtml += "</th>"
	tableHtml += "</tr>";
	
	//table row
	$.each(jsonObj,function(index,val){
		
		 tableHtml += "<tr id='tr_benchmark_id_"+index+"'>";
	
		  tableHtml += "<td class='checkbox_td_class'>";
		  tableHtml += "<input type='checkbox' class = 'checkbox_benchmark_class' id='checkbox_benchmark_'+ "+index+" name='checkbox'+"+index+">";
		  tableHtml += "</td>";
		  	  
		  tableHtml += "<td class='td_class'>";
		  
		  tableHtml += "<label id='label_benchmark_id_"+index+"_"+index+"'  class = 'label_class' onclick = 'Label_benchmark_Click("+index+" ,&quot;"+ val.benchmark_driver+"&quot;)'>" + val.benchmark_driver;
		  tableHtml +=  "</label>";
		  tableHtml += "</td>";
		  
		  tableHtml += "<td class='td_class'>";
		   tableHtml += "<label id='label_benchmark_id_"+index+"_"+index+"'  class = 'label_class' onclick = 'Label_benchmark_Click("+index+" ,&quot;"+ val.worker+"&quot;)'>" + val.worker;
		  tableHtml +=  "</label>";
		  tableHtml += "</td>";
		  
		  tableHtml += "<td class='td_class'>";
		   tableHtml += "<label id='label_benchmark_id_"+index+"_"+index+"'  class = 'label_class' onclick = 'Label_benchmark_Click("+index+" ,&quot;"+ val.container_size+"&quot;)'>" + val.container_size;
		  tableHtml +=  "</label>";
		  tableHtml += "</td>";
		  
		  tableHtml += "<td class='td_class'>";
		   tableHtml += "<label id='label_benchmark_id_"+index+"_"+index+"'  class = 'label_class' onclick = 'Label_benchmark_Click("+index+" ,&quot;"+ val.iopattern+"&quot;)'>" + val.iopattern;
		  tableHtml +=  "</label>";
		  tableHtml += "</td>";
		  
		  tableHtml += "<td class='td_class'>";
		   tableHtml += "<label id='label_benchmark_id_"+index+"_"+index+"'  class = 'label_class' onclick = 'Label_benchmark_Click("+index+" ,&quot;"+ val.op_size+"&quot;)'>" + val.op_size;
		  tableHtml +=  "</label>";
		  tableHtml += "</td>";
		  
		  tableHtml += "<td class='td_class'>";
		   tableHtml += "<label id='label_benchmark_id_"+index+"_"+index+"'  class = 'label_class' onclick = 'Label_benchmark_Click("+index+" ,&quot;"+ val["object_size/QD"]+"&quot;)'>" + val["object_size/QD"];
		  tableHtml +=  "</label>";
		  tableHtml += "</td>";
		  
		  tableHtml += "<td class='td_class'>";
		   tableHtml += "<label id='label_benchmark_id_"+index+"_"+index+"'  class = 'label_class' onclick = 'Label_benchmark_Click("+index+" ,&quot;"+ val.rampup+"&quot;)'>" + val.rampup;
		  tableHtml +=  "</label>";
		  tableHtml += "</td>";
		  
		  tableHtml += "<td class='td_class'>";
		   tableHtml += "<label id='label_benchmark_id_"+index+"_"+index+"'  class = 'label_class' onclick = 'Label_benchmark_Click("+index+" ,&quot;"+ val.runtime+"&quot;)'>" + val.runtime;
		  tableHtml +=  "</label>";
		  tableHtml += "</td>";
		  
		  tableHtml += "<td class='td_class'>";
		   tableHtml += "<label id='label_benchmark_id_"+index+"_"+index+"'  class = 'label_class' onclick = 'Label_benchmark_Click("+index+" ,&quot;"+ val.device+"&quot;)'>" + val.device;
		  tableHtml +=  "</label>";
		  tableHtml += "</td>";
			  
		tableHtml += "</tr>";
		
		return tableHtml;
	 });	
	 
	tableHtml += "</tbody>";
	tableHtml += "</table>"
	return tableHtml;
}



//label click opertion
function Label_Click(count,value){	
	var rowNum = count;	
        olabel = document.getElementById("label_id_"+rowNum);
	olabel.style.backgroundColor = "#cff";
	
	otd = document.getElementById("td_value_id_"+rowNum);
	otd.removeChild(olabel);
	
    
	var strHtml =  "<input class='text_class' id = 'text_id_"+rowNum+"' value = '"+value+"' type='text' name='fname'/>";
	    strHtml += "<input class='btn btn-primary btn-xs' style='margin-left:3px' id = 'bnt_ok_id_"+rowNum+"' type='button' value='OK' onclick= 'Ok_Apply("+rowNum+")' />";
	    strHtml += "<input class='btn btn-primary btn-xs' style='margin-left:3px'  id = 'bnt_cancel_id_"+rowNum+"' type='button' value='Cancel' onclick= 'Cancel_Apply("+rowNum+",&quot;"+value+"&quot;)'/>";
		
	otd.innerHTML =strHtml;
}

//edit value apply
function Ok_Apply(rowNum){
	
	otd = document.getElementById("td_value_id_"+rowNum);
	otext = document.getElementById("text_id_"+rowNum);
	var valueStr =  otext.value;
	otd.innerHTML =" <label id = 'label_id_"+rowNum+"' class = 'label_class' onclick='Label_Click("+rowNum+", &quot;"+ valueStr+"&quot;)' >"+ valueStr +"</label>";
	
	  
	  //--------set to ajax----------
	  //$("#text_id_"+rowNum)
	  
	  
	  var request_type,key,value;//set_config?request_type= &key= &value= 
	  request_type= $("#div_Configuration_right_top_titel_id").attr("title");
      key = $("#td_value_id_"+rowNum).parent().children().eq(1).children("label").text();
	  value = $("#td_value_id_"+rowNum).parent().children().eq(2).children("label").text();
      
	  
	  var data ={}; 
	  data.request_type= request_type;
	  data.key = key;
      data.value = value;

   	  var result = GetDataByAjax_POST(address_Configuration_Set,data);
	  
	  //if result check is false , add error sytle
	  if(result.check == false){
		 $("#td_value_id_"+rowNum).addClass("error");
	  }
	  
}

//edit value cancel
function Cancel_Apply(rowNum,value){
	otd = document.getElementById("td_value_id_"+rowNum);
	otext = document.getElementById("text_id_"+rowNum);	
	otd.innerHTML =" <label id='label_id_"+rowNum+"' class = 'label_class' onclick='Label_Click("+rowNum+", &quot;"+ value+"&quot;)' >"+ value +"</label>";
}

/***********************************************************************************************************************/
//label click opertion
function Label_benchmark_Click(count,value){	

	var rowNum = count;	
	alert(count);
        olabel = document.getElementById("label_benchmark_id_"+rowNum);
	olabel.style.backgroundColor = "#cff";
	
	otd = document.getElementById("td_benchmark_value_id_"+rowNum);
	otd.removeChild(olabel);

    
	var strHtml =  "<input class='text_class' id = 'text_benchmark_id_"+rowNum+"' value = '"+value+"' type='text' name='fname'/>";
	    strHtml += "<input class='btn_okcancel_class' id='bnt_benchmark_ok_id_"+rowNum+"' type='button' value='OK' onclick= 'Ok_benchmark_Apply("+rowNum+")' />";
	    strHtml += "<input class='btn_okcancel_class' id='bnt_benchmark_cancel_id_"+rowNum+"' type='button' value='Cancel' onclick= 'Cancel_benchmark_Apply("+rowNum+",&quot;"+value+"&quot;)'/>";

	otd.innerHTML =strHtml;
}

//edit value apply
function Ok_benchmark_Apply(rowNum){
	
	otd = document.getElementById("td_benchmark_value_id_"+rowNum);
	otext = document.getElementById("text_benchmark_id_"+rowNum);
	var valueStr =  otext.value;
	otd.innerHTML =" <label id = 'label_benchmark_id_"+rowNum+"' class = 'label_class' onclick='Label_benchmark_Click("+rowNum+", &quot;"+ valueStr+"&quot;)' >"+ valueStr +"</label>";
}

//edit value cancel
function Cancel_benchmark_Apply(rowNum,value){
	otd = document.getElementById("td_benchmark_value_id_"+rowNum);
	otext = document.getElementById("text_benchmark_id_"+rowNum);	
	otd.innerHTML =" <label id='label_benchmark_id_"+rowNum+"' class = 'label_class' onclick='Label_benchmark_Click("+rowNum+", &quot;"+ value+"&quot;)' >"+ value +"</label>";
}


/***********************************************************************************************************************/
//delete row when checkbox is checked
function Del(tableType){
  if(tableType =="configuration")
  {
	  $(".checkbox_configuration_class").each(function(index,value){
		 
		 //address_Configuration_Set
		 
		 if($(this).is(':checked'))
		 {
			 var request_type, key ;//del_config?request_type=   & key =     
			 request_type = $("#div_Configuration_right_top_titel_id").attr("title");;
    		 key = $(this).parent().parent().children().eq(1).children("label").text();

			 var data ={}; 
			 data.request_type= request_type;
			 data.key = key;

			 var result = GetDataByAjax_POST(address_Delete,data);
			 
			 $(this).parent().parent().remove(); 
		 }
	  });
  }
	
	
	//-------------------------
	else if(tableType =="benchmark"){
		
		 var post_json = {}//set_config?request_type=testcase &key=testcase &value=  
		 var table_data= [];
		 
		 $(".checkbox_benchmark_class").each(function(index,value){
		 
		 //address_Configuration_Set
		 
		 
		 if($(this).is(':checked'))
		 {
			  $(this).parent().parent().remove(); 
		 }else
		 {
			 var benchmark_driver,worker,container_size,io_pattern,block_size,work_depth,ramup_time,run_time,devcie;
    		 benchmark_driver = $(this).parent().parent().children().eq(1).children("label").text();
	    	 worker = $(this).parent().parent().children().eq(2).children("label").text();
		     container_size = $(this).parent().parent().children().eq(3).children("label").text();
			 iopattern = $(this).parent().parent().children().eq(4).children("label").text();
			 op_size = $(this).parent().parent().children().eq(5).children("label").text();
			 object_size = $(this).parent().parent().children().eq(6).children("label").text();
			 rampup = $(this).parent().parent().children().eq(7).children("label").text();
			 runtime = $(this).parent().parent().children().eq(8).children("label").text();
			 devcie = $(this).parent().parent().children().eq(9).children("label").text();
			 
			 var data ={}; 
			 data.benchmark_driver = benchmark_driver;
			 data.worker = worker;
			 data.container_size = container_size;
			 data.iopattern = iopattern;
			 data.op_size = op_size;
			 data["object_size/QD"] = object_size;
			 data.rampup = rampup;
			 data.runtime = runtime;
			 data.device = devcie;
			 
			 table_data.push(data);
			 
		 }
			 //address_Delete="../del_config";
			//alert($("#div_Configuration_right_top_titel_id").attr("title"));	
	  });
	  
	    post_json["request_type"]="testcase";
	    //post_json.value = table_data.toSource();
		post_json.value = JSON.stringify(table_data);
		post_json.key="testcase";
	  	var address_Configuration_Set="../configuration/set_config";
			 //"{key="+key+",value="+value+",dsc="+dsc+"}";
	    var result = GetDataByAjax_POST(address_Configuration_Set,post_json); 
	}
	
}

//checked all checkboxs
function Check_ALL(tableType){
	var oCheck;
	var delArray;
	if(tableType =="configuration"){
		oCheck = document.getElementById("checkbox_all_configuration_id");
	    delArray = getElementsClass("checkbox_configuration_class");
	}
	else if(tableType =="benchmark")
	{
		oCheck = document.getElementById("checkbox_all_benchmark_id");
	    delArray = getElementsClass("checkbox_benchmark_class");
	}
    	
	if(oCheck.checked == true)
	{		 
		 for(var i=0;i< delArray.length;i++)
		 {
		    delArray[i].checked = true;
		 }	
	}
	else
	{
		 for(var i=0;i< delArray.length;i++){
		    delArray[i].checked = false;
		 }		
	}
}

//get table row counts by table element id
function GetTableRowsCount(id)
{
      var tab = document.getElementById(id) ;
      var rows = tab.rows.length ;
      return rows;
}

//select elements for classname by js code
function getElementsClass(classnames){ 
    var classobj= new Array(); 
    var classint=0;
    var tags=document.getElementsByTagName("*");
    for(var i in tags){ 
     if(tags[i].nodeType==1){
       if(tags[i].getAttribute("class") == classnames)
       { 
	     classobj[classint]=tags[i]; 
         classint++; 
	   } //if
     } //if
    } 
   return classobj;
} 


//----------------------------------------------------------

function DeleteModal_OK(type){
  Del(type);
  setTimeout(function(){$("#DeleteModal").modal("hide")},100);
  setTimeout(function(){$("#DeleteBenchmarkModal").modal("hide")},100);
}




function ConfigurationModal_OK(){

	 var rows =  GetTableRowsCount("table_id")-1;
	
	 var key = $("#recipient-key").val();
	 var dsc = "";
	 var value = $("#recipient-value").val();
	 
   	 if(key == "" || value ==""){
		$("#ModalLabel_Configuration_Add").html("Hi,The input can't be empty!");
	 }
	 else{
		$("#ModalLabel_Configuration_Add").html("Add a new row for configuration");
	    setTimeout(function(){$("#ConfigurationModal").modal("hide")},100);	
		var html = "<tr>";
		
		html +="<td class='checkbox_td_class'>";
		html +="<input type='checkbox' class = 'checkbox_configuration_class' id='checkbox_configuration_id'+ "+rows+" name='checkbox'>";
		html +="</td>";
		
		html += "<td class='td_key_class'>";
		html += "<label>"+key+"</label>";
		html += "</td>";
		
		html += "<td class='td_value_class' id='td_value_id_"+rows+"'>"
		html +="<label id = 'label_id_"+rows+"' class='label_class' onclick='Label_Click("+rows+",&quot;"+ value+"&quot;)'>"+ value +"</label>";
		html +="</td>";
		
		html += "<td class='td_value_class'id = 'td_dsc_id_"+rows+"'>";
		html += "<label>"+dsc+"</label>";
		html += "</td>";
		
		html += "<tr>";
	    $("#table_id").append(html); 
		
		//--------set to ajax----------
	    var request_type,key,value;//set_config?request_type= &key= &value= 
	    request_type= $("#div_Configuration_right_top_titel_id").attr("title");

	    var data ={}; 
	    data.request_type= request_type;
	    data.key = key;
        data.value = value;

   	    var result = GetDataByAjax_POST(address_Configuration_Set,data);
	  
	    //if result check is false , add error sytle
	    if(result.check == false){
		 $("#td_value_id_"+rows).addClass("error");
	    }
		
	    // add the table elemnet 
	   $("#div_Configuration_right_table_id").append($(tableHTML));
	   
	   // set the tr's style	
	   $("table.table_class tr:nth-child(odd)").addClass("altrow");
		

    }
}

function BenchMarkModel_OK(){

	 var rows =  GetTableRowsCount("table_benchmark_id")-1;
	 	 
	 var benchmark_driver = $("#recipient-benchmark_engine").val();
	 var worker = $("#recipient-worker").val();
	 var container_size = $("#recipient-container_size").val();
	 var iopattern = $("#recipient-io_pattern").val();
	 var op_size = $("#recipient-block_size").val();
	 var object_size = $("#recipient-work_depth").val();
	 var rampup = $("#recipient-ramup_time").val();
	 var runtime = $("#recipient-run_time").val();
	 var device = $("#recipient-devcie").val();
	 
		
   	if(benchmark_driver == "" || worker== "" ||container_size  == "" || iopattern == "" || op_size == "" ||
	     object_size == "" || rampup == "" || runtime == "" || device == "" )
	{
		$("#ModalLabel_Benchmark_Add").html("Hi,The input can't be empty!");
	}
	else
	{
		$("#ModalLabel_Benchmark_Add").html("Add a new row for configuration");
	    setTimeout(function(){$("#BenchmarkModel").modal("hide")},100);	
		var html = "<tr>";
		
		html +="<td class='checkbox_td_class'>";
		html +="<input type='checkbox' class = 'checkbox_benchmark_class' id='checkbox_benchmark_id'+ "+rows+" name='checkbox'>";
		html +="</td>";
		
	
		html += "<td class='td_value_class'id = 'td_value_id_"+rows+"'>";
		html +="<label id = 'label_benchmark_id_"+rows+"' class='label_class' onclick='Label_benchmark_Click("+rows+",&quot;"+ benchmark_driver+"&quot;)'>"+ benchmark_driver +"</label>";
		html +="</td>";
		
		html += "<td class='td_value_class'id = 'td_value_id_"+rows+"'>";
		html +="<label id = 'label_benchmark_id_"+rows+"' class='label_class' onclick='Label_benchmark_Click("+rows+",&quot;"+ worker+"&quot;)'>"+ worker +"</label>";
		html +="</td>";
		
		html += "<td class='td_value_class'id = 'td_value_id_"+rows+"'>";
		html +="<label id = 'label_benchmark_id_"+rows+"' class='label_class' onclick='Label_benchmark_Click("+rows+",&quot;"+ container_size+"&quot;)'>"+ container_size +"</label>";
		html +="</td>";
		
		html += "<td class='td_value_class'id = 'td_value_id_"+rows+"'>";
		html +="<label id = 'label_benchmark_id_"+rows+"' class='label_class' onclick='Label_Click("+rows+",&quot;"+ iopattern+"&quot;)'>"+ iopattern +"</label>";
		html +="</td>";
		
		html += "<td class='td_value_class'id = 'td_value_id_"+rows+"'>";
		html +="<label id = 'label_benchmark_id_"+rows+"' class='label_class' onclick='Label_benchmark_Click("+rows+",&quot;"+ op_size+"&quot;)'>"+ op_size +"</label>";
		html +="</td>";
		
		html += "<td class='td_value_class'id = 'td_value_id_"+rows+"'>";
		html +="<label id = 'label_id_"+rows+"' class='label_class' onclick='Label_benchmark_Click("+rows+",&quot;"+ object_size+"&quot;)'>"+ object_size +"</label>";
		html +="</td>";
		
		html += "<td class='td_value_class'id = 'td_value_id_"+rows+"'>";
		html +="<label id = 'label_benchmark_id_"+rows+"' class='label_class' onclick='Label_benchmark_Click("+rows+",&quot;"+ rampup+"&quot;)'>"+ rampup +"</label>";
		html +="</td>";
		
		html += "<td class='td_value_class'id = 'td_value_id_"+rows+"'>";
		html +="<label id = 'label_benchmark_id_"+rows+"' class='label_class' onclick='Label_benchmark_Click("+rows+",&quot;"+ runtime+"&quot;)'>"+ runtime +"</label>";
		html +="</td>";
		
		html += "<td class='td_value_class'id = 'td_value_id_"+rows+"'>";
		html +="<label id = 'label_benchmark_id_"+rows+"' class='label_class' onclick='Label_benchmark_Click("+rows+",&quot;"+ device+"&quot;)'>"+ device +"</label>";
		html +="</td>";
		
		
		
		html += "<tr>";
	
	    $("#table_benchmark_id").append(html); 

		
		//--------------------------------------------------------
		 var post_json = {}//set_config?request_type=testcase &key=testcase &value=  
		 var table_data= [];
		 
		 $(".checkbox_benchmark_class").each(function(index,value){
		 
			 //var benchmark_driver,worker,container_size,io_pattern,block_size,work_depth,ramup_time,run_time,devcie;
    		 benchmark_driver = $(this).parent().parent().children().eq(1).children("label").text();
	    	 worker = $(this).parent().parent().children().eq(2).children("label").text();
		     container_size = $(this).parent().parent().children().eq(3).children("label").text();
			 iopattern = $(this).parent().parent().children().eq(4).children("label").text();
			 op_size = $(this).parent().parent().children().eq(5).children("label").text();
			 object_size = $(this).parent().parent().children().eq(6).children("label").text();
			 rampup = $(this).parent().parent().children().eq(7).children("label").text();
			 runtime = $(this).parent().parent().children().eq(8).children("label").text();
			 devcie = $(this).parent().parent().children().eq(9).children("label").text();
			 
			 var data ={}; 
			 data.benchmark_driver = benchmark_driver;
			 data.worker = worker;
			 data.container_size = container_size;
			 data.iopattern = iopattern;
			 data.op_size = op_size;
			 data["object_size/QD"] = object_size;
			 data.rampup = rampup;
			 data.runtime = runtime;
			 data.device = devcie;
			 
			 table_data.push(data);
	  });
	  
	    post_json["request_type"]="testcase";
	    //post_json.value = table_data.toSource();
		post_json.value = JSON.stringify(table_data);
		post_json.key="testcase";
	  	var address_Configuration_Set="../configuration/set_config";
			 //"{key="+key+",value="+value+",dsc="+dsc+"}";
	    var result = GetDataByAjax_POST(address_Configuration_Set,post_json); 
		
		//---------------------------------------------------------
		// add the table elemnet 
	   $("#div_Configuration_right_table_id").append($(tableHTML));
	   
	   // set the tr's style	
	   $("table.table_class tr:nth-child(odd)").addClass("altrow");
		
		
    }
}
 


