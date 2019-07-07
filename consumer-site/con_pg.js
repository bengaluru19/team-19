obj_div={}
obj_ven={}
var idl=0;
var idd=0;
var idc=0;
var obj_ch={}
var obj_it={}
var ido=0;
firebase.initializeApp({

    apiKey: '',
    authDomain: "",
  projectId: "team19-8586d",
    });
	  var db=firebase.firestore();

	  let venref = db.collection('team19_vendor');
	  let ven = venref.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      //console.log(doc.id, '=>', doc.data());

      	var row= document.createElement("tr");
		  row.id="cl"+idd
		  var r1="cl"+idd
		  idd=idd+1
      	var ele=document.createElement("td");
      	ele.innerHTML=doc.data()["vendor_id"];
      	row.appendChild(ele);
      	var ele=document.createElement("td");
      	ele.innerHTML=doc.data()["name"];
      	row.appendChild(ele);
      	var ele=document.createElement("td");
      	ele.innerHTML=doc.data()["category"];
      	row.appendChild(ele);
      	var ele=document.createElement("td");
      	ele.innerHTML=doc.data()["phone_no"];
      	row.appendChild(ele);
      	var ele=document.createElement("td");
      	ele.innerHTML="N:"+doc.data()["location"]["_lat"]+" E:"+doc.data()["location"]['_long'];
      	row.appendChild(ele);
          var ele=document.createElement("td");
          ele.className="elcl"
		ele.innerHTML="view"
		ele.style.backgroundColor="white"
		ele.id="id"+idl;
		idl=idl+1
		obj_div[ele.id]=r1
		obj_ven[ele.id]=doc.data()["vendor_id"];
		ele.addEventListener('click',function()
		{
			console.log(this.id)
      
      var k1=document.getElementById(this.id)
	  var z=document.getElementById(obj_div[this.id.toString()]);
	  var ven_id=obj_ven[this.id]
	  
	 // let venr=db.collection('team19_vendor').doc(ven_id.toString())
	  //let ven = venr.get()
	  var docRef = db.collection("team19_vendor").doc(ven_id.toString());

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
		var a1=doc.data()["catalog"]

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
var a1=doc.data()["catalog"]
//getting item list
var or_id=0;
for(var i=0;i<a1.length;i++){
var docRef = db.collection("team19_item").doc(a1[i].toString());
var a2;

docRef.get().then(function(doc) {
    if (doc.exists) {
		console.log("Document data:   cdv", doc.data());
		//console.log("item",a2)
var divid=obj_div[this.id]
var d1=document.createElement("div")
var row= document.createElement("tr");
var ele=document.createElement("td");
      	ele.innerHTML=doc.data()['name'];
      	row.appendChild(ele);
      	var ele=document.createElement("td");
      	ele.innerHTML=doc.data()["price"];
      	row.appendChild(ele);
		  var ele=document.createElement("td")
		  ele.style.backgroundColor='cyan'
		  ele.innerHTML="add to cart"
ele.id="id"+idc;
idc=idc+1
obj_it[ele.id]=doc.data()["item_id"]
obj_ch[ele.id]=doc.data()["price"];
var tot_pr=0;
ele.addEventListener('click',function()
{
tot_pr+=obj_ch[this.id]
var curr_item_id=obj_it[this.id]
or_id=obj_it[this.id]


var bt=document.createElement("button")
bt.innerHTML="place order";
bt.id="id_bt"
bt.setAttribute("type","submit")

bt.addEventListener('click',function()
{
	var docRef = db.collection("team19_item").doc(curr_item_id.toString());

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
var zz=doc.data()

	db.collection("team19_orders").doc(or_id.toString()).set({
    pname: zz['name'],
    qty: 1 ,
	accept: 0,
	reject:0,
	pend:1,
	ord_id: or_id,
deli:0
})
.then(function() {
	console.log("Document successfully written!");
	document.location.reload();
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

})
document.body.appendChild(bt)

})
row.appendChild(ele)
var tab=document.querySelector("table");
      	tab.appendChild(row);

		//a2=doc.data();

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


}

  /*.then(snapshot => {
    snapshot.forEach(doc => {
	console.log(doc.data()["phone_no"])
	})})
	
	  var a=document.createElement("p")
	  z.appendChild(a)
	  console.log(ven)*/

	  
		})
		
	row.appendChild(ele)
      	var tab=document.querySelector("table");
      	tab.appendChild(row);

    });
  });

  var b=document.createElement("hr")
		  document.body.appendChild(b)
function add_pro()
{
	console.log(this.id)
      
      var k1=document.getElementById(this.id)
	  //var z=document.getElementById(obj_div[this.id.toString()]);
	  var ven_id=obj_ven[this.id]
	  /*
	  let venr=db.collection('team19_vendor').doc(ven_id)
	  let ven = venr.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
	console.log(doc.data()["phone_no"])
	})})
	
	  var a=document.createElement("p")
	  z.appendChild(a)*/
}