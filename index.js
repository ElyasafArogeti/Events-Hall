const fristFoodPrice = {// מחיר מנה ראשונה 
  "פילה מושט מזרחי מרוקאי": 14.5,
  "פילה מושט ברוטב לימון ושקדים ": 14.5,
  "נסיכת הנילוס מזרחי": 16.5,
  "ארטישוק ממולא בשר": 19,
  "מאפה פילו בשר עם רוטב": 16.5,
  "מוסקה בשרית": 17,
 "טורטיה מקסיקנית בשרי צמחוני": 17.5,
  "מעורב ירושלמי במצע פירה": 65,
 "כבדי עוף מוקפצים בבצל על מצע פירה": 86,
 "מוקפץ תאילנדי ברשת או פירה": 65,
 "פילה סלמון ברוטב פסטו": 135,
};
const fristFoodWeight={//משקל מנה ראשונה
"פילה מושט מזרחי מרוקאי": 1,
"פילה מושט ברוטב לימון ושקדים ": 1,
"נסיכת הנילוס מזרחי": 1,
"ארטישוק ממולא בשר": 1,
"מאפה פילו בשר עם רוטב": 1,
"מוסקה בשרית": 1,
"טורטיה מקסיקנית בשרי צמחוני": 1,
"מעורב ירושלמי במצע פירה": 100,
"כבדי עוף מוקפצים בבצל על מצע פירה": 100,
"מוקפץ תאילנדי ברשת או פירה": 100,
"פילה סלמון ברוטב פסטו": 130,
}
const lestFoodPrice = {///מחיר מנה עיקרית
  "עוף בתנור בשזיפים": 70,
"עוף בגריל": 70,
  "סטייק פרגית": 110,
   "סטייק חזה עוף על האש": 70,
  "שיפודי קבב מזרחי": 58,
 "שיפודי עוף וירקות": 70,
  "חזה עוף ממולא": 23,
  "אצבעות אסאדו בסגנון השף": 180,
  "שניצל עוף": 70,
 "כרעיים עוף ממולא": 29.5,
};
const lestFoodWeight = {///משקל מנה עיקרית
"עוף בתנור בשזיפים": 250,
"עוף בגריל": 250,
"סטייק פרגית": 110,
 "סטייק חזה עוף על האש": 120,
"שיפודי קבב מזרחי": 200,
"שיפודי עוף וירקות": 200,
"חזה עוף ממולא": 1,
"אצבעות אסאדו בסגנון השף": 120,
"שניצל עוף": 120,
"כרעיים עוף ממולא": 1,
};
const saladsALLPrice = {
"גזר מרוקאי חי": 29,
"גזר מרוקאי מבושל": 29,
"טחינה מתובלת": 29,
"חמוצי הבית": 29,
"מבחר חמוצים": 29,
"ירקות חי טרי ועשיר": 29,
"חציל שלם עם טחינה": 13,
"חציל יווני": 29,
"חציל טבעי על האש": 29,
"חציל במיונז": 29,
"קוביות חציל פקנטי": 29,
"כרוב ושמיר": 37,
"כרוב וגזר במיונז": 37,
"כרוב וגזר מטובל": 37,
"כרוב אדום במיונז": 37,
"סלט עגבניות חריף": 29,
"מטבוחה": 43,
"סלט מלפפון בשמיר": 29,
"שרי בבזיליקום": 43,
"פלפל מתוק בצבעים": 35,
"סלט טבולה": 29,
"פלפל חריף": 35,
"שורש סלרי": 35,
"תירס מקסיקני": 29,
"תפו'א במיונז": 29,
"קוביות סלק": 29,
"סלט בטטה": 37,
"סלט ירוק": 47,
"חומוס עם גרגירי חומוס ושמן זית": 15,
"חסה, שרי ונבטים ברוטב": 43,
};

const saladsALLWeight = {
"גזר מרוקאי חי": 30,
"גזר מרוקאי מבושל": 30,
"טחינה מתובלת": 20,
"חמוצי הבית": 40,
"מבחר חמוצים": 30,
"ירקות חי טרי ועשיר": 40,
"חציל שלם עם טחינה": 13,
"חציל יווני": 30,
"חציל טבעי על האש": 30,
"חציל במיונז": 30,
"קוביות חציל פקנטי": 30,
"כרוב ושמיר": 30,
"כרוב וגזר במיונז": 30,
"כרוב וגזר מטובל": 30,
"כרוב אדום במיונז": 30,
"סלט עגבניות חריף": 30,
"מטבוחה": 25,
"סלט מלפפון בשמיר": 30,
"שרי בבזיליקום": 40,
"פלפל מתוק בצבעים": 30,
"סלט טבולה": 30,
"פלפל חריף": 20,
"שורש סלרי": 30,
"תירס מקסיקני": 30,
"תפו'א במיונז": 30,
"קוביות סלק": 30,
"סלט בטטה": 35,
"סלט ירוק": 40,
"חומוס עם גרגירי חומוס ושמן זית": 40,
"חסה, שרי ונבטים ברוטב": 30,
};

