function loginPage() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == "admin" && pass == "admin") {
        alert("Login");
        window.open('./invoice.html', '_blank');
    }
    else {
        alert("Invalid");
    }
}

// login invoice script end

function addItem() {
    var comPname = document.getElementById('partyName').innerHTML;
    // var addRess = document.getElementById('address').innerHTML;
    var pinCode = parseInt(document.getElementById('pincode').value);
    var gstNo = parseInt(document.getElementById('gst').value);
    var vehicleNo = parseInt(document.getElementById('vehclno').value);
    var qty = parseInt(document.getElementById('quantity').value);
    var daTe = parseInt(document.getElementById('date').value);

    // var rice = document.getElementById('product').innerHTML;
    var rice = document.rt.product.value;
    var dal = document.rt.product.value;
    var badam = document.rt.product.value;
    var soya = document.rt.product.value;
    if (rice == "Rice") {

        var total = 200 * qty;
    }
    else if (dal == "Pulses") {
        var total = 60 * qty;
    }
    else if (badam == "Badam") {
        var total = 700 * qty;
    }
    else if (soya == "SoyaBean") {
        var total = 150 * qty;
    }
    document.getElementById('totalAfterTax').innerHTML = total;
    document.getElementById('amount').innerHTML = total;
    // window.open('./invoiceform.html', '_blank');

    document.getElementById('heading').innerHTML = document.rt.dishq.value;
    document.getElementById('address').innerHTML = document.rt.adres.value;
    document.getElementById('gstnn').innerHTML = document.rt.gstno.value;

    // iems and discription-----------------------------------------------
    document.getElementById('inputrice').innerHTML = document.rt.product.value;
    document.getElementById('inputqty').innerHTML = document.rt.quntity.value;
    

     if (rice == "Rice") {

        var rate = "200";
    }
    else if (dal == "Pulses") {
        var rate = 60;
    }
    else if (badam == "Badam") {
        var rate = 700;
    }
    else if (soya == "SoyaBean") {
        var rate = 150;
    }
    document.getElementById('inputrate').innerHTML = rate;
    


}