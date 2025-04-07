type Doc = {
  [path: string]: DocInfo
};

type DocInfo = {
  label: string;
  path: string;
  image?: string;
  description?: string;
  hide?: boolean;
};

type DocNav = {
  [key: string]: (DocCategory | DocInfo)[]
};

type DocCategory = {
    label: string,
    hide?: boolean,
    docs: DocInfo[]
};

type DocCompat = {
  data: string,
  feature: string,
};

type DocMilestone = {
  prev?: string,
  next?: string,
};

type DocMetadata = {
  title: string,
  category: string,
  compat?: DocCompat,
  milestone?: DocMilestone
};