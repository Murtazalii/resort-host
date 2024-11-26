let obj = {
    usluga1: 1740,
    usluga2: 1280,
    usluga3: 2260,
    usluga4: 1970,
    usluga5: 4630,
    usluga6: 2670,
    usluga7: 3300,
    usluga8: 2900,
    usluga9: 2670,
    usluga10: 5510,
    usluga11: 4410,
    usluga12: 2280,
  }
  
  let result = document.getElementById('result');
  let services = document.querySelectorAll('.services');
  let sum = 0; // Сумма выбранных
  
  for( let i = 0; i < services.length; i++ ){
    let checked = false; // Все кнопки изначально не кликнуты
  
    services[i].addEventListener('click', function(){
      this.classList.toggle('active');
      checked = !checked; // false ←→ true - постоянное переключение при клике
      let val = obj[ this.dataset.name ]; // Сразу достается нужное число
      sum = checked ? sum + val : sum - val;
      result.textContent = sum;
    });
  }