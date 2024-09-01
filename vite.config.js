
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'https://cog.vcanaglobal.ga/api',
        // target: 'http://127.0.0.1:8000/api', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});




// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig(({ command, mode }) => {
//   const isLocal = mode === 'development';
//   const apiTarget = isLocal
//     ? 'http://127.0.0.1:8000/api/'  // Local development target
//     : 'https://cog.vcanaglobal.ga/public/api/';  // Production target

//   if (isLocal) {
//     console.log(`Local API target: ${apiTarget}`);
//   } else {
//     console.log(`Production API target: ${apiTarget}`);
//   }

//   return {
//     plugins: [vue()],
//     server: {
//       proxy: {
//         '/api': {
//           target: apiTarget,
//           changeOrigin: true,
//           rewrite: (path) => path.replace(/^\/api/, ''),
//         },
//       },
//     },
//   };
// });


