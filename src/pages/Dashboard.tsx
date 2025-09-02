import React from 'react';
import Navigation from "@/components/Navigation";
import ProjectsDashboard from "@/components/dashboard/ProjectsDashboard";
import AboutFooter from "@/components/about/AboutFooter";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Beheer uw projecten en website content
          </p>
        </div>
        <ProjectsDashboard />
      </main>
      <AboutFooter />
    </div>
  );
};

export default Dashboard;