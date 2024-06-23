let currentId = 0;

function checkAndRemoveEmptyImages() {
    for (let i = 10; i >= 1; i--) {
        let imgElement = document.getElementById(`myImage${i}`);
        if (!imgElement.src || imgElement.src === window.location.href) {
            imgElement.remove();
        }
    }
}

function openModal(imageUrl, id) {
    let modal = document.getElementById("myModal");
    let modalImage = document.getElementById("modalImage");

    // ตรวจสอบว่ารูปภาพมี src หรือไม่
    if (imageUrl) {
        modal.style.display = "block";
        modalImage.src = imageUrl;

        // กำหนดค่า currentId เพื่อให้ฟังก์ชันอื่นสามารถเข้าถึงได้
        currentId = id;
        select(currentId);
    }
    checkAndRemoveEmptyImages();
}

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function select(id) {
    let modalImage = document.getElementById("modalImage");

    // ใช้การวนลูปเพื่อลดการทำซ้ำโค้ด
    for (let i = 1; i <= 10; i++) {
        let imageElement = document.getElementById(`myImage${i}`);
        if (id.toString() === imageElement.alt && imageElement.src) {
            modalImage.src = imageElement.src;
            console.log(`รูป ${id}`);
            break;
        }
    }
}

function minus() {
    do {
        // ลดค่า currentId ลง 1
        currentId = currentId > 1 ? currentId - 1 : 10; // วนกลับไปที่ 10 ถ้า currentId น้อยกว่า 1
    } while (!document.getElementById(`myImage${currentId}`) || !document.getElementById(`myImage${currentId}`).src);

    select(currentId);
    console.log(`ลบ 1`);
    checkAndRemoveEmptyImages();
}

function plus() {
    do {
        // เพิ่มค่า currentId ขึ้น 1
        currentId = currentId < 10 ? currentId + 1 : 1; // วนกลับไปที่ 1 ถ้า currentId มากกว่า 10
    } while (!document.getElementById(`myImage${currentId}`) || !document.getElementById(`myImage${currentId}`).src);

    select(currentId);
    console.log(`บวก 1`);
    checkAndRemoveEmptyImages();
}






