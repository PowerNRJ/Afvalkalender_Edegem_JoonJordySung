// this sets the background color of the master UIView (when there are no windows/tab groups on it)
//require("date");


// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// Aanmaken tabs en windows
//
var winOverzicht = Titanium.UI.createWindow({  
    title:'Afvalkalender project',
    backgroundColor:'#1e1e1e'
});

var tabOverzicht = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Overzicht',
    window:winOverzicht
});

var winInformatie = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#1e1e1e'
});

var tabInformatie = Titanium.UI.createTab({  
    icon:'info_logo.png',
    title:'Informatie',
    window:winInformatie
});

// Labels en pickers maken

var lbldatumtester = Titanium.UI.createLabel({
	color:'#9c9c9c',
	font:{fontSize:10,fontFamily:'Helvetica Neue'},
	width:'auto',
	top: 250,
	left: 80
});

var display_gft =  Titanium.UI.createLabel({
	text:"Geen melding voor GFT.",
	height:30,
	width:"80%",
	top:"20%",
	left:50,
	color:'#1e1e1e',
	borderRadius:2,
	backgroundColor:'#9c9c9c',
	font:{
		fontSize:10,
		fontWeight:'bold'
	},
	textAlign:'center'
});
var display_hout =  Titanium.UI.createLabel({
	text:"Geen melding voor snoeihout.",
	height:30,
	width:"80%",
	top:"30%",
	left:50,
	color:'#1e1e1e',
	borderRadius:2,
	backgroundColor:'#9c9c9c',
	font:{
		fontSize:10,
		fontWeight:'bold'
	},
	textAlign:'center'
});
var display_rest =  Titanium.UI.createLabel({
	text:"Geen melding voor restafval.",
	height:30,
	width:"80%",
	top:"40%",
	left:50,
	color:'#1e1e1e',
	borderRadius:2,
	backgroundColor:'#9c9c9c',
	font:{
		fontSize:10,
		fontWeight:'bold'
	},
	textAlign:'center'
});
var display_grof =  Titanium.UI.createLabel({
	text:"Geen melding voor grofvuil.",
	height:30,
	width:"80%",
	top:"50%",
	left:50,
	color:'#1e1e1e',
	borderRadius:2,
	backgroundColor:'#9c9c9c',
	font:{
		fontSize:10,
		fontWeight:'bold'
	},
	textAlign:'center'
});
var display_text =  Titanium.UI.createLabel({
	text:"Geen melding voor textiel.",
	height:30,
	width:"80%",
	top:"60%",
	left:50,
	color:'#1e1e1e',
	borderRadius:2,
	backgroundColor:'#9c9c9c',
	font:{
		fontSize:10,
		fontWeight:'bold'
	},
	textAlign:'center'
});
var display_pmd =  Titanium.UI.createLabel({
	text:"Geen melding voor PMD.",
	height:30,
	width:"80%",
	top:"70%",
	left:50,
	color:'#1e1e1e',
	borderRadius:2,
	backgroundColor:'#9c9c9c',
	font:{
		fontSize:10,
		fontWeight:'bold'
	},
	textAlign:'center'
});
var display_pk =  Titanium.UI.createLabel({
	text:"Geen melding voor papier en karton.",
	height:30,
	width:"80%",
	top:"80%",
	left:50,
	color:'#1e1e1e',
	borderRadius:2,
	backgroundColor:'#9c9c9c',
	font:{
		fontSize:10,
		fontWeight:'bold'
	},
	textAlign:'center'
});

var image_gft = Titanium.UI.createImageView({
	url:'http://joon.wrhg.nl/afvalkalender/Icoon-GFT.png'
});

var view_img_gft = Titanium.UI.createView({
	left: 0,
	top: "20%",
	width: 40,
	height: 40	
})

view_img_gft.add(image_gft);

var image_snoeihout = Titanium.UI.createImageView({
	url:'http://www.joon.wrhg.nl/afvalkalender/Icoon-SH.png'
})

var view_img_snoeihout = Titanium.UI.createView({
	left: 0,
	top: "30%",
	width: 40,
	height: 40	
})

view_img_snoeihout.add(image_snoeihout);

var image_restafval = Titanium.UI.createImageView({
	url:'http://www.joon.wrhg.nl/afvalkalender/Icoon-REST.png'
})

var view_img_restafval = Titanium.UI.createView({
	left: 0,
	top: "40%",
	width: 40,
	height: 40	
})

view_img_restafval.add(image_restafval);

var image_grofvuil = Titanium.UI.createImageView({
	url:'http://www.joon.wrhg.nl/afvalkalender/Icoon-GROF.png'
})

var view_img_grofvuil = Titanium.UI.createView({
	left: 0,
	top: "50%",
	width: 40,
	height: 40	
})

view_img_grofvuil.add(image_grofvuil);

var image_textiel = Titanium.UI.createImageView({
	url:'http://www.joon.wrhg.nl/afvalkalender/Icoon-TX.png'
})

var view_img_textiel = Titanium.UI.createView({
	left: 0,
	top: "60%",
	width: 40,
	height: 40	
})

view_img_textiel.add(image_textiel);

var image_PMD = Titanium.UI.createImageView({
	url:'http://www.joon.wrhg.nl/afvalkalender/Icoon-PMD.png'
})

var view_img_PMD = Titanium.UI.createView({
	left: 0,
	top: "70%",
	width: 40,
	height: 40	
})

view_img_PMD.add(image_PMD);

var image_PK = Titanium.UI.createImageView({
	url:'http://www.joon.wrhg.nl/afvalkalender/Icoon-PK.png'
})

var view_img_PK = Titanium.UI.createView({
	left: 0,
	top: "80%",
	width: 40,
	height: 40	
})

view_img_PK.add(image_PK);

var lblSector = Titanium.UI.createLabel({
	height:40,
	width:40,
	top: 20,
	left: 270,
	font:{fontSize:8},
	color: '#9c9c9c',	
	text: 'Sector 4'
})

var lblTitelAfval = Titanium.UI.createLabel({
	color:'#9c9c9c',
	text:'Afvalmeldingen: ',
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	width:'auto',
	top: 70,
	left: 20
});

var lblGFT = Titanium.UI.createLabel({
	height:40,
	width:200,
	top: 100,
	left: 20,
	text: 'GFT: '
})

var pickerGFT = Titanium.UI.createPicker({
	height:40,
	width:150,
	top: 100,
	left: 150,
});

var lblTextiel = Titanium.UI.createLabel({
	height:40,
	width:200,
	top: 340,
	left: 20,
	text: 'Textiel: '
})

var pickerTextiel = Titanium.UI.createPicker({
	height:40,
	width:150,
	top: 340,
	left: 150,
});

var lblOphalingdatum = Titanium.UI.createLabel({
	color:'red',
	font:{fontSize:10,fontFamily:'Helvetica Neue'},
	width:'auto',
	top: '50%',
	left: 10
});

var lblInfoVolgendeOphaling = Titanium.UI.createLabel({
	color:'#9c9c9c',
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	width:'auto',
	top: 100,
	left: 10
});

var lblGFTInformatie = Titanium.UI.createLabel({
	color:'#9c9c9c',
	text:'Elke donderdag. UITZONDERING: 18 mei, 2 november',
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	width:'auto',
	top: 50,
	left: 10
});

var lblSnoeihoutInformatie = Titanium.UI.createLabel({
	color:'#9c9c9c',
	text:'Elke donderdag om de twee weken vanaf 5 januari',
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	width:'auto',
	top: 50,
	left: 10
});

var lblPapierKartonInformatie = Titanium.UI.createLabel({
	color:'#9c9c9c',
	text:'Eerste donderdag van elke maand. UITZONDERING: 2 november',
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	width:'auto',
	top: 50,
	left: 10
});

