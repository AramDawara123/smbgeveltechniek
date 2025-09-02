-- Create storage policies for the smb bucket to allow file uploads
CREATE POLICY "Allow public uploads to smb bucket" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'smb');

CREATE POLICY "Allow public access to smb bucket files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'smb');

CREATE POLICY "Allow public updates to smb bucket files" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'smb');

CREATE POLICY "Allow public deletes from smb bucket files" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'smb');