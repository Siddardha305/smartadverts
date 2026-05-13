import mongoose, { Schema, model, models } from "mongoose";

export interface ILead {
  name: string;
  email: string;
  message: string;
  source?: string;
  createdAt?: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
    },
    message: {
      type: String,
      required: [true, "Please provide a message"],
    },
    source: {
      type: String,
      default: "Portfolio Contact Form",
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const Lead = models.Lead || model<ILead>("Lead", LeadSchema);

export default Lead;