var lblPMDInformatie = Titanium.UI.createLabel({
	color:'#9c9c9c',
	text:'Elke donderdag om de twee weken vanaf 12 januari. UITZONDERING: 18 mei',
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	width:'auto',
	top: 50,
	left: 10
});

var lblRestafvalInformatie = Titanium.UI.createLabel({
	color:'#9c9c9c',
	text:'Elke donderdag. UITZONDERING: 18 mei, 2 november',
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	width:'auto',
	top: 50,
	left: 10
});

var lblGrofvuilInformatie = Titanium.UI.createLabel({
	color:'#9c9c9c',
	text:'Eerste of tweede vrijdag van elke maand',
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	width:'auto',
	top: 50,
	left: 10
	
});

var lblTextielInformatie = Titanium.UI.createLabel({
	color:'#9c9c9c',
	text:'Derde vrijdag van elke maand',
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	width:'auto',
	top: 50,
	left: 10
});

var lblSnoeihout = Titanium.UI.createLabel({
	height:40,
	width:200,
	top: 140,
	left: 20,
	text: 'Snoeihout: '
});
var lblPapierKarton = Titanium.UI.createLabel({
	height:40,
	width:200,
	top: 180,
	left: 20,
	text: 'Papier en karton: '
});
var lblPMD = Titanium.UI.createLabel({
	height:40,
	width:200,
	top: 220,
	left: 20,
	text: 'PMD: '
});
var lblRestafval = Titanium.UI.createLabel({
	height:40,
	width:200,
	top: 260,
	left: 20,
	text: 'Restafval: '
})
var lblGrofvuil = Titanium.UI.createLabel({
	height:40,
	width:200,
	top: 300,
	left: 20,
	text: 'Grofvuil: '
})
// Functie timer

var countDown =  function( totaal, fn_tick, fn_end  ) {
	return {
		total_sec:totaal,
		timer:this.timer,
		set: function(d,h,m,s) {
			this.total_sec = parseInt(totaal);
			this.time = {d:d,h:h,m:m,s:s};
			return this;
		},
		start: function() {
			var self = this;
			this.timer = setInterval( function() {
				if (self.total_sec) {
					self.total_sec--;
					self.time = { d:Math.floor(self.total_sec/86400),h:Math.floor(self.total_sec%86400/3600),m : Math.floor(self.total_sec%3600/60), s: (self.total_sec%60) };
					//self.time = {m : parseInt(self.total_sec/60), s: Math.round((self.total_sec%60)) };
					fn_tick();
				}
				else {
					self.stop();
					fn_end();
				}
				}, 1000 );
			return this;
		},
		stop: function() {
			clearInterval(this.timer);
			this.time = {d:0,h:0,m:0,s:0};
			this.total_sec = 0;
			return this;
		}
	};
};	

// Datum ophalen en timer instellen

