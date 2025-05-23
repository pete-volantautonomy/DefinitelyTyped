export = SHA256;
declare function SHA256(): void;
declare class SHA256 {
    toString(): string;
    digest(resultType?: string | DigestType): string | Uint8Array | ArrayBuffer;
    hexDigest(): string;
    update(data: string | Uint8Array | ArrayBuffer): SHA256;
}
declare namespace SHA256 {
    export { digest, hexDigest, DigestType };
}
declare function digest(
    data: string | Uint8Array | ArrayBuffer,
    resultType?: string | DigestType
): string | Uint8Array | ArrayBuffer;
declare function hexDigest(data: string | Uint8Array | ArrayBuffer): string;
type DigestType = typeof import('./DigestType');
