
let dealallnew = document.querySelectorAll('.dealallnew')



//add ชื่อรถ
let addcarn = document.querySelectorAll('.carn')
//add รูป
let addbigpicter = document.getElementsByClassName("big-picter")
let addpicter1 = document.getElementsByClassName("picter1")
let addpicter2 = document.getElementsByClassName("picter2")
let addpicter3 = document.getElementsByClassName("picter3")
let addpicter4 = document.getElementsByClassName("picter4")
//input omlinebooking
let addonlinebooking = document.getElementsByClassName("onlinebooking")
//add รายละเอียด

// สร้าง Object ที่เก็บข้อมูลที่ต้องการส่งผ่าน URL Parameters


let allcar = [{
    rules:"ไม่รวมค่าน้ำมัน,ทางด่วน,ที่พัก",
    carn:"Allnewcommuter v7",
    indexseats:"7ที่นั่ง",
    wtime:"ใช้รถได้10ชั่วโมงต่อวัน",
    otime:"OTชั่วโมงละ300",
    pledge:"มัดจำ1,000บาท",
    img1:"img/products12/12.1.jpg",
    img2:"img/products12/12.2.jpg",
    img3:"img/products12/12.3.jpg",
    img4:"img/products12/12.4.jpg",
    img5:"img/products12/12.5.jpg",
    img6:"img/products12/12.6.jpg",
},
    
    {
    rules:"ไม่รวมค่าน้ำมัน,ทางด่วน,ที่พัก",
    carn:"Allnewcommuter v8",
    indexseats:"8ที่นั่ง",
    wtime:"ใช้รถได้10ชั่วโมงต่อวัน",
    otime:"OTชั่วโมงละ300",
    pledge:"มัดจำ1,000บาท",
    img1:"img/products1/1.jpg",
    img2:"img/products1/2.jpg",
    img3:"img/products1/3.jpg",
    img4:"img/products1/4.jpg",
    img5:"img/products1/5.jpg",
    img6:"img/products1/6.jpg",
    img7:"img/products1/7.jpg",
    img8:"img/products1/8.jpg",
    img9:"img/products1/9.jpg",
    img10:"img/products1/10.jpg",
    },{
    rules:"ไม่รวมค่าน้ำมัน,ทางด่วน,ที่พัก",
    carn:"Allnewcommuter v13",
    indexseats:"13ที่นั่ง",
    wtime:"ใช้รถได้10-12ชั่วโมงต่อวัน",
    otime:"OTชั่วโมงละ300",
    pledge:"มัดจำ1,000บาท",
    img1:"img/products9/8.1.jpg",
    img2:"img/products9/8.2.jpg",
    img3:"img/products9/8.3.jpg",
    img4:"img/products9/8.4.jpg",
    img5:"img/products9/8.5.jpg",   
    },{
    rules:"ไม่รวมค่าน้ำมัน,ทางด่วน,ที่พัก",
    carn:"Commuter v8",
    indexseats:"8ที่นั่ง",
    wtime:"ใช้รถได้10-12ชั่วโมงต่อวัน",
    otime:"OTชั่วโมงละ200",
    pledge:"มัดจำ500บาท" ,
    img1:"img/products11/10.1.jpg",
    img2:"img/products11/10.2.jpg",
    img3:"img/products11/10.3.jpg",
    img4:"img/products11/10.4.jpg",
    img5:"img/products11/10.5.jpg",   
    },{
    rules:"ไม่รวมค่าน้ำมัน,ทางด่วน,ที่พัก",
    carn:"Commuter v13",
    indexseats:"13ที่นั่ง",
    wtime:"ใช้รถได้10-12ชั่วโมงต่อวัน",
    otime:"OTชั่วโมงละ200",
    pledge:"มัดจำ500บาท" ,
    img1:"img/products10/9.5.jpg",
    img2:"img/products10/9.2.jpg",
    img3:"img/products10/9.3.jpg",
    img4:"img/products10/9.4.jpg",
    img5:"img/products10/9.1.jpg", 
    },{
    rules:"ไม่รวมค่าน้ำมัน,ทางด่วน,ที่พัก",
    carn:"Benz sprinter 10",
    indexseats:"10ที่นั่ง",
    wtime:"ใช้รถได้10ชั่วโมงต่อวัน",
    otime:"OTชั่วโมงละ300",
    pledge:"มัดจำ1,000บาท",
    img1:"img/products4/3.1.jpg",
    img2:"img/products4/3.2.jpg",
    img3:"img/products4/3.3.jpg",
    img4:"img/products4/3.4.jpg",
    img5:"img/products4/3.5.jpg",  
    },{
    rules:"ไม่รวมค่าน้ำมัน,ทางด่วน,ที่พัก",
    carn:"Benz sprinter 15",
    indexseats:"15ที่นั่ง",
    wtime:"ใช้รถได้10ชั่วโมงต่อวัน",
    otime:"OTชั่วโมงละ300",
    pledge:"มัดจำ1,000บาท",
    img1:"img/products3/2.1.jpg",
    img2:"img/products3/2.2.jpg",
    img3:"img/products3/2.3.jpg",
    img4:"img/products3/2.4.jpg",
    img5:"img/products3/2.5.jpg",
    },{
    rules:"ไม่รวมค่าน้ำมัน,ทางด่วน,ที่พัก",
    carn:"Toyota majesty",
    indexseats:"7ที่นั่ง",
    wtime:"ใช้รถได้10ชั่วโมงต่อวัน",
    otime:"OTชั่วโมงละ300",
    pledge:"มัดจำ1,000บาท",
    img1:"img/products5/4.1.jpg",
    img2:"img/products5/4.2.jpg",
    img3:"img/products5/4.3.jpg",
    img4:"img/products5/4.4.jpg",
    img5:"img/products5/4.5.jpg",
    img6:"img/products5/4.6.jpg",
    img7:"img/products5/4.7.jpg",  
    },{
    rules:"ไม่รวมค่าน้ำมัน,ทางด่วน,ที่พัก",
    carn:"Hundai h1",
    indexseats:"7ที่นั่ง",
    wtime:"ใช้รถได้10ชั่วโมงต่อวัน",
    otime:"OTชั่วโมงละ300",
    pledge:"มัดจำ1,000บาท",
    img1:"img/products2/1.1.jpg",
    img2:"img/products2/1.2.jpg",
    img3:"img/products2/1.3.jpg",
    img4:"img/products2/1.4.jpg",
    img5:"img/products2/1.5.jpg",
    img6:"img/products2/1.6.jpg",
    img7:"img/products2/1.7.jpg",
    },{
    rules:"ราคาเหมา(รวมค่าน้ำมัน,ทางด่วน,ที่พัก)",
    carn:"Bus",
    indexseats:"50ที่นั่ง",
    wtime:"ใช้รถได้12ชั่วโมงต่อวัน",
    otime:"2ชั้น รถแอร์",
    pledge:"มัดจำ2,000บาท",
    img1:"img/products6/5.1.jpg",
    img2:"img/products6/5.2.jpg",
    img3:"img/products6/5.3.jpg",
    img4:"img/products6/5.4.jpg",
    img5:"img/products6/5.5.jpg",
    img6:"img/products6/5.6.jpg",
    img7:"img/products6/5.7.jpg",
    img8:"img/products6/5.8.jpg",
    img9:"img/products6/5.9.jpg",
    img10:"img/products6/5.10.jpg",     
    },{
    rules:"Transfers",
    carn:"Suv",
    indexseats:"5-7ที่นั่ง",
    wtime:`ทางเรามีรถให้เลือกใช้สามารถ<a href="/papa">คลิกเพื่อติดต่อพนักงาน</a>`,
    otime:" ",
    pledge:" ",
    img1:"img/products7/6.1.jpg",
    img2:"img/products7/6.2.jpg",
    img3:"img/products7/6.3.jpg",
    img4:"img/products7/6.4.jpg",
    img5:"img/products7/6.5.jpg",      
    },{
    rules:"Transfers",
    carn:"รถเก๋งSedan",
    indexseats:"4ที่นั่ง",
    wtime:`ทางเรามีรถให้เลือกใช้สามารถ<a href="/papa">คลิกเพื่อติดต่อพนักงาน</a>`,
    otime:" ",
    pledge:" " ,
    img1:"img/products8/7.1.jpg",
    img2:"img/products8/7.2.jpg",
    img3:"img/products8/7.3.jpg",
    img4:"img/products8/7.4.jpg",
    img5:"img/products8/7.5.jpg",  
    }]

