import { TeamMember } from "@/constants/Types";
import Image from "next/image";
import React from "react";

interface TeamCardProps {
  teamMember: TeamMember;
}

const TeamCard = ({ teamMember }: TeamCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={teamMember?.image}
        alt={teamMember?.name}
        width={255}
        height={320}
      />

      <div className="mt-4 text-center">
        <div className="text-display-2 text-neutral-8 font-semibold uppercase tracking-wider">
          {teamMember?.name}
        </div>
        <div className="text-neutral-6 text-display-2">
          {teamMember?.position}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
