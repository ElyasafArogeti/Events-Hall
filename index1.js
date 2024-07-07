const fristFoodPrice = {// מחיר מנה ראשונה 
  "פילה מושט מזרחי מרוקאי": 14.5,
  "פילה מושט ברוטב לימון ושקדים": 14.5,
  "נסיכת הנילוס מזרחי": 16.5,
  "ארטישוק ממולא בשר": 19,
  "מאפה פילו בשר עם רוטב": 16.5,
  "מוסקה בשרית": 17,
 "טורטיה מקסיקנית בשרי צמחוני": 17.5,
  "מעורב ירושלמי במצע פירה": 65,
 "כבדי עוף מוקפצים בבצל על מצע פירה": 86,
 "מוקפץ תאילנדי ברשת או פירה": 65,
 "פילה סלמון ברוטב פסטו": 135,
 "קדאיף בשר":19,
 "קראפון אסאדו":100,
 "קציצות דגים":70

};
const fristFoodWeight={  //משקל מנה ראשונה
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
"קדאיף בשר":1,
"קראפון אסאדו":10,
"קציצות דגים":150

}
const lestFoodPrice = { ///מחיר מנה עיקרית
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
 "צלי בקר מספר 5":200,
 "צלי בקר מספר 6":120,
 "כדורי בשר":67
};
const lestFoodWeight = { ///משקל מנה עיקרית
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
"צלי בקר מספר 5":120,
"צלי בקר מספר 6":120,
"כדורי בשר":120
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
"פירה":20,
"אפונה וגזר":18
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
"פירה":100,
"אפונה וגזר":70  
}

const dateInput = document.getElementById('event-date'); // למלאות את תיבת תאריך 
  dateInput.innerText='תאריך :';
  dateInput.style.display="inline-block";

function toggleSalads() {   // טיפול בסלטים שלא נראים
  var saladList = document.getElementById('salad-list');
  saladList.classList.toggle('hidden');
}

