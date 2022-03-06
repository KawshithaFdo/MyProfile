function saveItem(item){
    dbItem.push(item);
    alert("Customer Added Successfully");
}
function loadallItems(){
    $("#itemTable").empty();
    for (var i of dbItem) {
        let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.price}</td><td>${i.qty}</td></tr>`;
        $("#customerTable").append(row);

    }
}
function searchItem(id){
    for (let i = 0; i < dbItem.length; i++) {
        if (dbItem[i].id == id) {
            return dbItem[i];
        }
    }
}
function deleteItem(id) {
    var d_index;
    for (let i = 0; i < dbItem.length; i++) {
        if (dbItem[i].id == id) {
            d_index=i;
        }
    }
    dbCustomer.splice(d_index,1);
}
function updateItem(item){
    for (let i = 0; i < dbItem.length; i++) {
        if (dbItem[i].id == item.id) {
            dbItem[i].name=item.name;
            dbItem[i].price=item.price;
            dbItem[i].qty=item.qty;
        }
    }

}
function clearAll() {
    $('#txtItemId,#txtItemName,#txtItemPrice,#txtItemQty,#itemsearch').val("");
}