send=(x)=>{

//เมื่อกดปุ่มจะมีค่า=x

// สร้าง URL Parameters จาก Object
let params = new URLSearchParams(allcar[x]).toString();

// เพิ่ม URL Parameters ลงใน URL
let url = "http://localhost:3000/ac?" + params;

// เปิดหน้าเว็บใหม่ด้วย URL ที่สร้างขึ้น
window.location.href = url;
}

onload = ()=>{
    // อ่าน URL Parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    // ดึงค่า parameter ออกมา
    const rules = urlParams.get('rules');
    const carn = urlParams.get('carn');
    const indexseats = urlParams.get('indexseats');
    const wtime = urlParams.get('wtime');
    const otime = urlParams.get('otime');
    const pledge = urlParams.get('pledge');
    
    // ทำอะไรบางอย่างกับข้อมูลที่ได้
    if (window.location.pathname === '/pojegpapa/allnew%20commuter.html') {
        document.title = carn;
    }
    document.getElementById('rules').innerHTML = rules;
    document.getElementById('carn').innerHTML = carn;
    document.getElementById('indexseats').innerHTML = indexseats;
    document.getElementById('wtime').innerHTML = wtime;
    document.getElementById('otime').innerHTML = otime;
    document.getElementById('pledge').innerHTML = pledge;
    document.getElementById('onlinebooking').value = carn;
    title = carn;
   
    if (otime === " ") {
        var otimeElement = document.getElementById('otime');
        var pledgeElement = document.getElementById('pledge');
        if (otimeElement) {
            otimeElement.remove();
        }
        if (pledgeElement) {
            pledgeElement.remove();
        }
    }
};

