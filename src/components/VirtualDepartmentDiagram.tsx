import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, BookOpen, RotateCcw, Calculator, Users, Cpu } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  position: { x: number; y: number };
  description: string;
  intervention: string;
  color: string;
  icon: React.ReactNode;
}

interface Connection {
  from: string;
  to: string;
  trigger: string;
}

const agents: Agent[] = [
  {
    id: 'manager',
    name: 'Orchestrator',
    position: { x: 300, y: 200 },
    description: 'Central orchestrator that observes learning patterns and coordinates responses',
    intervention: 'Student struggling with algebra → activate Curriculum Generator for targeted lesson',
    color: '#7E84FF',
    icon: <Brain className="w-4 h-4" />
  },
  {
    id: 'curriculum',
    name: 'Curriculum Generator',
    position: { x: 120, y: 100 },
    description: 'Generates personalized explanations and micro-assessments',
    intervention: 'Create focused 3-minute lesson on quadratic factoring with visual examples',
    color: '#A8B0FF',
    icon: <BookOpen className="w-4 h-4" />
  },
  {
    id: 'twin',
    name: 'Twin Generator',
    position: { x: 480, y: 100 },
    description: 'Creates isomorphic practice problems for skill reinforcement',
    intervention: 'Generate 3 similar problems: same structure, different numbers',
    color: '#21C7C2',
    icon: <RotateCcw className="w-4 h-4" />
  },
  {
    id: 'solver',
    name: 'Micro Solver',
    position: { x: 120, y: 300 },
    description: 'Provides step by step reasoning support with minimal hints',
    intervention: '"Let me show you the first step: factor out the common term..."',
    color: '#C9D0DB',
    icon: <Calculator className="w-4 h-4" />
  },
  {
    id: 'copilot',
    name: 'Meeting Copilot',
    position: { x: 480, y: 300 },
    description: 'Transcribes sessions and leads proactive conversations based on student learning progress context',
    intervention: 'AI detects confusion pattern → initiates conversation: "I noticed you hesitated on factoring. Want to explore this together?"',
    color: '#E9ECF4',
    icon: <Users className="w-4 h-4" />
  },
  {
    id: 'engine',
    name: 'Engine',
    position: { x: 300, y: 50 },
    description: 'Our proprietary language model specifically trained on K-12 education topics (Coming Soon)',
    intervention: 'Provides the foundational AI intelligence powering all educational interactions',
    color: '#A8B0FF',
    icon: <Cpu className="w-4 h-4" />
  }
];

const connections: Connection[] = [
  { from: 'engine', to: 'manager', trigger: 'Powers all AI decision-making and analysis' },
  { from: 'manager', to: 'curriculum', trigger: 'Knowledge gap identified + confidence < 70%' },
  { from: 'manager', to: 'twin', trigger: 'Skill practice needed + mastery < 80%' },
  { from: 'manager', to: 'solver', trigger: 'Student stuck + time on task > 3 minutes' },
  { from: 'manager', to: 'copilot', trigger: 'Complex issue + repeated failures detected' }
];

