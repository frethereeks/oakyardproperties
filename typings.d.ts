type IContentfulProperty = {
    title: string,
    slug: string,
    description: {
        content: TDescription[]
    },
    image: TContentfulImageProps,
    price: number,
    address: string,
    state: string
}

type IDescription = {
    value: string;
}

type IContentfulImageProps = {
    sys: TSys;
    fields: TFields;
}

type IFields = {
    title: string;
    description: string;
    file: TFile;
}

type IFile = {
    url: string;
    details: TDetails;
    fileName: string;
    contentType: string;
}

type IDetails = {
    size: number;
    image: TImageDimension;
}

type IImageDimension = {
    width: number;
    height: number;
}

type ISys = {
    space: {
        id: string;
    }
}
