This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

src/
├── middleware.ts
├── app/
│ ├── favicon.ico
│ ├── globals.css
│ ├── layout.tsx
│ ├── page.tsx
│ │
│ ├── (admin)/
│ │ ├── layout.tsx
│ │ └── dashboard/
│ │ ├── page.tsx
│ │ ├── business_contact/
│ │ │ ├── page.tsx
│ │ │ └── edit/
│ │ │ └── page.tsx
│ │ ├── category/
│ │ │ ├── page.tsx
│ │ │ ├── [id]/
│ │ │ │ └── page.tsx
│ │ │ └── edit/
│ │ │ └── page.tsx
│ │ └── doors/
│ │ ├── page.tsx
│ │ ├── [id]/
│ │ │ └── page.tsx
│ │ └── edit/
│ │ └── page.tsx
│ │
│ ├── (auth)/
│ │ ├── login/
│ │ │ └── page.tsx
│ │ ├── forgot-password/
│ │ │ └── page.tsx
│ │ └── reset-password/
│ │ └── page.tsx
│ │
│ ├── (public)/
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ ├── category/
│ │ │ ├── page.tsx
│ │ │ └── [id]/
│ │ │ └── page.tsx
│ │ ├── contact/
│ │ │ └── page.tsx
│ │ └── doors/
│ │ ├── page.tsx
│ │ └── [id]/
│ │ └── page.tsx
│ │
│ └── api/
│ ├── admin/
│ │ ├── categories/
│ │ │ ├── route.ts
│ │ │ └── [id]/
│ │ │ ├── route.ts
│ │ │ └── edit/
│ │ │ └── route.ts
│ │ ├── contact/
│ │ │ └── route.ts
│ │ └── doors/
│ │ ├── route.ts
│ │ └── [id]/
│ │ ├── route.ts
│ │ └── edit/
│ │ └── route.ts
│ ├── auth/
│ │ ├── login/
│ │ │ └── route.ts
│ │ ├── logout/
│ │ │ └── route.ts
│ │ ├── refresh/
│ │ │ └── route.ts
│ │ ├── forgot-password/
│ │ │ └── route.ts
│ │ └── reset-password/
│ │ └── route.ts
│ └── public/
│ ├── categories/
│ │ ├── route.ts
│ │ └── [id]/
│ │ └── route.ts
│ ├── contact/
│ │ └── route.ts
│ └── doors/
│ ├── route.ts
│ └── [id]/
│ └── route.ts
│
├── features/
│ ├── auth/
│ │ ├── components/
│ │ │ ├── LoginForm.tsx
│ │ │ ├── ForgotPasswordForm.tsx
│ │ │ └── ResetPasswordForm.tsx
│ │ ├── hooks/
│ │ │ ├── useAuth.ts
│ │ │ ├── useLogin.ts
│ │ │ └── useForgotPassword.ts
│ │ ├── services/
│ │ │ └── authService.ts
│ │ ├── types/
│ │ │ └── auth.types.ts
│ │ └── utils/
│ │ └── authHelpers.ts
│ │
│ ├── category/
│ │ ├── components/
│ │ │ ├── CategoryCard.tsx
│ │ │ ├── CategoryList.tsx
│ │ │ ├── CategoryForm.tsx
│ │ │ └── CategoryFilter.tsx
│ │ ├── hooks/
│ │ │ ├── useCategories.ts
│ │ │ ├── useCategory.ts
│ │ │ ├── useCreateCategory.ts
│ │ │ ├── useUpdateCategory.ts
│ │ │ └── useDeleteCategory.ts
│ │ ├── services/
│ │ │ ├── categoryService.ts
│ │ │ └── categoryApi.ts
│ │ ├── types/
│ │ │ └── category.types.ts
│ │ ├── utils/
│ │ │ └── categoryHelpers.ts
│ │ └── constants/
│ │ └── categoryConstants.ts
│ │
│ ├── doors/
│ │ ├── components/
│ │ │ ├── DoorCard.tsx
│ │ │ ├── DoorList.tsx
│ │ │ ├── DoorForm.tsx
│ │ │ ├── DoorDetails.tsx
│ │ │ └── DoorFilter.tsx
│ │ ├── hooks/
│ │ │ ├── useDoors.ts
│ │ │ ├── useDoor.ts
│ │ │ ├── useCreateDoor.ts
│ │ │ ├── useUpdateDoor.ts
│ │ │ └── useDeleteDoor.ts
│ │ ├── services/
│ │ │ ├── doorService.ts
│ │ │ └── doorApi.ts
│ │ ├── types/
│ │ │ └── door.types.ts
│ │ ├── utils/
│ │ │ └── doorHelpers.ts
│ │ └── constants/
│ │ └── doorConstants.ts
│ │
│ └── contact/
│ ├── components/
│ │ ├── ContactForm.tsx
│ │ └── ContactInfo.tsx
│ ├── hooks/
│ │ ├── useContact.ts
│ │ └── useSubmitContact.ts
│ ├── services/
│ │ └── contactService.ts
│ ├── types/
│ │ └── contact.types.ts
│ └── utils/
│ └── contactHelpers.ts
│
├── components/
│ ├── ui/ # shadcn/ui components
│ │ ├── button.tsx
│ │ ├── input.tsx
│ │ ├── dialog.tsx
│ │ └── ...
│ └── shared/ # Shared components across features
│ ├── DataTable.tsx
│ ├── LoadingSpinner.tsx
│ ├── SearchBar.tsx
│ ├── Header.tsx
│ ├── Footer.tsx
│ └── Sidebar.tsx
│
├── hooks/
│ └── shared/ # Shared hooks
│ ├── useDebounce.ts
│ ├── useLocalStorage.ts
│ └── useMediaQuery.ts
│
├── lib/
│ ├── config/
│ │ ├── axios.ts
│ │ ├── env.ts
│ │ └── queryClient.ts
│ ├── constants/
│ │ └── routes.ts
│ ├── db/
│ │ ├── index.ts
│ │ ├── models/
│ │ │ ├── admin.ts
│ │ │ ├── category.ts
│ │ │ └── doors.ts
│ │ └── mongoose/
│ └── utils/
│ ├── validation.ts
│ ├── formatting.ts
│ └── helpers.ts
│
└── types/
├── global.types.ts
└── api.types.ts
