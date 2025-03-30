interface Doc {
    label: string;
    path?: string;
    children?: (Doc | Article)[];
}

type DocCategory = {
    label: string,
    hide?: boolean,
    docs: (Doc | Article)[]
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