/// <reference types="node" />
declare const _default: {
    Response: {
        allGood: (res: import("next").NextApiResponse<any>, payload?: any) => void;
        whoops: (res: import("next").NextApiResponse<any>, payload?: any, code?: number) => void;
    };
    Files: {
        allFiles: () => any[];
        formatFilename: (filename: string, uuid?: string | undefined) => string;
        makeFilename: ({ id, name }: {
            id: any;
            name: any;
        }) => string;
        writeJSONToFile: (path: string, file: any) => Promise<void>;
        saveImageSizeToFile: (source: string, size: string, uploadPayload: import("./aws-s3.utils/interfaces/S3UploadResponse.interface").default) => Promise<void>;
    };
    AWS_S3: {
        getS3Instance: () => import("aws-sdk/clients/s3");
        s3DeleteFile: (filename: any) => Promise<boolean>;
        s3UploadFile: (buffer: Buffer, key: string) => Promise<import("./aws-s3.utils/interfaces/S3UploadResponse.interface").default>;
    };
    Images: {
        fetchAndTransformImageFromUrl: (url: string, w: string) => Promise<Buffer>;
    };
};
export default _default;
