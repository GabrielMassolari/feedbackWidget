import { prisma } from "../../prisma";
import { FeedbackCreateData, FeeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeeedbacksRepository{
    async create({type, comment, screenshot}: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        })
    };
}