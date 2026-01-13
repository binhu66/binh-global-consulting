export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR'
}