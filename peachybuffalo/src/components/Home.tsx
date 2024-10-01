import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Code, Briefcase, Mail } from 'lucide-react'
import { projects } from '../data/projectData';
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg shadow-xl mb-12">
        <h1 className="text-4xl font-bold mb-4">Macall Smith</h1>
        <p className="text-xl mb-8">Building code and products that make an impact</p>
        <Button asChild>
          <Link to="/contact" className="bg-white/50 rounded-md text-purple-600 hover:bg-gray-100">
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link to={project.link}>View Project</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'AWS'].map((skill) => (
            <div key={skill} className="flex items-center bg-white p-4 rounded-md shadow">
              <Code className="mr-2 h-5 w-5 text-purple-500" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-purple-600 text-white p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="mb-6">I'm always open to new projects and opportunities.</p>
        <div className="flex justify-center space-x-4">
          <Button asChild variant="secondary">
            <Link to="/portfolio">
              <Briefcase className="mr-2 h-5 w-5" />
              View Portfolio
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}