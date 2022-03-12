function saveCustomer(customer){
    dbCustomer.push(customer);
    alert("Customer Added Successfully");
}
function loadallCustomers(){
    $("#customerTable").empty();
    for (var i of dbCustomer) {
        let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.salary}</td></tr>`;
        $("#customerTable").append(row);

    }
}
function searchCustomer(id){
    for (let i = 0; i < dbCustomer.length; i++) {
        if (dbCustomer[i].id == id) {
            return dbCustomer[i];
        }
    }
}
function deleteCustomer(id) {
    var d_index;
    for (let i = 0; i < dbCustomer.length; i++) {
        if (dbCustomer[i].id == id) {
            d_index=i;
        }
    }
    dbCustomer.splice(d_index,1);
}
function updateCustomer(cust){
    for (let i = 0; i < dbCustomer.length; i++) {
        if (dbCustomer[i].id == cust.id) {
            dbCustomer[i].name=cust.name;
            dbCustomer[i].address=cust.address;
            dbCustomer[i].salary=cust.salary;
        }
    }

}
