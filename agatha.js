document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = document.getElementById('weight').value;
    const pricePerKg = 18000;
    const totalPrice = weight * pricePerKg;

    const message = `Halo, saya ingin memesan jasa penitipan barang dengan berat ${weight} kg dengan total harga Rp ${totalPrice}. Terima kasih.`;
    const whatsappUrl = `https://wa.me/6289652964926?text=${encodeURIComponent(message)}`;
    
    window.location.href = whatsappUrl;
});
