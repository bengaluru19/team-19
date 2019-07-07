  var ct = 0
  var ordid_id={}
  var aud_objq={}
  var aud_objp={}
  var asd=0

  firebase.initializeApp({
    apiKey: '',
    authDomain: "",
    projectId: "team19-8586d",
      
    storageBucket: "team19-8586d.appspot.com",
    appId: "1:338334909812:web:2bd98149c08bc0f6"
  });
  
  var db = firebase.firestore();
  query = db.collection('team19_orders');


  let observer = query.onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
      if (change.type === 'added') {
        console.log('New order: ', change.doc.data());
var obj=change.doc.data();
        var sel=confirm("you have a new order for"+obj['pname'])
        if(sel==true)
        {
        var curr = document.createElement('div');
  curr.setAttribute("class", "row");
  var ins = document.createElement('div');
  //ins.className+="ord_l"
  ins.className+="ord_in"
  ins.innerHTML = obj['pname'];
  curr.appendChild(ins);
  var ins = document.createElement('div');
  ins.className+="ord_in"
  //ins.className+="ord_l"
  ins.innerHTML = obj['qty'];
  curr.appendChild(ins);
  var ins = document.createElement('div');
  //ins.className+="ord_l"
  ins.className+="ord_in"
  ins.id="id"+ct;
  var cid="id"+ct;
  ordid_id[cid]=obj['order_id']
  ct=ct+1
  ins.innerHTML = "ready for delivery";
  ins.addEventListener('click',function()
  {
    console.log(this.id)
    console.log("fbdbvdh")
    var k1=document.getElementById(this.id)
    k1.innerHTML="out for delivery";
  })
  curr.appendChild(ins)

  var ins=document.createElement('button');
  ins.innerHTML="play"
  ins.id="pl"+asd
  asd=asd+1
  var t=obj['qty'].toString()+' '+obj['pname'];
  aud_objp[ins.id]=obj['pname'];
  aud_objq[ins.id]=obj['qty']
  ins.addEventListener('click',function()
  {
    console.log(this.id)
   var tid=this.id;
var text="product name is "
text += aud_objp[tid.toString()]
text += " and quantity is "
text += aud_objq[tid.toString()]
text = encodeURIComponent(text);
console.log('pl'+tid.toString());
var url = "https://translate.google.com/translate_tts?ie=UTF-8&tl=ml&client=tw-ob&q="+text;
$('audio').attr('src',url).get(0).play();

  })
  curr.appendChild(ins)  



  document.body.appendChild(curr)
        }
      }
      if (change.type === 'modified') {
        console.log('Modified order: ', change.doc.data());
      }
      if (change.type === 'removed') {
        console.log('Removed order: ', change.doc.data());
      }
    });
  });
console.log("done",query)
firebase.firestore().collection('team19_orders').get().then(snapshot => {
snapshot.docs.forEach(doc => {

var z=doc.data().order_id;
var zs=z.toString()
db.collection('team19_orders').doc(zs).update({"deli":1});
var z=doc.data().order_id;
console.log("cd",z)
})
} )
