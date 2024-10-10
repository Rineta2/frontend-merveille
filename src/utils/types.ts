//====================== Article =======================//
export interface articleProps {
  id: number;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  title: string;
  desc: string;
  createdAt: string;
  slug: string;
  tanggal: string;
  category: string;
  content: BlockType[];
}

export interface ArticleFilterProps {
  topItem: articleProps;
}

export interface ArticleItemProps {
  article: articleProps;
}

export interface ContentRendererProps {
  block: BlockType;
}

export type BlockType = {
  type: "image" | "paragraph" | "heading" | "list" | "quote";
  image?: {
    url: string;
    name: string;
    width?: number;
    height?: number;
  };
  children?: { text: string }[];
};
//====================== Arival =======================//
export interface arivalProps {
  id: number;
  thumbnail: {
    url: string;
    width: string;
    height: string;
  };
  hover: {
    url: string;
    width: string;
    height: string;
  };
  title: string;
  price: string;
  category: string;
  discount: string;
  slug: string;
}

//====================== Produk =======================//

export interface produkProps {
  id: number;
  image: {
    url: string;
    width: string;
    height: string;
  };
  title: string;
  price: string;
  category: string;
  discount: string;
  slug: string;
  details: string;
  stock: number;
  size: {
    sizes: {
      name: string;
      value: string;
    };
  };
  slider: {
    url: string;
    width: string;
    height: string;
  };
  content: BlockTypeDetails[];
}

export type BlockTypeDetails = {
  type: "image" | "paragraph" | "heading" | "list" | "quote";
  image?: {
    url: string;
    name: string;
    width?: number;
    height?: number;
  };
  children?: { text: string }[];
};

export interface ContentRendererDetailsProps {
  block: BlockTypeDetails;
}
