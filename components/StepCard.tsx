import React from 'react';
import { DeploymentStep } from '../types';
import { ChevronRight } from 'lucide-react';

interface StepCardProps {
  step: DeploymentStep;
  stepNumber: number;
}

const StepCard: React.FC<StepCardProps> = ({ step, stepNumber }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-30 group-hover:opacity-100 transition duration-300 blur-sm"></div>
      <div className="relative bg-slate-800 p-6 rounded-xl border border-slate-700 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                {step.icon}
            </div>
            <span className="text-4xl font-bold text-slate-700 select-none">{stepNumber}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
            {step.description}
        </p>
        <div className="flex items-center text-indigo-400 text-sm font-medium group-hover:text-indigo-300 transition-colors">
            Learn more <ChevronRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default StepCard;