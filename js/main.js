fetch('content.json').then(r=>r.json()).then(d=>{
 document.getElementById('hero_title').textContent=d.texts.hero_title;
 document.getElementById('hero_sub').textContent=d.texts.hero_sub;
 const ul=document.getElementById('products');
 d.products_order.forEach(p=>{
   const li=document.createElement('li'); li.textContent=p; ul.appendChild(li);
 });
});