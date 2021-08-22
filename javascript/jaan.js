let memory = 0;
let storage = 0;
let delivery_price = 0;
let best_price = 1299;
let total = 0;


document.getElementById('8gb-memory').addEventListener('click', function () {
    memory = 0;
    sum();
    document.getElementById('extra-memory-cost').innerText = memory;
    // console.log({ memory });
})

document.getElementById('16gb-memory').addEventListener('click', function () {
    memory = 180;
    sum();
    document.getElementById('extra-memory-cost').innerText = memory;
    // console.log({ memory });

})

document.getElementById("256-ssd-storage").addEventListener('click', function () {
    storage = 0;
    sum();
    document.getElementById('extra-storage-cost').innerText = storage;
    // console.log({ storage });

})

document.getElementById("512-ssd-storage").addEventListener('click', function () {
    storage = 100;
    sum();
    document.getElementById('extra-storage-cost').innerText = storage;

    // console.log({ storage });

})

document.getElementById("1tb-ssd-storage").addEventListener('click', function () {
    storage = 180;
    sum();
    document.getElementById('extra-storage-cost').innerText = storage;
    // console.log({ storage });
})

document.getElementById("free-delivery").addEventListener('click', function () {
    delivery_price = 0;
    sum();
    document.getElementById('delivery-cost').innerText = delivery_price;
    // console.log({ delivery_cost: delivery_price });

})

document.getElementById("paid-delivery").addEventListener('click', function () {
    delivery_price = 20;
    sum();
    document.getElementById('delivery-cost').innerText = delivery_price;
    // console.log({ delivery_cost: delivery_price });
})

function sum() {
    total = best_price + memory + storage + delivery_price;
    document.getElementById('total-cost').innerText = total
    document.getElementById('final-cost').innerText = total
    // console.log({ total });
}

sum();

document.getElementById('promo-code-apply').addEventListener('click', function () {
    let promo_code = document.getElementById('input-promo-code').value;

    if (promo_code == "stevekaku") {
        calculationAfterDiscount()
    }
    document.getElementById('input-promo-code').value = "";

})

function calculationAfterDiscount() {
    let totalAfterPerchantage = (total / 100) * 20;
    document.getElementById('final-cost').innerText = total - totalAfterPerchantage;

}



























/* document.getElementById('8gb-memory').addEventListener('click', function () {
    let eightGbMemory = document.getElementById('8gb-memory');
    let memoryInputText = eightGbMemory.innerText;
    let memoryInitialPrice = parseInt(memoryInputText);

    let memoryPrice = document.getElementById('memory-price');
    let ext8GbMemoryPriceText = parseInt(memoryPrice.innerText);
    let priceOf8GMemory = ext8GbMemoryPriceText;
    memoryInitialPrice = priceOf8GMemory;

})

document.getElementById('16gb-memory').addEventListener('click', function () {
    let sisxteenGbmemory = document.getElementById('memory-price');
    console.log(sisxteenGbmemory.innerText);
    let ext16GbmemoryText = parseInt(sisxteenGbmemory.innerText);
    let priceOf16GMemory = ext16GbmemoryText + 180;
    sisxteenGbmemory.innerText = priceOf16GMemory;

});

/*
const eightGbMemory = document.getElementById('8gb-memory');

const sisxteenGbMemory = document.getElementById('16gb-memory');

const extraMemory = document.getElementById('memory-price');

eightGbMemory.addEventListener('click',function(){


}) */