export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "حسام",
  "alternateName": "Husam",
  "description": "مطور ومصمم ويب محترف متخصص في تطوير المواقع والتطبيقات",
  "url": "https://husam.dev",
  "image": "https://husam.dev/profile-image.jpg",
  "sameAs": [
    "https://github.com/husam",
    "https://linkedin.com/in/husam",
    "https://twitter.com/husam_dev"
  ],
  "jobTitle": "مطور ومصمم ويب",
  "worksFor": {
    "@type": "Organization",
    "name": "مطور مستقل"
  },
  "knowsAbout": [
    "تطوير المواقع",
    "تطبيقات الجوال",
    "تصميم UI/UX",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "مطور ويب",
    "occupationLocation": {
      "@type": "Country",
      "name": "السعودية"
    }
  }
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "حسام - خدمات التطوير",
  "alternateName": "Husam Development Services",
  "description": "خدمات تطوير المواقع والتطبيقات والتصميم",
  "url": "https://husam.dev",
  "logo": "https://husam.dev/logo.png",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "حسام"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SA",
    "addressRegion": "الرياض"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "hello@husam.dev",
    "availableLanguage": ["Arabic", "English"]
  },
  "sameAs": [
    "https://github.com/husam",
    "https://linkedin.com/in/husam",
    "https://twitter.com/husam_dev"
  ],
  "serviceType": [
    "تطوير المواقع",
    "تطبيقات الجوال",
    "تصميم UI/UX",
    "استشارة تقنية"
  ]
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "حسام - Portfolio",
  "alternateName": "Husam Portfolio",
  "url": "https://husam.dev",
  "description": "معرض أعمال مطور ومصمم ويب محترف",
  "author": {
    "@type": "Person",
    "name": "حسام"
  },
  "inLanguage": "ar-SA",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://husam.dev/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbStructuredData = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const projectStructuredData = (project: any) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.title,
  "description": project.description,
  "url": `https://husam.dev/work/${project.slug}`,
  "image": project.featured_image ? `https://husam.dev${project.featured_image}` : undefined,
  "author": {
    "@type": "Person",
    "name": "حسام"
  },
  "dateCreated": project.start_date,
  "dateModified": project.updated_at,
  "inLanguage": "ar-SA",
  "genre": project.category,
  "keywords": project.technologies?.join(", "),
  "about": {
    "@type": "Thing",
    "name": project.category
  }
});

