export const bounceCardVariants = {
    hidden: {
    opacity: 0,
    scale: 0.3, // Mulai dari sangat kecil
    rotate: -10, // Sedikit rotasi untuk efek tambahan
  },
  show: {
    opacity: 1,
    scale: 1, // Kembali ke ukuran normal
    rotate: 0, // Kembali ke rotasi normal
    transition: {
      duration: 0.8,
      ease: "easeOut",
      scale: {
        type: "spring",
        damping: 10, // Kontrol bounce (semakin kecil = lebih bouncy)
        stiffness: 100, // Kekuatan spring
      },
      delay: 0.2,
    },
  },
};