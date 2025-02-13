import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaStar, FaRocket } from 'react-icons/fa';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "We stay at the forefront of technology to deliver cutting-edge solutions."
    },
    {
      icon: <FaHandshake />,
      title: "Partnership",
      description: "We build lasting relationships with our clients through trust and collaboration."
    },
    {
      icon: <FaStar />,
      title: "Excellence",
      description: "We strive for excellence in every project we undertake."
    },
    {
      icon: <FaRocket />,
      title: "Growth",
      description: "We help businesses and individuals reach their full potential."
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <motion.div 
        {...fadeIn}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Qualis Designers
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Empowering businesses and individuals through innovative web solutions and expert programming education.
        </p>
      </motion.div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div 
          {...fadeIn}
          className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Founded by Edward Kamwi, Qualis Designers emerged from a vision to bridge the gap between quality web design and programming education in Namibia. With years of experience in both development and teaching, we understand the unique challenges businesses face in the digital landscape.
            </p>
            <p>
              Our mission is to empower businesses with professional web solutions while nurturing the next generation of developers through comprehensive programming education.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.h2 
          {...fadeIn}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-primary text-3xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <motion.div
        {...fadeIn}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="bg-primary rounded-lg py-12 px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Team
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for web development and education.
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors">
            View Opportunities
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 