const FoodPlusPrice = {//מחיר תוספות 
"אורז עם שקדים וצימוקים":15,
"אורז צהוב":15,
"אורז עם ירקות":18,
"אפונה ארטישוק וסלרי":40,
"שעועית ארוכה מוקפצת":22,
"שעועית ארוכה ברוטב עגבניות":22,
"ירקות מאודים בתנור":25,
"ירקות סיני מוקפץ":27,   
"זיתים מרוקאים":48,   
"ארטישוק ופטריות":40,   
"תפו'א סירות":20,   
"תפו'א פרוס אנה":25,   
"תפו'א פריזיאן שלם":20,   
"דואט תפו'א ובטטה":20,   
"בטטה בשמן זית ורוזמרין":30,   
"קוסקוס עם ירקות":20,    
}
const FoodPlusWeight = {// משקל תוספות
"אורז עם שקדים וצימוקים":70,
"אורז צהוב":70,
"אורז עם ירקות":70,
"אפונה ארטישוק וסלרי":70,
"שעועית ארוכה מוקפצת":70,
"שעועית ארוכה ברוטב עגבניות":70,
"ירקות מאודים בתנור":70,
"ירקות סיני מוקפץ":60,   
"זיתים מרוקאים":50,   
"ארטישוק ופטריות":50,   
"תפו'א סירות":80,   
"תפו'א פרוס אנה":80,   
"תפו'א פריזיאן שלם":100,   
"דואט תפו'א ובטטה":80,   
"בטטה בשמן זית ורוזמרין":100,   
"קוסקוס עם ירקות":60,    
}

document.getElementById('finish').addEventListener('click', function() {
  // אסף את ערכי שדות הטקסט
  const eventOwner = document.getElementById('event-owner').value;
  const eventDate = document.getElementById('event-date').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const guestCount = document.getElementById('guest-count').value;
  // הגדרת משתנים לסכום כולל ולסיכום ההזמנה
  let totalCost = 0;
  let orderSummary = `<h2>פרטי בעל האירוע</h2>
                      <p>שם בעל האירוע: ${eventOwner}</p>
                      <p>תאריך האירוע: ${eventDate}</p>
                      <p>מספר טלפון: ${phoneNumber}</p>
                      <h2>סיכום הזמנה</h2>`;
  // טיפול בבחירת הסלטים
  const salads = document.querySelectorAll('input[name="salads"]:checked');
  const foodPluses = document.querySelectorAll('input[name="FoodPlus"]:checked');
  


  
  if (salads.length > 0) {// לסלטים
      orderSummary += `<h3>סלטים</h3><ul>`;
      salads.forEach(salad => {
          const saladName = salad.nextElementSibling.textContent.trim(); 
          console.log(saladName);  // קבל את המחיר והמשקל מאובייקטים שהגדרת מראש
          console.log(saladsALLPrice[saladName]);
          let price = saladsALLPrice[saladName];
          let weight = saladsALLWeight[saladName];
                  // חשב את סכום הסלט לכל האורחים
        let sumperson = price/1000 * weight;
          let sumSalads = sumperson*guestCount;
          
          let sumweght = weight*guestCount/1000;
          totalCost += sumSalads; // הוסף לסכום הכולל
          orderSummary += `<li>${saladName}  : המחיר הכולל  ${sumSalads} משקל כולל לסלט :   ש'ח ${sumweght}</li>`;
        });
        orderSummary += `</ul>`;
  }
                                 // טיפול בבחירת התוספות
  if (foodPluses.length > 0) {
    orderSummary += `<h3>תוספות</h3><ul>`;
    foodPluses.forEach(foodPlus => {
        const foodPlusName = foodPlus.nextElementSibling.textContent.trim();
        let price = FoodPlusPrice[foodPlusName];
        let weight = FoodPlusWeight[foodPlusName];
         // חשב את סכום התוספת לכל האורחים
        let sumperson = price / 1000 * weight;
        let sumFoodPlus = sumperson * guestCount;
        let sumWeight = weight * guestCount / 1000;
        totalCost += sumFoodPlus; // הוסף לסכום הכולל
        orderSummary += `<li>${foodPlusName} : המחיר הכולל ${sumFoodPlus} ש"ח, משקל כולל לתוספת: ${sumWeight} ק"ג</li>`;
    });
    orderSummary += `</ul>`;
}


menuItems.forEach(item => {
  const itemName = item.nextElementSibling.textContent.trim(); // שם הפריט מהתווית הבאה
  console.log(itemName);
  const itemPrice = fristFoodPrice[itemName]; // המחיר של הפריט מהמאגר הנתונים
  const itemWeight = fristFoodWeight[itemName]; // משקל הפריט
  let sumperson = itemPrice * item;
  let sumFoodPlus = sumperson * guestCount;
  let sumWeight = weight * guestCount / 1000;
  totalCost += sumFoodPlus; // הוסף לסכום הכולל
  
  

});




  
  // הצגת עלות האירוע הכוללת
  orderSummary += `<h3>סה"כ עלות האירוע: ${totalCost} ש"ח</h3>`;

  // הוספת הסיכום למסמך
  const summaryDiv = document.createElement('div');
  summaryDiv.innerHTML = orderSummary;
  document.body.appendChild(summaryDiv);



});
