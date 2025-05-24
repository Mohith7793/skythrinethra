import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  avatar: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Alex Morgan",
    position: "Founder & CEO",
    bio: "With over 15 years of experience in aerospace engineering, Dr. Morgan combines technical expertise with entrepreneurial vision to lead our company's innovation strategy.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "alex@techdrone.com"
    }
  },
  {
    id: 2,
    name: "Sophia Chen",
    position: "CTO",
    bio: "A pioneer in AI and machine learning, Sophia oversees our technology development across all service areas, ensuring cutting-edge solutions for our clients.",
    avatar: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "sophia@techdrone.com"
    }
  },
  {
    id: 3,
    name: "David Singh",
    position: "Head of Drone Engineering",
    bio: "David leads our drone hardware team, bringing his extensive background in robotics and electronics to create innovative and reliable aerial platforms.",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "david@techdrone.com"
    }
  },
  {
    id: 4,
    name: "Olivia Johnson",
    position: "Director of Educational Programs",
    bio: "With a Ph.D. in Educational Technology, Olivia designs our training curricula to make complex technical concepts accessible and engaging for young learners.",
    avatar: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "olivia@techdrone.com"
    }
  }
];

interface TeamSectionProps {
  isDetailedView?: boolean;
}

const TeamSection: React.FC<TeamSectionProps> = ({ isDetailedView = false }) => {
  return (
    <section className={`py-20 ${isDetailedView ? 'bg-white' : 'bg-blue-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the experts behind our innovation and success. Our diverse team brings together expertise from various fields to deliver exceptional solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-4">{member.position}</p>
                
                {isDetailedView && (
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                )}
                
                <div className="flex space-x-3">
                  {member.socialLinks.linkedin && (
                    <a 
                      href={member.socialLinks.linkedin} 
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a 
                      href={member.socialLinks.twitter} 
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                  {member.socialLinks.email && (
                    <a 
                      href={`mailto:${member.socialLinks.email}`} 
                      className="text-gray-500 hover:text-green-600 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!isDetailedView && (
          <div className="text-center mt-12">
            <a 
              href="/about" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Meet the Entire Team
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;