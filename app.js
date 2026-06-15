// مصفوفة تحتوي على النصوص الافتراضية للـ 30 خانة
// يمكنك تعديل النصوص المكتوبة بين علامات الاقتباس " " مباشرة من هنا لتغيير القيمة الافتراضية لأي خانة
const totalMacros = 30;

const grid = document.getElementById('cardsGrid');

// 1. توليد الخانات تلقائياً داخل واجهة المستخدم
for (let i = 1; i <= totalMacros; i++) {
    const card = document.createElement('div');
    card.className = 'macro-card';
    
    card.innerHTML = `
        <div class="card-header">
            <span class="card-title"><i class="fa-solid fa-hashtag"></i> خانة رقم ${i}</span>
        </div>
        <div class="input-wrapper">
            <input type="text" class="macro-input" id="input-${i}" value="مايكرو ${i}">
        </div>
        <button class="copy-btn" onclick="copyMacro(${i}, this)">
            <i class="fa-regular fa-copy"></i>
            <span>نسخ</span>
        </button>
    `;
    
    grid.appendChild(card);
}

// 2. دالة النسخ الاحترافية وعلامات النجاح والـ الأيقونات
function copyMacro(id, button) {
    const input = document.getElementById(`input-${id}`);
    const textToCopy = input.value; // جلب النص الحالي (حتى لو قام المستخدم بتعديله)
    
    const btnText = button.querySelector('span');
    const btnIcon = button.querySelector('i');

    // تنفيذ عملية النسخ في نظام التشغيل
    navigator.clipboard.writeText(textToCopy).then(() => {
        // تفعيل مؤثرات النجاح المرئية
        button.classList.add('copied');
        btnText.innerText = 'تم النسخ!';
        btnIcon.className = 'fa-solid fa-check'; // تغيير الأيقونة لعلامة صح

        // إعادة الزر لشغله الأصلي بعد ثانيتين (2000 مللي ثانية)
        setTimeout(() => {
            button.classList.remove('copied');
            btnText.innerText = 'نسخ';
            btnIcon.className = 'fa-regular fa-copy'; // إعادة أيقونة النسخ المعتادة
        }, 2000);
    }).catch(err => {
        console.error('فشلت عملية النسخ التلقائي: ', err);
        alert('حدث خطأ أثناء النسخ، يرجى النسخ يدوياً.');
    });
}
