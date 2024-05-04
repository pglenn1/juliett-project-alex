$(document).ready(function() {
    $.getJSON("resume.json", function(data) {
        var resumeData = $("#resumeData");
        var html = '';

        // Name
        html += '<h1>' + data.name + '</h1>';
        html += '<hr>';

        // Contact Information
        html += '<h2>Contact Information:</h2>';
        html += '<div class="resume-section">';
        html += '<p>' + data.email + '</p>';
        html += '<p>' + data.phone + '</p>';
        html += '</div>';
        html += '<hr>';

        // Education
        html += '<h3>Education:</h3>';
        for (var i = 0; i < data.education.length; i++) {
        html += '<div class="resume-section">';
        html += '<h4>' + data.education[i].degree + '</h4>';
        html += '<p>' + data.education[i].university + '</p>';
        html += '<p>' + data.education[i].year + '</p>';
        html += '</div>';
        }
        html += '<hr>';

        // Work Experience
        html += '<h3>Work Experience:</h3>';
        for (var j = 0; j < data.experience.length; j++) {
        html += '<div class="resume-section">';
        html += '<h4>' + data.experience[j].position + '</h4>';
        html += '<p>' + data.experience[j].company + '</p>';
        html += '<p>' + data.experience[j].duration + '</p>';
        html += '<p>' + data.experience[j].description + '</p>';
        html += '</div>';
        }
        html += '<hr>';

        // Skills
        html += '<h3>Skills:</h3>';
        html += '<ul>';
        for (var k = 0; k < data.skills.length; k++) {
        html += '<li>' + data.skills[k] + '</li>';
        }
        html += '</ulr>';


        resumeData.html(html);
    });
});
