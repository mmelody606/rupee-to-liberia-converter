
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface WorkoutCardProps {
  title: string;
  Icon: LucideIcon;
  description: string;
  color: string;
}

const WorkoutCard = ({ title, Icon, description, color }: WorkoutCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader>
        <div className={`${color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
          <Icon className="text-white h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-600">
          <p>Last workout: Not tracked yet</p>
          <p className="mt-1">Next session: -</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;
