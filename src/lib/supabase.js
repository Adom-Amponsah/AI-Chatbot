import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iozlvacyjpeoyjxxwdsw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlvemx2YWN5anBlb3lqeHh3ZHN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5OTg2ODIsImV4cCI6MjA2MjU3NDY4Mn0.cC0i36ilUnVrdDFPttgHmfI_b56czhd3mIn2sXppGOE'

export const supabase = createClient(supabaseUrl, supabaseKey) 