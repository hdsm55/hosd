'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import type { Project, CaseStudy, ProjectWithCaseStudy } from './types';

export interface LeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  source: 'contact_form' | 'newsletter' | 'referral' | 'other';
}

export interface InquiryData {
  name: string;
  email: string;
  phone?: string;
  service_type: 'web_development' | 'mobile_app' | 'ui_ux_design' | 'consultation' | 'other';
  budget_range?: 'under_1k' | '1k_5k' | '5k_10k' | '10k_25k' | 'over_25k';
  timeline?: 'asap' | '1_month' | '3_months' | '6_months' | 'flexible';
  project_description: string;
  additional_requirements?: string;
}

export async function addLead(data: LeadData) {
  try {
    const supabase = await createClient();

    const { data: result, error } = await supabase
      .from('leads')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          message: data.message,
          source: data.source,
          status: 'new',
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Error adding lead:', error);
      return {
        success: false,
        error: 'Failed to submit lead. Please try again.',
      };
    }

    revalidatePath('/contact');
    return {
      success: true,
      data: result,
      message: 'Lead submitted successfully!',
    };
  } catch (error) {
    console.error('Unexpected error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}

export async function addInquiry(data: InquiryData) {
  try {
    const supabase = await createClient();

    const { data: result, error } = await supabase
      .from('inquiries')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          service_type: data.service_type,
          budget_range: data.budget_range,
          timeline: data.timeline,
          project_description: data.project_description,
          additional_requirements: data.additional_requirements,
          status: 'new',
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Error adding inquiry:', error);
      return {
        success: false,
        error: 'Failed to submit inquiry. Please try again.',
      };
    }

    revalidatePath('/contact');
    return {
      success: true,
      data: result,
      message: 'Inquiry submitted successfully!',
    };
  } catch (error) {
    console.error('Unexpected error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
