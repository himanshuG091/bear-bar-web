document.addEventListener('DOMContentLoaded', function() {
    console.log("Bear Bar website is ready!");
    // You can add more JavaScript code here later
    const barberShops = [
    { name: "Bear Cuts", waitTime: "15 minutes" },
    { name: "Clipper's Haven", waitTime: "10 minutes" },
    { name: "The Hair Spot", waitTime: "20 minutes" }
];

const barberShopsDiv = document.getElementById('barberShops');
barberShops.forEach(shop => {
    const shopElement = document.createElement('div');
    shopElement.textContent = `${shop.name} - Wait Time: ${shop.waitTime}`;
    barberShopsDiv.appendChild(shopElement);
});

});