// -----------------------------------סיכום הזמנה---------------------------------------------------------------------------------
document.getElementById('finish').addEventListener('click', function() {
                                                                        
  const existingSummary = document.getElementById('order-summary'); // ניקוי הסיכום הקודם אם קיים
  if (existingSummary) {
      existingSummary.remove();
  }
  const eventOwner = document.getElementById('event-owner').value;
  const eventDate = document.getElementById('event-date').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const guestCount = document.getElementById('guest-count').value;                     
  let totalCost = 0;

 let dataSummary=`<h2> פרטי בעל האירוע:</h2>
                      <p>שם בעל האירוע :   <strong>${eventOwner}</strong></p>
                      <p>תאריך האירוע :  <strong> ${eventDate}</strong></p>
                      <p>מספר טלפון :  <strong> ${phoneNumber}</strong></p>
                      <p>מספר המוזמנים :  <strong> ${guestCount}</strong></p>
                    `
  let orderSummary = `
    <table style=
    " max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9); /* חצי שקוף */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: 1px solid #ddd;
    border-collapse: collapse;">
                <tr>
                 <h2 colspan="2">סיכום הזמנה</h2>
                </tr>
  `;
  // -----------------------------------   // טיפול בבחירת הסלטים---------------------------------------------------------------------------------
                                           
  const salads = document.querySelectorAll('input[name="salads"]:checked');
  const foodPluses = document.querySelectorAll('input[name="FoodPlus"]:checked');

  if (salads.length > 0) {            // לסלטים
    orderSummary += `
    <tr>
      <th colspan="4" style=" border: 1px solid black;
    padding: 8px;
    text-align: center;">סלטים</th>
    </tr>
  `;
      salads.forEach(salad => {
          const saladName = salad.nextElementSibling.textContent.trim(); 
          console.log(saladName);  // קבל את המחיר והמשקל מאובייקטים שהגדרת מראש
          console.log(saladsALLPrice[saladName]);
          let price = saladsALLPrice[saladName];
          let weight = saladsALLWeight[saladName];
                     // חשב את סכום הסלט לכל האורחים
          let sumperson = price / 1000 * weight;
          let sumSalads = sumperson * guestCount;
          let sumweght = weight * guestCount / 1000;
          totalCost += sumSalads; // הוסף לסכום הכולל
          orderSummary += `
          <tr>
            <td><strong>${saladName} :</strong></td>
            <td>המחיר הכולל : <strong>${sumSalads.toFixed(2)}</strong> ש"ח   <strong>|</strong>  משקל הכולל לסלט: <strong>${sumweght.toFixed(2)}</strong> ק"ג</td>
        `;
      });
  }
  // --------------------------------// טיפול בבחירת התוספות------------------------------------------------------------------------------------
                                      
  if (foodPluses.length > 0) {
    orderSummary += `
    <tr>
      <th colspan="4" style=" border: 1px solid black;
    padding: 8px;
    text-align: center;">תוספות</th>
    </tr>
  `;
    foodPluses.forEach(foodPlus => {
        const foodPlusName = foodPlus.nextElementSibling.textContent.trim();
        let price = FoodPlusPrice[foodPlusName];
        let weight = FoodPlusWeight[foodPlusName];
        let sumperson = price / 1000 * weight;
        let sumFoodPlus = sumperson * guestCount;
        let sumWeight = weight * guestCount / 1000;
        totalCost += sumFoodPlus; // הוסף לסכום הכולל
        orderSummary += `
        <tr>
          <td><strong>${foodPlusName} :</strong></td>
          <td>המחיר הכולל : <strong>${sumFoodPlus.toFixed(2)}</strong> ש"ח  <strong>|</strong>  משקל הכולל לתוספת: <strong>${sumWeight.toFixed(2)} </strong> ק"ג</td>
        </tr>
      `;
    });
  }
// ------------------------------------ // טיפול במנה ראשונה --------------------------------------------------------------------------------
                                           
  const firstFoodItems = document.querySelectorAll('input[name="firstFood"]');

  
  const specialItems = ["פילה סלמון ברוטב פסטו", "כבדי עוף מוקפצים בבצל על מצע פירה", "מעורב ירושלמי במצע פירה", "מוקפץ תאילנדי ברשת או פירה", "קציצות דגים"];
  const selectedItems = Array.from(firstFoodItems)
    .filter(item => item.type === 'number' && !isNaN(item.value) && item.value > 0)
    .map(item => ({
        id: item.id,
        name: item.dataset.name,
        value: parseInt(item.value),
        price: parseFloat(item.dataset.price),
        weight: parseFloat(item.dataset.weight)
    }));

  if (selectedItems.length > 0) {       // חישוב מנה ראשונה 
    orderSummary += `
    <tr>
      <th colspan="2" style=" border: 1px solid black;
    padding: 8px;
    text-align: center;">מנה ראשונה [3 לבחירה]</th>
    </tr>
  `;
      selectedItems.forEach(valuefood => {
          const foodName = valuefood.name;
          let price = fristFoodPrice[foodName];
          let weight = valuefood.value;
          if (specialItems.includes(foodName)) {
                                  // חישוב מיוחד עבור פריטים לפי גרם
              let sum = fristFoodPrice[foodName] * weight;
              let weightOfPerson = fristFoodWeight[foodName] * weight ;
              console.log(weightOfPerson);
              totalCost += sum; // הוסף לסכום הכולל
              orderSummary += `
              <tr>
                <td><strong>${foodName} :</strong></td>
                <td>המחיר : <strong>${sum.toFixed(2)}</strong> ש"ח  <strong>|</strong> משקל הכולל למנה : <strong>${weightOfPerson.toFixed(2)} </strong> גרם</td>
              </tr>
            `;
          } else {                                        // חישוב רגיל עבור פריטים לפי יחידות
              let sumpersonFoodFrist = price * weight; // חשב את סכום המנה לכל האורחים
              totalCost += sumpersonFoodFrist; // הוסף לסכום הכולל
              orderSummary += `
              <tr>
                <td><strong>${foodName} :</strong></td>
                <td>המחיר : <strong>${sumpersonFoodFrist}</strong> ש"ח  <strong>|</strong> כמות פריט : <strong>${weight} </strong> יחידות</td>
              </tr>
            `;
          }
      });
  } 
  // -------------------------------- // מנה עיקרית ------------------------------------------------------------------------------------    
                                    
  const mainFoodItems = document.querySelectorAll('input[name="mainFood"]');
  const selectedItemsmain = Array.from(mainFoodItems)                // מערך של כל הפריטים שנבחרו 
    .filter(item => item.type === 'number' && !isNaN(item.value) && item.value > 0)
    .map(item => ({
        id: item.id,
        name: item.dataset.name,
        value: parseInt(item.value),
        price: parseFloat(item.dataset.price),
        weight: parseFloat(item.dataset.weight)
    }));
  if (selectedItemsmain.length > 0) { 
    orderSummary += `
    <tr>
      <th colspan="2" style=" border: 1px solid black;
    padding: 8px;
    text-align: center;">מנה עיקרית [3 לבחירה]</th>
    </tr>
  `;                                                          // חישוב מיוחד עבור פריטים לפי גרם
    selectedItemsmain.forEach(valuefood => {
              const foodName = valuefood.name;
      if(foodName==="כרעיים עוף ממולא"){
        console.log("כרעיים עוף ממולא");
        let summ=lestFoodPrice[foodName] * valuefood.value;
        totalCost += summ; // הוסף לסכום הכולל
        orderSummary += `
          <tr>
            <td><strong>${foodName} :</strong></td>
            <td>המחיר : <strong>${summ.toFixed(2)}</strong> ש"ח <strong>|</strong> משקל הכולל למנה : <strong>${valuefood.value}</strong> יחידות</td>
          </tr>
        `;
      }else{
        let sum = lestFoodPrice[foodName] * valuefood.value;
        let weightOfPersonLestFood = lestFoodWeight[foodName] * valuefood.value ;    
        totalCost += sum; // הוסף לסכום הכולל
        orderSummary += `
          <tr>
            <td><strong>${foodName} :</strong></td>
            <td>המחיר : <strong>${sum.toFixed(2)}</strong> ש"ח <strong>|</strong> משקל הכולל למנה : <strong>${weightOfPersonLestFood.toFixed(2)}</strong> גרם</td>
          </tr>
        `;}
    });
  }   
                                        // הוספת הסיכום למסמך
  const summaryDiv = document.querySelector("#Order-summary");
  const DivdataSummary = document.querySelector("#data-summary");
  summaryDiv.innerHTML = orderSummary+`<h3>סה"כ עלות האירוע: ${totalCost.toFixed(2)} ש"ח</h3>`;
  DivdataSummary.innerHTML = dataSummary;
    
    const f3 = document.querySelector("#finish3");    // הצגת הכפתורי המשך
     f3.classList.add("active");  
    const f4 = document.querySelector("#finish4");    // הצגת הכפתורי המשך
     f4.classList.add("active");  
     const f2 = document.querySelector("#finish2");
     f2.classList.add("active"); 
     sendWhatsappBtn = document.getElementById('send-whatsapp'); 
    sendWhatsappBtn.classList.add("active");                 
});

