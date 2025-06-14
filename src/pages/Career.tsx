import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SplashCursor from "@/components/ui/splashCursor";
import DecryptedText from "@/components/ui/DecryptedText";

const careerHistory = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full-Stack Developer",
    duration: "2022 - Present",
    startYear: "2022",
    endYear: "Present",
    logo: "🚀",
    description:
      "Leading development of enterprise-scale applications with React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
    achievements: [
      "Led team of 5 developers on a $2M project",
      "Reduced application load time by 60%",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
  },
  {
    id: 2,
    company: "Digital Innovations Inc",
    position: "Full-Stack Developer",
    duration: "2020 - 2022",
    startYear: "2020",
    endYear: "2022",
    logo: "💡",
    description:
      "Developed and maintained web applications for various clients. Worked with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Built 15+ production applications",
      "Improved code coverage from 40% to 90%",
      "Mentored 3 junior developers",
    ],
    technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis"],
  },
  {
    id: 3,
    company: "StartupTech",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    startYear: "2019",
    endYear: "2020",
    logo: "⭐",
    description:
      "Focused on frontend development using modern JavaScript frameworks. Collaborated closely with UX/UI designers to create intuitive user interfaces.",
    achievements: [
      "Developed responsive web applications",
      "Implemented modern design systems",
      "Optimized performance across all platforms",
    ],
    technologies: ["React", "TypeScript", "Sass", "Webpack", "Jest"],
  },
  {
    id: 4,
    company: "WebDev Agency",
    position: "Junior Developer",
    duration: "2018 - 2019",
    startYear: "2018",
    endYear: "2019",
    logo: "🌱",
    description:
      "Started my professional journey learning full-stack development. Worked on various client projects and gained experience with different technologies.",
    achievements: [
      "Completed 20+ client projects",
      "Learned modern development practices",
      "Built strong foundation in web technologies",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

const Career = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 hero-gradient">
      <div className="max-w-5xl mx-auto">
        <SplashCursor />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-12"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight pb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DecryptedText
              text="Career Journey"
              animateOn="view"
              speed={100}
              sequential={true}
              revealDirection="start"
            />
          </motion.h1>
          <motion.p
            className="text-xl text-[#D7E7F9] max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <DecryptedText
              text="My professional evolution from junior developer to senior engineer, showcasing growth, achievements, and the technologies that shaped my career."
              animateOn="view"
              speed={15}
              sequential={true}
              revealDirection="start"
            />
          </motion.p>
        </motion.div>

        <div className="relative flex flex-col items-center">
          {/* Animated Timeline line - visible on all screens */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50 transform -translate-x-0.5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 10px, rgba(51, 153, 255, 0.5) 10px, rgba(51, 153, 255, 0.5) 20px)",
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {careerHistory.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-20 w-full max-w-4xl"
            >
              {/* Year label above the box (end year) - show for first job and when year changes */}
              {(index === 0 ||
                careerHistory[index - 1]?.endYear !== job.endYear) && (
                <motion.div
                  className="flex items-center justify-center mb-6 relative z-20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg border border-background mr-2"
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    whileHover={{ scale: 1.3 }}
                  />
                  <motion.span
                    className="text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full shadow-lg border border-blue-500/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    {job.endYear}
                  </motion.span>
                </motion.div>
              )}

              <div className="flex justify-center">
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="w-full max-w-3xl mx-4"
                >
                  <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-xl card-glow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <motion.span
                          className="text-4xl"
                          whileHover={{
                            scale: 1.2,
                            rotate: [0, -10, 10, 0],
                            transition: { duration: 0.5 },
                          }}
                        >
                          {job.logo}
                        </motion.span>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-semibold text-foreground">
                            {job.position}
                          </CardTitle>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                            <span className="text-lg font-medium text-primary">
                              {job.company}
                            </span>
                            <Badge
                              variant="outline"
                              className="w-fit bg-blue-500/10 border-blue-500/30"
                            >
                              {job.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-primary-blue leading-relaxed">
                        {job.description}
                      </p>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map(
                            (achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                className="text-primary-blue flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: index * 0.2 + achievementIndex * 0.1,
                                }}
                              >
                                <motion.span
                                  className="text-primary mt-1.5 text-sm"
                                  whileHover={{ scale: 1.2 }}
                                >
                                  •
                                </motion.span>
                                {achievement}
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: index * 0.2 + techIndex * 0.05,
                              }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              <Badge
                                variant="secondary"
                                className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Year label below the box (start year) - show for all jobs including first one */}
              <motion.div
                className="flex items-center justify-center mt-6 relative z-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
              >
                <motion.div
                  className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg border border-background mr-2"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  whileHover={{ scale: 1.3 }}
                />
                <motion.span
                  className="text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-full shadow-lg border border-purple-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  {job.startYear}
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
