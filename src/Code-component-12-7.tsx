<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Argonaut Education - Agentic AI for Education</title>
    
    <!-- Meta tags for SEO -->
    <meta name="description" content="Argonaut Education creates proactive AI teachers using agentic AI technology. Building the future of personalized education.">
    <meta name="keywords" content="AI education, agentic AI, AI teachers, personalized learning, education technology">
    <meta name="author" content="Argonaut Education">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Argonaut Education - Agentic AI for Education">
    <meta property="og:description" content="Building the AI system that powers proactive teachers for every learner">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://argonauteducation.com">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Argonaut Education - Agentic AI for Education">
    <meta name="twitter:description" content="Building the AI system that powers proactive teachers for every learner">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%237E84FF'/><text y='70' x='50' text-anchor='middle' fill='%23ffffff' font-size='60' font-family='Arial'>A</text></svg>">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- React and ReactDOM -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    
    <!-- Motion (Framer Motion) -->
    <script src="https://unpkg.com/motion@11.9.0/dist/motion.js"></script>
    
    <!-- Recharts -->
    <script src="https://unpkg.com/recharts@2.8.0/lib/index.js"></script>
    
    <!-- Lucide React Icons -->
    <script src="https://unpkg.com/lucide-react@latest/dist/lucide-react.umd.js"></script>
    
    <!-- Babel Standalone for JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <!-- Tailwind Configuration -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'deep-space-navy': '#0A1220',
                        'ion-violet': '#7E84FF',
                        'stellar-lavender': '#A8B0FF',
                        'arc-teal': '#21C7C2',
                        'nebula-white': '#E9ECF4',
                        'soft-graphite': '#C9D0DB',
                    },
                    fontFamily: {
                        'display': ['Cinzel', 'serif'],
                        'body': ['Lora', 'serif'],
                    }
                }
            }
        }
    </script>
    
    <!-- Custom Styles -->
    <style>
        :root {
            --font-size: 16px;
            
            /* Argonaut Brand Colors */
            --deep-space-navy: #0A1220;
            --ion-violet: #7E84FF;
            --stellar-lavender: #A8B0FF;
            --arc-teal: #21C7C2;
            --nebula-white: #E9ECF4;
            --soft-graphite: #C9D0DB;
            
            --background: var(--deep-space-navy);
            --foreground: var(--nebula-white);
            --card: var(--deep-space-navy);
            --card-foreground: var(--nebula-white);
            --popover: var(--deep-space-navy);
            --popover-foreground: var(--nebula-white);
            --primary: var(--ion-violet);
            --primary-foreground: var(--deep-space-navy);
            --secondary: var(--stellar-lavender);
            --secondary-foreground: var(--deep-space-navy);
            --muted: rgba(168, 176, 255, 0.1);
            --muted-foreground: var(--soft-graphite);
            --accent: var(--stellar-lavender);
            --accent-foreground: var(--deep-space-navy);
            --destructive: #d4183d;
            --destructive-foreground: #ffffff;
            --border: var(--stellar-lavender);
            --input: transparent;
            --input-background: rgba(168, 176, 255, 0.05);
            --switch-background: var(--soft-graphite);
            --font-weight-medium: 500;
            --font-weight-normal: 400;
            --ring: var(--arc-teal);
            --chart-1: var(--ion-violet);
            --chart-2: var(--arc-teal);
            --chart-3: var(--stellar-lavender);
            --chart-4: #828bb8;
            --chart-5: #4a5568;
            --radius: 1rem;
            --sidebar: var(--deep-space-navy);
            --sidebar-foreground: var(--nebula-white);
            --sidebar-primary: var(--ion-violet);
            --sidebar-primary-foreground: var(--deep-space-navy);
            --sidebar-accent: rgba(168, 176, 255, 0.1);
            --sidebar-accent-foreground: var(--nebula-white);
            --sidebar-border: var(--stellar-lavender);
            --sidebar-ring: var(--arc-teal);
        }

        body {
            font-family: 'Lora', serif;
            background-color: var(--deep-space-navy);
            color: var(--nebula-white);
            margin: 0;
            padding: 0;
        }
        
        .font-display {
            font-family: 'Cinzel', serif !important;
        }
        
        .font-body {
            font-family: 'Lora', serif !important;
        }

        /* Background texture */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(45deg, rgba(168, 176, 255, 0.03) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(168, 176, 255, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
            background-position: 0 0, 20px 20px;
            pointer-events: none;
            z-index: -1;
        }

        html {
            font-size: var(--font-size);
            scroll-behavior: smooth;
        }
        
        /* Loading spinner */
        .loading-spinner {
            display: inline-block;
            width: 40px;
            height: 40px;
            border: 3px solid rgba(168, 176, 255, 0.3);
            border-radius: 50%;
            border-top-color: var(--ion-violet);
            animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div id="root">
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column;">
            <div class="loading-spinner"></div>
            <p style="margin-top: 20px; color: var(--soft-graphite);">Loading Argonaut Education...</p>
        </div>
    </div>

    <!-- Main Application Script -->
    <script type="text/babel">
        const { useState, useEffect, useRef } = React;
        const { motion, AnimatePresence } = Motion;
        const { 
            Menu, X, ChevronDown, ArrowRight, Users, BookOpen, Brain, 
            Target, Lightbulb, Zap, TrendingUp, MapPin, Calendar,
            CheckCircle, ArrowUpRight, ExternalLink, User, Mail,
            Phone, MessageCircle, Linkedin, Github, Twitter,
            Globe, Database, Cpu, Network, BarChart3, PieChart,
            LineChart, Activity, Star, Award, Rocket, Shield,
            Clock, Eye, Heart, Layers, Code, Settings
        } = lucideReact;

        // Placeholder for founder photo - replace with actual image URL when deploying
        const founderPhoto = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='%237E84FF'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='80' font-family='Arial'%3EJK%3C/text%3E%3C/svg%3E";

        // Navigation Component
        function Navigation() {
            const [isOpen, setIsOpen] = useState(false);
            const [scrolled, setScrolled] = useState(false);

            useEffect(() => {
                const handleScroll = () => {
                    setScrolled(window.scrollY > 50);
                };
                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }, []);

            const navItems = [
                { name: 'Status Quo', href: '#status-quo' },
                { name: 'Problem', href: '#problem' },
                { name: 'Solution', href: '#solution' },
                { name: 'Product', href: '#product' },
                { name: 'Vision', href: '#vision' },
                { name: 'Traction', href: '#traction' },
                { name: 'Roadmap', href: '#roadmap' },
                { name: 'Founder', href: '#founder' },
                { name: 'Contact', href: '#contact' }
            ];

            return React.createElement('nav', {
                className: `fixed top-0 w-full z-50 transition-all duration-300 ${
                    scrolled ? 'bg-deep-space-navy/95 backdrop-blur-md border-b border-stellar-lavender/20' : 'bg-transparent'
                }`
            }, 
                React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
                    React.createElement('div', { className: 'flex items-center justify-between h-16' },
                        // Logo
                        React.createElement('div', { className: 'flex-shrink-0' },
                            React.createElement('div', { className: 'flex items-center' },
                                React.createElement('div', { 
                                    className: 'w-10 h-10 bg-gradient-to-r from-ion-violet to-stellar-lavender rounded-lg flex items-center justify-center mr-3',
                                    onClick: () => window.scrollTo(0, 0),
                                    style: { cursor: 'pointer' }
                                }, 
                                    React.createElement('span', { className: 'text-deep-space-navy font-display font-bold text-lg' }, 'A')
                                ),
                                React.createElement('span', { 
                                    className: 'font-display text-xl font-semibold text-nebula-white cursor-pointer',
                                    onClick: () => window.scrollTo(0, 0)
                                }, 'Argonaut')
                            )
                        ),
                        
                        // Desktop Navigation
                        React.createElement('div', { className: 'hidden md:block' },
                            React.createElement('div', { className: 'ml-10 flex items-baseline space-x-4' },
                                navItems.map(item => 
                                    React.createElement('a', {
                                        key: item.name,
                                        href: item.href,
                                        className: 'text-soft-graphite hover:text-nebula-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
                                    }, item.name)
                                )
                            )
                        ),
                        
                        // Mobile menu button
                        React.createElement('div', { className: 'md:hidden' },
                            React.createElement('button', {
                                onClick: () => setIsOpen(!isOpen),
                                className: 'text-soft-graphite hover:text-nebula-white p-2'
                            }, isOpen ? React.createElement(X, { size: 24 }) : React.createElement(Menu, { size: 24 }))
                        )
                    )
                ),
                
                // Mobile Navigation
                isOpen && React.createElement('div', { className: 'md:hidden bg-deep-space-navy/95 backdrop-blur-md border-b border-stellar-lavender/20' },
                    React.createElement('div', { className: 'px-2 pt-2 pb-3 space-y-1 sm:px-3' },
                        navItems.map(item => 
                            React.createElement('a', {
                                key: item.name,
                                href: item.href,
                                className: 'text-soft-graphite hover:text-nebula-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200',
                                onClick: () => setIsOpen(false)
                            }, item.name)
                        )
                    )
                )
            );
        }

        // Hero Component
        function Hero() {
            return React.createElement('section', {
                id: 'hero',
                className: 'min-h-screen flex items-center justify-center px-4 md:px-6 relative overflow-hidden'
            },
                React.createElement('div', { className: 'max-w-6xl mx-auto text-center relative z-10' },
                    React.createElement(motion.div, {
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8 }
                    },
                        React.createElement('h1', { className: 'font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-nebula-white mb-8 leading-none tracking-tight' },
                            'Agentic AI for',
                            React.createElement('span', { className: 'block bg-gradient-to-r from-ion-violet via-stellar-lavender to-arc-teal bg-clip-text text-transparent' },
                                'Education'
                            )
                        ),
                        
                        React.createElement(motion.p, {
                            className: 'text-lg sm:text-xl md:text-2xl lg:text-3xl text-soft-graphite max-w-4xl mx-auto leading-relaxed mb-12 px-4',
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.8, delay: 0.3 }
                        }, 'Building the AI system that powers proactive teachers for every learner'),
                        
                        React.createElement(motion.div, {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.8, delay: 0.6 }
                        },
                            React.createElement('div', { className: 'flex flex-wrap justify-center gap-3 md:gap-4 mb-8 px-4' },
                                React.createElement(motion.div, {
                                    className: 'bg-gradient-to-r from-arc-teal/10 to-arc-teal/5 border border-arc-teal/30 rounded-xl px-4 md:px-6 py-3',
                                    initial: { opacity: 0, scale: 0.9 },
                                    animate: { opacity: 1, scale: 1 },
                                    transition: { duration: 0.6, delay: 1.2 }
                                },
                                    React.createElement('div', { className: 'flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left' },
                                        React.createElement('div', { className: 'w-2 h-2 bg-arc-teal rounded-full' }),
                                        React.createElement('span', { className: 'text-nebula-white font-medium text-sm md:text-base' }, 'South Korean Government'),
                                        React.createElement('span', { className: 'text-soft-graphite text-xs md:text-sm' }, 'Global Expansion')
                                    )
                                ),
                                
                                React.createElement(motion.div, {
                                    className: 'bg-gradient-to-r from-ion-violet/10 to-ion-violet/5 border border-ion-violet/30 rounded-xl px-4 md:px-6 py-3',
                                    initial: { opacity: 0, scale: 0.9 },
                                    animate: { opacity: 1, scale: 1 },
                                    transition: { duration: 0.6, delay: 1.4 }
                                },
                                    React.createElement('div', { className: 'flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left' },
                                        React.createElement('div', { className: 'w-2 h-2 bg-ion-violet rounded-full' }),
                                        React.createElement('span', { className: 'text-nebula-white font-medium text-sm md:text-base' }, '$550K Raised'),
                                        React.createElement('span', { className: 'text-soft-graphite text-xs md:text-sm' }, 'Seed + Government')
                                    )
                                ),
                                
                                React.createElement(motion.div, {
                                    className: 'bg-gradient-to-r from-stellar-lavender/10 to-stellar-lavender/5 border border-stellar-lavender/30 rounded-xl px-4 md:px-6 py-3',
                                    initial: { opacity: 0, scale: 0.9 },
                                    animate: { opacity: 1, scale: 1 },
                                    transition: { duration: 0.6, delay: 1.6 }
                                },
                                    React.createElement('div', { className: 'flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left' },
                                        React.createElement('div', { className: 'w-2 h-2 bg-stellar-lavender rounded-full' }),
                                        React.createElement('span', { className: 'text-nebula-white font-medium text-sm md:text-base' }, 'Mind The Bridge'),
                                        React.createElement('span', { className: 'text-soft-graphite text-xs md:text-sm' }, 'Accelerator')
                                    )
                                )
                            ),
                            
                            React.createElement(motion.div, {
                                className: 'inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-gradient-to-r from-arc-teal/15 to-arc-teal/5 border border-arc-teal/40 rounded-full px-4 md:px-6 py-3 mx-4',
                                initial: { opacity: 0, y: 10 },
                                animate: { opacity: 1, y: 0 },
                                transition: { duration: 0.6, delay: 1.8 }
                            },
                                React.createElement('div', { className: 'flex items-center gap-2' },
                                    React.createElement('div', { className: 'w-2 h-2 bg-arc-teal rounded-full animate-pulse' }),
                                    React.createElement('span', { className: 'text-nebula-white font-medium text-sm md:text-base' }, 'SuperfastSAT')
                                ),
                                React.createElement('span', { className: 'text-arc-teal text-xs md:text-sm' }, '— Where we\'re starting')
                            )
                        )
                    )
                )
            );
        }

        // Simple placeholder components for other sections
        const SimpleSection = ({ id, title, description, className = '' }) => {
            return React.createElement('section', {
                id: id,
                className: `py-16 md:py-24 px-4 md:px-6 ${className}`
            },
                React.createElement('div', { className: 'max-w-4xl mx-auto text-center' },
                    React.createElement('h2', { className: 'font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-nebula-white mb-6' }, title),
                    React.createElement('p', { className: 'text-lg md:text-xl text-soft-graphite max-w-2xl mx-auto leading-relaxed' }, description)
                )
            );
        };

        // Founder Component with photo
        function Founder() {
            return React.createElement('section', {
                id: 'founder',
                className: 'py-16 md:py-24 px-4 md:px-6'
            },
                React.createElement('div', { className: 'max-w-4xl mx-auto' },
                    React.createElement(motion.div, {
                        className: 'text-center mb-12 md:mb-20',
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.6 },
                        viewport: { once: true }
                    },
                        React.createElement('div', { className: 'flex flex-col sm:flex-row items-center justify-center mb-6' },
                            React.createElement('div', { className: 'w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-ion-violet to-stellar-lavender rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4' },
                                React.createElement(User, { className: 'text-deep-space-navy', size: 24 })
                            ),
                            React.createElement('h2', { className: 'font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-nebula-white' }, 'Founder')
                        ),
                        React.createElement('div', { className: 'w-20 h-1 bg-gradient-to-r from-ion-violet via-stellar-lavender to-arc-teal mx-auto' })
                    ),
                    
                    React.createElement(motion.div, {
                        initial: { opacity: 0, y: 30 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, delay: 0.2 },
                        viewport: { once: true }
                    },
                        React.createElement('div', { className: 'max-w-lg mx-auto bg-gradient-to-br from-ion-violet/10 to-stellar-lavender/10 border border-stellar-lavender/30 p-6 md:p-8 text-center rounded-2xl' },
                            React.createElement('div', { className: 'w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto mb-8 overflow-hidden border-4 border-gradient-to-br from-ion-violet to-stellar-lavender shadow-2xl' },
                                React.createElement('img', {
                                    src: founderPhoto,
                                    alt: 'Jason Kim, Founder & CEO of Argonaut Education',
                                    className: 'w-full h-full object-cover object-center'
                                })
                            ),
                            
                            React.createElement('h3', { className: 'text-xl md:text-2xl mb-2 text-nebula-white' }, 'Jason Kim'),
                            React.createElement('p', { className: 'text-soft-graphite mb-2' }, 'UCLA'),
                            React.createElement('p', { className: 'text-sm text-ion-violet font-medium mb-4 uppercase tracking-wider' }, 'Founder & CEO'),
                            React.createElement('p', { className: 'text-soft-graphite mb-6 leading-relaxed text-sm md:text-base' },
                                'Product & GTM leader building the AI system that powers proactive teachers for every learner. Currently developing the orchestration engine and curriculum generation algorithms.'
                            ),
                            
                            React.createElement('div', { className: 'flex flex-col sm:flex-row gap-3 items-center justify-center' },
                                React.createElement('button', {
                                    className: 'border border-stellar-lavender/30 text-stellar-lavender hover:bg-stellar-lavender/10 w-full sm:w-auto px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center justify-center',
                                    onClick: () => window.open('https://www.linkedin.com/in/jasonohy/', '_blank')
                                },
                                    React.createElement(ExternalLink, { className: 'w-4 h-4 mr-2' }),
                                    'LinkedIn Profile'
                                ),
                                React.createElement('button', {
                                    className: 'bg-ion-violet hover:bg-ion-violet/90 text-deep-space-navy font-medium w-full sm:w-auto px-4 py-2 rounded-md text-sm transition-colors duration-200',
                                    onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                                }, 'Get in Touch')
                            )
                        )
                    )
                )
            );
        }

        // Contact Component
        function Contact() {
            return React.createElement('section', {
                id: 'contact',
                className: 'py-16 md:py-24 px-4 md:px-6'
            },
                React.createElement('div', { className: 'max-w-4xl mx-auto text-center' },
                    React.createElement('h2', { className: 'font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-nebula-white mb-6' }, 'Get in Touch'),
                    React.createElement('p', { className: 'text-lg md:text-xl text-soft-graphite max-w-2xl mx-auto leading-relaxed mb-8' },
                        'Ready to revolutionize education with AI? Let\'s connect and discuss the future of learning.'
                    ),
                    React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center items-center' },
                        React.createElement('a', {
                            href: 'mailto:jason@argonauteducation.com',
                            className: 'bg-ion-violet hover:bg-ion-violet/90 text-deep-space-navy font-medium px-6 py-3 rounded-lg transition-colors duration-200 flex items-center'
                        },
                            React.createElement(Mail, { className: 'w-5 h-5 mr-2' }),
                            'jason@argonauteducation.com'
                        ),
                        React.createElement('a', {
                            href: 'https://www.linkedin.com/in/jasonohy/',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className: 'border border-stellar-lavender/30 text-stellar-lavender hover:bg-stellar-lavender/10 px-6 py-3 rounded-lg transition-colors duration-200 flex items-center'
                        },
                            React.createElement(Linkedin, { className: 'w-5 h-5 mr-2' }),
                            'LinkedIn'
                        )
                    )
                )
            );
        }

        // Footer Component
        function Footer() {
            return React.createElement('footer', { className: 'py-12 px-4 md:px-6 border-t border-stellar-lavender/20' },
                React.createElement('div', { className: 'max-w-6xl mx-auto text-center' },
                    React.createElement('div', { className: 'flex items-center justify-center mb-6' },
                        React.createElement('div', { className: 'w-10 h-10 bg-gradient-to-r from-ion-violet to-stellar-lavender rounded-lg flex items-center justify-center mr-3' },
                            React.createElement('span', { className: 'text-deep-space-navy font-display font-bold text-lg' }, 'A')
                        ),
                        React.createElement('span', { className: 'font-display text-xl font-semibold text-nebula-white' }, 'Argonaut Education')
                    ),
                    React.createElement('p', { className: 'text-soft-graphite mb-4' }, 'Building the future of AI-powered education'),
                    React.createElement('p', { className: 'text-sm text-soft-graphite' }, `© ${new Date().getFullYear()} Argonaut Education. All rights reserved.`)
                )
            );
        }

        // Main App Component
        function App() {
            return React.createElement('div', { className: 'min-h-screen bg-deep-space-navy text-nebula-white' },
                React.createElement(Navigation),
                
                React.createElement('main', null,
                    React.createElement('div', { id: 'hero' }, React.createElement(Hero)),
                    React.createElement(SimpleSection, {
                        id: 'status-quo',
                        title: 'Status Quo',
                        description: 'Current education systems struggle with personalized learning and teacher shortages.'
                    }),
                    React.createElement(SimpleSection, {
                        id: 'problem',
                        title: 'The Problem',
                        description: 'Traditional one-size-fits-all education fails to adapt to individual learning needs.'
                    }),
                    React.createElement(SimpleSection, {
                        id: 'solution',
                        title: 'Our Solution',
                        description: 'Agentic AI that creates proactive, personalized teachers for every student.'
                    }),
                    React.createElement(SimpleSection, {
                        id: 'product',
                        title: 'Product Modules',
                        description: 'Comprehensive AI education platform with orchestrated learning experiences.'
                    }),
                    React.createElement(SimpleSection, {
                        id: 'vision',
                        title: 'Vision',
                        description: 'A world where every learner has access to personalized, proactive AI education.'
                    }),
                    React.createElement(SimpleSection, {
                        id: 'traction',
                        title: 'Traction',
                        description: 'Growing momentum with government backing and early market validation.'
                    }),
                    React.createElement(SimpleSection, {
                        id: 'roadmap',
                        title: 'Roadmap',
                        description: 'Strategic expansion from SAT mastery to comprehensive K-12 AI education.'
                    }),
                    React.createElement(Founder),
                    React.createElement(Contact)
                ),
                
                React.createElement(Footer)
            );
        }

        // Render the app
        ReactDOM.render(React.createElement(App), document.getElementById('root'));
    </script>
</body>
</html>