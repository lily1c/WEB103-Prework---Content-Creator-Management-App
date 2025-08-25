
import { createClient } from '@supabase/supabase-js';

const URL = 'https://yaqvohfbnonxuvcchyiv.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhcXZvaGZibm9ueHV2Y2NoeWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MzI2MzAsImV4cCI6MjA3MTUwODYzMH0.rBMi2kU5CLVXv--SD0FhWg7g0Ws4129y6h1ami-4q6Q';

export const supabase = createClient(URL, API_KEY);
