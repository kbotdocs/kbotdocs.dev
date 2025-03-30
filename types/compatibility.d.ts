type DetailedStatus = {
    bug?: boolean,
    seeImpl?: boolean,
};

type FeatureStatus = {
    deprecated?: boolean,
    experimental?: boolean,
    nonStandard?: boolean,
};

type CompatibilityStatus = "full_support" | "partial_support" | "no_support";

type CompatibilityHistory = {
    status: CompatibilityStatus,
    detailedStatus?: DetailedStatus,
    version: {
        start: string,
        last: string
    } | string,
    description?: string | string[],
};

type Compatibility = {
    feature: string,
    url?: string,
    status: FeatureStatus,
    support: {
        msgBot: CompatibilityHistory[],
        autoReplyBot: CompatibilityHistory[],
        starLight: CompatibilityHistory[],
    },
};
