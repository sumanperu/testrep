/*
	**
		Stock Market App
	**
*/

//JSON Data

var json_data = {
	 "company1":{
		 "name":"Apple",
		 "item1":"+50",
		 "item2":"+60",
		 "item3":"+20"
	  },
	 "company2":{
		 "name":"Acer",
		 "item1":"20",
		 "item2":"20",
		 "item3":"20" 
	  },
	 "company3":{
		 "name":"Lenova",
		 "item1":"20",
		 "item2":"20",
		 "item3":"20"						 
	  },
	  "company4":{
		 "name":"Nokia",
		 "item1":"20",
		 "item2":"20",
		 "item3":"20"
	  },
	  "company5":{
		 "name":"Samsung",
		 "item1":"20",
		 "item2":"20",
		 "item3":"20"
	  },
	  "company6":{
		 "name":"LG",
		 "item1":"20",
		 "item2":"20",
		 "item3":"20"
	  }
};

//JSON Data Ends Here

ns_stock_app = {
	init:function(){
		this.get_data_table();
		$(".row").live("click",function(e){
			$("#mask,#overlay").show();
			if($("#overlay .row").length == 0){
				$(this).addClass("edited");
				$("#overlay").append($(this).clone())
			}
		})
		$(".upt-btn").click(function(event){
			event.preventDefault();
			$("#mask,#overlay").hide();
			var _bb = $(this).parent().find("input[type=text]");			
			console.log(_bb.length)
			for(var i = 0; i< _bb.length; i++){	
				$(".edited input[type=text]").eq(i).val($(_bb[i]).val())
			}
			$(".row").removeClass("edited");
			$("#overlay .row").remove()
		})
		$(".inc").live("click",function(event){
			event.stopPropagation();
			var inpval = $(this).parent().find("input").val();
			$(this).parent().find("input:first").val(++inpval)
			
		})
		$(".dec").live("click",function(event){
			event.stopPropagation();
			var inpval = $(this).parent().find("input").val();
			$(this).parent().find("input:first").val(--inpval)
			
		})
		$(".close").click(function(){
			$("#mask,#overlay").hide();	
			$("#overlay .row").remove();
		})
	},
	get_data_table:function(){
		if(typeof json_data != "undefined"){
			for(key in json_data){
				//cls = "row tab"+key;
			
				var elem = document.createElement("div");
					elem.setAttribute("class","row "+key);
					for(items in json_data[key]){
						var ele = document.createElement("div"),
						     lab = document.createElement("p");
							inp = document.createElement("input");
							btn1 = document.createElement("input");
							btn2 = document.createElement("input");
							ele.setAttribute("class","cell");
							inp.setAttribute("type","text");
							inp.setAttribute("value",json_data[key][items]);
							btn1.setAttribute("value","+");
							btn1.setAttribute("class","inc");
							btn1.setAttribute("type","button");
							btn2.setAttribute("value","-");
							btn2.setAttribute("class","dec");
							btn2.setAttribute("type","button");
							//ele.innerHTML = json_data[key][items];
							ele.appendChild(inp);
							ele.appendChild(btn1);
							ele.appendChild(btn2);
							elem.appendChild(ele);
					}
					document.getElementById("wrapper").appendChild(elem);
			}
		}
		else{
			alert("No data found!")
		}
	}
}
ns_stock_app.init();





