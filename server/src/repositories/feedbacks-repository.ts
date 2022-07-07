export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeeedbacksRepository {
   create: (data: FeedbackCreateData) => Promise<void>;

}