// ----------------------------------- //לחיצה על הדפס הזמנה רגיל---------------------------------------------------------------------------------
                                           
document.getElementById('finish4').addEventListener('click', function(){   
  const h2 = document.querySelector("h2")
  const f2 = document.querySelector("#finish2");
  const f3 = document.querySelector("#finish3");
  const f4 = document.querySelector("#finish4");
  const f = document.querySelector("#finish");
 const imgheder = document.querySelector("#imgh");
 const divdata = document.querySelector("#data-summary");
 const divOrder = document.querySelector("#Order-summary");
 const container = document.querySelector(".container");
 const headerdata = document.querySelector("#header-data");
 const footer = document.querySelector("footer");
setTimeout (() => {
  footer.style.display= "none"; 
  container.style.display= "block"; 
  headerdata.style.display= "block"; 
  h2.style.display= "none"; 
  f.style.display= "none"; 
  f3.style.display= "none"; 
  f4.style.display= "none"; 
f2.style.display= "none"; 
imgheder.style.display= "none";
divdata.style.display= "none";
divOrder.style.display= "none";
window.print();
},1000);
setTimeout (() => {
  footer.style.display= "block"; 
  headerdata.style.display= "inline-block"; 
  h2.style.display= "block"; 
  f.style.display= "inline-block"; 
  divdata.style.display= "block";
  divOrder.style.display= "block";
     f3.style.display= "block"; 
     f4.style.display= "block"; 
  f2.style.display= "block"; 
  imgheder.style.display= "inline-block"; 
  },2000);
 });

// ---------------------------------//חישוב  הדפס הזמנה אישי-----------------------------------------------------------------------------------
 
document.getElementById('finish3').addEventListener('click', function(){ 
  const f2 = document.querySelector("#finish2");
  const f3 = document.querySelector("#finish3");
  const f4 = document.querySelector("#finish4");
 const container = document.querySelector(".container");
 const imgheder=document.querySelector("#imgh");
 const headerdata = document.querySelector("#header-data");
 const footer = document.querySelector("footer");

setTimeout (() => {
  headerdata.style.display= "none"; 
  footer.style.display= "none"; 
container.style.display= "none"; 
  f3.style.display= "none"; 
  f4.style.display= "none"; 
f2.style.display= "none"; 
imgheder.style.display= "none";
window.print();
},1000);
setTimeout (() => {
  headerdata.style.display= "inline-block"; 
  footer.style.display= "block"; 
     f3.style.display= "inline-block"; 
     f4.style.display= "inline-block"; 
  container.style.display= "inline-block"; 
  f2.style.display= "inline-block"; 
  imgheder.style.display= "inline-block"; 
  },2000);
 });
    

