import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Upload, X, Eye } from 'lucide-react';

interface Project {
  id?: string;
  title?: string;
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
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
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

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file type
      if (!file.type.startsWith('image/')) {
        toast.error('Alleen afbeeldingsbestanden zijn toegestaan');
        return;
      }
      
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('Bestand is te groot (max 10MB)');
        return;
      }
      
      setSelectedFile(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadFile = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `projects/${fileName}`;

    const { error } = await supabase.storage
      .from('smb')
      .upload(filePath, file);

    if (error) throw error;

    // Get public URL
    const { data } = supabase.storage
      .from('smb')
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const onSubmit = async (data: Project) => {
    setLoading(true);
    try {
      let imageUrl = data.image_url;
      
      // Upload new file if selected
      if (selectedFile) {
        setUploading(true);
        imageUrl = await uploadFile(selectedFile);
        setValue('image_url', imageUrl);
        data.image_url = imageUrl;
        setUploading(false);
      }
      
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
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Titel</Label>
          <Input
            id="title"
            {...register('title')}
            placeholder="Projecttitel (optioneel)"
          />
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

      <div className="space-y-4">
        <Label>Projectafbeelding</Label>
        
        {/* File Upload Section */}
        <div className="space-y-4">
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            
            {!selectedFile && !previewUrl ? (
              <div className="space-y-2">
                <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
                <div>
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <span className="text-primary hover:underline">Klik om een foto te uploaden</span>
                  </label>
                  <p className="text-sm text-muted-foreground">of sleep een bestand hierheen</p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG, JPEG (max 10MB)</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative inline-block">
                  <img 
                    src={previewUrl || ''} 
                    alt="Preview" 
                    className="max-w-xs max-h-48 object-cover rounded-lg border"
                  />
                  <Button
                    type="button"
                    size="sm"
                    variant="destructive"
                    onClick={removeFile}
                    className="absolute -top-2 -right-2 rounded-full w-8 h-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  {selectedFile?.name} ({((selectedFile?.size || 0) / 1024 / 1024).toFixed(2)} MB)
                </div>
              </div>
            )}
          </div>
          
          {/* Manual URL Input (Alternative) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="image_url">Of voer een afbeelding URL in</Label>
              {watch('image_url') && (
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(watch('image_url'), '_blank')}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  Bekijken
                </Button>
              )}
            </div>
            <Input
              id="image_url"
              {...register('image_url', { 
                required: !selectedFile ? 'Afbeelding is verplicht (upload een bestand of voer een URL in)' : false 
              })}
              placeholder="/lovable-uploads/... of https://..."
              disabled={!!selectedFile}
            />
            {errors.image_url && (
              <p className="text-sm text-destructive">{errors.image_url.message}</p>
            )}
            {selectedFile && (
              <p className="text-sm text-muted-foreground">URL input uitgeschakeld - bestand wordt geüpload</p>
            )}
          </div>
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
        <Button type="submit" disabled={loading || uploading}>
          {uploading ? 'Foto uploaden...' : loading ? 'Opslaan...' : (project?.id ? 'Bijwerken' : 'Aanmaken')}
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;