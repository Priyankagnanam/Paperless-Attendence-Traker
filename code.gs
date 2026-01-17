function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function processForm(formObject) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName("Sheet1"); 
  var sheet2 = ss.getSheetByName("Sheet2"); 
  
  var timestamp = new Date();
  var todayDate = Utilities.formatDate(timestamp, "GMT+5:30", "yyyy-MM-dd");
  
  // 1. Sheet 1-la Duplicate check
  var data1 = sheet1.getDataRange().getValues();
  for (var i = 1; i < data1.length; i++) {
    var rowDate = Utilities.formatDate(new Date(data1[i][0]), "GMT+5:30", "yyyy-MM-dd");
    if (data1[i][2] == formObject.roll_no && rowDate == todayDate) {
      return "ALREADY_EXISTS";
    }
  }
  
  // 2. Details-ai Sheet 1-la eppovum pola add pannu (GPS-oda)
  sheet1.appendRow([
    timestamp, 
    formObject.full_name, 
    formObject.roll_no, 
    formObject.dept, 
    formObject.lat, 
    formObject.lng
  ]);

  // 3. Sheet 2-la Roll Number-ai vachu "PRESENT" nu poodu
  var data2 = sheet2.getDataRange().getValues();
  for (var j = 1; j < data2.length; j++) {
    // Column A (index 0) la Roll Number irukunu check pannuthu
    if (data2[j][0].toString().trim() == formObject.roll_no.toString().trim()) { 
      sheet2.getRange(j + 1, 2).setValue("PRESENT"); // Column B-la status vizhum
      sheet2.getRange(j + 1, 2).setFontColor("#16a34a").setFontWeight("bold");
      break;
    }
  }
  
  return "SUCCESS";
}

function getTotalPresent() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName("Sheet1");
  var data = sheet1.getDataRange().getValues();
  var today = Utilities.formatDate(new Date(), "GMT+5:30", "yyyy-MM-dd");
  var count = 0;
  for (var i = 1; i < data.length; i++) {
    var rowDate = Utilities.formatDate(new Date(data[i][0]), "GMT+5:30", "yyyy-MM-dd");
    if (rowDate == today) count++;
  }
  return count;
}
