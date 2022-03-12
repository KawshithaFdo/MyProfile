function AddOrder(itemList) {
    for (var i in itemList){
        dbItem_Order.push(itemList[i]);
    }
}
function updateqty(itemList){
    for (var i in itemList){
        for (var a in dbItem){
            if (itemList[i].itemid==dbItem[a].id){
                let newqty=itemList[i].qoh-itemList[i].qty;
                dbItem[a].qty=newqty;
            }
        }
    }
}
function searchOrderItem(id){
    for (let i = 0; i < dbItem_Order.length; i++) {
        if (dbItem_Order[i].orderid == id) {
            let row = `<tr><td>${dbItem_Order[i].itemid}</td><td>${dbItem_Order[i].itemname}</td><td>${dbItem_Order[i].qty}</td><td>${dbItem_Order[i].price}</td></tr>`;
            $("#OrderTable").append(row);

        }
    }
}