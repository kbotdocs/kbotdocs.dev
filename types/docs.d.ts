interface Doc {
    label: string;
    path?: string;
    hide?: boolean;
    children?: Doc[];
}

type DocCategory = {
    label: string,
    hide?: boolean,
    docs: Doc[]
}

type DocCompat = {
  data: string,
  feature: string,
}

type DocMilestone = {
  prev?: string,
  next?: string,
}

type DocMetadata = {
  title: string,
  category: string,
  compat?: DocCompat,
  milestone?: DocMilestone
};