document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('content.json');
        const data = await response.json();

        // Populate hero section
        document.getElementById('name').textContent = data.name;
        document.getElementById('title').textContent = data.title;

        // Populate about section
        document.getElementById('about-content').textContent = data.about;

        // Populate experience section
        const experienceContainer = document.getElementById('experience-items');
        data.experience.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.className = 'experience-item card';
            jobElement.innerHTML = `
                <h3>${job.title} @ ${job.company}</h3>
                <p>${job.period}</p>
                <ul>
                    ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            `;
            experienceContainer.appendChild(jobElement);
        });

        // Populate skills section
        const skillsList = document.getElementById('skills-list');
        data.skills.forEach(skill => {
            const skillElement = document.createElement('span');
            skillElement.className = 'skill-item';
            skillElement.textContent = skill;
            skillsList.appendChild(skillElement);
        });

        // Populate navigation
        const navList = document.getElementById('nav-links');
        data.navLinks.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.href;
            a.innerHTML = `
                <i class="fa-solid ${link.icon}"></i>
                <span>${link.text}</span>
            `;
            if (link.download) a.setAttribute('download', '');
            li.appendChild(a);
            navList.appendChild(li);
        });

        // Populate footer
        document.getElementById('footer-text').textContent = data.footerText;

    } catch (error) {
        console.error('Error loading content:', error);
    }
});

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted');
    alert('Thank you for your message. We will get back to you soon!');
});