var sectorCookie = Ti.App.Properties.getString("sectorCookie");
var xhr2, url2,xhr3, url3,xhr4, url4,xhr5, url5,xhr6, url6,xhr7, url7,xhr8, url8, not1, not2, not3, not4, not5, not6,not7;
Titanium.App.Properties.setString("not1",0);
Titanium.App.Properties.setString("not2",0);
Titanium.App.Properties.setString("not3",0);
Titanium.App.Properties.setString("not4",0);
Titanium.App.Properties.setString("not5",0);
Titanium.App.Properties.setString("not6",0);
Titanium.App.Properties.setString("not7",0);
var json2, object2
var d1
	xhr2 = Ti.Network.createHTTPClient({
		onload: function(e) {
			json2 = JSON.parse(this.responseText);
				
			for (var teller2=0;teller2<json2.object_name.length;teller2++)
			{
				object2 = json2.object_name[teller2];
				lblInfoVolgendeOphaling.text = "De volgende ophaling is op "+object2.Datum;
				var datumgft = object2.Datum;
				var date_arr = datumgft.split("-");
				var month = date_arr[1]
				var d1 = new Date(date_arr[0], month-1, date_arr[2], 7, 30, 0);
				//var datetoday = new Date();
//var vandaag = new Date(datetoday.getYear(),datetoday.getMonth(),datetoday.getDay(),datetoday.getHours(),datetoday.getMinutes(),datetoday.getSeconds());
				var vandaag = new Date();
				var d3 = (d1-vandaag)/1000;
				//lbldatum1.text = d3;
				var gftcookie = Ti.App.Properties.getString("gft");
				if (teller = 0){
					
					
				}else{
					teller = 0;
				if(gftcookie == 0 || gftcookie == null){
					display_gft.text = "Geen melding voor GFT."
				}else{
				var my_timer = new countDown(d3, 
		function() {
			display_gft.text = my_timer.time.d+" dag(en) "+ my_timer.time.h+" uur "+ my_timer.time.m+" minuten en "+Math.round(my_timer.time.s)+" seconden";
			var sec = (my_timer.time.d*86400)+(my_timer.time.h*3600)+(my_timer.time.m*60)+Math.round(my_timer.time.s);
			if(sec < gftcookie){
				
				
			display_gft.color = "red";
			var not1 = Ti.App.Properties.getString("not1");
			if(not1 == null || not1 == 0){
			    var now = new Date().getTime()
    var delta = new Date( now + (4 * 1000) );
    var deltaMS = delta - now;
 
    var intent = Ti.Android.createServiceIntent({
        url : 'gftService.js'
    });
    intent.putExtra('interval', deltaMS);
    intent.putExtra('message' , 'This is that little extra');
    Ti.Android.startService(intent);
Titanium.App.Properties.setString("not1",1);
			}
			else{Titanium.App.Properties.setString("not1",0);
			}
			}
		},
		function() {
			alert("Het gft is opgehaald!");
		}
	);
				
			}
			var gftcookie = Ti.App.Properties.getString("gft");
if(gftcookie == null||gftcookie ==0){
	Titanium.App.Properties.setString("gft",0);
}
else
{my_timer.start();}

				
		}}}
	});

	var json3, object3

	xhr3 = Ti.Network.createHTTPClient({
		onload: function(e) {
			json3 = JSON.parse(this.responseText);
				
			for (var teller3=0;teller3<json3.object_name.length;teller3++)
			{
				object3 = json3.object_name[teller3];
				lblInfoVolgendeOphaling.text = "De volgende ophaling is op "+object3.Datum;
				var datumhout = object3.Datum;
				var date_arr = datumhout.split("-");
				var month = date_arr[1]
				var d1 = new Date(date_arr[0], month-1, date_arr[2], 7, 30, 0);
				var vandaag = new Date();
				var d3 = (d1-vandaag)/1000;
				//lbldatum2.text = d3;
				var houtcookie = Ti.App.Properties.getString("hout");
				if (teller = 0){
					
					
				}else{
					teller = 0;
				if(houtcookie == 0 || houtcookie == null){
					display_hout.text = "Geen melding voor Snoeihout."
				}else{
				var my_timer = new countDown(d3, 
		function() {
			display_hout.text = my_timer.time.d+" dag(en) "+ my_timer.time.h+" uur "+ my_timer.time.m+" minuten en "+Math.round(my_timer.time.s)+" seconden";
			var sec = (my_timer.time.d*86400)+(my_timer.time.h*3600)+(my_timer.time.m*60)+Math.round(my_timer.time.s);
			if(sec < houtcookie){
				display_hout.color = "red";
							var not2 = Ti.App.Properties.getString("not2");
			if(not2 == null || not2 == 0){
			    var now = new Date().getTime()
    var delta = new Date( now + (4 * 1000) );
    var deltaMS = delta - now;
 
    var intent = Ti.Android.createServiceIntent({
        url : 'houtService.js'
    });
    intent.putExtra('interval', deltaMS);
    intent.putExtra('message' , 'This is that little extra');
    Ti.Android.startService(intent);
Titanium.App.Properties.setString("not2",1);
			}
			else{Titanium.App.Properties.setString("not2",0);
			}
			}
		},
		function() {
			alert("Het snoeihout is opgehaald!");
		}
	);
				
			}
			var houtcookie = Ti.App.Properties.getString("hout");
if(houtcookie == null || houtcookie ==0){
	Titanium.App.Properties.setString("hout",0);
}
else
{my_timer.start();}

				
		}}}
	});
	   
	var json4, object4

	xhr4 = Ti.Network.createHTTPClient({
		onload: function(e) {
			json4 = JSON.parse(this.responseText);
				
			for (var teller4=0;teller4<json4.object_name.length;teller4++)
			{
				object4 = json4.object_name[teller4];
				lblInfoVolgendeOphaling.text = "De volgende ophaling is op "+object4.Datum;
				var datumpk= object4.Datum;
				var date_arr = datumpk.split("-");
				var month = date_arr[1]
				var d1 = new Date(date_arr[0], month-1, date_arr[2], 7, 30, 0);
				var vandaag = new Date();
				var d3 = (d1-vandaag)/1000;
				//lbldatum3.text = d3;
				var papiercookie = Ti.App.Properties.getString("papier");
				if (teller = 0){
					
					
				}else{
					teller = 0;
				if(papiercookie == 0 || papiercookie == null){
					display_pk.text = "Geen melding voor Papier en karton."
				}else{
				var my_timer = new countDown(d3, 
		function() {
			display_pk.text = my_timer.time.d+" dag(en) "+ my_timer.time.h+" uur "+ my_timer.time.m+" minuten en "+Math.round(my_timer.time.s)+" seconden";
			var sec = (my_timer.time.d*86400)+(my_timer.time.h*3600)+(my_timer.time.m*60)+Math.round(my_timer.time.s);
			if(sec < papiercookie){
				
			display_pk.color = "red";
							var not3 = Ti.App.Properties.getString("not3");
			if(not3 == null || not3 == 0){
			    var now = new Date().getTime()
    var delta = new Date( now + (4 * 1000) );
    var deltaMS = delta - now;
 
    var intent = Ti.Android.createServiceIntent({
        url : 'papierService.js'
    });
    intent.putExtra('interval', deltaMS);
    intent.putExtra('message' , 'This is that little extra');
    Ti.Android.startService(intent);
Titanium.App.Properties.setString("not3",1);
			}
			else{Titanium.App.Properties.setString("not3",0);
			}
			}
		},
		function() {
			alert("Het papier en karton is opgehaald!");
		}
	);
				
			}
				var papiercookie = Ti.App.Properties.getString("papier");
if(papiercookie == null || papiercookie == 0){
	Titanium.App.Properties.setString("papier",0);
}
else
{my_timer.start();}

		}}}
	});
	   	
	var json5, object5

	xhr5 = Ti.Network.createHTTPClient({
		onload: function(e) {
			json5 = JSON.parse(this.responseText);
				
			for (var teller5=0;teller5<json5.object_name.length;teller5++)
			{
				object5 = json5.object_name[teller5];
				lblInfoVolgendeOphaling.text = "De volgende ophaling is op "+object5.Datum;
				var datumpmd = object5.Datum;
				var date_arr = datumpmd.split("-");
				var month = date_arr[1]
				var d1 = new Date(date_arr[0], month-1, date_arr[2], 7, 30, 0);
				var vandaag = new Date();
				var d3 = (d1-vandaag)/1000;
				//lbldatum4.text = d3;
				var pmdcookie = Ti.App.Properties.getString("pmd");
				if (teller = 0){
					
					
				}else{
					teller = 0;
				if(pmdcookie == 0 || pmdcookie == null){
					display_pmd.text = "Geen melding voor PMD."
				}else{
				var my_timer = new countDown(d3, 
		function() {
			display_pmd.text = my_timer.time.d+" dag(en) "+ my_timer.time.h+" uur "+ my_timer.time.m+" minuten en "+Math.round(my_timer.time.s)+" seconden";
			var sec = (my_timer.time.d*86400)+(my_timer.time.h*3600)+(my_timer.time.m*60)+Math.round(my_timer.time.s);
			if(sec < pmdcookie){
			display_pmd.color = "red";
										var not4 = Ti.App.Properties.getString("not4");
			if(not4 == null || not4 == 0){
			    var now = new Date().getTime()
    var delta = new Date( now + (4 * 1000) );
    var deltaMS = delta - now;
 
    var intent = Ti.Android.createServiceIntent({
        url : 'pmdService.js'
    });
    intent.putExtra('interval', deltaMS);
    intent.putExtra('message' , 'This is that little extra');
    Ti.Android.startService(intent);
Titanium.App.Properties.setString("not4",1);
			}
			else{Titanium.App.Properties.setString("not4",0);
			}
		}
		},
		function() {
			alert("Het PMD is opgehaald!");
		}
	);
				
			}
			var pmdcookie = Ti.App.Properties.getString("pmd");
if(pmdcookie == null || pmdcookie == 0){
	Titanium.App.Properties.setString("pmd",0);
}
else
{my_timer.start();}
				
		}}}
	});
	   
	var json6, object6

	xhr6 = Ti.Network.createHTTPClient({
		onload: function(e) {
			json6 = JSON.parse(this.responseText);
				
			for (var teller6=0;teller6<json6.object_name.length;teller6++)
			{
				object6 = json6.object_name[teller6];
				lblInfoVolgendeOphaling.text = "De volgende ophaling is op "+object6.Datum;
				var datumrest = object6.Datum;
				var date_arr = datumrest.split("-");
				var month = date_arr[1]
				var d1 = new Date(date_arr[0], month-1, date_arr[2], 7, 30, 0);
				var vandaag = new Date();
				var d3 = (d1-vandaag)/1000;
				//lbldatum5.text = d3;
				var restcookie = Ti.App.Properties.getString("rest");
				var teller;
				if (teller = 0){
					
					
				}else{
					teller = 0;
					if(restcookie == 0 || restcookie == null){
					display_rest.text = "Geen melding voor restafval."
				}else{
				var my_timer = new countDown(d3, 
		function() {
			display_rest.text = my_timer.time.d+" dag(en) "+ my_timer.time.h+" uur "+ my_timer.time.m+" minuten en "+Math.round(my_timer.time.s)+" seconden";
			var sec = (my_timer.time.d*86400)+(my_timer.time.h*3600)+(my_timer.time.m*60)+Math.round(my_timer.time.s);
			if(sec < restcookie){
			display_rest.color = "red";
													var not5 = Ti.App.Properties.getString("not5");
			if(not5 == null || not5 == 0){
			    var now = new Date().getTime()
    var delta = new Date( now + (4 * 1000) );
    var deltaMS = delta - now;
 
    var intent = Ti.Android.createServiceIntent({
        url : 'restService.js'
    });
    intent.putExtra('interval', deltaMS);
    intent.putExtra('message' , 'This is that little extra');
    Ti.Android.startService(intent);
Titanium.App.Properties.setString("not5",1);
			}
			else{Titanium.App.Properties.setString("not5",0);
			}
			}
		},
		function() {
			alert("Het restafval is opgehaald!");
		}
	);
			var restcookie = Ti.App.Properties.getString("rest");
if(restcookie == null || restcookie == 0){
	Titanium.App.Properties.setString("rest",0);
}
else
{my_timer.start();	}

			}}}
				
		}
	});
	
