document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var birthday = new Date(document.getElementById('birthday').value);
    var category = document.getElementById('category').value;
    var interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(i => i.value);
    var photo = document.getElementById('photo').files[0];
  
    var today = new Date();
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
  
    var days = Math.floor((today - birthday) / (1000 * 60 * 60 * 24));
    var nextPowerOfTen = Math.pow(10, Math.ceil(Math.log10(days)));
    var nextZeroes = Math.pow(10, days.toString().length);
    var nextTwoZeroes = Math.pow(10, days.toString().length - 2);
    var nextSameDigits = parseInt(days.toString().charAt(0).repeat(days.toString().length));
    var nextPowerOfTwo = Math.pow(2, Math.ceil(Math.log2(days)));
  
    var output = 'ФИО: ' + name + '<br>' +
                 'Возраст: ' + age + '<br>' +
                 'Категория: ' + category + '<br>' +
                 'Интересы: ' + interests.join(', ') + '<br>' +
                 'Фото: ' + photo.name + '<br>' +
                 'Количество дней: ' + days + '<br>' +
                 'Следующее число дней в следующую степень 10: ' + nextPowerOfTen + '<br>' +
                 'Следующее число дней с нулями везде кроме последней цифры: ' + nextZeroes + '<br>' +
                 'Следующее число дней с нулями везде кроме двух последних цифр: ' + nextTwoZeroes + '<br>' +
                 'Следующее число дней со всеми одинаковыми цифрами: ' + nextSameDigits + '<br>' +
                 'Следующее число дней в следующую степень двойки: ' + nextPowerOfTwo;
  
    document.getElementById('output').innerHTML = output;
  });