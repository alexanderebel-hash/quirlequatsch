export type Database = {
  public: {
    Tables: {
      families: {
        Row: {
          id: string;
          email: string;
          parent_name: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          parent_name?: string | null;
        };
        Update: {
          email?: string;
          parent_name?: string | null;
        };
      };
      children: {
        Row: {
          id: string;
          family_id: string | null;
          name: string;
          age: number | null;
          grade: number | null;
          avatar_url: string | null;
          mascot_type: string | null;
          mascot_name: string | null;
          total_xp: number;
          current_level: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          family_id?: string | null;
          name: string;
          age?: number | null;
          grade?: number | null;
        };
        Update: {
          name?: string;
          age?: number | null;
          grade?: number | null;
        };
      };
      learning_profiles: {
        Row: {
          id: string;
          child_id: string | null;
          favorite_activities: string[];
          motivation_type: string | null;
          problem_solving_style: string | null;
          processing_preference: string | null;
          social_preference: string | null;
          favorite_subjects: string[];
          attention_span: string | null;
          feedback_need: string | null;
          challenge_preference: string | null;
          preferred_activity_types: string[];
          personal_details: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          child_id?: string | null;
          favorite_activities?: string[];
          motivation_type?: string | null;
          problem_solving_style?: string | null;
          processing_preference?: string | null;
          social_preference?: string | null;
          favorite_subjects?: string[];
          attention_span?: string | null;
          feedback_need?: string | null;
          challenge_preference?: string | null;
          preferred_activity_types?: string[];
          personal_details?: string | null;
        };
        Update: Partial<Database['public']['Tables']['learning_profiles']['Insert']>;
      };
      mascots: {
        Row: {
          id: string;
          child_id: string | null;
          name: string;
          element: string | null;
          size: string | null;
          personality: string | null;
          special_feature: string | null;
          custom_detail: string | null;
          image_url: string | null;
          image_prompt: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          child_id?: string | null;
          name: string;
          element?: string | null;
          size?: string | null;
          personality?: string | null;
          special_feature?: string | null;
          custom_detail?: string | null;
        };
        Update: Partial<Database['public']['Tables']['mascots']['Insert']>;
      };
    };
  };
};

export type Family = Database['public']['Tables']['families']['Row'];
export type Child = Database['public']['Tables']['children']['Row'];
export type LearningProfile = Database['public']['Tables']['learning_profiles']['Row'];
export type Mascot = Database['public']['Tables']['mascots']['Row'];
