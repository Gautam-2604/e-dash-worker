# E-Dash Worker - Mobile-First PWA

A modern Progressive Web App built with Next.js 15, TypeScript, TailwindCSS, and shadcn/ui components for worker dashboard and Daily Progress Report (DPR) submission.

## Features

- **Mobile-First Design**: Responsive design optimized for mobile devices
- **Progressive Web App**: Installable on mobile devices with offline capabilities
- **Authentication**: Simple login system
- **Dashboard**: KPI cards showing tasks, pending DPRs, hours logged, and team info
- **DPR Submission**: Form with file upload and geo-coordinates
- **History**: View all submitted DPRs with detailed information
- **Profile**: User profile and settings management
- **Bottom Navigation**: Easy mobile navigation with 4 tabs

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **PWA**: next-pwa

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard page
│   ├── submit/            # DPR submission page  
│   ├── history/           # DPR history page
│   ├── profile/           # Profile page
│   └── page.tsx           # Login page (root)
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── BottomNavigation.tsx
└── lib/                   # Utilities and data
    ├── mock-data.ts       # Sample data for KPIs and DPRs
    └── utils.ts           # Utility functions
```

## Demo Usage

1. **Login**: Use any email/password combination (demo app)
2. **Dashboard**: View KPI cards and recent activity
3. **Submit DPR**: Fill out the form, upload a photo, and capture location
4. **History**: View all submitted DPRs and click to see details
5. **Profile**: View user information and logout

## PWA Features

- Installable on mobile devices
- Offline capability (basic)
- App-like experience with bottom navigation
- Mobile-optimized manifest.json

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
