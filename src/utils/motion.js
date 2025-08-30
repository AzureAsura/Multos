export const heroVariants = {
  hidden: {
    opacity: 0,
    x: 300, // Mulai dari posisi 100px ke kanan
  },
  show: {
    opacity: 1,
    x: 0, // Bergerak ke posisi normal
    scale: 1, // Kembali ke ukuran normal
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const bodyLeftVariants = {
  hidden: {
    opacity: 0,
    y: 100, // Mulai dari posisi 100px ke kanan
  },
  show: {
    opacity: 1,
    y: 0, // Bergerak ke posisi normal
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

