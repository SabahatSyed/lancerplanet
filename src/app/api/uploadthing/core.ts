/** app/api/uploadthing/core.ts */
import {  type FileRouter } from "uploadthing/next";
import { createUploadthing } from "uploadthing/server";

const f = createUploadthing({
  appId: process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID || "0bz31lq4y3",
  secretKey:
    process.env.NEXT_PUBLIC_UPLOADTHING_SECRET_KEY ||
    "sk_live_b00904d5cb24c74f1a30ec2e6993d14015c1319ed2bae461621f6e016b7521df",
});
const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    imageUploader: f({ image: { maxFileSize: "16MB" , maxFileCount: 1} })
        // Set permissions and file types for this FileRoute
        .middleware(async (req) => {
            // This code runs on your server before upload
            const user = await auth(req);
            
            // If you throw, the user will not be able to upload
            if (!user) throw new Error("Unauthorized");

            // Whatever is returned here is accessible in onUploadComplete as `metadata`
            return { userId: user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            // This code RUNS ON YOUR SERVER after upload
            console.log("Upload complete for userId:", metadata.userId);

            console.log("file url", file.url);
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;