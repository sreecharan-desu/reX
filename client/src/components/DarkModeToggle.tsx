import { useDarkMode } from '../context/DarkModeContext';
import { motion } from 'framer-motion';

export const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                      hover:bg-gray-200 dark:hover:bg-gray-600 
                      transition-colors duration-200"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: isDarkMode ? 360 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-5 h-5 text-gray-700 dark:text-yellow-300"
            >
                {isDarkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                    </svg>
                )}
            </motion.div>
        </motion.button>
    );
}; 