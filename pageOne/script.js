const projects = document.querySelectorAll('.project');
const revealProjects = () => {
  projects.forEach(p => {
    const rect = p.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      p.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealProjects);
window.addEventListener('load', revealProjects);