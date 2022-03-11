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
                console.log(newqty);
                dbItem[a].qty=newqty;
            }
        }
    }
}