document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })

    const inputField = document.querySelector('.phone');
    const maskOptions = {
        mask: '+{7} (000) 000-00-00'
    }
    const mask = IMask(inputField, maskOptions);

    const inputField1 = document.querySelector('.phone1');
    const maskOptions1 = {
        mask: '+{7} (000) 000-00-00'
    }
    const mask1 = IMask(inputField1, maskOptions1);
 
    document.getElementById('consult-form').onsubmit = function () {
        if (!this.checkValidity()) return false;

        $.fancybox.close();
        $.fancybox.open({ src: '#gotovo' });

        return false;    
    };

    document.getElementById('consult-form1').onsubmit = function () {
        if (!this.checkValidity()) return false;

        $.fancybox.close();
        $.fancybox.open({ src: '#gotovo' });

        return false;
    };

    const checkbox = document.getElementById('checkedID');
    const button = document.getElementById('checkedBtn');

    checkbox.addEventListener('change', function() {
        document.getElementById("checkedBtn").classList.toggle("non-active")
    });

    const checkbox1 = document.getElementById('checkedID1');
    const button1 = document.getElementById('checkedBtn1');

    checkbox1.addEventListener('change', function() {
        document.getElementById("checkedBtn1").classList.toggle("non-active")
    });
})

const swiper = new Swiper('.block6-slider',{
    direction: "horizontal",
    loop:false,   
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    spaceBetween:200,
});
new Swiper(".block4-slider",{
    direction: "horizontal",
    loop:true,
    navigation:{
        nextEl:'.block4-swiper-button-next',
        prevEl:'.block4-swiper-button-prev',
        clickable:true,
    },   
    pagination:{
        el:'.block4-pagination',
        clickable:true,
        renderBullet:function (index,className) {
            const names = ['Верстка', 'JS/JQ', 'Vue', 'Doker', 'Bitrix','Winter'];
            const name = names[index] ? names[index] : 'Слайд ' + (index + 1);
            return '<span class="' + className + '">' +name + '</span>';
        },
    },
    spaceBetween:200,    
});
