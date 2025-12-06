# Product Manager Portfolio

This is a 3D immersive portfolio website built with Next.js, Three.js, and GSAP.

## Features

- **3D Hero Section**: A customized "Horizon" style 3D environment with stars, nebula, and parallax mountains.
- **Scroll Animations**: Smooth camera transitions and text animations triggered by scrolling.
- **Responsive Design**: Adapts to different screen sizes.
- **Performance**: Optimized Three.js rendering with post-processing effects.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS & Custom CSS
- **3D Library**: Three.js
- **Animations**: GSAP (GreenSock Animation Platform)
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Customization

- **Text Content**: Edit `src/components/HeroSection.tsx` to change the titles and subtitles for the scroll sections.
- **Colors**: Modify `src/app/globals.css` to adjust the color scheme or font styles.
- **3D Elements**: The Three.js scene setup is located in the `useEffect` hook in `src/components/HeroSection.tsx`.