var json7, object7
xhr7 = Ti.Network.createHTTPClient({
        onload: function(e) {
            json7 = JSON.parse(this.responseText);
            for (var teller7=0;teller7<json7.object_name.length;teller7++)
            {
                object7 = json7.object_name[teller7];
                lblInfoVolgendeOphaling.text = "De volgende ophaling is op "+object7.Datum;
                var datumgrof = object7.Datum;
                var date_arr = datumgrof.split("-");
				var month = date_arr[1]
				var d1 = new Date(date_arr[0], month-1, date_arr[2], 7, 30, 0);
				var vandaag = new Date();
				var d3 = (d1-vandaag)/1000;
				//lbldatum6.text = d3;
				var grofcookie = Ti.App.Properties.getString("grof");
				var teller;
				if (teller = 0){
					
					
				}else{
					teller = 0;
				if(grofcookie == 0 || grofcookie == null){
					display_grof.text = "Geen melding voor grofvuil."
				}else{
				var my_timer = new countDown(d3, 
		function() {
			display_grof.text = my_timer.time.d+" dag(en) "+ my_timer.time.h+" uur "+ my_timer.time.m+" minuten en "+Math.round(my_timer.time.s)+" seconden";
			var sec = (my_timer.time.d*86400)+(my_timer.time.h*3600)+(my_timer.m*60)+Math.round(my_timer.time.s);
			if(sec < grofcookie){
				
			display_grof.color = "red";
													var not6 = Ti.App.Properties.getString("not6");
			if(not6 == null || not6 == 0){
			    var now = new Date().getTime()
    var delta = new Date( now + (4 * 1000) );
    var deltaMS = delta - now;
 
    var intent = Ti.Android.createServiceIntent({
        url : 'grofService.js'
    });
    intent.putExtra('interval', deltaMS);
    intent.putExtra('message' , 'This is that little extra');
    Ti.Android.startService(intent);
Titanium.App.Properties.setString("not6",1);
			}
			else{Titanium.App.Properties.setString("not6",0);
			}
			}
		},
		function() {
			alert("Het grofvuil opgehaald!");
		}
	);
				
			}
				var grofcookie = Ti.App.Properties.getString("grof");
if(grofcookie == null || grofcookie == 0){
	Titanium.App.Properties.setString("grof",0);
}
else
{my_timer.start();}

		}}}
    });
    	var json8, object8

	xhr8 = Ti.Network.createHTTPClient({
		onload: function(e) {
			json8 = JSON.parse(this.responseText);
				
			for (var teller8=0;teller8<json8.object_name.length;teller8++)
			{
				object8 = json8.object_name[teller8];
				lblInfoVolgendeOphaling.text = "De volgende ophaling is op "+object8.Datum;
				var datumtextiel = object8.Datum;
				var date_arr = datumtextiel.split("-");
				var month = date_arr[1]
				var d1 = new Date(date_arr[0], month-1, date_arr[2], 7, 30, 0);
				var vandaag = new Date();
				var d3 = (d1-vandaag)/1000;
				//lbldatum7.text = d3;
				var teller;
				if (teller = 0){
					
					
				}else{
				var textielcookie = Ti.App.Properties.getString("textiel");
				if(textielcookie == 0 || textielcookie == null){
					display_text.text = "Geen melding voor Textiel."
					
				}else{
				var my_timer = new countDown(d3, 
		function() {
			teller = 0;
			display_text.text = my_timer.time.d+" dag(en) "+ my_timer.time.h+" uur "+ my_timer.time.m+" minuten en "+Math.round(my_timer.time.s)+" seconden";
			var sec = (my_timer.time.d*86400)+(my_timer.time.h*3600)+(my_timer.time.m*60)+my_timer.time.s;
			if(sec < textielcookie){
			display_text.color = "red"
													var not7 = Ti.App.Properties.getString("not7");
			if(not7 == null || not7 == 0){
			    var now = new Date().getTime()
    var delta = new Date( now + (4 * 1000) );
    var deltaMS = delta - now;
 
    var intent = Ti.Android.createServiceIntent({
        url : 'textService.js'
    });
    intent.putExtra('interval', deltaMS);
    intent.putExtra('message' , 'This is that little extra');
    Ti.Android.startService(intent);
Titanium.App.Properties.setString("not7",1);
			}
			else{Titanium.App.Properties.setString("not7",0);
			}
			}
		},
		function() {
			alert("Het textiel is opgehaald!");
		}
	);
				
			}
				var textielcookie = Ti.App.Properties.getString("textiel");
if(textielcookie == null || textielcookie == 0){
	Titanium.App.Properties.setString("textiel",0);
}
else
{my_timer.start();}
		}}}
	
	});

//Timers toevoegen aan overzicht pagina

winOverzicht.add(view_img_gft);
winOverzicht.add(display_gft);
winOverzicht.add(view_img_snoeihout);
winOverzicht.add(display_hout);
winOverzicht.add(view_img_PMD);
winOverzicht.add(display_pmd);
winOverzicht.add(view_img_restafval);
winOverzicht.add(display_rest);
winOverzicht.add(view_img_grofvuil);
winOverzicht.add(display_grof);
winOverzicht.add(view_img_textiel);
winOverzicht.add(display_text);
winOverzicht.add(view_img_PK);
winOverzicht.add(display_pk);

// Eventlisteners

winOverzicht.addEventListener('open', function(e)
{
	var straatCookie = Ti.App.Properties.getString("straatCookie");
	var sectorCookie = Ti.App.Properties.getString("sectorCookie");
	if(straatCookie == null){
		labeltest.text= "Nog geen straat gekozen, ga een straat kiezen bij instellingen."
	}
	else
	{
		labeltest.text = "Meldingen voor de "+straatCookie+ " in sector "+sectorCookie+".";
		var url2 = "http://joon.wrhg.nl/afvalkalender/jsonVolgendDatumGFT.php?sector=" + sectorCookie;
    xhr2.open("GET",url2);
    xhr2.send();
	var url3 = "http://joon.wrhg.nl/afvalkalender/jsonVolgendDatumSnoeihout.php?sector=" + sectorCookie;
    xhr3.open("GET",url3);
    xhr3.send();
	var url4 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumPK.php?sector=" + sectorCookie;
    xhr4.open("GET",url4);
    xhr4.send();
	var url5 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumPMD.php?sector=" + sectorCookie;
    xhr5.open("GET",url5);
    xhr5.send();
	var url6 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumRest.php?sector=" + sectorCookie;
    xhr6.open("GET",url6);
    xhr6.send();
    var url7 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumGrof.php?sector="+sectorCookie;
    xhr7.open("GET",url7);
    xhr7.send();
    var url8 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumTextiel.php?sector=" + sectorCookie;
    xhr8.open("GET",url8);
    xhr8.send();
	    if(sectorCookie == 1){
    		lblGFTInformatie.text = "Elke donderdag. UITZONDERING: 18 mei, 2 november";
 			lblSnoeihoutInformatie.text = "Elke donderdag om de twee weken vanaf 5 januari";
			lblPapierKartonInformatie.text = "Eerste donderdag van elke maand. UITZONDERING: 2 november";
			lblPMDInformatie.text = "Elke donderdag om de twee weken vanaf 12 januari. UITZONDERING: 18 mei";
			lblRestafvalInformatie.text = "Elke donderdag. UITZONDERING: 18 mei, 2 november";
			lblGrofvuilInformatie.text = "Eerste of tweede vrijdag van elke maand";
			lblTextielInformatie.text = "Derde vrijdag van elke maand";    		
    		}
    		else{

    	if(sectorCookie == 2){
    		lblGFTInformatie.text = "Elke woensdag. UITZONDERING: 13 juli, 17 augustus, 28 december";
 			lblSnoeihoutInformatie.text = "Elke woensdag om de twee weken vanaf 4 januari.";
			lblPapierKartonInformatie.text = "Eerste woensdag van elke maand";
			lblPMDInformatie.text = "Elke woensdag om de twee weken vanaf 11 januari. UITZONDERING: 13 juli, 28 december";
			lblRestafvalInformatie.text = "Elke woensdag. UITZONDERING: 13 juli, 17 augustus, 28 december";
			lblGrofvuilInformatie.text = "Eerste vrijdag van elke maand. UITZONDERING: 13 januari";
			lblTextielInformatie.text = "Derde vrijdag van elke maand";    		
    		}
    		else{
    	
    	if(sectorCookie == 3){
    		lblGFTInformatie.text = "Elke dinsdag. UITZONDERING: 2 mei, 27 december";
 			lblSnoeihoutInformatie.text = "Elke dinsdag om de twee weken vanaf 3 januari";
			lblPapierKartonInformatie.text = "Derde dinsdag van elke maand.";
			lblPMDInformatie.text = "Elke dinsdag om de twee weken vanaf 10 januari. UITZONDERING: 4 mei, 27 december";
			lblRestafvalInformatie.text = "Elke dinsdag. UITZONDERING: 18 mei, 2 november. UITZONDERING: 4 mei, 27 december";
			lblGrofvuilInformatie.text = "Derde of vierde vrijdag van elke maand";
			lblTextielInformatie.text = "Derde vrijdag van elke maand";    		
    		}
    		else{
    		
    	if(sectorCookie == 4){
    		lblGFTInformatie.text = "Elke maandag. UITZONDERING: 3 januari, 10 april, 29 mei";
 			lblSnoeihoutInformatie.text = "Elke maandag om de twee weken vanaf 16 januari. UITZONDERING: 6 januari, 13 april";
			lblPapierKartonInformatie.text = "Derde maandag van elke maand.";
			lblPMDInformatie.text = "Elke maandag om de twee weken vanaf 9 januari. UITZONDERING: 1 juni";
			lblRestafvalInformatie.text = "Elke maandag. UITZONDERING: 18 mei, 2 november. UITZONDERING: 6 januari, 13 april, 1 juni";
			lblGrofvuilInformatie.text = "Derde of vierde vrijdag van elke maand";
			lblTextielInformatie.text = "vierde vrijdag van elke maand";    		
    		}
    		}}}
	
	
    }
});
 



