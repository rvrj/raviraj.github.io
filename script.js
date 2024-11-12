async function fetchContent() {
    try {
        const response = await fetch('content.json');
        const data = await response.json();

        // Render hero section
        document.querySelector('.hero h1').textContent = data.name;
        document.querySelector('.hero p').textContent = data.tagline;

        // Render about section
        const aboutSection = document.createElement('section');
        aboutSection.className = 'card';
        aboutSection.id = 'about';
        aboutSection.innerHTML = `
            <h2>About Me</h2>
            <p>${data.about}</p>
        `;
        document.querySelector('.container').appendChild(aboutSection);

        // Render experience section
        const experienceSection = document.createElement('section');
        experienceSection.className = 'card';
        experienceSection.id = 'experience';
        experienceSection.innerHTML = `
            <h2>Experience</h2>
            ${data.experience.map(exp => `
                <div class="experience-item">
                    <h3>${exp.title}</h3>
                    <p>${exp.company} • ${exp.date}</p>
                    <p>${exp.description}</p>
                </div>
            `).join('')}
        `;
        document.querySelector('.container').appendChild(experienceSection);

        // Render skills section
        const skillsSection = document.createElement('section');
        skillsSection.className = 'card';
        skillsSection.id = 'skills';
        skillsSection.innerHTML = `
            <h2>Skills</h2>
            <div class="skills-list">
                ${data.skills.map(skill => `
                    <div class="skill-item">${skill}</div>
                `).join('')}
            </div>
        `;
        document.querySelector('.container').appendChild(skillsSection);

        // Render contact section
        const contactSection = document.createElement('section');
        contactSection.className = 'card';
        contactSection.id = 'contact';
        contactSection.innerHTML = `
            <h2>Contact Me</h2>
            <form id="contact-form">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        `;
        document.querySelector('.container').appendChild(contactSection);

    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchContent);