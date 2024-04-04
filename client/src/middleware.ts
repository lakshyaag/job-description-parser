import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/public/og-image.png"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next|).*)", "/", "/(api|trpc)(.*)"],
};