export function VirtualDepartmentDiagram() {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);
  const [hoveredConnection, setHoveredConnection] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-deep-space-navy/80 to-ion-violet/5 backdrop-blur-sm p-12 rounded-3xl border border-ion-violet/20">
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl md:text-4xl text-ion-violet mb-4">Virtual Department Architecture</h3>
          <p className="text-lg text-soft-graphite">Hover to explore how our AI agents coordinate learning interventions</p>
        </div>
        
        <div className="relative">
          <svg width="600" height="400" viewBox="0 0 600 400" className="w-full h-auto">
            {/* Background elements */}
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7E84FF" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#7E84FF" stopOpacity="0" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Central glow */}
            <circle cx="300" cy="200" r="120" fill="url(#centerGlow)" />
            
            {/* Data flow lines */}
            {connections.map((connection, index) => {
              const fromAgent = agents.find(a => a.id === connection.from)!;
              const toAgent = agents.find(a => a.id === connection.to)!;
              const connectionId = `${connection.from}-${connection.to}`;
              const isActive = hoveredConnection === connectionId || hoveredAgent === connection.from || hoveredAgent === connection.to;
              
              return (
                <g key={connectionId}>
                  {/* Invisible thicker line for easier hovering */}
                  <line
                    x1={fromAgent.position.x}
                    y1={fromAgent.position.y}
                    x2={toAgent.position.x}
                    y2={toAgent.position.y}
                    stroke="transparent"
                    strokeWidth="12"
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredConnection(connectionId)}
                    onMouseLeave={() => setHoveredConnection(null)}
                  />
                  
                  {/* Visible line */}
                  <motion.line
                    x1={fromAgent.position.x}
                    y1={fromAgent.position.y}
                    x2={toAgent.position.x}
                    y2={toAgent.position.y}
                    stroke={isActive ? "#21C7C2" : "#A8B0FF"}
                    strokeWidth={isActive ? "3" : "2"}
                    opacity={isActive ? 1 : 0.3}
                    className="pointer-events-none transition-all duration-300"
                    strokeDasharray={isActive ? "8,4" : "0,0"}
                    filter={isActive ? "url(#glow)" : "none"}
                    animate={{
                      strokeDashoffset: isActive ? [0, -24] : 0
                    }}
                    transition={{ 
                      strokeDashoffset: { 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }
                    }}
                  />
                </g>
              );
            })}
            
            {/* Agent nodes */}
            {agents.map((agent) => {
              const isActive = hoveredAgent === agent.id;
              const isConnected = hoveredConnection && 
                (hoveredConnection.includes(agent.id) || 
                 connections.some(c => (c.from === agent.id || c.to === agent.id) && `${c.from}-${c.to}` === hoveredConnection));
              
              return (
                <g key={agent.id}>
                  {/* Node background */}
                  <motion.circle
                    cx={agent.position.x}
                    cy={agent.position.y}
                    r={isActive ? "32" : "24"}
                    fill={agent.color}
                    opacity={isActive ? 0.3 : 0.1}
                    className="cursor-pointer"
                    animate={{
                      r: isActive ? 32 : 24,
                      opacity: isActive ? 0.3 : 0.1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Invisible hover area */}
                  <circle
                    cx={agent.position.x}
                    cy={agent.position.y}
                    r="30"
                    fill="transparent"
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredAgent(agent.id)}
                    onMouseLeave={() => setHoveredAgent(null)}
                  />
                  
                  {/* Main node */}
                  <motion.circle
                    cx={agent.position.x}
                    cy={agent.position.y}
                    r={isActive ? "20" : "16"}
                    fill={agent.color}
                    className="cursor-pointer pointer-events-none"
                    filter={isActive || isConnected ? "url(#glow)" : "none"}
                    animate={{
                      r: isActive ? 20 : 16,
                      scale: isActive ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Icon */}
                  <foreignObject
                    x={agent.position.x - 8}
                    y={agent.position.y - 8}
                    width="16"
                    height="16"
                    className="pointer-events-none"
                  >
                    <div className="text-deep-space-navy flex items-center justify-center w-full h-full">
                      {agent.icon}
                    </div>
                  </foreignObject>
                  
                  {/* Agent label */}
                  <text
                    x={agent.position.x}
                    y={agent.position.y - 40}
                    textAnchor="middle"
                    fill="#E9ECF4"
                    fontSize="14"
                    fontFamily="Inter"
                    fontWeight="500"
                    className="pointer-events-none"
                  >
                    {agent.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        
        {/* Information panel */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {hoveredAgent && (
              <motion.div
                key={`agent-${hoveredAgent}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-br from-ion-violet/10 to-stellar-lavender/10 border border-ion-violet/30 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ion-violet/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {agents.find(a => a.id === hoveredAgent)?.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-2xl text-ion-violet mb-3">
                      {agents.find(a => a.id === hoveredAgent)?.name}
                    </h4>
                    <p className="text-soft-graphite text-lg leading-relaxed mb-4">
                      {agents.find(a => a.id === hoveredAgent)?.description}
                    </p>
                    <div className="bg-deep-space-navy/50 rounded-lg p-4">
                      <p className="text-nebula-white font-medium">
                        <span className="text-arc-teal">Example:</span> {agents.find(a => a.id === hoveredAgent)?.intervention}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {hoveredConnection && (
              <motion.div
                key={`connection-${hoveredConnection}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-br from-arc-teal/10 to-ion-violet/10 border border-arc-teal/30 rounded-2xl p-8"
              >
                <h4 className="font-display text-2xl text-arc-teal mb-4">Trigger Condition</h4>
                <p className="text-nebula-white text-lg">
                  {connections.find(c => `${c.from}-${c.to}` === hoveredConnection)?.trigger}
                </p>
              </motion.div>
            )}
            
            {!hoveredAgent && !hoveredConnection && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-soft-graphite text-lg">
                  Hover over <span className="text-ion-violet">nodes</span> to see agent details, 
                  or <span className="text-arc-teal">connections</span> to see trigger conditions
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}