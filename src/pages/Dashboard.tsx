import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from "@/components/Navigation";
import ProjectsDashboard from "@/components/dashboard/ProjectsDashboard";
import AboutFooter from "@/components/about/AboutFooter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { LogOut } from "lucide-react";

const Dashboard = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Beheer uw projecten en website content
            </p>
            {user && (
              <p className="text-sm text-muted-foreground mt-2">
                Ingelogd als: {user.email}
              </p>
            )}
          </div>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Uitloggen
          </Button>
        </div>
        <ProjectsDashboard />
      </main>
      <AboutFooter />
    </div>
  );
};

export default Dashboard;