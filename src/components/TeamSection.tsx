import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    name: "Harshith",
    position: "Founder & CEO",
    bio: "Harshith, the visionary founder of our company, is a pioneer in AI-powered autonomous drones. With deep expertise in the AI and tech industry, he has developed cutting-edge intelligent drones, advanced machine learning solutions, and high-performance websites. His passion for blending AI with drone technology has led to game-changing innovations that enhance automation, precision, and efficiency",
    avatar: "https://skythrinethrssets.blob.core.windows.net/skythrinethfiles/harshith%20(1).jpeg?sp=r&st=2025-05-24T11:43:40Z&se=2027-02-28T19:43:40Z&spr=https&sv=2024-11-04&sr=b&sig=X7L4XnLXxoE221L3GVJsSGPpYpO1G%2F3j34zOO2yzMmw%3D",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/%EF%BD%93%EF%BD%8B%EF%BD%99%EF%BD%94%EF%BD%88%EF%BD%92%EF%BD%89%EF%BD%8E%CE%BE%EF%BD%94%EF%BD%88%EF%BD%92%CE%BB-274198355/",
      twitter: "https://x.com/i/flow/login?redirect_after_login=%2FSkyThrinethra",
      email: "contact@skythrinethra.com"
    }
  },
  {
    id: 2,
    name: "Vedanth",
    position: "CTO | Front-End & AI Team Lead ",
    bio: "A pioneer in AI and machine learning, Vedanth oversees our technology development across all service areas, ensuring cutting-edge solutions for our clients. Leading front-end and AI teams to build intelligent, scalable, and high-performance digital solutions",
    avatar: "https://skythrinethrssets.blob.core.windows.net/skythrinethfiles/vednth.jpg?sp=r&st=2025-05-24T11:52:33Z&se=2027-02-28T19:52:33Z&spr=https&sv=2024-11-04&sr=b&sig=RgSGYa%2F5ij20C6Ou27pZ2kiRGCAEN%2F%2FMiY3Qhz8nZFI%3D",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/%EF%BD%93%EF%BD%8B%EF%BD%99%EF%BD%94%EF%BD%88%EF%BD%92%EF%BD%89%EF%BD%8E%CE%BE%EF%BD%94%EF%BD%88%EF%BD%92%CE%BB-274198355/",
      twitter: "https://x.com/i/flow/login?redirect_after_login=%2FSkyThrinethra",
      email: "contact@skythrinethra.com"
    }
  },
  {
    id: 3,
    name: "Ramana",
    position: "CFO |Backend Team Lead  ",
    bio: "Building robust and scalable backend systems with hands-on expertise in high-performance architecture and efficient data management",
    avatar: "https://skythrinethrssets.blob.core.windows.net/skythrinethfiles/ramana.jpg?sp=r&st=2025-05-27T05:50:40Z&se=2027-03-29T13:50:40Z&spr=https&sv=2024-11-04&sr=b&sig=jp4pc3DaqCABNXGnb%2BJI3K%2BV7hK8N7qdR2T4ol3E6To%3D",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/%EF%BD%93%EF%BD%8B%EF%BD%99%EF%BD%94%EF%BD%88%EF%BD%92%EF%BD%89%EF%BD%8E%CE%BE%EF%BD%94%EF%BD%88%EF%BD%92%CE%BB-274198355/",
      twitter: "https://x.com/i/flow/login?redirect_after_login=%2FSkyThrinethra",
      email: "contact@skythrinethra.com"
    }
  },
  {
    id: 4,
    name: "Mohith",
    position: "Director of Educational Programs | UI/UX Design Lead ",
    bio: "With an M.Tech Integrated in Computer Science and Engineering (Data Science), Mohith blends cutting-edge UI/UX design with operational excellence to enhance digital experiences, boost user engagement, and design training curricula that make complex technical concepts accessible and engaging for young learners.",
    avatar: "https://skythrinethrssets.blob.core.windows.net/skythrinethfiles/mohith.jpg?sp=r&st=2025-05-24T11:44:45Z&se=2027-01-31T19:44:45Z&spr=https&sv=2024-11-04&sr=b&sig=NC2Ye3AhcSOfbm5rCMJDmnS%2F%2FOT1WyjhUKzVusIfcOI%3D",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/%EF%BD%93%EF%BD%8B%EF%BD%99%EF%BD%94%EF%BD%88%EF%BD%92%EF%BD%89%EF%BD%8E%CE%BE%EF%BD%94%EF%BD%88%EF%BD%92%CE%BB-274198355/",
      twitter: "https://x.com/i/flow/login?redirect_after_login=%2FSkyThrinethra",
      email: "contact@skythrinethra.com"
    }
  }
];


interface TeamSectionProps {
  isDetailedView?: boolean;
}

const TeamSection: React.FC<TeamSectionProps> = ({ isDetailedView = false }) => {
  const navigate = useNavigate();
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
              {/* <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div> */}
              <div 
  key={member.id} 
  className="w-72 h-96 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
>
  <div className="w-full h-full overflow-hidden">
    <img 
      src={member.avatar} 
      alt={member.name} 
      className="w-full h-300 object-cover object-center transition-transform duration-500 hover:scale-110"
    />
  </div>
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
            {/* <a 
              href="/about" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Meet the Entire Team
            </a> */}
               <button
      onClick={() => navigate('/about')}
      className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
    >
      Meet the Entire Team
    </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
