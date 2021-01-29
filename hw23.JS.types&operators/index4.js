let year = prompt('Enter any year');
    if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0)
    {
        alert('высокосный');
    }
    else
        alert('не высокосный');
