document.getElementById('calculate-btn').addEventListener('click', function() {
    const dateField = document.getElementById('date-field');
    const resultDiv = document.getElementById('result');
    const inputDate = new Date(dateField.value);

    // Clear any previous results
    resultDiv.textContent = "";
    resultDiv.style.display = 'none';

    if (!dateField.value) {
        resultDiv.textContent = "Please enter a date.";
        resultDiv.style.display = 'block';
        return;
    }

    const today = new Date();

    if (isNaN(inputDate.getTime())) {
        resultDiv.textContent = "Invalid date. Please enter a valid date.";
        resultDiv.style.display = 'block';
        return;
    }

    if (inputDate > today) {
        resultDiv.textContent = "The date cannot be in the future.";
        resultDiv.style.display = 'block';
        return;
    }

    // Calculate age
    const ageInMilliseconds = today - inputDate;
    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970; // 1970 is the epoch date
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1; // Subtracting 1 since the date starts at 1

    resultDiv.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
    resultDiv.style.display = 'block';
});
