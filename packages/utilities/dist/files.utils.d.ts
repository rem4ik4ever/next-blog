import S3UploadResponse from './aws-s3.utils/interfaces/S3UploadResponse.interface';
export declare const allFiles: () => any[];
export declare const formatFilename: (filename: string, uuid?: string | undefined) => string;
export declare const makeFilename: ({ id, name }: {
    id: any;
    name: any;
}) => string;
export declare const writeJSONToFile: (path: string, file: any) => Promise<void>;
export declare const saveImageSizeToFile: (source: string, size: string, uploadPayload: S3UploadResponse) => Promise<void>;
