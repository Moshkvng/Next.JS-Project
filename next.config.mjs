/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
<<<<<<< HEAD
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
=======
  reactCompiler: true,
>>>>>>> d4c5678d1bba41c36f9c351dfd1f8df4d099a8ed
};

export default nextConfig;
