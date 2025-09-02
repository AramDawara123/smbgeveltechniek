import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, GripVertical } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import ProjectForm from "./ProjectForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  alt_text: string;
  category?: string;
  location?: string;
  year?: number;
  is_featured: boolean;
  display_order: number;
}

const ProjectsDashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [draggedProject, setDraggedProject] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      toast.error('Fout bij het ophalen van projecten');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Weet u zeker dat u dit project wilt verwijderen?')) return;

    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast.success('Project succesvol verwijderd');
      fetchProjects();
    } catch (error) {
      toast.error('Fout bij het verwijderen van project');
    }
  };

  const handleToggleVisibility = async (id: string, currentFeatured: boolean) => {
    try {
      const { error } = await supabase
        .from('projects')
        .update({ is_featured: !currentFeatured })
        .eq('id', id);

      if (error) throw error;
      
      toast.success(`Project ${!currentFeatured ? 'zichtbaar' : 'verborgen'} gemaakt`);
      fetchProjects();
    } catch (error) {
      toast.error('Fout bij het bijwerken van project');
    }
  };

  const handleDragStart = (e: React.DragEvent, projectId: string) => {
    setDraggedProject(projectId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = async (e: React.DragEvent, targetProjectId: string) => {
    e.preventDefault();
    
    if (!draggedProject || draggedProject === targetProjectId) {
      setDraggedProject(null);
      return;
    }

    const draggedIndex = projects.findIndex(p => p.id === draggedProject);
    const targetIndex = projects.findIndex(p => p.id === targetProjectId);
    
    if (draggedIndex === -1 || targetIndex === -1) return;

    // Optimistically update the UI
    const newProjects = [...projects];
    const [draggedItem] = newProjects.splice(draggedIndex, 1);
    newProjects.splice(targetIndex, 0, draggedItem);
    
    // Update display_order for all affected projects
    const updates = newProjects.map((project, index) => ({
      id: project.id,
      display_order: index + 1
    }));

    setProjects(newProjects);

    try {
      // Update all projects with new display_order
      for (const update of updates) {
        const { error } = await supabase
          .from('projects')
          .update({ display_order: update.display_order })
          .eq('id', update.id);
        
        if (error) throw error;
      }
      
      toast.success('Project volgorde bijgewerkt');
    } catch (error) {
      toast.error('Fout bij het bijwerken van volgorde');
      // Revert changes on error
      fetchProjects();
    }

    setDraggedProject(null);
  };

  const handleFormSuccess = () => {
    setIsFormOpen(false);
    setSelectedProject(null);
    fetchProjects();
  };

  const openEditForm = (project: Project) => {
    setSelectedProject(project);
    setIsFormOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">Projecten Beheer</h2>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Nieuw Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className={`group hover:shadow-lg transition-all duration-300 cursor-move ${
              draggedProject === project.id ? 'opacity-50 scale-95' : ''
            }`}
            draggable
            onDragStart={(e) => handleDragStart(e, project.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, project.id)}
          >
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image_url} 
                  alt={project.alt_text}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <div className="bg-white/90 rounded p-1">
                    <GripVertical className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="absolute top-2 right-2 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleVisibility(project.id, project.is_featured);
                    }}
                    className="bg-white/90 hover:bg-white"
                  >
                    {project.is_featured ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg mb-2 line-clamp-1">
                {project.title}
              </CardTitle>
              {project.description && (
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.category && (
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                    {project.category}
                  </span>
                )}
                {project.year && (
                  <span className="bg-secondary/10 text-secondary-foreground px-2 py-1 rounded-full text-xs">
                    {project.year}
                  </span>
                )}
                {project.location && (
                  <span className="bg-accent/10 text-accent-foreground px-2 py-1 rounded-full text-xs">
                    {project.location}
                  </span>
                )}
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    openEditForm(project);
                  }}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(project.id);
                  }}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedProject ? 'Project Bewerken' : 'Nieuw Project'}
            </DialogTitle>
          </DialogHeader>
          <ProjectForm
            project={selectedProject}
            onSuccess={handleFormSuccess}
            onCancel={() => {
              setIsFormOpen(false);
              setSelectedProject(null);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsDashboard;