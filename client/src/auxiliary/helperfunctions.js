// Input Content Validation Function

const validateQuery = (string) => {

    let regex = /^[a-zA-Z\s]*$/;

    if (!regex.test(string)) { 
        return false
    } else if (string.length > 30) {
        return false
    } else {
    return true
    }
};

// Capitalize

const capitalize = (string) => {
    return string.toUpperCase();
  };

// Convert DateTime Object to Date in Needed Format

const formatDateTime = (dateTime) => {
    let date = new Date(dateTime);
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let finalDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
    return finalDate;
};

// Convert DateTime Object to Weekday

const weekdayDateTime = (dateTime) => {
    let date = new Date(dateTime);
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let finalDate = weekdays[date.getDay()];
    return finalDate;
};

// Convert DateTime to Time

const getTime = (dateTime) => {
    let date = new Date(dateTime);
    let finalDate= date.toLocaleTimeString('en-US');
    return finalDate;
}

export {validateQuery, capitalize, formatDateTime, weekdayDateTime, getTime};
