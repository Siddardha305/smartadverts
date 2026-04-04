export interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    before: string;
    after: string;
    timestamp: any;
}

export interface Lead {
    id: string;
    name: string;
    email: string;
    message: string;
    timestamp: any;
}

export interface SiteSettings {
    agencyName: string;
    heroHeadline: string;
    heroSubheadline: string;
    instagramUrl: string;
    email: string;
    pricingStartingFrom: string;
}