// --------------------------------------------------------------------------------------------------------------------

                                                       // טיפול הזמנה למטבח
 document.getElementById('finish2').addEventListener('click', function() {
  const guestCount = document.getElementById('guest-count').value;
                                  // ניקוי הסיכום הקודם אם קיים ב-DIV החדש
  const existingKitchenSummary = document.getElementById('kitchen-order-summary');
  if (existingKitchenSummary) {
      existingKitchenSummary.innerHTML = '';
  }
  let kitchenOrderSummary = `
    <table style=
    " max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9); /* חצי שקוף */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: 1px solid #ddd;
    border-collapse: collapse;">
                <tr>
                 <h2 colspan="2">סיכום הזמנה למטבח</h2>
                </tr>
  `;
           // טיפול בבחירת הסלטים
  const salads = document.querySelectorAll('input[name="salads"]:checked');
  const foodPluses = document.querySelectorAll('input[name="FoodPlus"]:checked');
  if (salads.length > 0) {
    kitchenOrderSummary += `
    <tr>
      <th colspan="4" style=" border: 1px solid black;
    padding: 8px;
    text-align: center;">סלטים</th>
    </tr>
  `;
    salads.forEach(salad => {
        const saladName = salad.nextElementSibling.textContent.trim();
        let weight = saladsALLWeight[saladName];
        let sumWeight = weight * guestCount / 1000;
        kitchenOrderSummary += `
        <tr>
          <td><strong>${saladName} :</strong></td>
          <td>משקל הכולל לסלט: <strong>${sumWeight.toFixed(2)}</strong> ק"ג</td>
        </tr>
      `;
    });
  }
                                   // טיפול בבחירת התוספות
  if (foodPluses.length > 0) {
    kitchenOrderSummary += `
    <tr>
      <th colspan="4" style=" border: 1px solid black;
    padding: 8px;
    text-align: center;">תוספות</th>
    </tr>
  `;
    foodPluses.forEach(foodPlus => {
        const foodPlusName = foodPlus.nextElementSibling.textContent.trim();
        let weight = FoodPlusWeight[foodPlusName];
        let sumWeight = weight * guestCount / 1000;
        kitchenOrderSummary += `
        <tr>
          <td><strong>${foodPlusName} :</strong></td>
          <td>משקל הכולל לתוספת: <strong>${sumWeight.toFixed(2)}</strong> ק"ג</td>
        </tr>
      `;
    });
  }
  // טיפול במנה ראשונה
  const specialItems = ["פילה סלמון ברוטב פסטו", "כבדי עוף מוקפצים בבצל על מצע פירה", "מעורב ירושלמי במצע פירה", "מוקפץ תאילנדי ברשת או פירה", "קציצות דגים"];
  const firstFoodItems = document.querySelectorAll('input[name="firstFood"]');
  const selectedItems = Array.from(firstFoodItems)
    .filter(item => item.type === 'number' && !isNaN(item.value) && item.value > 0)
    .map(item => ({
        id: item.id,
        name: item.dataset.name,
        value: parseInt(item.value),
        price: parseFloat(item.dataset.price),
        weight: parseFloat(item.dataset.weight)
    }));

  if (selectedItems.length > 0) {
    kitchenOrderSummary += `
    <tr>
      <th colspan="2" style=" border: 1px solid black;
    padding: 8px;
    text-align: center;">מנה ראשונה [3 לבחירה]</th>
    </tr>
  `;
    selectedItems.forEach(valuefood => {
        const foodName = valuefood.name;
        let weight = valuefood.value;
        if (specialItems.includes(foodName)) {
            let weightOfPerson = fristFoodWeight[foodName] * weight;
            kitchenOrderSummary += `
            <tr>
              <td><strong>${foodName} :</strong></td>
              <td>משקל הכולל למנה: <strong>${weightOfPerson.toFixed(2)}</strong> גרם</td>
            </tr>
          `;
        } else {
            let sumWeight = weight * guestCount / 1000;
            kitchenOrderSummary += `
            <tr>
              <td><strong>${foodName} :</strong></td>
              <td>כמות פריט: <strong>${weight}</strong> יחידות</td>
            </tr>
          `;
        }
    });
  }
                      // טיפול במנה עיקרית
  const mainFoodItems = document.querySelectorAll('input[name="mainFood"]');
  const selectedItemsmain = Array.from(mainFoodItems)
    .filter(item => item.type === 'number' && !isNaN(item.value) && item.value > 0)
    .map(item => ({
        id: item.id,
        name: item.dataset.name,
        value: parseInt(item.value),
        price: parseFloat(item.dataset.price),
        weight: parseFloat(item.dataset.weight)
    }));
  if (selectedItemsmain.length > 0) {
    kitchenOrderSummary += `
    <tr>
      <th colspan="2" style=" border: 1px solid black;
    padding: 8px;
    text-align: center;">מנה עיקרית [3 לבחירה]</th>
    </tr>
  `;
    selectedItemsmain.forEach(valuefood => {
        const foodName = valuefood.name;
        let weight = valuefood.value;
        if (foodName === "כרעיים עוף ממולא") {
            kitchenOrderSummary += `
          <tr>
            <td><strong>${foodName} :</strong></td>
            <td>משקל הכולל למנה: <strong>${weight}</strong> יחידות</td>
          </tr>`;
        } else {
            let sumWeight = lestFoodWeight[foodName] * weight / 1000;
            kitchenOrderSummary += `
          <tr>
            <td><strong>${foodName} :</strong></td>
            <td>משקל הכולל למנה: <strong>${sumWeight.toFixed(2)}</strong> ק"ג</td>
          </tr>
        `;
        }
    });
  }
  kitchenOrderSummary += `</table>`;
  const kitchenSummaryDiv = document.querySelector("#kitchen-order-summary");
  kitchenSummaryDiv.innerHTML = kitchenOrderSummary;
  const h2 = document.querySelector("h2")
  const f2 = document.querySelector("#finish2");
  const f3 = document.querySelector("#finish3");
  const f4 = document.querySelector("#finish4");
 const imgheder = document.querySelector("#imgh");
 const divdata = document.querySelector("#data-summary");
 const divOrder = document.querySelector("#Order-summary");
 const container = document.querySelector(".container");
 const footer = document.querySelector("footer");
setTimeout (() => {
  container.style.display= "none"; 
  footer.style.display= "none"; 
  h2.style.display= "none"; 
  f3.style.display= "none"; 
  f4.style.display= "none"; 
f2.style.display= "none"; 
imgheder.style.display= "none";
divdata.style.display= "none";
divOrder.style.display= "none";
window.print();
},1000);
setTimeout (() => {
  container.style.display= "block"; 
  footer.style.display= "block"; 
  h2.style.display= "block"; 
  divdata.style.display= "block";
  divOrder.style.display= "block";
     f3.style.display= "block"; 
     f4.style.display= "block"; 
  f2.style.display= "block"; 
  imgheder.style.display= "inline-block"; 
  },2000);
});


