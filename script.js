document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
            themeToggle.nextElementSibling.textContent = "Light Mode";
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
            themeToggle.nextElementSibling.textContent = "Dark Mode";
        }
    });

    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});

function gradeTest() {
    const answers = {
        q1: 'B',
        q2: 'B',
        q3: 'C',
        q4: 'A',
        q5: 'C',
        q6: 'A',
        q7: 'A',
        q8: 'B',
        q9: 'C',
        q10: 'C',
        q11: 'A',
        q12: 'D'
    };

    let score = 0;
    const form = document.getElementById('test-form');
    const resultDiv = document.getElementById('result');
    const formData = new FormData(form);

    formData.forEach((value, key) => {
        if (value === answers[key]) {
            score += 1;
        }
    });

    resultDiv.innerHTML = `<h3>Your Score: ${score} out of 12</h3>`;
}