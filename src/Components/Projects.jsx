import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../Constants';

const Projects = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-5xl text-blue-300'
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.1 }}
            key={index}
            className='flex flex-wrap lg:justify-center mb-4 border border-neutral-700 p-4 rounded-lg bg-neutral-900'
          >
            <div className='w-full lg:w-1/4'>
              <img
                src={project.image}
                alt={project.name}
                width={150}
                height={150}
                className='mb-6 rounded'
              />
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <h1 className='mb-2 font-semibold text-blue-300'>{project.name}</h1>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='rounded border border-neutral-700 bg-neutral-800 px-2 py-1 text-sm font-medium text-blue-500'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='mt-4 mb-4'>
                <a
                  href={project.link}
                  className='text-purple-500 hover:text-blue-500 bg-neutral-900 py-1 px-2 rounded font-semibold border border-neutral-700 transition-colors'
                >
                  View Link
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;