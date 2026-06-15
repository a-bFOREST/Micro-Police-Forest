// مصفوفة تحتوي على النصوص الافتراضية للـ 30 خانة
const totalMacros = 30;

const grid = document.getElementById('cardsGrid');

// 1. توليد الخانات تلقائياً مع ميزة منع الإكمال التلقائي للمتصفح
for (let i = 1; i <= totalMacros; i++) {
    const card = document.createElement('div');
    card.className = 'macro-card';
    
    card.innerHTML = `
        <div class="card-header">
            <span class="card-title"><i class="fa-solid fa-hashtag"></i> خانة رقم ${i}</span>
        </div>
        <div class="input-wrapper">
            <input type="text" class="macro-input" id="input-${i}" value="مايكرو ${i}" autocomplete="off">
        </div>
        <button class="copy-btn" onclick="copyMacro(${i}, this)">
            <i class="fa-regular fa-copy"></i>
            <span>نسخ</span>
        </button>
    `;
    
    grid.appendChild(card);
}

// 2. دالة النسخ الاحترافية
function copyMacro(id, button) {
    const input = document.getElementById(`input-${id}`);
    const textToCopy = input.value;
    
    const btnText = button.querySelector('span');
    const btnIcon = button.querySelector('i');

    navigator.clipboard.writeText(textToCopy).then(() => {
        button.classList.add('copied');
        btnText.innerText = 'تم النسخ!';
        btnIcon.className = 'fa-solid fa-check';

        setTimeout(() => {
            button.classList.remove('copied');
            btnText.innerText = 'نسخ';
            btnIcon.className = 'fa-regular fa-copy';
        }, 2000);
    }).catch(err => {
        console.error('فشلت عملية النسخ: ', err);
        alert('حدث خطأ أثناء النسخ.');
    });
}
