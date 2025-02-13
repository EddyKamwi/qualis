import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const Tutoring = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const courses = [
    {
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript basics for building modern websites.",
      duration: "8 weeks",
      level: "Beginner"
    },
    {
      title: "Advanced JavaScript",
      description: "Master modern JavaScript features, async programming, and frameworks.",
      duration: "10 weeks",
      level: "Intermediate"
    },
    {
      title: "React Development",
      description: "Build dynamic web applications using React and related technologies.",
      duration: "12 weeks",
      level: "Intermediate"
    },
    {
      title: "Full Stack Development",
      description: "Comprehensive training in both frontend and backend development.",
      duration: "16 weeks",
      level: "Advanced"
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
          Programming Tutoring
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Learn programming from industry experts through personalized tutoring sessions and structured courses.
        </p>
      </motion.div>

      {/* Learning Formats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div 
          {...fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg">
            <div className="text-primary text-3xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Group Sessions
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Learn together in small groups with interactive sessions and peer programming activities.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Affordable learning option
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Collaborative environment
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Scheduled weekly sessions
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg">
            <div className="text-primary text-3xl mb-4">
              <FaLaptopCode />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Private Tutoring
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              One-on-one sessions tailored to your learning pace and specific needs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Personalized attention
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Flexible scheduling
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Customized curriculum
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.h2 
          {...fadeIn}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          Available Courses
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {course.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {course.description}
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-primary">Duration: {course.duration}</span>
                <span className="text-primary">Level: {course.level}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        {...fadeIn}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="bg-primary rounded-lg py-12 px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Learning Journey
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your learning goals and find the right program for you.
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors">
            Schedule Consultation
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Tutoring; 