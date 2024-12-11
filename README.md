# OG (Img) UI

Ready-to-use templates for the Next.js OG Image Generation API. Copy, paste, and customize for your projects.

## Features

- Multiple pre-built templates (Standard Title, Background Image, Solid Background, etc.)
- Responsive preview interface
- Syntax highlighted code examples
- Edge runtime compatible
- Copy-paste ready code
- Dark mode support
- 1200x630 optimized layouts

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

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

## Templates

The project includes several templates for common OG image layouts:

- Standard Title - Simple and clean title layout
- Background Image - Centered content with background image
- Solid Background - Centered content with solid background
- Icon Layout - Icon-based layout with solid background
- Logo with Background - Logo placement with background image
- Centered Image - Centered image with solid background
- Product Layout - Product showcase with right-aligned image
- Vercel Style - Vercel-inspired shipping announcement

## Technical Details

### OG Image Limitations

- Maximum dimensions: 1200x630 pixels
- File size limit: < 4MB
- Supports JSX-based layouts
- Runs on Edge runtime
- Limited CSS properties supported

### Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Geist Font](https://vercel.com/font) - Typography
- [Rehype Pretty Code](https://rehype-pretty-code.netlify.app/) - Code syntax highlighting

## Development

### Project Structure

```
og-ui/
├── app/
│   ├── template/
│   │   └── [id]/
│   │       └── page.tsx    # Template preview page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   └── ui/
│       └── code-block.tsx  # Code syntax highlighting
├── lib/
│   └── templates.ts       # Template definitions
└── public/
    └── examples/          # Template preview images
```

### Environment Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Visit `http://localhost:3000`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details

## Created By

[ERH Labs](https://erh.im)

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Next.js OG Image Generation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) - learn about OG image generation
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS
