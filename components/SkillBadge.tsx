import React from 'react';
import { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="inline-block border border-white/20 px-4 py-2 text-sm text-gray-300 hover:text-white hover:border-white transition-colors cursor-default font-mono">
      {skill.name}
    </span>
  );
};