# Digitalwerk CMS Backend

This is the Strapi CMS backend for the Digitalwerk portfolio website. It provides content management for Cases (portfolio items) and Blogs.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18.x or v20.x)
- npm (v6+)

### Installation

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp env.example.txt .env
   ```

4. **Generate secure keys:**
   
   Generate random keys for your `.env` file:
   ```bash
   # On macOS/Linux:
   openssl rand -base64 32
   
   # Run this 4 times to generate keys for:
   # - APP_KEYS (comma-separated)
   # - API_TOKEN_SALT
   # - ADMIN_JWT_SECRET
   # - TRANSFER_TOKEN_SALT
   # - JWT_SECRET
   ```

5. **Update your `.env` file** with the generated keys:
   ```env
   HOST=0.0.0.0
   PORT=1337

   APP_KEYS=your_key_1,your_key_2
   API_TOKEN_SALT=your_token_salt
   ADMIN_JWT_SECRET=your_admin_jwt_secret
   TRANSFER_TOKEN_SALT=your_transfer_token_salt
   JWT_SECRET=your_jwt_secret

   DATABASE_CLIENT=sqlite
   DATABASE_FILENAME=.tmp/data.db
   ```

6. **Start the development server:**
   ```bash
   npm run develop
   ```

7. **Create your admin account:**
   - Open http://localhost:1337/admin
   - Fill in the registration form to create your first admin user

## 📊 Content Types

### Case Study
A case study showcases your portfolio work.

**Fields:**
- `title` (string, required) - Case study title
- `description` (text, required) - Brief description
- `slug` (uid) - Auto-generated URL-friendly identifier
- `featuredImage` (media, required) - Main image
- `client` (string) - Client name
- `category` (enum) - Web Development, Branding, E-commerce, etc.
- `order` (integer) - Display order (lower numbers appear first)
- `fullContent` (richtext) - Full case study details
- `projectDate` (date) - Project completion date
- `tags` (json) - Additional tags

### Blog Post
Blog posts and articles for your company blog.

**Fields:**
- `title` (string, required) - Blog post title
- `slug` (uid) - Auto-generated URL-friendly identifier
- `excerpt` (text, required) - Short excerpt
- `content` (richtext, required) - Full blog post content
- `featuredImage` (media) - Featured image
- `author` (string) - Author name
- `publishDate` (date, required) - Publication date
- `category` (enum) - Design, Development, Strategy, etc.
- `tags` (json) - Additional tags
- `readTime` (integer) - Estimated reading time in minutes

## 🔐 API Configuration

### Setting Permissions

After creating your admin account, you need to make the API endpoints public:

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles**
2. Click on **Public** role
3. Under **Permissions**, expand:
   - **Case**: Check `find` and `findOne`
   - **Blog**: Check `find` and `findOne`
4. Click **Save**

This allows the frontend to fetch data without authentication.

## 📝 Adding Content

### Adding a Case Study

1. Navigate to **Content Manager** → **Case Study**
2. Click **Create new entry**
3. Fill in the required fields:
   - Title
   - Description
   - Upload a featured image
4. Optionally set:
   - Client name
   - Category
   - Order (for display ordering)
5. Click **Save** and then **Publish**

### Adding a Blog Post

1. Navigate to **Content Manager** → **Blog Post**
2. Click **Create new entry**
3. Fill in:
   - Title
   - Excerpt
   - Full content (use the rich text editor)
   - Publish date
4. Upload a featured image (optional)
5. Click **Save** and then **Publish**

## 🌐 API Endpoints

Once running, your API will be available at:

- **Cases**: `http://localhost:1337/api/cases`
- **Single Case**: `http://localhost:1337/api/cases?filters[slug][$eq]=your-slug`
- **Blogs**: `http://localhost:1337/api/blogs`
- **Single Blog**: `http://localhost:1337/api/blogs?filters[slug][$eq]=your-slug`

### Example API Response

**Cases:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "Volvo",
        "description": "Thought leadership through sustainable communication",
        "slug": "volvo",
        "order": 1,
        "featuredImage": {
          "data": {
            "attributes": {
              "url": "/uploads/volvo.jpg"
            }
          }
        }
      }
    }
  ]
}
```

## 🔧 Available Scripts

- `npm run develop` - Start Strapi in development mode with auto-reload
- `npm run start` - Start Strapi in production mode
- `npm run build` - Build the admin panel for production
- `npm run strapi` - Run Strapi CLI commands

## 📦 Database

By default, this project uses **SQLite** for easy setup. The database file is stored at `.tmp/data.db`.

For production, consider upgrading to PostgreSQL or MySQL. Update the `config/database.js` file accordingly.

## 🚢 Deployment

### Heroku / Railway / Render

1. Set environment variables in your hosting platform
2. Update the `CORS` origins in `config/middlewares.js` to include your production domain
3. Deploy using Git or platform-specific CLI

### Environment Variables for Production

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your_production_keys
API_TOKEN_SALT=your_production_salt
ADMIN_JWT_SECRET=your_production_secret
TRANSFER_TOKEN_SALT=your_production_salt
JWT_SECRET=your_production_jwt

# For production, use PostgreSQL or MySQL
DATABASE_CLIENT=postgres
DATABASE_HOST=your_db_host
DATABASE_PORT=5432
DATABASE_NAME=your_db_name
DATABASE_USERNAME=your_db_user
DATABASE_PASSWORD=your_db_password
DATABASE_SSL=true
```

## 🔗 Frontend Integration

The frontend React app is configured to connect to this API automatically. Make sure:

1. Backend is running on `http://localhost:1337`
2. Frontend has `REACT_APP_API_URL` environment variable set
3. API permissions are set to public (see above)

## 📚 Resources

- [Strapi Documentation](https://docs.strapi.io)
- [Strapi Content API](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html)
- [Strapi Deploy Guide](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html)

## 🆘 Troubleshooting

**Issue: Cannot connect to admin panel**
- Ensure the server is running (`npm run develop`)
- Check that port 1337 is not in use
- Clear browser cache

**Issue: Frontend cannot fetch data**
- Verify API permissions are set to public
- Check CORS settings in `config/middlewares.js`
- Ensure backend is running

**Issue: Images not loading**
- Make sure `featuredImage` is uploaded in Strapi
- Check image URLs in API response
- Verify CORS allows image requests

## 📄 License

MIT

