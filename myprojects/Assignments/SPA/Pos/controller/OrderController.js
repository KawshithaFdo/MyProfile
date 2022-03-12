function loadtabledata(item) {
    let row = `<tr><td>${item.itemid}</td><td>${item.itemname}</td><td>${item.qty}</td><td>${item.price}</td></tr>`;
    $("#OrderTable").append(row);
}
function clear() {
    $('#txtI_Id,#txtI_Name,#txtI_Price,#txtI_Qoh,#txtI_Qty').val("");
}
function placeOrder(Order) {
    dbOrder.push(Order);
    alert("Order Placed Successfully");
}
function clearAll() {
    $('#txtPayment,#txtDiscount,#txtBalance').val("");
}