//
// create controls tab and root window
//
var winInstellingen = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#1e1e1e'
});

var tabInstellingen = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Instellingen',
    window:winInstellingen
});

var lblStraat = Titanium.UI.createLabel({
	color:'#9c9c9c',
	text:'Straat: ',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	width:'auto',
	top: 20,
	left: 20
});

var pickerStraat = Titanium.UI.createPicker({
	height:40,
	width:160,
	top: 20,
	left: 100,
});

var lblsector2 = Titanium.UI.createLabel({
	top: 20,
	left: 10,
	text: '4'
})

var url = "http://joon.wrhg.nl/afvalkalender/json.php";

var json, object_name, object;

var data = [];

var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
    	json = JSON.parse(this.responseText);
data[0] = Titanium.UI.createPickerRow({title: "Kies een straat", custom_item:"0"});
    	for (teller = 0; teller < json.object_name.length; teller++)
    	{
    		object = json.object_name[teller];
    		
    		data[teller+1] = Titanium.UI.createPickerRow({title: object.LocatieStraat, custom_item:object.LocatieSector});

    	}

        // this.responseText holds the raw text return of the message (used for JSON)
        // this.responseXML holds any returned XML (used for SOAP web services)
        // this.responseData holds any returned binary data
        Ti.API.debug(this.responseText);
        pickerStraat.add(data);
        //alert('success');
    },


    onerror: function(e) {
        Ti.API.debug(e.error);
        alert('error');
    },
    timeout:5000
});


xhr.open("GET", url);
xhr.send();

var labeltest = Titanium.UI.createLabel({
	top: 20,
	left: 10,
	text: 'Nog geen straat gekozen, ga een straat kiezen bij instellingen.'
})

var datumgft,datumrest,datumgrof,datumpmd,datumpk,datumtextiel,datumhout;
var xhr2, url2,xhr3, url3,xhr4, url4,xhr5, url5,xhr6, url6,xhr7, url7,xhr8, url8;
var sectorCookie = Ti.App.Properties.getString("sectorCookie");

pickerStraat.addEventListener('change',function(e) {
    
    lblSector.text = "Sector " + e.row.custom_item;
    lblsector2.text = e.row.custom_item;
    var sectorCookie = e.row.custom_item;
    var straatCookie = JSON.stringify(e.row.title);
    labeltest.text = "Meldingen voor de "+straatCookie+ " in sector "+sectorCookie+".";
    var rijindex = e.rowIndex;
    Titanium.App.Properties.setString("rijindex",rijindex);
	Titanium.App.Properties.setString("sectorCookie",sectorCookie);
	Titanium.App.Properties.setString("straatCookie",straatCookie);
    if(e.row.custom_item == 1){
    		lblGFTInformatie.text = "Elke donderdag. UITZONDERING: 18 mei, 2 november";
 			lblSnoeihoutInformatie.text = "Elke donderdag om de twee weken vanaf 5 januari";
			lblPapierKartonInformatie.text = "Eerste donderdag van elke maand. UITZONDERING: 2 november";
			lblPMDInformatie.text = "Elke donderdag om de twee weken vanaf 12 januari. UITZONDERING: 18 mei";
			lblRestafvalInformatie.text = "Elke donderdag. UITZONDERING: 18 mei, 2 november";
			lblGrofvuilInformatie.text = "Eerste of tweede vrijdag van elke maand";
			lblTextielInformatie.text = "Derde vrijdag van elke maand";    		
    		}
    		else{

    	if(e.row.custom_item == 2){
    		lblGFTInformatie.text = "Elke woensdag. UITZONDERING: 13 juli, 117augustus, 28 december";
 			lblSnoeihoutInformatie.text = "Elke woensdag om de twee weken vanaf 4 januari.";
			lblPapierKartonInformatie.text = "Eerste woensdag van elke maand";
			lblPMDInformatie.text = "Elke woensdag om de twee weken vanaf 11 januari. UITZONDERING:53 juli, 28 december";
			lblRestafvalInformatie.text = "Elke woensdag. UITZONDERING: 13 juli, 17 augustus, 28 december";
			lblGrofvuilInformatie.text = "Eerste vrijdag van elke maand. UITZONDERING: 13 januari";
			lblTextielInformatie.text = "Derde vrijdag van elke maand";    		
    		}
    		else{
    	
    	if(e.row.custom_item == 3){
    		lblGFTInformatie.text = "Elke dinsdag. UITZONDERING: 2 mei, 27 december";
 			lblSnoeihoutInformatie.text = "Elke dinsdag om de twee weken vanaf 3 januari";
			lblPapierKartonInformatie.text = "Derde dinsdag van elke maand.";
			lblPMDInformatie.text = "Elke dinsdag om de twee weken vanaf 10 januari. UITZONDERING: 4 mei, 27 december";
			lblRestafvalInformatie.text = "Elke dinsdag. UITZONDERING: 18 mei, 2 november. UITZONDERING: 4 mei, 27 december";
			lblGrofvuilInformatie.text = "Derde of vierde vrijdag van elke maand";
			lblTextielInformatie.text = "Derde vrijdag van elke maand";    		
    		}
    		else{
    		
    	if(e.row.custom_item == 4){
    		lblGFTInformatie.text = "Elke maandag. UITZONDERING: 3 januari, 10 april, 29 mei";
 			lblSnoeihoutInformatie.text = "Elke maandag om de twee weken vanaf 1314 januari. UITZONDERING: 6 januari, 13 april";
			lblPapierKartonInformatie.text = "Derde maandag van elke maand.";
			lblPMDInformatie.text = "Elke maandag om de twee weken vanaf 9 januari. UITZONDERING: 1 juni";
			lblRestafvalInformatie.text = "Elke maandag. UITZONDERING: 18 mei, 2 november. UITZONDERING: 6 januari, 13 april, 1 juni";
			lblGrofvuilInformatie.text = "Derde of vierde vrijdag van elke maand";
			lblTextielInformatie.text = "vierde vrijdag van elke maand";    		
    		}
    		}}}
    		var gftcookie = Ti.App.Properties.getString("gft");
    		var restcookie = Ti.App.Properties.getString("rest");
    		var houtcookie = Ti.App.Properties.getString("hout");
    		var papiercookie = Ti.App.Properties.getString("papier");
    		var pmdcookie = Ti.App.Properties.getString("pmd");
			var grofcookie = Ti.App.Properties.getString("grof");
			var textielcookie = Ti.App.Properties.getString("textiel");
    	if(gftcookie ==0 || gftcookie ==null){}
    	else{url2 = "http://joon.wrhg.nl/afvalkalender/jsonVolgendDatumGFT.php?sector=" + sectorCookie;

			xhr2.open("GET",url2);
			xhr2.send();}
    		
    
if(houtcookie ==0 || houtcookie ==null){}
    	else{
	url3 = "http://joon.wrhg.nl/afvalkalender/jsonVolgendDatumSnoeihout.php?sector=" + sectorCookie;

			xhr3.open("GET",url3);
			xhr3.send();}
if(papiercookie ==0 || papiercookie ==null){}
    	else{
	url4 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumPK.php?sector=" + sectorCookie;

			xhr4.open("GET",url4);
			xhr4.send();}
if(pmdcookie ==0 || pmdcookie ==null){}
    	else{
	url5 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumPMD.php?sector=" + sectorCookie;

			xhr5.open("GET",url5);
			xhr5.send();}
if(restcookie ==0 || restcookie ==null){}
    	else{
	url6 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumRest.php?sector=" + sectorCookie;


			xhr6.open("GET",url6);
			xhr6.send();}
if(grofcookie ==0 || grofcookie ==null){}
    	else{
	url7 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumGrof.php?sector=" + sectorCookie;

			xhr7.open("GET",url7);
			xhr7.send();}

if(textielcookie ==0 || textielcookie ==null){}
    	else{
	url8 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumTextiel.php?sector=" + sectorCookie;

			xhr8.open("GET",url8);
			xhr8.send();}
	
});

