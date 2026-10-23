const pageNames={overview:'Umumiy ko‘rinish',schedule:'Dars jadvali',courses:'Kurslarim',attendance:'Davomat',payments:'To‘lovlar',settings:'Sozlamalar'};
const toast=document.getElementById('toast');let toastTimer;
function notify(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}
document.querySelectorAll('[data-page]').forEach(item=>item.addEventListener('click',()=>{const page=item.dataset.page;document.querySelectorAll('.nav-item').forEach(nav=>nav.classList.toggle('active',nav.dataset.page===page));document.getElementById('crumb').textContent=pageNames[page]||pageNames.overview;document.getElementById('sidebar').classList.remove('open');if(page!=='overview')notify(`${pageNames[page]} bo‘limi tanlandi`)}));
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));
document.getElementById('downloadBtn').addEventListener('click',()=>{const report='CAMPUS — TALABA HISOBOTI\nMadina Aliyeva\nBosqich: B2 Intermediate\nDavomat: 92%\nO‘rtacha natija: 86/100\nKeyingi to‘lov: 1 250 000 so‘m · 5-noyabr';const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([report],{type:'text/plain;charset=utf-8'}));link.download='talaba-hisoboti.txt';link.click();URL.revokeObjectURL(link.href);notify('Hisobot yuklab olindi')});
document.getElementById('notifyBtn').addEventListener('click',()=>notify('Yangi bildirishnomalar yo‘q'));
document.getElementById('languageBtn').addEventListener('click',()=>notify('Interfeys tili: O‘zbekcha'));
document.getElementById('profileBtn').addEventListener('click',()=>notify('Profil: Madina Aliyeva'));
document.getElementById('helpBtn').addEventListener('click',()=>notify('Yordam markazi: administrator@campus.uz'));
document.getElementById('allActivityBtn').addEventListener('click',()=>notify('Barcha faolliklar ko‘rsatilmoqda'));
document.querySelectorAll('.more-btn').forEach(button=>button.addEventListener('click',()=>notify('Dars tafsilotlari ochildi')));
document.getElementById('prevWeek').addEventListener('click',()=>notify('Oldingi haftalik reja'));
document.getElementById('nextWeek').addEventListener('click',()=>notify('Keyingi haftalik reja'));
