let compraTotal = 120000;
let esCliente = true;
let descuento = 0;

if (compraTotal > 100000) {
    if (esCliente) {
        descuento = 0.20; // 20%
    } else {
        descuento = 0.10; // 10%
    }
} else {
    if (esCliente) {
        descuento = 0.05; // 5%
    } else {
        descuento = 0; // Sin descuento
    }
}

let totalFinal = compraTotal - (compraTotal * descuento);
console.log(`10. Total a pagar con descuento: $${totalFinal}`);