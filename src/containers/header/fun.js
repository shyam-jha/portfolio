import downloadfile from '../../assets/resume.pdf';
import './Header.jsx';

export function down() {
    var link = document.createElement('a');
    link.setAttribute('download', 'resume.pdf');
    link.href = downloadfile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Section with id ${sectionId} not found.`);
    }
}