// ---------------------------------שליחה לוואצאפ-----------------------------------------------------------------------------------

document.getElementById('send-whatsapp').addEventListener('click', function() {
  const eventOwner = document.getElementById('event-owner').value;
  const eventDate = document.getElementById('event-date').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const guestCount = document.getElementById('guest-count').value;
  
  let message = `פרטי בעל האירוע:\n
  שם בעל האירוע: ${eventOwner}\n
  תאריך האירוע: ${eventDate}\n
  מספר טלפון: ${phoneNumber}\n
  מספר המוזמנים: ${guestCount}\n`;

  const salads = document.querySelectorAll('input[name="salads"]:checked');
  salads.forEach(salad => {
    const saladName = salad.nextElementSibling.textContent.trim();
    let weight = saladsALLWeight[saladName] * guestCount / 1000;
    message += `${saladName}: ${weight.toFixed(2)} ק"ג\n`;
  });

  const foodPluses = document.querySelectorAll('input[name="FoodPlus"]:checked');
  foodPluses.forEach(foodPlus => {
    const foodPlusName = foodPlus.nextElementSibling.textContent.trim();
    let weight = FoodPlusWeight[foodPlusName] * guestCount / 1000;
    message += `${foodPlusName}: ${weight.toFixed(2)} ק"ג\n`;
  });

  const firstFoodItems = document.querySelectorAll('input[name="firstFood"]');
  firstFoodItems.forEach(food => {
    if (food.type === 'number' && !isNaN(food.value) && food.value > 0) {
      const foodName = food.dataset.name;
      const weight = food.value;
      message += `${foodName}: ${weight} ק"ג\n`;
    }
  });

  const mainFoodItems = document.querySelectorAll('input[name="mainFood"]');
  mainFoodItems.forEach(food => {
    if (food.type === 'number' && !isNaN(food.value) && food.value > 0) {
      const foodName = food.dataset.name;
      const weight = food.value;
      message += `${foodName}: ${weight} ק"ג\n`;
    }
  });

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
});
