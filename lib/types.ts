export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  short_description?: string;
  category: 'web_development' | 'mobile_app' | 'ui_ux_design' | 'consultation' | 'other';
  technologies: string[];
  client_name?: string;
  project_url?: string;
  github_url?: string;
  featured_image?: string;
  gallery_images?: string[];
  status: 'completed' | 'in_progress' | 'on_hold' | 'cancelled';
  start_date?: string;
  end_date?: string;
  created_at: string;
  updated_at: string;
}

export interface CaseStudy {
  id: string;
  project_id: string;
  problem: string;
  approach: string;
  result: string;
  challenges?: string[];
  solutions?: string[];
  metrics?: {
    [key: string]: string | number;
  };
  lessons_learned?: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectWithCaseStudy extends Project {
  case_study?: CaseStudy;
}

