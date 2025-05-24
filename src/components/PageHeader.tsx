import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  bgColor?: string;
  textColor?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  bgColor = "bg-blue-600",
  textColor = "text-white"
}) => {
  return (
    <section className={`${bgColor} pt-32 pb-16 px-4`}>
      <div className="container mx-auto text-center">
        <h1 className={`text-4xl md:text-5xl font-bold ${textColor} mb-4`}>{title}</h1>
        <p className={`${textColor} text-opacity-90 text-xl max-w-2xl mx-auto`}>{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;