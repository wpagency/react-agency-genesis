import React from 'react';
import { cn } from '@/lib/utils';

interface GeometricAvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-16 h-16 text-base',
  xl: 'w-24 h-24 text-xl'
};

const gradientColors = [
  'bg-gradient-to-br from-blue-500 to-blue-700',
  'bg-gradient-to-br from-purple-500 to-purple-700',
  'bg-gradient-to-br from-green-500 to-green-700',
  'bg-gradient-to-br from-red-500 to-red-700',
  'bg-gradient-to-br from-yellow-500 to-yellow-700',
  'bg-gradient-to-br from-pink-500 to-pink-700',
  'bg-gradient-to-br from-indigo-500 to-indigo-700',
  'bg-gradient-to-br from-teal-500 to-teal-700'
];

export const GeometricAvatar: React.FC<GeometricAvatarProps> = ({
  name,
  size = 'md',
  className
}) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Generate consistent color based on name
  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % gradientColors.length;
  const gradientClass = gradientColors[colorIndex];

  return (
    <div className={cn(
      "rounded-full flex items-center justify-center text-white font-bold shadow-lg",
      sizeClasses[size],
      gradientClass,
      className
    )}>
      {initials}
    </div>
  );
};


