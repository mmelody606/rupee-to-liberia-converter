
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Dumbbell, Body, Leg, ChestIcon } from 'lucide-react';
import WorkoutCard from './WorkoutCard';

const workoutCategories = [
  {
    title: "Chest",
    icon: ChestIcon,
    description: "Track your chest workouts",
    color: "bg-blue-500",
  },
  {
    title: "Legs",
    icon: Leg,
    description: "Track your leg exercises",
    color: "bg-green-500",
  },
  {
    title: "Arms",
    icon: Dumbbell,
    description: "Track your arm workouts",
    color: "bg-purple-500",
  },
  {
    title: "Abs",
    icon: Body,
    description: "Track your abs exercises",
    color: "bg-orange-500",
  },
];

const FitnessTracker = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Fitness Tracker</h1>
          <p className="text-gray-600">Track your workouts and progress</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {workoutCategories.map((category) => (
            <WorkoutCard 
              key={category.title}
              title={category.title}
              Icon={category.icon}
              description={category.description}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FitnessTracker;
