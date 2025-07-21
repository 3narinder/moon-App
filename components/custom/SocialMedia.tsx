import React from "react";

interface SocialMediaProps {
  icon: React.ReactNode;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ icon }) => {
  return (
    <div className="w-7 h-7 flex items-center justify-center bg-light-brown cursor-pointer">
      {icon}
    </div>
  );
};

export default SocialMedia;
