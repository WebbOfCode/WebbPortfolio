# EmailJS Setup Instructions

Your contact form is now configured to use EmailJS! Follow these steps to complete the setup:

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (looks like: service_xxxxxxx)

### Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Portfolio Contact - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website contact form
```

4. **Copy your Template ID** (looks like: template_xxxxxxx)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find "Public Key" section
3. **Copy your Public Key** (looks like: user_xxxxxxxxxxxxxxx)

### Step 5: Update Your Code
Replace the placeholders in `src/components/Contact.tsx`:

```typescript
const result = await emailjs.send(
  'service_xxxxxxx',        // Your Service ID here
  'template_xxxxxxx',       // Your Template ID here
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'demarickw104@live.com'
  },
  'user_xxxxxxxxxxxxxxx'    // Your Public Key here
)
```

## 🔧 Alternative: Environment Variables (Recommended for Production)

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_xxxxxxxxxxxxxxx
```

Then update the code to use:
```typescript
process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
// ... form data ...
process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

## ✅ Testing
1. Complete the setup above
2. Run `npm run dev`
3. Fill out your contact form
4. Check your email (demarickw104@live.com)

## 💡 Tips
- Check spam folder initially
- EmailJS free tier: 200 emails/month
- Messages will come from your chosen email service
- You can customize the email template design

## 🚨 Important Security Notes
- Public keys are safe to expose in frontend code
- Never put private keys in frontend code
- Use environment variables for production

Your contact form is ready to receive real messages! 📧