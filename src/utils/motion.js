export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay antar child components
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30, // Mulai dari 30px di bawah
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing
    },
  },
};

// Untuk komponen yang lebih kompleks seperti cards
export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};


// right
export const container2Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12, // Delay antar komponen
            delayChildren: 0.2, // Delay awal agar tidak bersamaan dengan left section
        },
    },
};

// Variants untuk item umum
export const item2Variants = {
    hidden: {
        opacity: 0,
        y: 25,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// Variants untuk video cards
export const videoCardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// Variants untuk button group
export const buttonGroupVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export const buttonVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};



// footer
// Animation variants
export const footerSectionsVariants = {
    hidden: { 
        opacity: 0,
        y: 50 
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
}

export const footerContainerVariants = {
    hidden: { 
        opacity: 0,
        y: 30,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.15
        }
    }
}

export const logoVariants = {
    hidden: { 
        opacity: 0,
        x: -20,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

export const socialVariants = {
    hidden: { 
        opacity: 0,
        x: 20,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.1
        }
    }
}

export const socialIconVariants = {
    hidden: { 
        opacity: 0,
        y: 10,
        scale: 0.8,
        rotate: -10
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}