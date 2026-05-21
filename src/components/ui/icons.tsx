import * as React from "react";

export const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

export const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const BehanceIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M21.3 10.66h-4.8c-.1 0-.22.06-.22.22v.88c0 .16.1.22.24.22h4.78c.14 0 .22-.06.22-.22v-.88c0-.16-.08-.22-.22-.22zM9.42 12.55c.74 0 1.34-.23 1.34-1.12 0-.96-.64-1.07-1.34-1.07H6.55v2.19zm.34 3.79c.8 0 1.54-.25 1.54-1.29 0-1.05-.74-1.18-1.54-1.18H6.55v2.47zm2.4-5.32c.7-.68 1.1-1.42 1.1-2.5 0-2.02-1.44-2.82-3.84-2.82H3.53a.53.53 0 0 0-.53.53v12.94c0 .3.24.53.53.53h7.1c2.6 0 4.13-1.18 4.13-3.4 0-1.51-.83-2.58-1.94-3.28zm8 1.15c-1.3 0-2.32.74-2.59 2.03h5.13c-.15-1.28-1.14-2.03-2.54-2.03zm.14-2.82c-2.73 0-4.8 1.83-4.8 4.88 0 2.97 1.95 4.96 4.92 4.96 2.14 0 3.73-1.07 4.33-2.86a.46.46 0 0 0-.26-.57l-.95-.37a.42.42 0 0 0-.52.17c-.43.61-1.16 1.05-2.28 1.05-1.63 0-2.56-1.04-2.65-2.43h6.91c.26 0 .43-.17.45-.43.08-2.62-1.37-4.4-4.16-4.4z" />
  </svg>
);

export const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M2.5 12a9 9 0 0 1 9-9h1a9 9 0 0 1 9 9v0a9 9 0 0 1-9 9h-1a9 9 0 0 1-9-9z" className="hidden" /> {/* Fallback bounds */}
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
  </svg>
);