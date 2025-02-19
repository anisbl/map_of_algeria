'use client'
import AlgeriaMap from "./AlgeriaMap";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkedAlt } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" />
      
      <div className="max-w-5xl mx-auto">
        <motion.header 
          className="mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
        
          <h1 className="text-3xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 mb-3">
            Algeria Map - 58 Wilayas by anisbl
          </h1>
          <p className="text-gray-600 italic text-mf">
            Copy the code and use it on your site for statistical visualization.
          </p> 
        </motion.header>
        
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="p-4 md:p-8 ">
            <AlgeriaMap />
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-6 py-4 border-t border-indigo-100">
            <p className="text-center text-indigo-700 text-sm font-medium">
              Click on any wilaya, and it will display a toast notification with the wilaya name.
            </p> 
          </div>
        </motion.div>
        

        
      
      </div>
    </main>
  );
}