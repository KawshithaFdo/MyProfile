function loadtabledata(item) {
    let row = `<tr><td>${item.itemid}</td><td>${item.itemname}</td><td>${item.qty}</td><td>${item.price}</td></tr>`;
    $("#OrderTable").append(row);
}
function clear() {
    $('#txtI_Id,#txtI_Name,#txtI_Price,#txtI_Qoh,#txtI_Qty').val("");
}
function updateqty(itemId,qty){
    for (var i in dbItem){
        if (dbItem[i].id==itemId){
            dbItem[i].qty-=qty;
        }
    }
}
