import React from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  isThinking?: boolean;
}

export interface DeploymentStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}