import mongoose, { Schema, model, models } from "mongoose";

export interface IPortfolio {
  title: string;
  description: string;
  before: string; // Base64 Image Data
  after: string;  // Base64 Image Data
  createdAt?: Date;
}

const PortfolioSchema = new Schema<IPortfolio>(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    before: {
      type: String,
      required: [true, "Please provide the 'before' image URL"],
    },
    after: {
      type: String,
      required: [true, "Please provide the 'after' image URL"],
    },
  },
  {
    timestamps: true,
  }
);

const Portfolio = models.Portfolio || model<IPortfolio>("Portfolio", PortfolioSchema);

export default Portfolio;
