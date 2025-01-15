var currentDT = new Date();

// Date and Time Components
var currentTimeUnix = currentDT.getTime(); // epoch format
var currentFullYear = currentDT.getFullYear();
var currentMonth = currentDT.getMonth(); // 0 = January, 11 = December
var currentDate = currentDT.getDate(); // Day of the month (1-31)
var currentDay = currentDT.getDay(); // Day of the week (0 = Sunday)
var currentHours = currentDT.getHours(); // Hours (0-23)
var currentMinutes = currentDT.getMinutes(); // Minutes (0-59)
var currentSeconds = currentDT.getSeconds(); // Seconds (0-59)
var currentMilliseconds = currentDT.getMilliseconds(); // Milliseconds (0-999)

// String Representations
var currentDateString = currentDT.toDateString(); // e.g., "Thu Jan 4 2025"
var currentTimeString = currentDT.toTimeString(); // e.g., "10:48:12 GMT+0000 (UTC)"
var currentLocaleDateString = currentDT.toLocaleDateString(); // e.g., "1/4/2025"
var currentLocaleTimeString = currentDT.toLocaleTimeString(); // e.g., "10:48:12 AM"
var currentLocaleString = currentDT.toLocaleString(); // e.g., "1/4/2025, 10:48:12 AM"
var currentISOString = currentDT.toISOString(); // e.g., "2025-01-04T10:48:12.456Z"

// UTC Components
var currentUTCFullYear = currentDT.getUTCFullYear();
var currentUTCMonth = currentDT.getUTCMonth();
var currentUTCDate = currentDT.getUTCDate();
var currentUTCDay = currentDT.getUTCDay();
var currentUTCHours = currentDT.getUTCHours();
var currentUTCMinutes = currentDT.getUTCMinutes();
var currentUTCSeconds = currentDT.getUTCSeconds();
var currentUTCMilliseconds = currentDT.getUTCMilliseconds();

// Timezone Offset
var timezoneOffset = currentDT.getTimezoneOffset(); // Minutes from UTC

// Log Outputs
console.log("Current Date & Time:", currentDT);
console.log("Current Timestamp (Unix):", currentTimeUnix);
console.log("Year:", currentFullYear);
console.log("Month (0-11):", currentMonth);
console.log("Date (1-31):", currentDate);
console.log("Day of the Week (0-6):", currentDay);
console.log("Hours (0-23):", currentHours);
console.log("Minutes (0-59):", currentMinutes);
console.log("Seconds (0-59):", currentSeconds);
console.log("Milliseconds (0-999):", currentMilliseconds);
console.log("Date String:", currentDateString);
console.log("Time String:", currentTimeString);
console.log("Locale Date String:", currentLocaleDateString);
console.log("Locale Time String:", currentLocaleTimeString);
console.log("Locale DateTime String:", currentLocaleString);
console.log("ISO String:", currentISOString);
console.log("UTC Year:", currentUTCFullYear);
console.log("UTC Month (0-11):", currentUTCMonth);
console.log("UTC Date (1-31):", currentUTCDate);
console.log("UTC Day of the Week (0-6):", currentUTCDay);
console.log("UTC Hours (0-23):", currentUTCHours);
console.log("UTC Minutes (0-59):", currentUTCMinutes);
console.log("UTC Seconds (0-59):", currentUTCSeconds);
console.log("UTC Milliseconds (0-999):", currentUTCMilliseconds);
console.log("Timezone Offset (minutes):", timezoneOffset);


var someDateTime = 16685536092000;
var convertedDateTime = new Date(someDateTime)

console.log(convertedDateTime.getDate())