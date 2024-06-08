const items = [
    {
        productname:'shoes',
        productdescription:'A shoe is an item of footwear intended to protect and comfort the human foot.',
        productprice: '7000',


    },
    {
        productname:'shoes',
        productdescription:'A shoe is an item of footwear intended to protect and comfort the human foot.',
        productprice: '7000',


    },
    {
        productname:'shoes',
        productdescription:'A shoe is an item of footwear intended to protect and comfort the human foot.',
        productprice: '7000',


    },
     





]
let items1 = document.getElementById('items');

for  ( let i=0; i<items.length; i++){items1.innerHTML +=
   `<div class="card" style="width: 18rem;">
  <img src="shoes2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${items[i] . productname} </h5>
  <p class="card-text">${items[i] . productdescription}</p>
  <p class="card-text">${items[i]. productprice}</p>
</div> `}