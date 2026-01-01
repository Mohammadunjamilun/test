import React from 'react';
import { Rocket, Download, Globe, Code, Box, Share2, HelpCircle } from 'lucide-react';
import HostingAssistant from './components/HostingAssistant';
import StepCard from './components/StepCard';
import { DeploymentStep } from './types';

const steps: DeploymentStep[] = [
  {
    title: "Export Code",
    description: "First, you need the files. Look for an 'Export' or 'Download' button in this code environment to save the project to your computer.",
    icon: <Download className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Push to Git",
    description: "Create a repository on GitHub, GitLab, or Bitbucket. Upload your files there. This acts as the source of truth for your website.",
    icon: <Code className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Connect Host",
    description: "Sign up for a free account on Vercel or Netlify. Connect your GitHub repository. They will automatically build your site.",
    icon: <Box className="w-6 h-6 text-orange-400" />
  },
  {
    title: "Share URL",
    description: "Once deployed, you'll get a public URL (like my-site.vercel.app). Send this link to anyone in the world to let them visit!",
    icon: <Share2 className="w-6 h-6 text-green-400" />
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Web Launchpad</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
                <a href="#how-it-works" className="text-sm font-medium hover:text-indigo-400 transition-colors">How it Works</a>
                <a href="#assistant" className="text-sm font-medium hover:text-indigo-400 transition-colors">AI Assistant</a>
                <div className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-semibold uppercase tracking-wide">
                    Preview Mode
                </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl -z-10"></div>
            <div className="inline-flex items-center justify-center p-2 bg-slate-900 border border-slate-800 rounded-full mb-8 shadow-xl">
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full mr-2">Answer</span>
                <span className="text-sm text-slate-400 pr-2">Can I make a website and let others visit it?</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
                Yes, but you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Deploy</span> it.
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                I can generate the code for you (like this page!), but to let the world see it, 
                you need to host it on the internet. Don't worry, it's easier than you think.
            </p>
        </div>

        {/* Steps Grid */}
        <div id="how-it-works" className="mb-24">
            <div className="flex items-center space-x-2 mb-8">
                <Globe className="w-6 h-6 text-indigo-400" />
                <h2 className="text-2xl font-bold text-white">Your Path to Going Live</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                    <StepCard key={index} step={step} stepNumber={index + 1} />
                ))}
            </div>
        </div>

        {/* Interactive Assistant Section */}
        <div id="assistant" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-5 space-y-6">
                <h2 className="text-3xl font-bold text-white">Still confused? <br/> Just ask.</h2>
                <p className="text-slate-400 text-lg">
                    Deployment can be tricky if it's your first time. I've set up a specialized AI assistant right here to answer your specific questions about hosting React apps.
                </p>
                
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
                    <h4 className="font-semibold text-white flex items-center">
                        <HelpCircle className="w-5 h-5 mr-2 text-indigo-400" />
                        Common Questions
                    </h4>
                    <ul className="space-y-3">
                        {["Is Vercel free?", "How do I use GitHub Pages?", "What is a domain name?", "Can I host this on my phone?"].map((q, i) => (
                            <li key={i} className="flex items-center text-slate-400 text-sm">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></span>
                                {q}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="lg:col-span-7">
                <HostingAssistant />
            </div>
        </div>

        {/* CTA Footer */}
        <div className="bg-gradient-to-br from-indigo-900/50 to-slate-900 border border-indigo-500/20 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Ready to Launch?</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 relative z-10">
                You currently have the code for <strong>this</strong> website. You can practice by trying to deploy this very page!
            </p>
            <button className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold py-3 px-8 rounded-full transition-colors shadow-lg shadow-indigo-900/20 relative z-10">
                Start by Exporting Code
            </button>
        </div>
      </main>

      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} AI Web Launchpad. Generated by Google Gemini.</p>
      </footer>
    </div>
  );
};

export default App;