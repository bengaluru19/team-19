<!DOCTYPE html>
<html>
<head>
<title></title>
<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-firestore.js"></script>
</head>
<body>


<h1>Hello Vendor!!</h1>
<div class="noti">
<span class="pname">x</span>
<span class="qty">3</span>
<span class="status"><button class="status">Ready</button></span>
</div>
<div class="noti">
<span class="pname">x</span>
<span class="qty">3</span>
<span class="status"><button class="status">Ready</button></span>
</div>


  <script type="text/javascript">
  firebase.initializeApp({
  apiKey: '',
  authDomain: "",
projectId: "team19-8586d",
  });
  var db=firebase.firestore();


query = db.collection('team19_orders');

let observer = query.onSnapshot(querySnapshot => {
 querySnapshot.docChanges().forEach(change => {
   if (change.type === 'added') {
     console.log('New order: ', change.doc.data());


     bool chk=window.confirm("You want to accept order!!");
     if(chk==true)
     {
        
     }
     else
     {

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

     // var curr=document.createElement('div');
     // curr.setAttribute("class","noti");
     
     // var ins=document.createElement('span');
     // ins.setAttribute("class","pname");
     // ins.innerHTML="hello";

     // curr.appendChild(ins);

     // ins=document.createElement('span');
     // ins.setAttribute("class","qty");
     // ins.innerHTML="hello1";

     // curr.appendChild(ins);

     // //noti.appendChild(curr);
     // document.body.appendChild(curr);


     // ins=document.createElement('span');
     // ins.setAttribute("class","status");
     // var bt1=createElement("button");
     // bt1.setAttribute()
     // ins.innerHTML=change.doc.data("");

  </script>



</body>
</html>
