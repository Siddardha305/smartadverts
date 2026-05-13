import mongoose, { Schema, model, models } from "mongoose";

export interface ISettings {
  agencyName: string;
  heroHeadline: string;
  heroSubheadline: string;
  instagramUrl: string;
  email: string;
  pricingStartingFrom: string;
  logo?: string; // Base64
}

const SettingsSchema = new Schema<ISettings>(
  {
    agencyName: { type: String, default: "SmartAdverts" },
    heroHeadline: { type: String, default: "" },
    heroSubheadline: { type: String, default: "" },
    instagramUrl: { type: String, default: "" },
    email: { type: String, default: "" },
    pricingStartingFrom: { type: String, default: "" },
    logo: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const Settings = models.Settings || model<ISettings>("Settings", SettingsSchema);

export default Settings;