var dataGFT = [];
dataGFT[0]=Titanium.UI.createPickerRow({title:'geen meldingen', custom_item:0});
dataGFT[1]=Titanium.UI.createPickerRow({title:'30 minuten', custom_item:1800});
dataGFT[2]=Titanium.UI.createPickerRow({title:'1 uur', custom_item:3600});
dataGFT[3]=Titanium.UI.createPickerRow({title:'2 uur', custom_item:7200});
dataGFT[4]=Titanium.UI.createPickerRow({title:'4 uur', custom_item:14400});
dataGFT[5]=Titanium.UI.createPickerRow({title:'8 uur', custom_item:28800});
dataGFT[6]=Titanium.UI.createPickerRow({title:'10 uur', custom_item:36000});
dataGFT[7]=Titanium.UI.createPickerRow({title:'12 uur', custom_item:43200});

pickerGFT.add(dataGFT);

var gft, hout, pmd, rest, papier, grof, textiel;

pickerGFT.addEventListener('change',function(e) {
	gft = e.row.custom_item;
	Titanium.App.Properties.setString("gft",gft);
	var gftcookie = Ti.App.Properties.getString("gft");
var sectorCookie = Ti.App.Properties.getString("sectorCookie");
if(sectorCookie == null || sectorCookie==0){}else{
    		url2 = "http://joon.wrhg.nl/afvalkalender/jsonVolgendDatumGFT.php?sector=" + sectorCookie;

			xhr2.open("GET",url2);
			xhr2.send();}

});
var gftcookie = Ti.App.Properties.getString("gft");

var pickerSnoeihout = Titanium.UI.createPicker({
	height:40,
	width:150,
	top: 140,
	left: 150,
});

var dataSnoeihout = [];
dataSnoeihout[0]=Titanium.UI.createPickerRow({title:'geen meldingen', custom_item:0});
dataSnoeihout[1]=Titanium.UI.createPickerRow({title:'30 minuten', custom_item:1800});
dataSnoeihout[2]=Titanium.UI.createPickerRow({title:'1 uur', custom_item:3600});
dataSnoeihout[3]=Titanium.UI.createPickerRow({title:'2 uur', custom_item:7200});
dataSnoeihout[4]=Titanium.UI.createPickerRow({title:'4 uur', custom_item:14400});
dataSnoeihout[5]=Titanium.UI.createPickerRow({title:'8 uur', custom_item:28800});
dataSnoeihout[6]=Titanium.UI.createPickerRow({title:'10 uur', custom_item:36000});
dataSnoeihout[7]=Titanium.UI.createPickerRow({title:'12 uur', custom_item:43200});

pickerSnoeihout.add(dataSnoeihout);

pickerSnoeihout.addEventListener('change',function(e) {
	hout = e.row.custom_item;
	Titanium.App.Properties.setString("hout",hout);
var houtcookie = Ti.App.Properties.getString("hout");
var sectorCookie = Ti.App.Properties.getString("sectorCookie");
if(sectorCookie == null || sectorCookie==0){}else{
    		url3 = "http://joon.wrhg.nl/afvalkalender/jsonVolgendDatumSnoeihout.php?sector=" + sectorCookie;

			xhr3.open("GET",url3);
			xhr3.send();}

});
var houtcookie = Ti.App.Properties.getString("hout");

var pickerPapierKarton = Titanium.UI.createPicker({
	height:40,
	width:150,
	top: 180,
	left: 150,
});

var dataPapierKarton = [];
dataPapierKarton[0]=Titanium.UI.createPickerRow({title:'geen meldingen', custom_item:0});
dataPapierKarton[1]=Titanium.UI.createPickerRow({title:'30 minuten', custom_item:1800});
dataPapierKarton[2]=Titanium.UI.createPickerRow({title:'1 uur', custom_item:3600});
dataPapierKarton[3]=Titanium.UI.createPickerRow({title:'2 uur', custom_item:7200});
dataPapierKarton[4]=Titanium.UI.createPickerRow({title:'4 uur', custom_item:14400});
dataPapierKarton[5]=Titanium.UI.createPickerRow({title:'8 uur', custom_item:28800});
dataPapierKarton[6]=Titanium.UI.createPickerRow({title:'10 uur', custom_item:36000});
dataPapierKarton[7]=Titanium.UI.createPickerRow({title:'12 uur', custom_item:43200});

pickerPapierKarton.add(dataPapierKarton);

pickerPapierKarton.addEventListener('change',function(e) {
	papier = e.row.custom_item;
	Titanium.App.Properties.setString("papier",papier);
var papiercookie = Ti.App.Properties.getString("papier");
var sectorCookie = Ti.App.Properties.getString("sectorCookie");
if(sectorCookie == null || sectorCookie==0){}else{
    		url4 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumPK.php?sector=" + sectorCookie;

			xhr4.open("GET",url4);
			xhr4.send();}

});
var papiercookie = Ti.App.Properties.getString("papier");

var pickerPMD = Titanium.UI.createPicker({
	height:40,
	width:150,
	top: 220,
	left: 150,
});

var dataPMD = [];
dataPMD[0]=Titanium.UI.createPickerRow({title:'geen meldingen', custom_item:0});
dataPMD[1]=Titanium.UI.createPickerRow({title:'30 minuten', custom_item:1800});
dataPMD[2]=Titanium.UI.createPickerRow({title:'1 uur', custom_item:3600});
dataPMD[3]=Titanium.UI.createPickerRow({title:'2 uur', custom_item:7200});
dataPMD[4]=Titanium.UI.createPickerRow({title:'4 uur', custom_item:14400});
dataPMD[5]=Titanium.UI.createPickerRow({title:'8 uur', custom_item:28800});
dataPMD[6]=Titanium.UI.createPickerRow({title:'10 uur', custom_item:36000});
dataPMD[7]=Titanium.UI.createPickerRow({title:'12 uur', custom_item:43200});

pickerPMD.add(dataPMD);

