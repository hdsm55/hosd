'use server';

import { createClient } from '@/utils/supabase/server';
import type { Project, CaseStudy, ProjectWithCaseStudy } from './types';

    export async function getProjects(): Promise<{
  success: boolean;
  data?: Project[];
  error?: string;
}> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching projects:', error);
      return {
        success: false,
        error: 'Failed to fetch projects',
      };
    }

    return {
      success: true,
      data: data as Project[],
    };
  } catch (error) {
    console.error('Unexpected error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred',
    };
  }
}

export async function getProjectBySlug(slug: string): Promise<{
  success: boolean;
  data?: ProjectWithCaseStudy;
  error?: string;
}> {
  try {
    const supabase = await createClient();

    // Get project
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single();

    if (projectError) {
      console.error('Error fetching project:', projectError);
      return {
        success: false,
        error: 'Project not found',
      };
    }

    // Get case study
    const { data: caseStudy, error: caseStudyError } = await supabase
      .from('case_studies')
      .select('*')
      .eq('project_id', project.id)
      .single();

    const result: ProjectWithCaseStudy = {
      ...project,
      case_study: caseStudy || undefined,
    };

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error('Unexpected error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred',
    };
  }
}
