import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillData {
  skill: string;
  proficiency: number;
}

interface SkillsRadarChartProps {
  data: SkillData[];
  title?: string;
}

export const SkillsRadarChart: React.FC<SkillsRadarChartProps> = ({ 
  data, 
  title = "Core Expertise" 
}) => {
  const chartData = data.map(item => ({
    skill: item.skill.replace(' ', '\n'),
    proficiency: item.proficiency
  }));

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
              <PolarGrid 
                stroke="hsl(var(--border))" 
                className="opacity-30"
              />
              <PolarAngleAxis 
                dataKey="skill" 
                className="text-xs"
                tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
              />
              <PolarRadiusAxis 
                angle={0} 
                domain={[0, 100]} 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
              />
              <Radar
                name="Proficiency"
                dataKey="proficiency"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.3}
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-center mt-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full opacity-30"></div>
            <span className="text-sm text-muted-foreground">Proficiency Level (%)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


