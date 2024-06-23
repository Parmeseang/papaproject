//ระบบ เปลี่ยนpage
const express = require('express')
const https = require('https');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const router = express.Router()
const { notifyLine } = require("../public/js/send")
const token = 'kMxSDu1gG21SQCMUANh7qwaIkK1ICncfil4CxjNC3t8';

router.use(cookieParser());

router.use((req, res, next) => {
    res.cookie('key', 'value', {
      sameSite: 'None',
      secure: false, // เปลี่ยนเป็น true เมื่อใช้ HTTPS
      httpOnly: true
    });
    next();
  });

  

router.get('/',(req,res)=>{
 
    res.render('papa')
})

router.get('/papacar',(req,res)=>{
    res.render('papacar')
})

router.get('/onlinebooking',(req,res)=>{
    res.render('onlinebooking')
})

router.get('/ac',(req,res)=>{
    let item1 = req.query.img1
    let item2 = req.query.img2
    let item3 = req.query.img3
    let item4 = req.query.img4
    let item5 = req.query.img5
    let item6 = req.query.img6
    let item7 = req.query.img7
    let item8 = req.query.img8
    let item9 = req.query.img9
    let item10 = req.query.img10
    console.log(item1)
    res.render('ac',{item1:item1,item2:item2,item3:item3,item4:item4,item5:item5,item6:item6,item7:item7,item8:item8,item9:item9,item10:item10})
})

router.get('/contrect',(req,res)=>{
    res.render('contrect')
})

router.post('/insert',(req,res)=>{
   
    let text = '\n' +'หา: ' + req.body.car + '\n' +
           'ชื่อลูกค้า: ' + req.body.name + '\n' +
           'เบอร์โทร: ' + req.body.ph + '\n' +
           'line ID: ' + req.body.lindid + '\n' +
           'รับจาก: ' + req.body.inInput + ' ไป ' + req.body.toInput + '\n' +
           'ช่วงวันที่: ' + req.body.whenInput;

    notifyLine(token, text)
    console.log(text)
    // res.render('papa')
})



module.exports = router
