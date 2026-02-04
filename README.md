# Duc's Blog

🌐 **Website:** [https://ducs-blog.pages.dev/](https://ducs-blog.pages.dev/)

Blog cá nhân của Đức - nơi chia sẻ những gì tôi học được về lập trình, công nghệ, và những suy nghĩ ngẫu nhiên trong đầu.

## 🛠️ Công nghệ sử dụng

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)

- **Framework:** [Astro](https://astro.build) v5
- **Styling:** Tailwind CSS v4
- **CMS:** Keystatic (GitHub-based)
- **Deployment:** Cloudflare Pages
- **UI Components:** React (cho Keystatic)

## 🚀 Hướng dẫn sử dụng

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy development server

```bash
npm run dev
```

Website sẽ chạy tại `http://localhost:4321`

### 3. Truy cập Admin Panel (Keystatic)

Vào `http://localhost:4321/keystatic` để quản lý bài viết qua giao diện web.

**Lần đầu tiên:**

1. Đăng nhập bằng GitHub
2. Authorize Keystatic app
3. Bắt đầu viết bài!

### 4. Tạo bài viết mới

**Cách 1: Qua Keystatic (Khuyên dùng)**

1. Vào `/keystatic`
2. Click "Create Blog Post"
3. Điền thông tin và viết nội dung
4. Click "Save" → Keystatic tự động commit lên GitHub

**Cách 2: Thủ công**

1. Tạo file `.md` hoặc `.mdx` trong `src/content/blog/`
2. Thêm frontmatter:

```markdown
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn"
pubDate: 2026-02-04
heroImage: "../assets/image.jpg"
---

Nội dung bài viết...
```

### 5. Build production

```bash
npm run build
```

File build sẽ nằm trong folder `dist/`

### 6. Preview build

```bash
npm run preview
```

## 🌐 Deploy lên Cloudflare Pages

1. Push code lên GitHub
2. Vào [Cloudflare Dashboard](https://dash.cloudflare.com)
3. **Workers & Pages** → **Create application** → **Pages**
4. Kết nối GitHub repository
5. **Build settings:**
   - Build command: `npm run build`
   - Build output: `dist`
   - Framework preset: `Astro`
6. **Environment variables** (cho Keystatic):
   - `KEYSTATIC_GITHUB_CLIENT_ID`
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`
   - `KEYSTATIC_SECRET`
7. Click **Save and Deploy**

Mỗi lần push code, Cloudflare sẽ tự động build và deploy!

## 📝 Các lệnh hữu ích

| Lệnh                              | Mô tả                            |
| --------------------------------- | -------------------------------- |
| `npm install`                     | Cài đặt dependencies             |
| `npm run dev`                     | Chạy dev server (localhost:4321) |
| `npm run build`                   | Build production                 |
| `npm run preview`                 | Preview bản build                |
| `npm run astro add <integration>` | Thêm Astro integration           |
| `npm run astro check`             | Kiểm tra lỗi TypeScript          |

## 🎨 Tùy chỉnh theme

### Màu sắc chính

Sửa trong `src/styles/global.css`:

```css
@theme {
  --color-accent: #3b82f6; /* Blue 500 */
  --color-accent-light: #60a5fa; /* Blue 400 */
  --color-accent-dark: #2563eb; /* Blue 600 */
}
```

### Thông tin site

Sửa trong `src/consts.ts`:

```typescript
export const SITE_TITLE = "Duc's Blog";
export const SITE_DESCRIPTION = "Blog cá nhân của Đức";
```

## 📞 Liên hệ

- **GitHub:** [VanDuc111](https://github.com/VanDuc111)
- **Facebook:** [zadezla4layer](https://www.facebook.com/zadezla4layer/)
- **Email:** ducca94tk@gmail.com

## 📄 License

MIT License - Tự do sử dụng và chỉnh sửa!

---

**Được xây dựng với ❤️ bằng Astro và Tailwind CSS**
