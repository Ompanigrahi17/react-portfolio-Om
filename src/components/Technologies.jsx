import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiTypescript, SiDocker, SiKubernetes, SiGit } from 'react-icons/si';
import { TbBrandDatabricks, TbBrandSnowflake } from 'react-icons/tb';
import { SiMicrosoftazure } from "react-icons/si";
import { FaPython, FaAws } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { SiApachekafka, SiApachespark, SiApacheairflow, SiApachehive } from 'react-icons/si';
import { SiGooglebigquery } from 'react-icons/si';
import { SiTableau } from 'react-icons/si';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Tooltip = ({ children, text }) => (
  <div className="relative group">
    {children}
    <span className="absolute bg-neutral-800 text-purple-700 p-2 rounded-lg text-sm -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {text}
    </span>
  </div>
);

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* First Row (6 Technologies) */}
        <div className="flex flex-wrap w-full justify-center gap-6 mb-6">
          <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="React">
              <RiReactjsLine className="text-7xl text-cyan-500" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="MongoDB">
              <SiMongodb className="text-7xl text-green-500" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="PostgreSQL">
              <BiLogoPostgresql className="text-7xl text-sky-700" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="Databricks">
              <TbBrandDatabricks className="text-7xl text-red-500" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="Python">
              <FaPython className="text-7xl" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="Snowflake">
              <TbBrandSnowflake className="text-7xl text-cyan-300" />
            </Tooltip>
          </motion.div>
        </div>

        {/* Second Row (6 Technologies) */}
        <div className="flex flex-wrap w-full justify-center gap-6">
          <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="AWS">
              <FaAws className="text-7xl text-orange-500" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="Docker">
              <SiDocker className="text-7xl text-blue-500" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="Kubernetes">
              <SiKubernetes className="text-7xl text-blue-400" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="TypeScript">
              <SiTypescript className="text-7xl text-blue-600" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="Azure">
              <SiMicrosoftazure className="text-7xl text-cyan-600" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="Git">
              <SiGit className="text-7xl text-orange-500" />
            </Tooltip>
          </motion.div>
        </div>

        {/* Third Row (6 New Technologies) */}
        <div className="flex flex-wrap w-full justify-center gap-6 mt-6">
          <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="Apache Spark">
              <SiApachespark className="text-7xl text-orange-500" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="Apache Kafka">
              <SiApachekafka className="text-7xl text-purple-500" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="Apache Airflow">
              <SiApacheairflow className="text-7xl text-green-600" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="Apache Hive">
              <SiApachehive className="text-7xl text-yellow-400" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="Google BigQuery">
              <SiGooglebigquery className="text-7xl text-blue-600" />
            </Tooltip>
          </motion.div>
          <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <Tooltip text="Tableau">
              <SiTableau className="text-7xl text-blue-500" />
            </Tooltip>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;