type TContentfulProperty = {
    sys: TPropertySys;
    total: number;
    skip: number;
    limit: number;
    items: TPropertyItem[];
    includes: Includes;
}

type Includes = {
    Asset: TPropertyImage[];
}

type TPropertyItem = {
    metadata: {
        tags: never[];
        concepts: never[];
    }
    sys: TItemSys;
    fields: TPropertyFields;
}

type TPropertyFields = {
    title: string;
    slug: string;
    image: TPropertyImage[];
    description: TFieldDescription;
    price: number;
    address: string;
    state: string;
}

type TFieldDescription = {
    nodeType: string;
    data: object;
    content: TDescriptionContent[];
}

type TDescriptionContent = {
    nodeType: string;
    data: object;
    content: TDescriptionSubContent[];
}

type TDescriptionSubContent = {
    nodeType: string;
    value: string;
    marks: never[];
    data: object;
}


type TPropertyImage = {
    metadata: TImageMetadata;
    sys: TImageSys;
    fields: TImageFields;
}

type TImageFields = {
    title: string;
    description: string;
    file: TImageFile;
}

type TImageFile = {
    url: string;
    details: Details;
    fileName: string;
    contentType: string;
}

type Details = {
    size: number;
    image: Image;
}

type Image = {
    width: number;
    height: number;
}

type TImageSys = {
    space: Space;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: Space;
    publishedVersion: number;
    revision: number;
    locale: string;
}

type TImageMetadata = {
    tags: never[];
}

type TItemSys = {
    space: Space;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: Space;
    publishedVersion: number;
    revision: number;
    contentType: Space;
    locale: string;
}

type Space = {
    sys: {
        type: string;
        linkType: string;
        id: string;
    }
}


type TPropertySys = {
    type: string;
}