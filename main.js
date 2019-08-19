document.addEventListener('DOMContentLoaded', () => {
  Particles.init({
    selector: '.background',
    maxParticles: 75,
    connectParticles: true,
    color: '#555555',
    responsive: [
      {
        breakpoint: 425,
        options: {
          maxParticles: 0,
        },
      },
      {
        breakpoint: 768,
        options: {
          maxParticles: 25,
        },
      },
      {
        breakpoint: 1024,
        options: {
          maxParticles: 50,
        },
      },
      {
        breakpoint: 1600,
        options: {
          maxParticles: 75,
        },
      },
    ],
  });
});
