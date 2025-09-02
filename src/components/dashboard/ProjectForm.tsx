import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Project {
  id?: string;
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

interface ProjectFormProps {
  project?: Project | null;
  onSuccess: () => void;
  onCancel: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onSuccess, onCancel }) => {
  const [loading, setLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<Project>({
    defaultValues: {
      title: project?.title || '',
      description: project?.description || '',
      image_url: project?.image_url || '',
      alt_text: project?.alt_text || '',
      category: project?.category || '',
      location: project?.location || '',
      year: project?.year || new Date().getFullYear(),
      is_featured: project?.is_featured || true,
      display_order: project?.display_order || 0,
    }
  });

  const isFeatured = watch('is_featured');

  const onSubmit = async (data: Project) => {
    setLoading(true);
    try {
      if (project?.id) {
        // Update existing project
        const { error } = await supabase
          .from('projects')
          .update(data)
          .eq('id', project.id);
        
        if (error) throw error;
        toast.success('Project succesvol bijgewerkt');
      } else {
        // Create new project
        const { error } = await supabase
          .from('projects')
          .insert([data]);
        
        if (error) throw error;
        toast.success('Project succesvol aangemaakt');
      }
      
      onSuccess();
    } catch (error) {
      toast.error('Er is een fout opgetreden');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Titel *</Label>
          <Input
            id="title"
            {...register('title', { required: 'Titel is verplicht' })}
            placeholder="Projecttitel"
          />
          {errors.title && (
            <p className="text-sm text-destructive">{errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Categorie</Label>
          <Input
            id="category"
            {...register('category')}
            placeholder="Bijvoorbeeld: Metselwerk, Renovatie"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Beschrijving</Label>
        <Textarea
          id="description"
          {...register('description')}
          placeholder="Beschrijving van het project"
          rows={4}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="image_url">Afbeelding URL *</Label>
          <Input
            id="image_url"
            {...register('image_url', { required: 'Afbeelding URL is verplicht' })}
            placeholder="/lovable-uploads/..."
          />
          {errors.image_url && (
            <p className="text-sm text-destructive">{errors.image_url.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="alt_text">Alt tekst *</Label>
          <Input
            id="alt_text"
            {...register('alt_text', { required: 'Alt tekst is verplicht' })}
            placeholder="Beschrijving voor toegankelijkheid"
          />
          {errors.alt_text && (
            <p className="text-sm text-destructive">{errors.alt_text.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="location">Locatie</Label>
          <Input
            id="location"
            {...register('location')}
            placeholder="Stad, provincie"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="year">Jaar</Label>
          <Input
            id="year"
            type="number"
            {...register('year', { 
              valueAsNumber: true,
              min: { value: 1900, message: 'Jaar moet na 1900 zijn' },
              max: { value: new Date().getFullYear() + 5, message: 'Jaar kan niet te ver in de toekomst liggen' }
            })}
            placeholder="2024"
          />
          {errors.year && (
            <p className="text-sm text-destructive">{errors.year.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="display_order">Volgorde</Label>
          <Input
            id="display_order"
            type="number"
            {...register('display_order', { valueAsNumber: true })}
            placeholder="0"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="is_featured"
          checked={isFeatured}
          onCheckedChange={(checked) => setValue('is_featured', checked)}
        />
        <Label htmlFor="is_featured">Zichtbaar op website</Label>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Annuleren
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? 'Opslaan...' : (project?.id ? 'Bijwerken' : 'Aanmaken')}
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;