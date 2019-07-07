var express=require('express')
var app=express()
var path = require('path')
const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/index',function(req,res)
{
res.sendFile(__dirname+'/vendor/order_list.html')
})
app.get('/pl_order',function(req,res)
{

//order has been placed 
let team19_ord = db.collection('team19_orders').doc('BJ');

let setWithOptions = cityRef.set({
  accept:0,
  reject:0,
  pending:1,
  deli:0,
  vendor_id:5,
  item_id:8,
  qty:3,
  item_name:'idli',
  vendor_visi:0,
  cust_id:55
}, {merge: true});

});

app.get('/rej_order',function(req,res)
{

})

app.get('/acc_order',function(req,res)
{

})

app.get('/deli_order',function(req,res)
{

})

app.get('/disp_order',function(req,res)
{

})
app.get('/feed_data',function(req,res)
{
    //feedback data
})
app.listen(3000)