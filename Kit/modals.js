// יצירת המודלים בטעינת העמוד
document.addEventListener("DOMContentLoaded", function () {
  // יצירת המודלים
  createModals();

  // הוספת מאזיני לחיצה לקישורים
  document
    .querySelector('a[href="#privacy"]')
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("privacyModal").style.display = "block";
    });

  document
    .querySelector('a[href="#terms"]')
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("termsModal").style.display = "block";
    });
});

function createModals() {
  // יצירת מודל מדיניות פרטיות
  const privacyModal = document.createElement("div");
  privacyModal.id = "privacyModal";
  privacyModal.className = "modal";
  privacyModal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>מדיניות פרטיות</h2>
            <div class="modal-body">
                <h3>איסוף מידע</h3>
                <p>אנו לא אוספי�� מידע אישי מהמשתמשים באתר זה. האתר משמש כמדריך מידע בלבד.</p>
                
                <h3>שימוש במידע</h3>
                <p>המידע המוצג באתר נועד לשימוש אינפורמטיבי בלבד ואינו מהווה המלצה לרכישה.</p>
                
                <h3>אבטחת מידע</h3>
                <p>אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע המוצג באתר.</p>
                
                <h3>שינויים במדיניות</h3>
                <p>אנו שומרים לעצמנו את הזכות לעדכן את מדיניות הפרטיות מעת לעת.</p>
            </div>
        </div>
    `;

  // יצירת מודל תנאי שימוש
  const termsModal = document.createElement("div");
  termsModal.id = "termsModal";
  termsModal.className = "modal";
  termsModal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>תנאי שימוש</h2>
            <div class="modal-body">
                <h3>קניין רוחני</h3>
                <p>כל התכנים באתר זה, כולל טקסטים, תמונות ועיצוב, מוגנים בזכויות יוצרים.</p>
                
                <h3>הגבלת אחריות</h3>
                <p>המידע באתר מוצג כמות שהוא (AS IS). איננו אחראים לנזקים ישירים או עקיפים שעלולים להיגרם משימוש במידע.</p>
                
                <h3>שימוש במידע</h3>
                <p>המידע באתר מיועד לשימוש אישי ולא מסחרי. אין להעתיק או להפיץ את המידע ללא אישור.</p>
                
                <h3>מחירים ומוצרים</h3>
                <p>המחירים המוצגים באתר הם הערכה בלבד ועשויים להשתנות. יש לבדוק מחירים עדכניים לפני רכישה.</p>
                
                <h3>שינויים בתנאים</h3>
                <p>אנו שומרים לעצמנו את הזכות לשנות את תנאי השימוש בכל עת.</p>
            </div>
        </div>
    `;

  // הוספת המודלים לעמוד
  document.body.appendChild(privacyModal);
  document.body.appendChild(termsModal);

  // הוספת פונקציונליות סגירה לכפתורי הסגירה
  document.querySelectorAll(".close-button").forEach((button) => {
    button.addEventListener("click", function () {
      this.closest(".modal").style.display = "none";
    });
  });

  // סגירת המודל בלחיצה מחוץ לתוכן
  window.addEventListener("click", function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
  });
}