pickerPMD.addEventListener('change',function(e) {
	pmd = e.row.custom_item;
	Titanium.App.Properties.setString("pmd",pmd);
var pmdcookie = Ti.App.Properties.getString("pmd");
var sectorCookie = Ti.App.Properties.getString("sectorCookie");
if(sectorCookie == null || sectorCookie==0){}else{
url5 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumPMD.php?sector=" + sectorCookie;

			xhr5.open("GET",url5);
			xhr5.send();}

});

var pmdcookie = Ti.App.Properties.getString("pmd");
var pickerRestafval = Titanium.UI.createPicker({
	height:40,
	width:150,
	top: 260,
	left: 150,
});

var dataRestafval = [];
dataRestafval[0]=Titanium.UI.createPickerRow({title:'geen meldingen', custom_item:0});
dataRestafval[1]=Titanium.UI.createPickerRow({title:'30 minuten', custom_item:1800});
dataRestafval[2]=Titanium.UI.createPickerRow({title:'1 uur', custom_item:3600});
dataRestafval[3]=Titanium.UI.createPickerRow({title:'2 uur', custom_item:7200});
dataRestafval[4]=Titanium.UI.createPickerRow({title:'4 uur', custom_item:14400});
dataRestafval[5]=Titanium.UI.createPickerRow({title:'8 uur', custom_item:28800});
dataRestafval[6]=Titanium.UI.createPickerRow({title:'10 uur', custom_item:36000});
dataRestafval[7]=Titanium.UI.createPickerRow({title:'12 uur', custom_item:43200});

pickerRestafval.add(dataRestafval);

pickerRestafval.addEventListener('change',function(e) {
	rest = e.row.custom_item;
	Titanium.App.Properties.setString("rest",rest);
var restcookie = Ti.App.Properties.getString("rest");
var sectorCookie = Ti.App.Properties.getString("sectorCookie");
if(sectorCookie == null || sectorCookie==0){}else{
			url6 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumRest.php?sector=" + sectorCookie;

			xhr6.open("GET",url6);
			xhr6.send();}

});

var restcookie = Ti.App.Properties.getString("rest");
var pickerGrofvuil = Titanium.UI.createPicker({
	height:40,
	width:150,
	top: 300,
	left: 150,
});

var dataGrofvuil = [];
dataGrofvuil[0]=Titanium.UI.createPickerRow({title:'geen meldingen', custom_item:0});
dataGrofvuil[1]=Titanium.UI.createPickerRow({title:'30 minuten', custom_item:1800});
dataGrofvuil[2]=Titanium.UI.createPickerRow({title:'1 uur', custom_item:3600});
dataGrofvuil[3]=Titanium.UI.createPickerRow({title:'2 uur', custom_item:7200});
dataGrofvuil[4]=Titanium.UI.createPickerRow({title:'4 uur', custom_item:14400});
dataGrofvuil[5]=Titanium.UI.createPickerRow({title:'8 uur', custom_item:28800});
dataGrofvuil[6]=Titanium.UI.createPickerRow({title:'10 uur', custom_item:36000});
dataGrofvuil[7]=Titanium.UI.createPickerRow({title:'12 uur', custom_item:43200});

pickerGrofvuil.add(dataGrofvuil);

pickerGrofvuil.addEventListener('change',function(e) {
	grof = e.row.custom_item;
	Titanium.App.Properties.setString("grof",grof);	
var grofcookie = Ti.App.Properties.getString("grof");
var sectorCookie = Ti.App.Properties.getString("sectorCookie");
if(sectorCookie == null || sectorCookie==0){}else{
    			url7 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumGrof.php?sector=" + sectorCookie;

			xhr7.open("GET",url7);
			xhr7.send();}
 
});

var grofcookie = Ti.App.Properties.getString("grof");
var dataTextiel = [];
dataTextiel[0]=Titanium.UI.createPickerRow({title:'geen meldingen', custom_item:0});
dataTextiel[1]=Titanium.UI.createPickerRow({title:'30 minuten', custom_item:1800});
dataTextiel[2]=Titanium.UI.createPickerRow({title:'1 uur', custom_item:3600});
dataTextiel[3]=Titanium.UI.createPickerRow({title:'2 uur', custom_item:7200});
dataTextiel[4]=Titanium.UI.createPickerRow({title:'4 uur', custom_item:14400});
dataTextiel[5]=Titanium.UI.createPickerRow({title:'8 uur', custom_item:28800});
dataTextiel[6]=Titanium.UI.createPickerRow({title:'10 uur', custom_item:36000});
dataTextiel[7]=Titanium.UI.createPickerRow({title:'12 uur', custom_item:43200});

pickerTextiel.add(dataTextiel);

pickerTextiel.addEventListener('change',function(e) {
	textiel = e.row.custom_item;
	Titanium.App.Properties.setString("textiel",textiel);
var textielcookie = Ti.App.Properties.getString("textiel");
var sectorCookie = Ti.App.Properties.getString("sectorCookie");
if(sectorCookie == null || sectorCookie==0){}else{
    		url8 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumTextiel.php?sector=" + sectorCookie;

			xhr8.open("GET",url8);
			xhr8.send();}

});
var textielcookie = Ti.App.Properties.getString("textiel");

winInstellingen.add(lblStraat);
winInstellingen.add(pickerStraat);
winInstellingen.add(lblSector);
winInstellingen.add(lblTitelAfval);
winInstellingen.add(lblGFT);
winInstellingen.add(pickerGFT);
winInstellingen.add(lblSnoeihout);
winInstellingen.add(pickerSnoeihout);
winInstellingen.add(lblPapierKarton);
winInstellingen.add(pickerPapierKarton);
winInstellingen.add(lblPMD);
winInstellingen.add(pickerPMD);
winInstellingen.add(lblRestafval);
winInstellingen.add(pickerRestafval);
winInstellingen.add(lblGrofvuil);
winInstellingen.add(pickerGrofvuil);
winInstellingen.add(lblTextiel);
winInstellingen.add(pickerTextiel);

//Tableview klaarzetten

var RegData = [
 
{ leftImage:'Icoon-GFT.png', title:"GFT", hasChild:true },
{ leftImage:'Icoon-SH.png', title:"Snoeihout", hasChild:true },
{ leftImage:'Icoon-PK.png', title:"Papier en karton", hasChild:true },
{ leftImage:'Icoon-PMD.png', title:"PMD", hasChild:true },
{ leftImage:'Icoon-REST.png', title:"Restafval", hasChild:true },
{ leftImage:'Icoon-GROF.png', title:"Grofvuil", hasChild:true },
{ leftImage:'Icoon-TX.png', title:"Textiel", hasChild:true }
];

var TheTable = Titanium.UI.createTableView({
data:RegData
});

