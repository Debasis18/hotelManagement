import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tlhbcvhpxciorkvqtyik.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsaGJjdmhweGNpb3JrdnF0eWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxOTg0NDUsImV4cCI6MjA0ODc3NDQ0NX0.hWx5IOQoy36PSmMY9sFki_JCl8hKh7i4ZULrsKmmcfU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
