import React, { useState } from 'react';
import { 
  Users, Menu, Search, Download, BookOpen, FileText, 
  Wrench, GitBranch, HelpCircle, Database, MessageSquare,
  Home, Settings, PlusCircle, Calendar, BarChart, X,
  ChevronRight, ChevronDown, MoreHorizontal, Send,
  Target, Zap, Box, CheckCircle, Shield, Code, Activity
} from 'lucide-react';

const Wireframes = () => {
  // State to track active section
  const [activeSection, setActiveSection] = useState('dashboard');
  
  // Function to handle navigation clicks
  const handleNavClick = (section) => {
    setActiveSection(section);
    // In a real app, this would navigate to the section
    console.log(`Navigating to ${section}`);
  };
  
  // Function for button/link clicks
  const handleButtonClick = (action, detail) => {
    // In a real app, this would trigger the appropriate action
    console.log(`Action: ${action}, Detail: ${detail}`);
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-100 p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-8 text-center">Team Development Optimization Platform - Wireframes</h1>
      
      {/* Dashboard/Homepage Wireframe - Updated to reflect PdOM */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-300">1. Dashboard / Homepage</h2>
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          {/* Header */}
          <div className="flex justify-between items-center pb-3 mb-4 border-b border-gray-200">
            <div className="flex items-center cursor-pointer" onClick={() => handleButtonClick('goToHome', 'logo')}>
              <div className="w-10 h-10 bg-blue-600 rounded mr-3"></div>
              <h3 className="text-lg font-semibold">DevOps Optimization Hub</h3>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input className="bg-gray-100 rounded-full h-10 pl-10 pr-4 w-64 outline-none focus:ring-2 focus:ring-blue-300" placeholder="Search..." />
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full cursor-pointer" onClick={() => handleButtonClick('openProfile', 'user')}></div>
            </div>
          </div>
          
          {/* Main Layout */}
          <div className="flex">
            {/* Navigation Sidebar - Updated to reflect PdOM structure */}
            <div className="w-1/5 pr-4">
              <div className="space-y-1">
                <div 
                  className={`flex items-center p-2 ${activeSection === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'} rounded cursor-pointer`}
                  onClick={() => handleNavClick('dashboard')}
                >
                  <Home className="w-5 h-5 mr-3" />
                  <span className={activeSection === 'dashboard' ? "font-medium" : ""}>Dashboard</span>
                </div>
                <div 
                  className={`flex items-center p-2 ${activeSection === 'mission' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'} rounded cursor-pointer`}
                  onClick={() => handleNavClick('mission')}
                >
                  <Target className="w-5 h-5 mr-3" />
                  <span className={activeSection === 'mission' ? "font-medium" : ""}>Mission Impact</span>
                </div>
                <div 
                  className={`flex items-center p-2 ${activeSection === 'rapid' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'} rounded cursor-pointer`}
                  onClick={() => handleNavClick('rapid')}
                >
                  <Zap className="w-5 h-5 mr-3" />
                  <span className={activeSection === 'rapid' ? "font-medium" : ""}>Rapid Development</span>
                </div>
                <div 
                  className={`flex items-center p-2 ${activeSection === 'integration' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'} rounded cursor-pointer`}
                  onClick={() => handleNavClick('integration')}
                >
                  <Box className="w-5 h-5 mr-3" />
                  <span className={activeSection === 'integration' ? "font-medium" : ""}>Solution Integration</span>
                </div>
                <div 
                  className={`flex items-center p-2 ${activeSection === 'value' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'} rounded cursor-pointer`}
                  onClick={() => handleNavClick('value')}
                >
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className={activeSection === 'value' ? "font-medium" : ""}>Value Assessment</span>
                </div>
                <div 
                  className={`flex items-center p-2 ${activeSection === 'team' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'} rounded cursor-pointer`}
                  onClick={() => handleNavClick('team')}
                >
                  <Users className="w-5 h-5 mr-3" />
                  <span className={activeSection === 'team' ? "font-medium" : ""}>Team Management</span>
                </div>
                <div 
                  className={`flex items-center p-2 ${activeSection === 'workflows' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'} rounded cursor-pointer`}
                  onClick={() => handleNavClick('workflows')}
                >
                  <GitBranch className="w-5 h-5 mr-3" />
                  <span className={activeSection === 'workflows' ? "font-medium" : ""}>Workflows</span>
                </div>
                <div 
                  className={`flex items-center p-2 ${activeSection === 'tools' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'} rounded cursor-pointer`}
                  onClick={() => handleNavClick('tools')}
                >
                  <Wrench className="w-5 h-5 mr-3" />
                  <span className={activeSection === 'tools' ? "font-medium" : ""}>Tools & Resources</span>
                </div>
                <div 
                  className={`flex items-center p-2 ${activeSection === 'security' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'} rounded cursor-pointer`}
                  onClick={() => handleNavClick('security')}
                >
                  <Shield className="w-5 h-5 mr-3" />
                  <span className={activeSection === 'security' ? "font-medium" : ""}>Security & Compliance</span>
                </div>
                <div 
                  className={`flex items-center p-2 ${activeSection === 'metrics' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'} rounded cursor-pointer`}
                  onClick={() => handleNavClick('metrics')}
                >
                  <BarChart className="w-5 h-5 mr-3" />
                  <span className={activeSection === 'metrics' ? "font-medium" : ""}>Metrics & Analytics</span>
                </div>
                <div 
                  className={`flex items-center p-2 ${activeSection === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'} rounded cursor-pointer`}
                  onClick={() => handleNavClick('settings')}
                >
                  <Settings className="w-5 h-5 mr-3" />
                  <span className={activeSection === 'settings' ? "font-medium" : ""}>Settings</span>
                </div>
              </div>
            </div>
            
            {/* Main Content - Updated to reflect PdOM metrics and phases */}
            <div className="w-4/5 pl-4">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Mission-Centric Development</h3>
                  <p className="text-sm text-gray-600 mb-3">Embed developers with analysts and end-users</p>
                  <div className="flex justify-between items-center">
                    <div 
                      className="bg-white py-1 px-3 rounded text-sm text-blue-600 cursor-pointer hover:bg-blue-50"
                      onClick={() => handleButtonClick('startAssessment', 'mission')}
                    >
                      Start Assessment
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 cursor-pointer" onClick={() => handleNavClick('mission')} />
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Create Software Development Unit (SDU)</h3>
                  <p className="text-sm text-gray-600 mb-3">Self-sufficient cross-functional teams</p>
                  <div className="flex justify-between items-center">
                    <div 
                      className="bg-white py-1 px-3 rounded text-sm text-green-600 cursor-pointer hover:bg-green-50"
                      onClick={() => handleButtonClick('configureSdu', 'team')}
                    >
                      Configure SDU
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 cursor-pointer" onClick={() => handleNavClick('team')} />
                  </div>
                </div>
              </div>
              
              {/* Key Metrics - Updated to reflect software metrics */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow" onClick={() => handleButtonClick('viewMetric', 'availability')}>
                  <h3 className="font-medium mb-3">App Availability</h3>
                  <div className="h-24 flex items-center justify-center bg-gray-50 rounded">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">99.8%</div>
                      <div className="text-sm text-gray-500">Uptime</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow" onClick={() => handleButtonClick('viewMetric', 'leadTime')}>
                  <h3 className="font-medium mb-3">Lead Time</h3>
                  <div className="h-24 flex items-center justify-center bg-gray-50 rounded">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">3.2</div>
                      <div className="text-sm text-gray-500">Days</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow" onClick={() => handleButtonClick('viewMetric', 'deploymentFrequency')}>
                  <h3 className="font-medium mb-3">Deployment Frequency</h3>
                  <div className="h-24 flex items-center justify-center bg-gray-50 rounded">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-1">5.4</div>
                      <div className="text-sm text-gray-500">Weekly</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow" onClick={() => handleButtonClick('viewMetric', 'activeSdus')}>
                  <h3 className="font-medium mb-3">Active SDUs</h3>
                  <div className="h-24 flex items-center justify-center bg-gray-50 rounded">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-500 mb-1">8</div>
                      <div className="text-sm text-gray-500">Units</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Operating Model Progress */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Operating Model Progress</h3>
                  <div 
                    className="text-sm text-blue-600 cursor-pointer hover:underline"
                    onClick={() => handleButtonClick('viewAllProgress', 'operatingModel')}
                  >
                    View All
                  </div>
                </div>
                <div className="space-y-3">
                  <div 
                    className="flex items-start p-2 hover:bg-gray-50 rounded cursor-pointer"
                    onClick={() => handleButtonClick('viewTeamProgress', 'cassiopeia')}
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Target className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Mission Impact Assessment</div>
                      <div className="text-sm text-gray-500">Cassiopeia Team - Completed</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div 
                    className="flex items-start p-2 hover:bg-gray-50 rounded cursor-pointer"
                    onClick={() => handleButtonClick('viewTeamProgress', 'orion')}
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <Zap className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Rapid Solution Development</div>
                      <div className="text-sm text-gray-500">Orion Team - In Progress</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div 
                    className="flex items-start p-2 hover:bg-gray-50 rounded cursor-pointer"
                    onClick={() => handleButtonClick('viewTeamProgress', 'hydra')}
                  >
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <Box className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Solution Integration</div>
                      <div className="text-sm text-gray-500">Hydra Team - Starting</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Virtual Assistant Teaser */}
              <div className="bg-gray-700 text-white p-4 rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="font-medium mb-1">Product Operating Model Assistant</h3>
                  <p className="text-sm text-gray-300">Ask questions about processes, metrics, roles, or development cycles</p>
                </div>
                <div 
                  className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
                  onClick={() => handleButtonClick('openAssistant', 'pdm')}
                >
                  <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Ask Assistant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Management Wireframe - Updated for SDU structure */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-300">2. Software Development Units (SDUs)</h2>
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          {/* Header - Simplified version of the main header */}
          <div className="flex justify-between items-center pb-3 mb-4 border-b border-gray-200">
            <div className="flex items-center cursor-pointer" onClick={() => handleButtonClick('goToHome', 'logo')}>
              <div className="w-10 h-10 bg-blue-600 rounded mr-3"></div>
              <h3 className="text-lg font-semibold">DevOps Optimization Hub</h3>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input className="bg-gray-100 rounded-full h-10 pl-10 pr-4 w-64 outline-none focus:ring-2 focus:ring-blue-300" placeholder="Search..." />
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full cursor-pointer" onClick={() => handleButtonClick('openProfile', 'user')}></div>
            </div>
          </div>
          
          {/* Main Layout - Keeping the same sidebar for consistency */}
          <div className="flex">
            {/* Navigation Sidebar - Updated to match dashboard */}
            <div className="w-1/5 pr-4">
              <div className="space-y-1">
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('dashboard')}
                >
                  <Home className="w-5 h-5 mr-3" />
                  <span>Dashboard</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('mission')}
                >
                  <Target className="w-5 h-5 mr-3" />
                  <span>Mission Impact</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('rapid')}
                >
                  <Zap className="w-5 h-5 mr-3" />
                  <span>Rapid Development</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('integration')}
                >
                  <Box className="w-5 h-5 mr-3" />
                  <span>Solution Integration</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('value')}
                >
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Value Assessment</span>
                </div>
                <div 
                  className="flex items-center p-2 bg-blue-50 text-blue-600 rounded cursor-pointer"
                  onClick={() => handleNavClick('team')}
                >
                  <Users className="w-5 h-5 mr-3" />
                  <span className="font-medium">Team Management</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('workflows')}
                >
                  <GitBranch className="w-5 h-5 mr-3" />
                  <span>Workflows</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('tools')}
                >
                  <Wrench className="w-5 h-5 mr-3" />
                  <span>Tools & Resources</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('security')}
                >
                  <Shield className="w-5 h-5 mr-3" />
                  <span>Security & Compliance</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('metrics')}
                >
                  <BarChart className="w-5 h-5 mr-3" />
                  <span>Metrics & Analytics</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('settings')}
                >
                  <Settings className="w-5 h-5 mr-3" />
                  <span>Settings</span>
                </div>
              </div>
            </div>
            
            {/* Team Management Content - Updated to SDU structure */}
            <div className="w-4/5 pl-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">Software Development Units (SDUs)</h2>
                <div className="flex space-x-2">
                  <div 
                    className="bg-gray-100 p-2 rounded cursor-pointer hover:bg-gray-200"
                    onClick={() => handleButtonClick('filterTeams', 'sdu')}
                  >
                    <div className="flex items-center space-x-1">
                      <span className="text-sm">Filter</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  <div 
                    className="bg-blue-600 text-white p-2 rounded cursor-pointer hover:bg-blue-700"
                    onClick={() => handleButtonClick('createSdu', 'new')}
                  >
                    <div className="flex items-center space-x-1">
                      <PlusCircle className="w-4 h-4" />
                      <span className="text-sm">New SDU</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Team List - Updated for SDU structure with constellation names */}
              <div className="bg-white rounded-lg border border-gray-200 mb-6">
                <div className="grid grid-cols-12 text-sm font-medium text-gray-500 p-3 border-b border-gray-200">
                  <div className="col-span-2">SDU Name</div>
                  <div className="col-span-2">Product Manager</div>
                  <div className="col-span-2">Technical Lead</div>
                  <div className="col-span-1">Devs</div>
                  <div className="col-span-3">Project</div>
                  <div className="col-span-1">Operating Phase</div>
                  <div className="col-span-1">Actions</div>
                </div>
                
                {/* Team Rows - Updated for SDU structure */}
                <div className="divide-y divide-gray-100">
                  <div 
                    className="grid grid-cols-12 p-3 hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleButtonClick('viewTeam', 'cassiopeia')}
                  >
                    <div className="col-span-2 font-medium">Cassiopeia</div>
                    <div className="col-span-2">Sarah Johnson</div>
                    <div className="col-span-2">David Chen</div>
                    <div className="col-span-1">3</div>
                    <div className="col-span-3">Add Feature: Interactive Dashboard</div>
                    <div className="col-span-1">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Mission</span>
                    </div>
                    <div className="col-span-1">
                      <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" onClick={(e) => {e.stopPropagation(); handleButtonClick('teamActions', 'cassiopeia')}} />
                    </div>
                  </div>
                  <div 
                    className="grid grid-cols-12 p-3 hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleButtonClick('viewTeam', 'orion')}
                  >
                    <div className="col-span-2 font-medium">Orion</div>
                    <div className="col-span-2">Michael Chen</div>
                    <div className="col-span-2">Jessica Wong</div>
                    <div className="col-span-1">2</div>
                    <div className="col-span-3">Fix Pipeline: CI/CD Integration</div>
                    <div className="col-span-1">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Rapid</span>
                    </div>
                    <div className="col-span-1">
                      <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" onClick={(e) => {e.stopPropagation(); handleButtonClick('teamActions', 'orion')}} />
                    </div>
                  </div>
                  <div 
                    className="grid grid-cols-12 p-3 hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleButtonClick('viewTeam', 'hydra')}
                  >
                    <div className="col-span-2 font-medium">Hydra</div>
                    <div className="col-span-2">Alex Rodriguez</div>
                    <div className="col-span-2">Samantha Lee</div>
                    <div className="col-span-1">3</div>
                    <div className="col-span-3">Configure new GIS Database</div>
                    <div className="col-span-1">
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Integration</span>
                    </div>
                    <div className="col-span-1">
                      <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" onClick={(e) => {e.stopPropagation(); handleButtonClick('teamActions', 'hydra')}} />
                    </div>
                  </div>
                  <div 
                    className="grid grid-cols-12 p-3 hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleButtonClick('viewTeam', 'centaurus')}
                  >
                    <div className="col-span-2 font-medium">Centaurus</div>
                    <div className="col-span-2">Emily Turner</div>
                    <div className="col-span-2">Ryan Jackson</div>
                    <div className="col-span-1">2</div>
                    <div className="col-span-3">Add Columns To SQL .dbo</div>
                    <div className="col-span-1">
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Value</span>
                    </div>
                    <div className="col-span-1">
                      <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" onClick={(e) => {e.stopPropagation(); handleButtonClick('teamActions', 'centaurus')}} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Development Group */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Development Group</h3>
                  <div 
                    className="text-sm text-blue-600 cursor-pointer hover:underline"
                    onClick={() => handleButtonClick('editStructure', 'development')}
                  >
                    Edit Structure
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <div 
                    className="p-3 bg-blue-50 rounded-lg border border-blue-200 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleButtonClick('viewGroup', 'security')}
                  >
                    <div className="flex justify-center mb-2">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-center font-medium mb-1">Security</h4>
                    <p className="text-xs text-gray-600 text-center">Risk Management, Compliance, Integration</p>
                  </div>
                  <div 
                    className="p-3 bg-green-50 rounded-lg border border-green-200 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleButtonClick('viewGroup', 'data')}
                  >
                    <div className="flex justify-center mb-2">
                      <Database className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-center font-medium mb-1">Data</h4>
                    <p className="text-xs text-gray-600 text-center">Governance, Standards, Quality</p>
                  </div>
                  <div 
                    className="p-3 bg-purple-50 rounded-lg border border-purple-200 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleButtonClick('viewGroup', 'operations')}
                  >
                    <div className="flex justify-center mb-2">
                      <Wrench className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="text-center font-medium mb-1">Operations</h4>
                    <p className="text-xs text-gray-600 text-center">Acquisition Reform, Procurement</p>
                  </div>
                  <div 
                    className="p-3 bg-orange-50 rounded-lg border border-orange-200 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleButtonClick('viewGroup', 'product')}
                  >
                    <div className="flex justify-center mb-2">
                      <Target className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="text-center font-medium mb-1">Product Management</h4>
                    <p className="text-xs text-gray-600 text-center">Analysis, Metrics, Accountability</p>
                  </div>
                  <div 
                    className="p-3 bg-red-50 rounded-lg border border-red-200 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleButtonClick('viewGroup', 'people')}
                  >
                    <div className="flex justify-center mb-2">
                      <Users className="w-8 h-8 text-red-600" />
                    </div>
                    <h4 className="text-center font-medium mb-1">People & Learning</h4>
                    <p className="text-xs text-gray-600 text-center">Training, Hiring, Onboarding</p>
                  </div>
                </div>
              </div>
              
              {/* Service Model Selection */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-medium mb-4">Service Model Selection</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-center">Full-Service Model</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                        Complete DevOps team support
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                        End-to-end development lifecycle
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                        Ideal for teams without technical expertise
                      </li>
                    </ul>
                    <div className="mt-4 flex justify-center">
                      <div 
                        className="bg-blue-600 text-white py-2 px-4 rounded text-sm cursor-pointer hover:bg-blue-700"
                        onClick={() => handleButtonClick('selectModel', 'fullService')}
                      >
                        Select Full-Service
                      </div>
                    </div>
                  </div>
                  <div className="border border-purple-200 bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-center">Self-Service Model</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                        Access to best practices and resources
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                        Technical support when needed
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                        For teams with existing technical capabilities
                      </li>
                    </ul>
                    <div className="mt-4 flex justify-center">
                      <div 
                        className="bg-purple-600 text-white py-2 px-4 rounded text-sm cursor-pointer hover:bg-purple-700"
                        onClick={() => handleButtonClick('selectModel', 'selfService')}
                      >
                        Select Self-Service
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Operating Model Workflow Diagrams */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-300">3. Operating Model Workflow</h2>
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          {/* Simplified Header */}
          <div className="flex justify-between items-center pb-3 mb-4 border-b border-gray-200">
            <div className="flex items-center cursor-pointer" onClick={() => handleButtonClick('goToHome', 'logo')}>
              <div className="w-10 h-10 bg-blue-600 rounded mr-3"></div>
              <h3 className="text-lg font-semibold">DevOps Optimization Hub</h3>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full cursor-pointer" onClick={() => handleButtonClick('openProfile', 'user')}></div>
          </div>
          
          {/* Main Layout with same sidebar */}
          <div className="flex">
            {/* Navigation Sidebar */}
            <div className="w-1/5 pr-4">
              <div className="space-y-1">
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('dashboard')}
                >
                  <Home className="w-5 h-5 mr-3" />
                  <span>Dashboard</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('mission')}
                >
                  <Target className="w-5 h-5 mr-3" />
                  <span>Mission Impact</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('rapid')}
                >
                  <Zap className="w-5 h-5 mr-3" />
                  <span>Rapid Development</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('integration')}
                >
                  <Box className="w-5 h-5 mr-3" />
                  <span>Solution Integration</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('value')}
                >
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Value Assessment</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('team')}
                >
                  <Users className="w-5 h-5 mr-3" />
                  <span>Team Management</span>
                </div>
                <div 
                  className="flex items-center p-2 bg-blue-50 text-blue-600 rounded cursor-pointer"
                  onClick={() => handleNavClick('workflows')}
                >
                  <GitBranch className="w-5 h-5 mr-3" />
                  <span className="font-medium">Workflows</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('tools')}
                >
                  <Wrench className="w-5 h-5 mr-3" />
                  <span>Tools & Resources</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('security')}
                >
                  <Shield className="w-5 h-5 mr-3" />
                  <span>Security & Compliance</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('metrics')}
                >
                  <BarChart className="w-5 h-5 mr-3" />
                  <span>Metrics & Analytics</span>
                </div>
                <div 
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => handleNavClick('settings')}
                >
                  <Settings className="w-5 h-5 mr-3" />
                  <span>Settings</span>
                </div>
              </div>
            </div>
            
            {/* Workflow Content */}
            <div className="w-4/5 pl-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">Operating Model Workflow</h2>
                <div className="flex space-x-2">
                  <div 
                    className="bg-gray-100 p-2 rounded cursor-pointer hover:bg-gray-200"
                    onClick={() => handleButtonClick('filterWorkflows', 'all')}
                  >
                    <div className="flex items-center space-x-1">
                      <span className="text-sm">Filter</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  <div 
                    className="bg-blue-600 text-white p-2 rounded cursor-pointer hover:bg-blue-700"
                    onClick={() => handleButtonClick('createWorkflow', 'new')}
                  >
                    <div className="flex items-center space-x-1">
                      <PlusCircle className="w-4 h-4" />
                      <span className="text-sm">New Workflow</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 4-Phase Operating Model Workflow Diagram */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">4-Phase Operating Model</h3>
                  <div className="flex space-x-2">
                    <div 
                      className="bg-gray-100 p-1 rounded cursor-pointer hover:bg-gray-200"
                      onClick={() => handleButtonClick('downloadWorkflow', 'model')}
                    >
                      <Download className="w-4 h-4" />
                    </div>
                    <div 
                      className="bg-gray-100 p-1 rounded cursor-pointer hover:bg-gray-200"
                      onClick={() => handleButtonClick('workflowOptions', 'model')}
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                
                {/* Operating Model Workflow Diagram */}
                <div className="border border-gray-200 rounded-lg bg-gray-50 p-4 h-64 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center mb-8 w-full">
                      <div 
                        className="w-48 h-20 bg-blue-100 border border-blue-300 rounded flex items-center justify-center mr-4 cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => handleButtonClick('viewPhase', 'mission')}
                      >
                        <div className="text-center">
                          <Target className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                          <span className="text-sm font-medium">1. Mission Impact Assessment</span>
                        </div>
                      </div>
                      <div className="w-8 border-t-2 border-gray-400"></div>
                      <div 
                        className="w-48 h-20 bg-green-100 border border-green-300 rounded flex items-center justify-center mr-4 cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => handleButtonClick('viewPhase', 'rapid')}
                      >
                        <div className="text-center">
                          <Zap className="w-6 h-6 text-green-600 mx-auto mb-1" />
                          <span className="text-sm font-medium">2. Rapid Solution Development</span>
                        </div>
                      </div>
                      <div className="w-8 border-t-2 border-gray-400"></div>
                      <div 
                        className="w-48 h-20 bg-purple-100 border border-purple-300 rounded flex items-center justify-center mr-4 cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => handleButtonClick('viewPhase', 'integration')}
                      >
                        <div className="text-center">
                          <Box className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                          <span className="text-sm font-medium">3. Solution Integration</span>
                        </div>
                      </div>
                      <div className="w-8 border-t-2 border-gray-400"></div>
                      <div 
                        className="w-48 h-20 bg-orange-100 border border-orange-300 rounded flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => handleButtonClick('viewPhase', 'value')}
                      >
                        <div className="text-center">
                          <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                          <span className="text-sm font-medium">4. Customer Value Assessment</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-gray-500 text-sm">
                      Complete Product Operating Model Workflow
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Description</h4>
                  <p className="text-sm text-gray-600">
                    This workflow illustrates the four key phases of the Product Operating Model. Starting with mission impact assessment, through rapid solution development and integration, culminating in customer value assessment to validate the solution's effectiveness.
                  </p>
                </div>
              </div>
              
              {/* Phase Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-medium mb-3 text-blue-600 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Mission Impact Assessment
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li 
                      className="flex items-start cursor-pointer hover:bg-blue-50 p-1 rounded"
                      onClick={() => handleButtonClick('viewStep', 'mission-1')}
                    >
                      <div className="min-w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5">1</div>
                      <div>
                        <span className="font-medium">Identify Customer</span>
                        <p className="text-gray-600">Determine key stakeholders and end-users</p>
                      </div>
                    </li>
                    <li 
                      className="flex items-start cursor-pointer hover:bg-blue-50 p-1 rounded"
                      onClick={() => handleButtonClick('viewStep', 'mission-2')}
                    >
                      <div className="min-w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5">2</div>
                      <div>
                        <span className="font-medium">Identify Problem/Opportunity</span>
                        <p className="text-gray-600">Define the challenge to be addressed</p>
                      </div>
                    </li>
                    <li 
                      className="flex items-start cursor-pointer hover:bg-blue-50 p-1 rounded"
                      onClick={() => handleButtonClick('viewStep', 'mission-3')}
                    >
                      <div className="min-w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5">3</div>
                      <div>
                        <span className="font-medium">Validate Requirements & Mission Impact</span>
                        <p className="text-gray-600">Confirm alignment with organizational goals</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-medium mb-3 text-green-600 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Rapid Solution Development
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li 
                      className="flex items-start cursor-pointer hover:bg-green-50 p-1 rounded"
                      onClick={() => handleButtonClick('viewStep', 'rapid-1')}
                    >
                      <div className="min-w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5">1</div>
                      <div>
                        <span className="font-medium">Define Possible/Probable Solutions</span>
                        <p className="text-gray-600">Explore various approaches to solve the problem</p>
                      </div>
                    </li>
                    <li 
                      className="flex items-start cursor-pointer hover:bg-green-50 p-1 rounded"
                      onClick={() => handleButtonClick('viewStep', 'rapid-2')}
                    >
                      <div className="min-w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5">2</div>
                      <div>
                        <span className="font-medium">Assess Other Existing Solutions/Tools</span>
                        <p className="text-gray-600">Research what's already available</p>
                      </div>
                    </li>
                    <li 
                      className="flex items-start cursor-pointer hover:bg-green-50 p-1 rounded"
                      onClick={() => handleButtonClick('viewStep', 'rapid-3')}
                    >
                      <div className="min-w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5">3</div>
                      <div>
                        <span className="font-medium">Build & Test Solution (Iterative)</span>
                        <p className="text-gray-600">Develop MVPs with frequent user feedback</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-medium mb-3 text-purple-600 flex items-center">
                    <Box className="w-5 h-5 mr-2" />
                    Solution Integration
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li 
                      className="flex items-start cursor-pointer hover:bg-purple-50 p-1 rounded"
                      onClick={() => handleButtonClick('viewStep', 'integration-1')}
                    >
                      <div className="min-w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2 mt-0.5">1</div>
                      <div>
                        <span className="font-medium">Integrate Solution</span>
                        <p className="text-gray-600">Connect with existing systems and workflows</p>
                      </div>
                    </li>
                    <li 
                      className="flex items-start cursor-pointer hover:bg-purple-50 p-1 rounded"
                      onClick={() => handleButtonClick('viewStep', 'integration-2')}
                    >
                      <div className="min-w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2 mt-0.5">2</div>
                      <div>
                        <span className="font-medium">Confirm Security Integration</span>
                        <p className="text-gray-600">Ensure compliance with security requirements</p>
                      </div>
                    </li>
                    <li 
                      className="flex items-start cursor-pointer hover:bg-purple-50 p-1 rounded"
                      onClick={() => handleButtonClick('viewStep', 'integration-3')}
                    >
                      <div className="min-w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2 mt-0.5">3</div>
                      <div>
                        <span className="font-medium">Operationalize Solution</span>
                        <p className="text-gray-600">Apply tool within user environment</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-medium mb-3 text-orange-600 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Customer Value Assessment
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li 
                      className="flex items-start cursor-pointer hover:bg-orange-50 p-1 rounded"
                      onClick={() => handleButtonClick('viewStep', 'value-1')}
                    >
                      <div className="min-w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2 mt-0.5">1</div>
                      <div>
                        <span className="font-medium">Confirm Customer/User Value</span>
                        <p className="text-gray-600">Validate solution effectiveness</p>
                      </div>
                    </li>
                    <li 
                      className="flex items-start cursor-pointer hover:bg-orange-50 p-1 rounded"
                      onClick={() => handleButtonClick('viewStep', 'value-2')}
                    >
                      <div className="min-w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2 mt-0.5">2</div>
                      <div>
                        <span className="font-medium">Document Use Case</span>
                        <p className="text-gray-600">Create detailed documentation of implementation</p>
                      </div>
                    </li>
                    <li 
                      className="flex items-start cursor-pointer hover:bg-orange-50 p-1 rounded"
                      onClick={() => handleButtonClick('viewStep', 'value-3')}
                    >
                      <div className="min-w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2 mt-0.5">3</div>
                      <div>
                        <span className="font-medium">Define Next MVP</span>
                        <p className="text-gray-600">Plan next iteration based on feedback</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* The rest of the sections continue with similar click handlers - truncated for brevity */}
      
      {/* Virtual Assistant Interface - showing just a portion as example */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-300">7. Product Operating Model Assistant</h2>
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          {/* Simplified Header */}
          <div className="flex justify-between items-center pb-3 mb-4 border-b border-gray-200">
            <div className="flex items-center cursor-pointer" onClick={() => handleButtonClick('goToHome', 'logo')}>
              <div className="w-10 h-10 bg-blue-600 rounded mr-3"></div>
              <h3 className="text-lg font-semibold">DevOps Optimization Hub</h3>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full cursor-pointer" onClick={() => handleButtonClick('openProfile', 'user')}></div>
          </div>
          
          {/* Virtual Assistant Chat */}
          <div className="flex">
            {/* Sidebar for Topics */}
            <div className="w-1/4 pr-4 border-r border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">PdOM Assistant</h3>
                <div 
                  className="bg-blue-600 text-white p-1 rounded-full cursor-pointer hover:bg-blue-700"
                  onClick={() => handleButtonClick('newChat', 'assistant')}
                >
                  <PlusCircle className="w-4 h-4" />
                </div>
              </div>
              
              <div 
                className="bg-gray-100 rounded-lg p-2 mb-3 cursor-pointer hover:bg-gray-200"
                onClick={() => handleButtonClick('openChat', 'productManager')}
              >
                <div className="text-sm font-medium">Who is my product manager?</div>
                <div className="text-xs text-gray-500">5 minutes ago</div>
              </div>
              
              <div 
                className="p-2 mb-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                onClick={() => handleButtonClick('openChat', 'developmentCycle')}
              >
                <div className="text-sm font-medium">Development cycle questions</div>
                <div className="text-xs text-gray-500">Yesterday</div>
              </div>
              
              <div 
                className="p-2 mb-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                onClick={() => handleButtonClick('openChat', 'operatingModel')}
              >
                <div className="text-sm font-medium">Operating model phases</div>
                <div className="text-xs text-gray-500">2 days ago</div>
              </div>
              
              <div className="border-t border-gray-200 mt-4 pt-4">
                <h4 className="text-sm font-medium mb-2">Common Questions</h4>
                <div className="space-y-2">
                  <div 
                    className="text-sm text-blue-600 hover:underline cursor-pointer"
                    onClick={() => handleButtonClick('askQuestion', 'vision')}
                  >
                    What is the product vision?
                  </div>
                  <div 
                    className="text-sm text-blue-600 hover:underline cursor-pointer"
                    onClick={() => handleButtonClick('askQuestion', 'metrics')}
                  >
                    What are our product metrics?
                  </div>
                  <div 
                    className="text-sm text-blue-600 hover:underline cursor-pointer"
                    onClick={() => handleButtonClick('askQuestion', 'repository')}
                  >
                    Where is our code repository?
                  </div>
                  <div 
                    className="text-sm text-blue-600 hover:underline cursor-pointer"
                    onClick={() => handleButtonClick('askQuestion', 'deployment')}
                  >
                    What is our deployment frequency?
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chat Interface */}
            <div className="w-3/4 pl-4 flex flex-col">
              <div className="flex-1 mb-4 overflow-y-auto h-96">
                <div className="space-y-4">
                  {/* Assistant Messages */}
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full mr-4"></div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-3/4">
                      <p className="text-sm">Hello! I'm your Product Operating Model Assistant. I can help with questions about your team's development process, metrics, roles, or anything related to the operating model.</p>
                    </div>
                  </div>
                  
                  {/* User Message */}
                  <div className="flex items-start justify-end mb-4">
                    <div className="bg-blue-50 rounded-lg p-3 max-w-3/4">
                      <p className="text-sm">Who is the accountable product manager for my team?</p>
                    </div>
                    <div className="w-10 h-10 bg-gray-200 rounded-full ml-4"></div>
                  </div>
                  
                  {/* Assistant Response with References */}
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full mr-4"></div>
                    <div className="space-y-3 max-w-3/4">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm">Based on the system records, Sarah Johnson is the accountable product manager for the Cassiopeia SDU. As the product manager, she has decision-making authority on which features get delivery priority and works directly with the development team.</p>
                        <p className="text-sm mt-2">Would you like to know more about her responsibilities or how she interacts with your team?</p>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="flex items-center text-sm font-medium text-blue-600 mb-1">
                          <FileText className="w-4 h-4 mr-1" />
                          Referenced Resources:
                        </div>
                        <div 
                          className="text-sm text-blue-600 hover:underline cursor-pointer"
                          onClick={() => handleButtonClick('openResource', 'sduStructure')}
                        >
                          SDU Structure Documentation
                        </div>
                        <div 
                          className="text-sm text-blue-600 hover:underline cursor-pointer"
                          onClick={() => handleButtonClick('openResource', 'pmRole')}
                        >
                          Product Manager Role Description
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* User Message */}
                  <div className="flex items-start justify-end mb-4">
                    <div className="bg-blue-50 rounded-lg p-3 max-w-3/4">
                      <p className="text-sm">Yes, what's her relationship with the program manager and what authority does she have?</p>
                    </div>
                    <div className="w-10 h-10 bg-gray-200 rounded-full ml-4"></div>
                  </div>
                  
                  {/* Assistant Response */}
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full mr-4"></div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-3/4">
                      <p className="text-sm">Sarah Johnson (Product Manager) works collaboratively with Alex Peters (Program Manager) but they have distinct responsibilities:</p>
                      <ul className="text-sm mt-2 space-y-1 pl-4">
                        <li>Sarah focuses on product vision, feature prioritization, and user needs</li>
                        <li>Alex handles timelines, resources, and broader program coordination</li>
                      </ul>
                      <p className="text-sm mt-2">Under our Product Operating Model, Sarah has decision-making authority on:</p>
                      <ul className="text-sm mt-1 space-y-1 pl-4">
                        <li>Feature prioritization and roadmap</li>
                        <li>User story acceptance</li>
                        <li>MVP definition and scope</li>
                      </ul>
                      <p className="text-sm mt-2">All stakeholders, including the Program Manager, have formally agreed to this authority to ensure clear decision-making.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chat Input */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-100 rounded-lg p-3 flex items-center">
                    <input 
                      type="text" 
                      placeholder="Ask about roles, processes, metrics, or development cycle..." 
                      className="bg-transparent w-full outline-none"
                    />
                    <div className="flex items-center space-x-2">
                      <div 
                        className="text-gray-400 cursor-pointer hover:text-gray-600"
                        onClick={() => handleButtonClick('attachFile', 'chat')}
                      >
                        <PlusCircle className="w-5 h-5" />
                      </div>
                      <div 
                        className="bg-blue-600 p-1 rounded-full text-white cursor-pointer hover:bg-blue-700"
                        onClick={() => handleButtonClick('sendMessage', 'chat')}
                      >
                        <Send className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                  <div>Powered by Product Operating Model knowledge base</div>
                  <div className="flex items-center">
                    <Database className="w-3 h-3 mr-1" />
                    <span>Connected to organizational documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wireframes;