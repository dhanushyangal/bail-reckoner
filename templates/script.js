function viewDetails() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;

    if (name && dob) {
        window.location.href = `details.html?name=${encodeURIComponent(name)}&dob=${encodeURIComponent(dob)}`;
    } else {
        alert('Please enter both name and date of birth.');
    }
}

function addReport() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;

    if (name && dob) {
        window.location.href = `report.html?name=${encodeURIComponent(name)}&dob=${encodeURIComponent(dob)}`;
    } else {
        alert('Please enter both name and date of birth.');
    }
}

function submitRequest() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;

    if (name && dob) {
        window.location.href = `judge_review.html?name=${encodeURIComponent(name)}&dob=${encodeURIComponent(dob)}`;
    } else {
        alert('Please enter both name and date of birth.');
    }
}

function goBack() {
    window.history.back();
}

function saveReport() {
    const report = document.getElementById('report').value;
    if (report) {
        alert('Report saved successfully!');
        window.history.back();
    } else {
        alert('Please enter a report.');
    }
}

function approveBail() {
    alert('Bail approved by the judge.');
    window.history.back();
}

function denyBail() {
    alert('Bail denied by the judge.');
    window.history.back();
}

// Populate details on the prisoner details and judge review pages
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const dob = urlParams.get('dob');

    if (name && dob) {
        document.getElementById('name').textContent = name;
        document.getElementById('dob').textContent = dob;
        
        // Mock data - replace with API call to get real data
        document.getElementById('age').textContent = '32';
        document.getElementById('gender').textContent = 'Male';
        document.getElementById('offense_type').textContent = 'Violent';
        document.getElementById('previous_convictions').textContent = '1';
        document.getElementById('community_ties').textContent = 'Strong';
        document.getElementById('flight_risk').textContent = 'Low';
        document.getElementById('bail_amount_suggested').textContent = '5000';
        document.getElementById('employment_status').textContent = 'Employed';
        document.getElementById('family_dependants').textContent = '2';
        document.getElementById('criminal_history_severity').textContent = 'Moderate';

        // Mock model prediction
        if (document.getElementById('prediction')) {
            document.getElementById('prediction').textContent = 'Bail Likely';
        }
    }
};