TheTable.addEventListener('click', function(e)
{
	var sectorCookie = Ti.App.Properties.getString("sectorCookie");
	var lblchild = Titanium.UI.createLabel({
	color:'#9c9c9c',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	width:'auto',
	top: 25,
	left: 10
});
	lblchild.text = e.row.title;
var childWin = Titanium.UI.createWindow({  
        title:'Tab 1 - Child Window',
        backgroundColor:'#1e1e1e',
        width: winInformatie.width,
        height: winInformatie.height
    }); 
    tabInformatie.add(childWin);
    childWin.add(lblchild);
    if(lblchild.text == 'GFT'){
    		childWin.add(lblGFTInformatie);
    		var url2 = "http://joon.wrhg.nl/afvalkalender/jsonVolgendDatumGFT.php?sector=" + sectorCookie;
    		xhr2.open("GET",url2);
	xhr2.send(); 
    		}
    		else{
    			if(lblchild.text == 'Snoeihout'){
    		childWin.add(lblSnoeihoutInformatie);
    		var url3 = "http://joon.wrhg.nl/afvalkalender/jsonVolgendDatumSnoeihout.php?sector=" + sectorCookie;

    		xhr3.open("GET",url3);
	xhr3.send(); 
    		}
    		else{
    			if(lblchild.text == 'Papier en karton'){
    		childWin.add(lblPapierKartonInformatie);
	var url4 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumPK.php?sector=" + sectorCookie;
    		xhr4.open("GET",url4);
	xhr4.send(); 
    		}
    		else{
    			if(lblchild.text == 'PMD'){
    		childWin.add(lblPMDInformatie);

	var url5 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumPMD.php?sector=" + sectorCookie;
    		xhr5.open("GET",url5);
	xhr5.send(); 
    		}
    		else{
    			if(lblchild.text == 'Textiel'){
    		childWin.add(lblTextielInformatie);
    		
    var url8 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumTextiel.php?sector=" + sectorCookie;
    		xhr8.open("GET",url8);
			xhr8.send();
    		}
    		else{
    			if(lblchild.text == 'Grofvuil'){
    		childWin.add(lblGrofvuilInformatie);
    		    var url7 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumGrof.php?sector="+sectorCookie;
    		xhr7.open("GET",url7);
	xhr7.send();
    		}
    		else{
    			childWin.add(lblRestafvalInformatie);

	var url6 = "http://www.joon.wrhg.nl/afvalkalender/jsonVolgendDatumRest.php?sector=" + sectorCookie;
    			xhr6.open("GET",url6);
	xhr6.send();
    		}
    		}
    		}
    		}
    		}
    		}
    childWin.add(lblInfoVolgendeOphaling);
    childWin.add(Sluit);
    childWin.open();
    Sluit.addEventListener('click', function(e)
{
childWin.close();
});
});
var Sluit = Ti.UI.createButton({
  title:"Terug",
  top: "85%",
  width: "80%",
  height: 40,
  left: "10%",
})

winInstellingen.addEventListener('open', function() {
var rijindex = Ti.App.Properties.getString("rijindex");
if(rijindex == null){
	rijindex = 0;
	pickerStraat.setSelectedRow(0, 0,true);
}
else
{
pickerStraat.setSelectedRow(0, rijindex,true);
}
	if(textielcookie == 0)
	{pickerTextiel.setSelectedRow(0, 0,true);}
	else{
		if(textielcookie == 1800)
		{pickerTextiel.setSelectedRow(0, 1,true);}
		else{
			if(textielcookie == 3600)
			{pickerTextiel.setSelectedRow(0,2, true);}
			else{
				if(textielcookie == 7200)
				{pickerTextiel.setSelectedRow(0, 3,true);}
				else{
					if(textielcookie == 14400){
						pickerTextiel.setSelectedRow(0, 4,true);}
						else{
							if(textielcookie == 28800)
							{pickerTextiel.setSelectedRow(0,5, true);}
							else{
								if(textielcookie == 43200)
								{pickerTextiel.setSelectedRow(0,6, true);}
								else{}
								}}}}}}
if(pmdcookie == 0)
	{pickerPMD.setSelectedRow(0, 0,true);}
	else{
		if(pmdcookie == 1800)
		{pickerPMD.setSelectedRow(0, 1,true);}
		else{
			if(pmdcookie == 3600)
			{pickerPMD.setSelectedRow(0,2, true);}
			else{
				if(pmdcookie == 7200)
				{pickerPMD.setSelectedRow(0, 3,true);}
				else{
					if(pmdcookie == 14400){
						pickerPMD.setSelectedRow(0, 4,true);}
						else{
							if(pmdcookie == 28800)
							{pickerPMD.setSelectedRow(0,5, true);}
							else{
								if(pmdcookie == 43200)
								{pickerPMD.setSelectedRow(0,6, true);}
								else{}
								}}}}}}
	if(houtcookie == 0)
	{pickerSnoeihout.setSelectedRow(0, 0,true);}
	else{
		if(houtcookie == 1800)
		{pickerSnoeihout.setSelectedRow(0, 1,true);}
		else{
			if(houtcookie == 3600)
			{pickerSnoeihout.setSelectedRow(0,2, true);}
			else{
				if(houtcookie == 7200)
				{pickerSnoeihout.setSelectedRow(0, 3,true);}
				else{
					if(houtcookie == 14400){
						pickerSnoeihout.setSelectedRow(0, 4,true);}
						else{
							if(houtcookie == 28800)
							{pickerSnoeihout.setSelectedRow(0,5, true);}
							else{
								if(houtcookie == 43200)
								{pickerSnoeihout.setSelectedRow(0,6, true);}
								else{}
								}}}}}}
if(gftcookie == 0)
	{pickerGFT.setSelectedRow(0, 0,true);}
	else{
		if(gftcookie == 1800)
		{pickerGFT.setSelectedRow(0, 1,true);}
		else{
			if(gftcookie == 3600)
			{pickerGFT.setSelectedRow(0,2, true);}
			else{
				if(gftcookie == 7200)
				{pickerGFT.setSelectedRow(0, 3,true);}
				else{
					if(gftcookie == 14400){
						pickerGFT.setSelectedRow(0, 4,true);}
						else{
							if(gftcookie == 28800)
							{pickerGFT.setSelectedRow(0,5, true);}
							else{
								if(gftcookie == 43200)
								{pickerGFT.setSelectedRow(0,6, true);}
								else{}
								}}}}}}
	if(grofcookie == 0)
	{pickerGrofvuil.setSelectedRow(0, 0,true);}
	else{
		if(grofcookie == 1800)
		{pickerGrofvuil.setSelectedRow(0, 1,true);}
		else{
			if(grofcookie == 3600)
			{pickerGrofvuil.setSelectedRow(0,2, true);}
			else{
				if(grofcookie == 7200)
				{pickerGrofvuil.setSelectedRow(0, 3,true);}
				else{
					if(grofcookie == 14400){
						pickerGrofvuil.setSelectedRow(0, 4,true);}
						else{
							if(grofcookie == 28800)
							{pickerGrofvuil.setSelectedRow(0,5, true);}
							else{
								if(grofcookie == 43200)
								{pickerGrofvuil.setSelectedRow(0,6, true);}
								else{}
								}}}}}}
if(restcookie == 0)
	{pickerRestafval.setSelectedRow(0, 0,true);}
	else{
		if(restcookie == 1800)
		{pickerRestafval.setSelectedRow(0, 1,true);}
		else{
			if(restcookie == 3600)
			{pickerRestafval.setSelectedRow(0,2, true);}
			else{
				if(restcookie == 7200)
				{pickerRestafval.setSelectedRow(0, 3,true);}
				else{
					if(restcookie == 14400){
						pickerRestafval.setSelectedRow(0, 4,true);}
						else{
							if(restcookie == 28800)
							{pickerRestafval.setSelectedRow(0,5, true);}
							else{
								if(restcookie == 43200)
								{pickerRestafval.setSelectedRow(0,6, true);}
								else{}
								}}}}}}
if(papiercookie == 0)
	{pickerPapierKarton.setSelectedRow(0, 0,true);}
	else{
		if(papiercookie == 1800)
		{pickerPapierKarton.setSelectedRow(0, 1,true);}
		else{
			if(papiercookie == 3600)
			{pickerPapierKarton.setSelectedRow(0,2, true);}
			else{
				if(papiercookie == 7200)
				{pickerPapierKarton.setSelectedRow(0, 3,true);}
				else{
					if(papiercookie == 14400){
						pickerPapierKarton.setSelectedRow(0, 4,true);}
						else{
							if(papiercookie == 28800)
							{pickerPapierKarton.setSelectedRow(0,5, true);}
							else{
								if(papiercookie == 43200)
								{pickerPapierKarton.setSelectedRow(0,6, true);}
								else{}
								}}}}}}
});


winInformatie.add(TheTable);
winOverzicht.add(labeltest);

//  Toevoegen tabs

tabGroup.addTab(tabOverzicht);  
tabGroup.addTab(tabInstellingen);
tabGroup.addTab(tabInformatie);
  
// open tab group
tabGroup.open();
