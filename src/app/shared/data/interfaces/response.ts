export interface ApiResponse {
  status?: number;
  message?: string;
  isSuccessful: boolean;
  errorCode?: string;
}