import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Tipo para as chaves de tradução
type TranslationKey = 
  | 'nav.home' | 'nav.about' | 'nav.services' | 'nav.feedback' | 'nav.contact' | 'nav.lightMode' | 'nav.darkMode' | 'nav.callNow' | 'nav.blog' | 'nav.galeria'
  | 'hero.badge' | 'hero.title' | 'hero.description' | 'hero.service1' | 'hero.service2' | 'hero.service3'
  | 'hero.cta' | 'hero.learnMore' | 'hero.residential' | 'hero.commercial' | 'hero.office'
  | 'hero.fullService' | 'hero.professional' | 'hero.corporate' | 'hero.included'
  | 'hero.specialServices' | 'hero.moveInOut' | 'hero.deepCleaning' | 'hero.trashRemoval'
  | 'hero.responsibleDisposal' | 'hero.customSchedule' | 'hero.afterHours' | 'hero.residential.feature1' | 'hero.residential.feature2'
  | 'hero.residential.feature3' | 'hero.residential.feature4' | 'hero.residential.feature5'
  | 'hero.commercial.feature1' | 'hero.commercial.feature2' | 'hero.commercial.feature3' | 'hero.commercial.feature4' | 'hero.commercial.feature5'
  | 'hero.office.feature1'  | 'hero.office.feature2'  | 'hero.office.feature3'  | 'hero.office.feature4'  | 'hero.office.feature5'
  | 'about.badge' | 'about.title' | 'about.subtitle' | 'about.company' | 'about.location'
  | 'about.bio1' | 'about.bio2' | 'about.bio3' | 'about.care' | 'about.careDesc'
  | 'about.trust' | 'about.trustDesc' | 'about.dedication' | 'about.dedicationDesc'
  | 'about.familyBusiness' | 'about.familyBusinessDesc' | 'about.reliable' | 'about.reliableDesc'
  | 'about.ecoFriendly' | 'about.ecoFriendlyDesc' | 'about.flexibility' | 'about.flexibilityDesc'
  | 'about.attention' | 'about.attentionDesc' | 'about.satisfaction' | 'about.satisfactionDesc'
  | 'services.badge' | 'services.title' | 'services.subtitle'
  | 'services.residential.title' | 'services.residential.subtitle' | 'services.residential.desc'
  | 'services.commercial.title' | 'services.commercial.subtitle' | 'services.commercial.desc'
  | 'services.office.title' | 'services.office.subtitle' | 'services.office.desc'
  | 'services.moveInOut.title' | 'services.moveInOut.subtitle' | 'services.moveInOut.desc'
  | 'services.trash.title' | 'services.trash.subtitle' | 'services.trash.desc'
  | 'services.quote' | 'services.workflow.badge' | 'services.workflow.title' | 'services.workflow.subtitle'
  | 'services.workflow.contact' | 'services.workflow.contactDesc' | 'services.workflow.estimate'
  | 'services.workflow.estimateDesc' | 'services.workflow.schedule' | 'services.workflow.scheduleDesc'
  | 'services.workflow.cleaning' | 'services.workflow.cleaningDesc' | 'services.workflow.satisfaction'
  | 'services.workflow.satisfactionDesc' | 'services.cta.title' | 'services.cta.subtitle'
  | 'services.residential.feature1' | 'services.residential.feature2' | 'services.residential.feature3'
  | 'services.residential.feature4' | 'services.residential.feature5' | 'services.residential.feature6'
  | 'services.commercial.feature1' | 'services.commercial.feature2' | 'services.commercial.feature3'
  | 'services.commercial.feature4' | 'services.commercial.feature5' | 'services.commercial.feature6'
  | 'services.office.feature1' | 'services.office.feature2' | 'services.office.feature3'
  | 'services.office.feature4' | 'services.office.feature5' | 'services.office.feature6'
  | 'services.moveInOut.feature1' | 'services.moveInOut.feature2' | 'services.moveInOut.feature3'
  | 'services.moveInOut.feature4' | 'services.moveInOut.feature5' | 'services.moveInOut.feature6'
  | 'services.trash.feature1' | 'services.trash.feature2' | 'services.trash.feature3'
  | 'services.trash.feature4' | 'services.trash.feature5' | 'services.trash.feature6'
  | 'footer.tagline' | 'footer.description' | 'footer.services' | 'footer.company' | 'footer.contact'
  | 'footer.email' | 'footer.phone' | 'footer.location' | 'footer.rights' | 'footer.privacy'
  | 'footer.terms' | 'footer.cookies' | 'footer.testimonials'
  | 'feedback.badge' | 'feedback.title' | 'feedback.subtitle' | 'feedback.rate'
  | 'feedback.name' | 'feedback.namePlaceholder' | 'feedback.email' | 'feedback.emailPlaceholder'
  | 'feedback.phone' | 'feedback.phonePlaceholder' | 'feedback.message' | 'feedback.messagePlaceholder'
  | 'feedback.submit' | 'feedback.thanks' | 'feedback.thanksDesc' 
  | 'faq.badge' | 'faq.title' | 'faq.subtitle'
  | 'faq.question1' | 'faq.answer1' | 'faq.question2' | 'faq.answer2' | 'faq.question3' | 'faq.answer3'
  | 'faq.question4' | 'faq.answer4' | 'faq.question5' | 'faq.answer5'
  | 'faq.cta.title' | 'faq.cta.subtitle' | 'faq.cta.button' | 'faq.question6' | 'faq.answer6'
  | 'blog.badge' | 'blog.title' | 'blog.subtitle' | 'blog.readMore' | 'blog.readTime'
  | 'blog.category' | 'blog.cta.title' | 'blog.cta.subtitle' | 'blog.cta.button'
  | 'blog.post1.title' | 'blog.post1.desc' | 'blog.post1.category'
  | 'blog.post2.title' | 'blog.post2.desc' | 'blog.post2.category'
  | 'blog.post3.title' | 'blog.post3.desc' | 'blog.post3.category'
  | 'blog.post4.title' | 'blog.post4.desc' | 'blog.post4.category'
  | 'blog.post5.title' | 'blog.post5.desc' | 'blog.post5.category'
  | 'blog.post6.title' | 'blog.post6.desc' | 'blog.post6.category'
  | 'article1.title' | 'article1.intro' | 'article1.aeo' | 'article1.h2.1' | 'article1.p1.1'
  | 'article1.p1.2' | 'article1.h2.2' | 'article1.p2.1' | 'article1.p2.2' | 'article1.h2.3'
  | 'article1.p3.1' | 'article1.p3.2' | 'article1.cta.title' | 'article1.cta.desc'
  | 'article2.title' | 'article2.intro' | 'article2.aeo' | 'article2.h2.1' | 'article2.p1.1'
  | 'article2.h2.2' | 'article2.p2.1' | 'article2.h2.3' | 'article2.p3.1'
  | 'article2.cta.title' | 'article2.cta.desc'
  | 'article3.title' | 'article3.intro' | 'article3.aeo' | 'article3.h2.1' | 'article3.p1.1'
  | 'article3.h2.2' | 'article3.p2.1' | 'article3.h2.3' | 'article3.p3.1'
  | 'article3.cta.title' | 'article3.cta.desc'
  | 'article4.title' | 'article4.intro' | 'article4.aeo' | 'article4.h2.1' | 'article4.p1.1'
  | 'article4.h2.2' | 'article4.p2.1' | 'article4.h2.3' | 'article4.p3.1'
  | 'article4.cta.title' | 'article4.cta.desc'
  | 'article5.title' | 'article5.intro' | 'article5.aeo' | 'article5.h2.1' | 'article5.p1.1'
  | 'article5.h2.2' | 'article5.p2.1' | 'article5.h2.3' | 'article5.p3.1'
  | 'article5.cta.title' | 'article5.cta.desc'
  | 'article6.title' | 'article6.intro' | 'article6.aeo' | 'article6.h2.1' | 'article6.p1.1'
  | 'article6.h2.2' | 'article6.p2.1' | 'article6.h2.3' | 'article6.p3.1'
  | 'article6.cta.title' | 'article6.cta.desc'
  | 'gallery.title' | 'gallery.subtitle' | 'gallery.areas.title' | 'gallery.areas.subtitle'
  | 'gallery.cta.title' | 'gallery.cta.subtitle' | 'gallery.cta.button';

type Translations = Record<TranslationKey, string>;

// Traduções
const translations: Record<Language, Translations> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.feedback': 'Feedback',
    'nav.contact': 'Contact',
    'nav.lightMode': 'Light Mode',
    'nav.darkMode': 'Dark Mode',
    'nav.callNow': 'Call Now',
    'nav.blog': 'Blog',
    'nav.galeria': 'Gallery',
    
    
    // Hero
    'hero.badge': 'Family Business • Seattle, WA',
    'hero.title': 'Professional Cleaning for your HOME and BUSINESS',
    'hero.description': 'We transform your space with high-quality cleaning services. We serve homes, offices, and commercial establishments in the Seattle area.',
    'hero.service1': 'Residential Cleaning - Care for Your Home',
    'hero.service2': 'Commercial Cleaning - Professional Environments',
    'hero.service3': 'Move In & Move Out - Stress-Free Moving',
    'hero.cta': 'Free Estimate',
    'hero.learnMore': 'Learn About Services →',
    'hero.residential': 'Residential',
    'hero.commercial': 'Commercial',
    'hero.office': 'Offices',
    'hero.fullService': 'Full Service',
    'hero.professional': 'Professional',
    'hero.corporate': 'Corporate',
    'hero.included': "What's included:",
    'hero.specialServices': 'Special Services',
    'hero.moveInOut': 'Move In & Move Out',
    'hero.deepCleaning': 'Deep cleaning for moving',
    'hero.trashRemoval': 'Trash Removal',
    'hero.responsibleDisposal': 'Responsible disposal and recycling',
    'hero.customSchedule': 'Custom Schedules',
    'hero.afterHours': 'We work after hours',

    // Services Features - Residential
    'hero.residential.feature1': 'Complete cleaning of all rooms',
    'hero.residential.feature2': 'Deep kitchen cleaning',
    'hero.residential.feature3': 'Complete bathroom sanitization',
    'hero.residential.feature4': 'Room organization',
    'hero.residential.feature5': 'Cleaning products included',

    // Services Features - Commercial
    'hero.commercial.feature1': 'Stores and establishments',
    'hero.commercial.feature2': 'Restaurants and cafeterias',
    'hero.commercial.feature3': 'Gyms and fitness centers',
    'hero.commercial.feature4': 'After-hours cleaning',
    'hero.commercial.feature5': 'Outdoor area maintenance',

    // Services Features - Office
    'hero.office.feature1': 'Desk and workstation cleaning',
    'hero.office.feature2': 'Bathroom sanitization',
    'hero.office.feature3': 'Common areas and reception',
    'hero.office.feature4': 'Meeting rooms',
    'hero.office.feature5': 'Pantries and corporate kitchens',
    
    // About
    'about.badge': 'Our Family',
    'about.title': 'We Care for Your Home Like It Were Our Own',
    'about.subtitle': 'A family business that understands the value of a clean and welcoming home',
    'about.company': 'SparklHaven Cleaning Service',
    'about.location': 'Seattle, WA • Since 2015',
    'about.bio1': 'We are a couple who started this business with a simple dream: to offer the same care and attention to our clients\' homes that we give to our own family. We understand that your home is more than just a place - it\'s where your family creates memories, grows, and lives.',
    'about.bio2': 'For over 8 years in the Seattle area, we have built lasting relationships with our clients, treating each home as if it were our own. We know how important it is to trust the people who enter your home, and we take that responsibility very seriously.',
    'about.bio3': 'Our approach is personal and caring. We are not just a cleaning company - we are a family caring for your family. Every detail matters to us because we understand that a clean and organized home brings peace of mind and more time for you to enjoy with those you love.',
    'about.care': 'Care',
    'about.careDesc': 'Like family',
    'about.trust': 'Trust',
    'about.trustDesc': 'Total security',
    'about.dedication': 'Dedication',
    'about.dedicationDesc': 'Every detail',
    'about.familyBusiness': 'Family Business',
    'about.familyBusinessDesc': 'Operated by a dedicated couple who treats each client as part of our extended family.',
    'about.reliable': 'Reliable',
    'about.reliableDesc': 'Verified background, complete insurance, and years of proven references in the community.',
    'about.ecoFriendly': 'Eco-Friendly Products',
    'about.ecoFriendlyDesc': 'We use products that are safe for your family, your pets, and the environment.',
    'about.flexibility': 'Flexibility',
    'about.flexibilityDesc': 'Schedules that adapt to your family\'s routine, including weekends.',
    'about.attention': 'Attention to Details',
    'about.attentionDesc': 'We care for every corner of your home with the same care we give to ours.',
    'about.satisfaction': 'Satisfaction Guarantee',
    'about.satisfactionDesc': 'If you\'re not 100% satisfied, we\'ll come back to fix it at no additional cost.',
    
    // Services
    'services.badge': 'Our Services',
    'services.title': 'Complete Cleaning Solutions',
    'services.subtitle': 'From residential to commercial, we care for every detail with professionalism and dedication',
    'services.residential.title': 'Residential Cleaning',
    'services.residential.subtitle': 'Your Home Always Spotless',
    'services.residential.desc': 'We care for your home with love and attention to detail. Weekly, bi-weekly, or monthly services adapted to your needs.',
    'services.commercial.title': 'Commercial Cleaning',
    'services.commercial.subtitle': 'Impeccable Professional Environment',
    'services.commercial.desc': 'We keep your commercial establishment always clean and welcoming to your customers. We work on flexible schedules.',
    'services.office.title': 'Office Cleaning',
    'services.office.subtitle': 'Productivity in Clean Environment',
    'services.office.desc': 'Clean and organized offices increase productivity. We offer daily, weekly, or on-demand services.',
    'services.moveInOut.title': 'Move In & Move Out',
    'services.moveInOut.subtitle': 'Stress-Free Moving',
    'services.moveInOut.desc': 'Complete deep cleaning for when you are moving in or out of a property. We leave everything sparkling!',
    'services.trash.title': 'Trash Removal',
    'services.trash.subtitle': 'Responsible Disposal',
    'services.trash.desc': 'Complete residential and commercial trash collection and disposal service. Recycling and eco-friendly disposal.',
    'services.quote': 'Request Quote',
    'services.workflow.badge': 'How It Works',
    'services.workflow.title': 'Simple and Fast Process',
    'services.workflow.subtitle': 'In just 5 steps your space will be spotless',
    'services.workflow.contact': 'Contact',
    'services.workflow.contactDesc': 'Get in touch with us',
    'services.workflow.estimate': 'Estimate',
    'services.workflow.estimateDesc': 'Free evaluation',
    'services.workflow.schedule': 'Schedule',
    'services.workflow.scheduleDesc': 'Choose date and time',
    'services.workflow.cleaning': 'Cleaning',
    'services.workflow.cleaningDesc': 'Impeccable work',
    'services.workflow.satisfaction': 'Satisfaction',
    'services.workflow.satisfactionDesc': 'Total guarantee',
    'services.cta.title': 'Ready for a spotless space?',
    'services.cta.subtitle': 'Contact us today and receive a free personalized quote for your needs',
    
    // Services Features - Residential
    'services.residential.feature1': 'Complete cleaning of all rooms',
    'services.residential.feature2': 'Vacuuming and floor washing',
    'services.residential.feature3': 'Deep kitchen cleaning',
    'services.residential.feature4': 'Complete bathroom sanitization',
    'services.residential.feature5': 'Room organization',
    'services.residential.feature6': 'Cleaning products included',
    
    // Services Features - Commercial
    'services.commercial.feature1': 'Stores and establishments',
    'services.commercial.feature2': 'Restaurants and cafes',
    'services.commercial.feature3': 'Gyms and fitness centers',
    'services.commercial.feature4': 'After hours cleaning',
    'services.commercial.feature5': 'External area maintenance',
    'services.commercial.feature6': 'Professional products',
    
    // Services Features - Office
    'services.office.feature1': 'Desk and workstation cleaning',
    'services.office.feature2': 'Bathroom sanitization',
    'services.office.feature3': 'Common areas and reception',
    'services.office.feature4': 'Meeting rooms',
    'services.office.feature5': 'Corporate kitchens and pantries',
    'services.office.feature6': 'Selective waste collection',
    
    // Services Features - Move In/Out
    'services.moveInOut.feature1': 'Complete deep cleaning',
    'services.moveInOut.feature2': 'All cabinets inside',
    'services.moveInOut.feature3': 'Detailed appliances',
    'services.moveInOut.feature4': 'Windows and frames',
    'services.moveInOut.feature5': 'Walls and baseboards',
    'services.moveInOut.feature6': 'Satisfaction guarantee',
    
    // Services Features - Trash
    'services.trash.feature1': 'Scheduled regular collection',
    'services.trash.feature2': 'Bulky trash removal',
    'services.trash.feature3': 'Proper recycling',
    'services.trash.feature4': 'Ecological disposal',
    'services.trash.feature5': 'Trash bin cleaning',
    'services.trash.feature6': 'Punctual and reliable service',
    
    // Footer
    'footer.tagline': 'Transforming houses into impeccable homes in the Seattle area',
    'footer.description': 'Family business specialized in residential, commercial, and office cleaning. We serve with care and professionalism since 2015.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.email': 'Email',
    'footer.phone': 'Phone',
    'footer.location': 'Location',
    'footer.rights': '© 2025 SparklHaven Cleaning Service. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.cookies': 'Cookies',
    'footer.testimonials': 'Testimonials',
    
    // Feedback
    'feedback.badge': 'Feedback & Testimonials',
    'feedback.title': 'Share Your Experience',
    'feedback.subtitle': 'Your feedback is important to us! See what our clients say',
    'feedback.rate': 'Rate our service *',
    'feedback.name': 'Full Name *',
    'feedback.namePlaceholder': 'Your name',
    'feedback.email': 'Email *',
    'feedback.emailPlaceholder': 'your@email.com',
    'feedback.phone': 'Phone *',
    'feedback.phonePlaceholder': '(425) 555-0123',
    'feedback.message': 'Your Testimonial *',
    'feedback.messagePlaceholder': 'Tell us about your experience...',
    'feedback.submit': 'Send Feedback',
    'feedback.thanks': 'Thank you for your feedback!',
    'feedback.thanksDesc': 'Your opinion is very important to us.',

    // FAQ
    'faq.badge': 'Frequently Asked Questions',
    'faq.title': 'Questions & Answers',
    'faq.subtitle': 'Find answers to the most common questions about our cleaning services',
    'faq.question1': 'Do you offer house cleaning in Bellevue, WA?',
    'faq.answer1': 'Yes! We serve Bellevue and nearby areas with house cleaning, deep cleaning, and move-in/move-out services.',
    'faq.question2': 'Do you use eco-friendly products?',
    'faq.answer2': 'Yes! We use products that are safe for your family, pets, and the environment, ideal for residential and commercial routines.',
    'faq.question3': 'Do you service offices and workshops in Seattle and Redmond?',
    'faq.answer3': 'Yes! We offer commercial and office cleaning for businesses in Seattle, Redmond, Kirkland, Bothell, and nearby regions.',
    'faq.question4': 'Do you offer move-in/move-out cleaning?',
    'faq.answer4': 'Yes. We perform complete cleaning for moves, ensuring the property is spotless when entering or delivering the property.',
    'faq.question5': 'Is it possible to schedule cleaning on weekends?',
    'faq.answer5': 'Yes! We have flexible schedules, including weekends, according to schedule availability.',
    'faq.cta.title': 'Still have questions?',
    'faq.cta.subtitle': 'Contact us and we\'ll be happy to help you!',
    'faq.cta.button': 'Contact Us Now',
    'faq.question6': 'Do you have social media?',
    'faq.answer6': 'Yes! Follow us on our social media to stay updated with tips, promotions, and our work!',
    
    // Blog
    'blog.badge': 'Cleaning Tips & Insights',
    'blog.title': 'Expert Cleaning Advice',
    'blog.subtitle': 'Expert advice and guides for homes and offices in Seattle area.',
    'blog.readMore': 'Read article',
    'blog.readTime': 'min read',
    'blog.category': 'Category',
    'blog.cta.title': 'Need Professional Cleaning?',
    'blog.cta.subtitle': 'Get a free quote for your home or office in Seattle area.',
    'blog.cta.button': 'Request Free Quote',
    'blog.post1.title': 'House Cleaning Services in Seattle, WA: What to Expect from a Professional Cleaning Company',
    'blog.post1.desc': 'Learn what professional house cleaning services include and why hiring local cleaners in Seattle is the best choice for your home.',
    'blog.post1.category': 'Residential Cleaning',
    'blog.post2.title': 'Deep Cleaning Services in Seattle: When Your Home Needs More Than Basic Cleaning',
    'blog.post2.desc': 'Discover when and why your home needs a deep cleaning service and what makes it different from regular cleaning.',
    'blog.post2.category': 'Deep Cleaning',
    'blog.post3.title': 'Move-In and Move-Out Cleaning in Seattle: Everything You Need to Know',
    'blog.post3.desc': 'Make your moving process stress-free with professional move-in and move-out cleaning services.',
    'blog.post3.category': 'Moving Services',
    'blog.post4.title': 'How Much Does House Cleaning Cost in Seattle, WA?',
    'blog.post4.desc': 'Get a clear understanding of house cleaning prices in Seattle and what factors affect the cost.',
    'blog.post4.category': 'Pricing Guide',
    'blog.post5.title': 'Eco-Friendly Cleaning Services in Seattle: A Healthier Choice for Your Home',
    'blog.post5.desc': 'Learn why eco-friendly cleaning is better for your family, pets and the environment.',
    'blog.post5.category': 'Green Cleaning',
    'blog.post6.title': 'Office Cleaning Services in Seattle: Why Clean Workspaces Matter',
    'blog.post6.desc': 'Discover how professional office cleaning improves productivity and creates a better work environment.',
    'blog.post6.category': 'Commercial Cleaning',

    // Article 1 - House Cleaning Seattle
    'article1.title': 'House Cleaning Services in Seattle, WA: What to Expect from a Professional Cleaning Company',
    'article1.intro': 'Hiring a professional house cleaning service in Seattle, WA is one of the best ways to maintain a clean, healthy and stress-free home. With busy routines and demanding schedules, many families rely on experienced residential cleaners to keep their homes spotless.',
    'article1.aeo': 'Professional house cleaning in Seattle typically includes kitchens, bathrooms, bedrooms and living areas, using safe and eco-friendly products.',
    'article1.h2.1': 'What Is Included in a Professional House Cleaning?',
    'article1.p1.1': 'A standard house cleaning service in Seattle includes comprehensive cleaning of all main areas of your home. Professional cleaners focus on kitchens, where they clean countertops, sinks, appliances, and floors. In bathrooms, services include sanitizing toilets, showers, tubs, and mirrors.',
    'article1.p1.2': 'Bedrooms and living areas receive attention with dusting, vacuuming, and floor cleaning. Most professional services also include organizing visible items and removing trash. The goal is to leave your home fresh, clean, and welcoming.',
    'article1.h2.2': 'Why Hire a Local Cleaning Service in Seattle?',
    'article1.p2.1': 'Hiring a local cleaning service in Seattle offers several advantages. Local companies understand the specific needs of Seattle homeowners, from dealing with rainy weather to maintaining homes in various neighborhoods like Bellevue, Kirkland, and Redmond.',
    'article1.p2.2': 'Local cleaners are also more reliable and flexible with scheduling. They build relationships with clients and take pride in serving their community. Additionally, supporting local businesses helps strengthen the Seattle economy.',
    'article1.h2.3': 'How Often Should You Schedule House Cleaning?',
    'article1.p3.1': 'The frequency of house cleaning depends on your lifestyle, family size, and personal preferences. Most Seattle families schedule cleaning services weekly or bi-weekly to maintain a consistently clean home.',
    'article1.p3.2': 'Monthly cleaning works well for smaller households or those who maintain regular tidiness between professional visits. For busy families with children or pets, weekly cleaning ensures a healthier and more comfortable living environment.',
    'article1.cta.title': 'Ready for a Spotless Home?',
    'article1.cta.desc': 'If you\'re looking for reliable house cleaning in Seattle, Bellevue or Kirkland, SparklHaven Cleaning Service offers flexible scheduling and guaranteed results.',

    // Article 2 - Deep Cleaning Seattle
    'article2.title': 'Deep Cleaning Services in Seattle: When Your Home Needs More Than Basic Cleaning',
    'article2.intro': 'A deep cleaning service in Seattle goes beyond surface cleaning. It removes hidden dirt, grease and buildup that regular cleaning can\'t reach.',
    'article2.aeo': 'Deep cleaning includes detailed cleaning of kitchens, bathrooms, appliances, baseboards and high-touch areas.',
    'article2.h2.1': 'What Is Deep Cleaning?',
    'article2.p1.1': 'Deep cleaning is a comprehensive cleaning service that targets areas often missed during regular cleaning. It involves thorough attention to detail, reaching behind appliances, inside cabinets, and tackling built-up grime. Unlike standard cleaning that maintains cleanliness, deep cleaning restores it.',
    'article2.h2.2': 'What\'s Included in a Deep Cleaning Service?',
    'article2.p2.1': 'A professional deep cleaning service in Seattle includes detailed kitchen cleaning with degreasing of appliances, cabinet exteriors, and backsplashes. Bathrooms receive intensive scrubbing of grout, tiles, and fixtures. The service also covers baseboards, window sills, light fixtures, and ceiling fans. Every corner of your home gets attention it doesn\'t receive during regular maintenance cleaning.',
    'article2.h2.3': 'Who Needs Deep Cleaning in Seattle, WA?',
    'article2.p3.1': 'Deep cleaning is ideal for several situations. Homeowners preparing for special occasions or holidays benefit from a thorough refresh. Those moving into a new home or preparing to sell need deep cleaning to ensure the property is spotless. If you\'ve neglected regular cleaning for a while, deep cleaning helps restore your home to its best condition. It\'s also recommended seasonally to maintain a truly clean living environment.',
    'article2.cta.title': 'Ready for a Deep Clean?',
    'article2.cta.desc': 'Our deep cleaning services in Seattle, Bellevue and Redmond are ideal for seasonal cleaning, special occasions or moving situations.',

    // Article 3 - Move In/Out Cleaning Seattle
    'article3.title': 'Move-In and Move-Out Cleaning in Seattle: Everything You Need to Know',
    'article3.intro': 'Moving can be stressful. A professional move-in or move-out cleaning service in Seattle, WA ensures your home or apartment is spotless and ready for the next step.',
    'article3.aeo': 'Move-out cleaning helps meet landlord requirements and improves chances of getting your deposit back.',
    'article3.h2.1': 'What Is Move-Out Cleaning?',
    'article3.p1.1': 'Move-out cleaning is a deep cleaning service performed when leaving a rental property or home. It ensures the property is returned in excellent condition, meeting lease requirements. This service includes thorough cleaning of all rooms, appliances, cabinets, and fixtures. Professional move-out cleaning in Seattle helps tenants maximize their security deposit return and leave a positive impression on landlords.',
    'article3.h2.2': 'What\'s Included in Move-In Cleaning?',
    'article3.p2.1': 'Move-in cleaning prepares your new home before you arrive. It includes sanitizing bathrooms, deep cleaning kitchens, wiping down all surfaces, and cleaning inside cabinets and closets. This service ensures your new space is fresh, clean, and ready for your belongings. Move-in cleaning in Seattle gives you peace of mind knowing your family is moving into a truly clean environment.',
    'article3.h2.3': 'Why Hire Professional Cleaners for Moving?',
    'article3.p3.1': 'Professional cleaners save you time and energy during the stressful moving process. They have the right equipment and expertise to clean thoroughly and efficiently. For move-outs, professionals ensure you meet all cleaning requirements to get your full deposit back. For move-ins, they provide a fresh start in your new home. Many Seattle, Bellevue, and Kirkland residents rely on professional moving cleaning to make transitions smoother.',
    'article3.cta.title': 'Moving Soon?',
    'article3.cta.desc': 'We proudly serve Seattle, Bellevue, Kirkland and Redmond with professional move-in and move-out cleaning.',

    // Article 4 - House Cleaning Cost Seattle
    'article4.title': 'How Much Does House Cleaning Cost in Seattle, WA?',
    'article4.intro': 'One of the most common questions homeowners ask is: How much does house cleaning cost in Seattle? The answer depends on several factors.',
    'article4.aeo': 'House cleaning in Seattle usually ranges from $120 to $250 per visit, depending on home size and service type.',
    'article4.h2.1': 'Factors That Affect Cleaning Prices',
    'article4.p1.1': 'Several factors influence the cost of house cleaning in Seattle. Home size is the primary factor - larger homes require more time and effort. The type of cleaning also matters: basic maintenance cleaning costs less than deep cleaning or move-out cleaning. Frequency affects pricing too, with regular clients often receiving discounted rates. The condition of your home, number of bathrooms, and special requests like interior window cleaning or organizing can also impact the final price.',
    'article4.h2.2': 'Average House Cleaning Costs in Seattle',
    'article4.p2.1': 'In the Seattle, Bellevue, and Kirkland areas, standard house cleaning typically ranges from $120 to $250 per visit. Small apartments or condos (up to 1,000 sq ft) usually cost $120-$150. Medium homes (1,000-2,000 sq ft) range from $150-$200. Larger homes (2,000+ sq ft) typically cost $200-$250 or more. Deep cleaning and move-out services generally cost 50-100% more than regular cleaning due to the extra time and detail required.',
    'article4.h2.3': 'Is Professional Cleaning Worth the Investment?',
    'article4.p3.1': 'Professional cleaning is absolutely worth the investment for most Seattle homeowners. It saves valuable time that you can spend with family or on activities you enjoy. Professional cleaners deliver consistent, high-quality results with proper equipment and expertise. Regular professional cleaning also maintains your home\'s value and creates a healthier living environment. When you consider the time saved, stress reduced, and quality achieved, professional cleaning offers excellent value for busy families and professionals.',
    'article4.cta.title': 'Get Your Free Quote',
    'article4.cta.desc': 'Request a free quote to receive an accurate price for your home cleaning needs.',

    // Article 5 - Eco-Friendly Cleaning Seattle
    'article5.title': 'Eco-Friendly Cleaning Services in Seattle: A Healthier Choice for Your Home',
    'article5.intro': 'Choosing an eco-friendly cleaning service in Seattle protects your family, pets and the environment while keeping your home clean.',
    'article5.aeo': 'Eco-friendly cleaning uses non-toxic products that improve indoor air quality and reduce health risks.',
    'article5.h2.1': 'What Is Eco-Friendly Cleaning?',
    'article5.p1.1': 'Eco-friendly cleaning uses environmentally safe products and methods that minimize harmful chemicals. These services rely on plant-based, biodegradable cleaners that effectively remove dirt and germs without toxic ingredients. Green cleaning protects indoor air quality, reduces chemical exposure, and supports environmental sustainability. Many Seattle families choose eco-friendly cleaning to create healthier homes, especially for children, elderly family members, and pets.',
    'article5.h2.2': 'Benefits of Green Cleaning Products',
    'article5.p2.1': 'Green cleaning products offer numerous health and environmental benefits. They eliminate exposure to harsh chemicals like ammonia, bleach, and synthetic fragrances that can trigger allergies and respiratory issues. Eco-friendly products are safer for children and pets who spend time on floors and furniture. They also reduce water pollution since biodegradable ingredients break down naturally. Many Seattle homeowners report improved indoor air quality and fewer allergy symptoms after switching to green cleaning services.',
    'article5.h2.3': 'Who Should Choose Eco-Friendly Cleaning?',
    'article5.p3.1': 'Eco-friendly cleaning benefits everyone, but it\'s especially important for families with young children, elderly members, or anyone with allergies, asthma, or chemical sensitivities. Pet owners appreciate products that won\'t harm their animals. Environmentally conscious Seattle residents choose green cleaning to reduce their ecological footprint. If you value health, sustainability, and still want a spotlessly clean home, eco-friendly cleaning services in Bellevue, Kirkland, and Redmond offer the perfect solution.',
    'article5.cta.title': 'Choose Green Cleaning Today',
    'article5.cta.desc': 'SparklHaven offers safe, sustainable cleaning solutions across Seattle and Eastside.',

    // Article 6 - Office Cleaning Seattle
    'article6.title': 'Office Cleaning Services in Seattle: Why Clean Workspaces Matter',
    'article6.intro': 'A clean office creates a professional image and boosts productivity. Our office cleaning services in Seattle, WA help businesses maintain organized and healthy workspaces.',
    'article6.aeo': 'Professional office cleaning improves hygiene, employee satisfaction and client perception.',
    'article6.h2.1': 'Benefits of Professional Office Cleaning',
    'article6.p1.1': 'Professional office cleaning delivers multiple business benefits. A clean workspace reduces employee sick days by minimizing germ spread and improving air quality. It boosts productivity as employees work more efficiently in organized, clutter-free environments. Clean offices also create positive first impressions for clients and visitors, enhancing your company\'s professional image. Regular professional cleaning extends the life of office furniture, carpets, and equipment, protecting your investment.',
    'article6.h2.2': 'What\'s Included in Office Cleaning Services?',
    'article6.p2.1': 'Comprehensive office cleaning in Seattle includes desk and workstation cleaning, bathroom sanitization, and common area maintenance. Services cover vacuuming and floor care, trash removal, kitchen and break room cleaning, and window cleaning. Professional cleaners also handle high-touch surfaces like door handles, light switches, and shared equipment. Many companies in Bellevue, Kirkland, and Redmond customize their cleaning plans to match their specific office needs and schedules.',
    'article6.h2.3': 'How Often Should Offices Be Cleaned?',
    'article6.p3.1': 'Cleaning frequency depends on office size, employee count, and business type. Most offices benefit from daily or nightly cleaning to maintain consistent cleanliness and employee health. Smaller offices might schedule cleaning 2-3 times per week. High-traffic areas like reception and restrooms often need daily attention, while conference rooms can be cleaned as needed. Professional cleaning companies in Seattle offer flexible schedules, including after-hours service to avoid disrupting your business operations.',
    'article6.cta.title': 'Keep Your Office Spotless',
    'article6.cta.desc': 'We provide office and commercial cleaning in Seattle, Bellevue and Redmond with flexible schedules.',

    // Gallery
    'gallery.title': 'Our Work Gallery',
    'gallery.subtitle': 'See the quality of our cleaning services across Seattle area',
    'gallery.areas.title': 'Areas We Serve',
    'gallery.areas.subtitle': 'Professional cleaning services throughout Greater Seattle Area',
    'gallery.cta.title': 'Ready to Experience Our Service?',
    'gallery.cta.subtitle': 'Schedule your cleaning today and see why families trust us',
    'gallery.cta.button': 'Get Free Quote',

    
  },
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.feedback': 'Feedback',
    'nav.contact': 'Contato',
    'nav.lightMode': 'Modo Claro',
    'nav.darkMode': 'Modo Escuro',
    'nav.callNow': 'Ligar Agora',
    'nav.blog': 'Blog',
    'nav.galeria': 'Galeria',
    
    // Hero
    'hero.badge': 'Empresa Familiar • Seattle, WA',
    'hero.title': 'Limpeza Profissional para seu LAR e seu NEGÓCIO',
    'hero.description': 'Transformamos seu espaço com serviços de limpeza de alta qualidade. Atendemos residências, escritórios e estabelecimentos comerciais na região de Seattle.',
    'hero.service1': 'Limpeza Residencial - Cuidado com sua Casa',
    'hero.service2': 'Limpeza Comercial - Ambientes Profissionais',
    'hero.service3': 'Move In & Move Out - Mudanças Sem Estresse',
    'hero.cta': 'Orçamento Grátis',
    'hero.learnMore': 'Conheça os Serviços →',
    'hero.residential': 'Residencial',
    'hero.commercial': 'Comercial',
    'hero.office': 'Escritórios',
    'hero.fullService': 'Serviço Completo',
    'hero.professional': 'Profissional',
    'hero.corporate': 'Corporativo',
    'hero.included': 'O que está incluído:',
    'hero.specialServices': 'Serviços Especiais',
    'hero.moveInOut': 'Move In & Move Out',
    'hero.deepCleaning': 'Limpeza profunda para mudanças',
    'hero.trashRemoval': 'Remoção de Lixo',
    'hero.responsibleDisposal': 'Descarte responsável e reciclagem',
    'hero.customSchedule': 'Horários Personalizados',
    'hero.afterHours': 'Atendemos fora do expediente',

     // Services Features - Residential
    'hero.residential.feature1': 'Limpeza completa de todos os cômodos',
    'hero.residential.feature2': 'Limpeza profunda de cozinha',
    'hero.residential.feature3': 'Sanitização completa de banheiros',
    'hero.residential.feature4': 'Organização de ambientes',
    'hero.residential.feature5': 'Produtos de limpeza inclusos',
    
    // Services Features - Commercial
    'hero.commercial.feature1': 'Lojas e estabelecimentos',
    'hero.commercial.feature2': 'Restaurantes e cafeterias',
    'hero.commercial.feature3': 'Academias e centros fitness',
    'hero.commercial.feature4': 'Limpeza após horário comercial',
    'hero.commercial.feature5': 'Manutenção de áreas externas',
    
    // Services Features - Office
    'hero.office.feature1': 'Limpeza de mesas e estações',
    'hero.office.feature2': 'Sanitização de banheiros',
    'hero.office.feature3': 'Áreas comuns e recepção',
    'hero.office.feature4': 'Salas de reunião',
    'hero.office.feature5': 'Copas e cozinhas corporativas',
    
    // About
    'about.badge': 'Nossa Família',
    'about.title': 'Cuidamos da sua casa como se fosse a Nossa',
    'about.subtitle': 'Uma empresa familiar que entende o valor de um lar limpo e acolhedor',
    'about.company': 'SparklHaven Cleaning Service',
    'about.location': 'Seattle, WA • Desde 2015',
    'about.bio1': 'Somos um casal que começou este negócio com um sonho simples: oferecer o mesmo cuidado e atenção às casas dos nossos clientes que damos à nossa própria família. Entendemos que sua casa é mais do que apenas um lugar - é onde sua família cria memórias, cresce e vive.',
    'about.bio2': 'Há mais de 8 anos na região de Seattle, construímos relacionamentos duradouros com nossos clientes, tratando cada casa como se fosse nossa. Sabemos o quanto é importante ter confiança nas pessoas que entram no seu lar, e levamos essa responsabilidade muito a sério.',
    'about.bio3': 'Nossa abordagem é pessoal e atenciosa. Não somos apenas uma empresa de limpeza - somos uma família cuidando da sua família. Cada detalhe importa para nós, porque entendemos que um lar limpo e organizado traz paz de espírito e mais tempo para você aproveitar com quem você ama.',
    'about.care': 'Cuidado',
    'about.careDesc': 'Como família',
    'about.trust': 'Confiança',
    'about.trustDesc': 'Total segurança',
    'about.dedication': 'Dedicação',
    'about.dedicationDesc': 'Cada detalhe',
    'about.familyBusiness': 'Negócio Familiar',
    'about.familyBusinessDesc': 'Operado por um casal dedicado que trata cada cliente como parte da nossa família estendida.',
    'about.reliable': 'Confiável',
    'about.reliableDesc': 'Background verificado, seguros completos e anos de referências comprovadas na comunidade.',
    'about.ecoFriendly': 'Produtos Ecológicos',
    'about.ecoFriendlyDesc': 'Usamos produtos seguros para sua família, seus pets e o meio ambiente.',
    'about.flexibility': 'Flexibilidade',
    'about.flexibilityDesc': 'Horários que se adaptam à rotina da sua família, incluindo fins de semana.',
    'about.attention': 'Atenção aos Detalhes',
    'about.attentionDesc': 'Cuidamos de cada canto da sua casa com o mesmo carinho que cuidamos da nossa.',
    'about.satisfaction': 'Garantia de Satisfação',
    'about.satisfactionDesc': 'Se não ficar 100% satisfeito, voltamos para acertar sem custo adicional.',
    
    // Services
    'services.badge': 'Nossos Serviços',
    'services.title': 'Soluções completas de Limpeza',
    'services.subtitle': 'Do residencial ao comercial, cuidamos de cada detalhe com profissionalismo e dedicação',
    'services.residential.title': 'Limpeza Residencial',
    'services.residential.subtitle': 'Seu Lar Sempre Impecável',
    'services.residential.desc': 'Cuidamos da sua casa com carinho e atenção aos detalhes. Serviços semanais, quinzenais ou mensais adaptados às suas necessidades.',
    'services.commercial.title': 'Limpeza Comercial',
    'services.commercial.subtitle': 'Ambiente Profissional Impecável',
    'services.commercial.desc': 'Mantemos seu estabelecimento comercial sempre limpo e acolhedor para seus clientes. Trabalhamos em horários flexíveis.',
    'services.office.title': 'Limpeza de Escritórios',
    'services.office.subtitle': 'Produtividade em Ambiente Limpo',
    'services.office.desc': 'Escritórios limpos e organizados aumentam a produtividade. Oferecemos serviços diários, semanais ou sob demanda.',
    'services.moveInOut.title': 'Move In & Move Out',
    'services.moveInOut.subtitle': 'Mudanças Sem Estresse',
    'services.moveInOut.desc': 'Limpeza profunda completa para quando você está entrando ou saindo de uma propriedade. Deixamos tudo brilhando!',
    'services.trash.title': 'Remoção de Lixo',
    'services.trash.subtitle': 'Descarte Responsável',
    'services.trash.desc': 'Serviço completo de coleta e descarte de lixo residencial e comercial. Reciclagem e descarte ecológico.',
    'services.quote': 'Solicitar Orçamento',
    'services.workflow.badge': 'Como Funciona',
    'services.workflow.title': 'Processo Simples e Rápido',
    'services.workflow.subtitle': 'Em apenas 5 passos seu espaço estará impecável',
    'services.workflow.contact': 'Contato',
    'services.workflow.contactDesc': 'Entre em contato conosco',
    'services.workflow.estimate': 'Orçamento',
    'services.workflow.estimateDesc': 'Avaliação gratuita',
    'services.workflow.schedule': 'Agendamento',
    'services.workflow.scheduleDesc': 'Escolha data e hora',
    'services.workflow.cleaning': 'Limpeza',
    'services.workflow.cleaningDesc': 'Trabalho impecável',
    'services.workflow.satisfaction': 'Satisfação',
    'services.workflow.satisfactionDesc': 'Garantia total',
    'services.cta.title': 'Pronto para ter um espaço impecável?',
    'services.cta.subtitle': 'Entre em contato hoje e receba um orçamento gratuito personalizado para suas necessidades',
    
    // Services Features - Residential
    'services.residential.feature1': 'Limpeza completa de todos os cômodos',
    'services.residential.feature2': 'Aspiração e lavagem de pisos',
    'services.residential.feature3': 'Limpeza profunda de cozinha',
    'services.residential.feature4': 'Sanitização completa de banheiros',
    'services.residential.feature5': 'Organização de ambientes',
    'services.residential.feature6': 'Produtos de limpeza inclusos',
    
    // Services Features - Commercial
    'services.commercial.feature1': 'Lojas e estabelecimentos',
    'services.commercial.feature2': 'Restaurantes e cafeterias',
    'services.commercial.feature3': 'Academias e centros fitness',
    'services.commercial.feature4': 'Limpeza após horário comercial',
    'services.commercial.feature5': 'Manutenção de áreas externas',
    'services.commercial.feature6': 'Produtos profissionais',
    
    // Services Features - Office
    'services.office.feature1': 'Limpeza de mesas e estações',
    'services.office.feature2': 'Sanitização de banheiros',
    'services.office.feature3': 'Áreas comuns e recepção',
    'services.office.feature4': 'Salas de reunião',
    'services.office.feature5': 'Copas e cozinhas corporativas',
    'services.office.feature6': 'Coleta seletiva de lixo',
    
    // Services Features - Move In/Out
    'services.moveInOut.feature1': 'Limpeza profunda completa',
    'services.moveInOut.feature2': 'Todos os armários por dentro',
    'services.moveInOut.feature3': 'Eletrodomésticos detalhados',
    'services.moveInOut.feature4': 'Janelas e molduras',
    'services.moveInOut.feature5': 'Paredes e rodapés',
    'services.moveInOut.feature6': 'Garantia de satisfação',
    
    // Services Features - Trash
    'services.trash.feature1': 'Coleta regular programada',
    'services.trash.feature2': 'Remoção de lixo volumoso',
    'services.trash.feature3': 'Reciclagem adequada',
    'services.trash.feature4': 'Descarte ecológico',
    'services.trash.feature5': 'Limpeza de lixeiras',
    'services.trash.feature6': 'Serviço pontual e confiável',
    
    // Footer
    'footer.tagline': 'Transformando casas em lares impecáveis na região de Seattle',
    'footer.description': 'Empresa familiar especializada em limpeza residencial, comercial e de escritórios. Atendemos com carinho e profissionalismo desde 2015.',
    'footer.services': 'Serviços',
    'footer.company': 'Empresa',
    'footer.contact': 'Contato',
    'footer.email': 'Email',
    'footer.phone': 'Telefone',
    'footer.location': 'Localização',
    'footer.rights': '© 2025 SparklHaven Cleaning Service. Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
    'footer.cookies': 'Cookies',
    'footer.testimonials': 'Depoimentos',
    
    // Feedback
    'feedback.badge': 'Feedback & Depoimentos',
    'feedback.title': 'Compartilhe sua Experiência',
    'feedback.subtitle': 'Seu feedback é importante para nós! Veja o que nossos clientes dizem',
    'feedback.rate': 'Avalie nosso serviço *',
    'feedback.name': 'Nome Completo *',
    'feedback.namePlaceholder': 'Seu nome',
    'feedback.email': 'Email *',
    'feedback.emailPlaceholder': 'seu@email.com',
    'feedback.phone': 'Telefone *',
    'feedback.phonePlaceholder': '(11) 98765-4321',
    'feedback.message': 'Seu Depoimento *',
    'feedback.messagePlaceholder': 'Conte sua experiência...',
    'feedback.submit': 'Enviar Feedback',
    'feedback.thanks': 'Obrigado pelo seu feedback!',
    'feedback.thanksDesc': 'Sua opinião é muito importante para nós.',
    
    // FAQ
    'faq.badge': 'Perguntas Frequentes',
    'faq.title': 'Dúvidas & Respostas',
    'faq.subtitle': 'Encontre respostas para as perguntas mais comuns sobre nossos serviços de limpeza',
    'faq.question1': 'Vocês oferecem house cleaning em Bellevue, WA?',
    'faq.answer1': 'Sim! Atendemos Bellevue e áreas próximas com serviços de house cleaning, deep cleaning e move-in/move-out.',
    'faq.question2': 'Vocês utilizam produtos eco-friendly?',
    'faq.answer2': 'Sim! Utilizamos produtos seguros para sua família, pets e meio-ambiente, ideais para rotinas residenciais e comerciais.',
    'faq.question3': 'Atendem escritórios e oficinas em Seattle e Redmond?',
    'faq.answer3': 'Sim! Oferecemos commercial e office cleaning para empresas em Seattle, Redmond, Kirkland, Bothell e regiões próximas.',
    'faq.question4': 'Vocês oferecem limpeza para mudança (move-in/move-out)?',
    'faq.answer4': 'Sim. Realizamos limpeza completa para mudanças, garantindo o imóvel spotless ao entrar ou entregar a propriedade.',
    'faq.question5': 'É possível agendar limpeza aos finais de semana?',
    'faq.answer5': 'Sim! Temos horários flexíveis, incluindo finais de semana, de acordo com a disponibilidade de agenda.',
    'faq.cta.title': 'Ainda tem dúvidas?',
    'faq.cta.subtitle': 'Entre em contato conosco e teremos prazer em ajudá-lo!',
    'faq.cta.button': 'Fale Conosco Agora',
    'faq.question6': 'Vocês têm redes sociais?',
    'faq.answer6': 'Sim! Nos siga nas redes sociais para ficar por dentro de dicas, promoções e nossos trabalhos!',

    // Blog
    'blog.badge': 'Dicas e Insights de Limpeza',
    'blog.title': 'Conselhos de Limpeza',
    'blog.subtitle': 'Conselhos e guias especializados para casas e escritórios na região de Seattle.',
    'blog.readMore': 'Ler artigo',
    'blog.readTime': 'min de leitura',
    'blog.category': 'Categoria',
    'blog.cta.title': 'Precisa de Limpeza Profissional?',
    'blog.cta.subtitle': 'Receba um orçamento gratuito para sua casa ou escritório na região de Seattle.',
    'blog.cta.button': 'Solicitar Orçamento Grátis',
    'blog.post1.title': 'Serviços de Limpeza Residencial em Seattle, WA: O Que Esperar de Uma Empresa Profissional',
    'blog.post1.desc': 'Saiba o que os serviços profissionais de limpeza incluem e por que contratar profissionais locais em Seattle é a melhor escolha.',
    'blog.post1.category': 'Limpeza Residencial',
    'blog.post2.title': 'Limpeza Profunda em Seattle: Quando Sua Casa Precisa Mais Que Limpeza Básica',
    'blog.post2.desc': 'Descubra quando e por que sua casa precisa de limpeza profunda e o que a torna diferente da limpeza regular.',
    'blog.post2.category': 'Limpeza Profunda',
    'blog.post3.title': 'Limpeza para Mudança em Seattle: Tudo Que Você Precisa Saber',
    'blog.post3.desc': 'Torne seu processo de mudança livre de estresse com serviços profissionais de limpeza.',
    'blog.post3.category': 'Serviços de Mudança',
    'blog.post4.title': 'Quanto Custa Limpeza Residencial em Seattle, WA?',
    'blog.post4.desc': 'Entenda claramente os preços de limpeza em Seattle e quais fatores afetam o custo.',
    'blog.post4.category': 'Guia de Preços',
    'blog.post5.title': 'Limpeza Ecológica em Seattle: Uma Escolha Mais Saudável Para Sua Casa',
    'blog.post5.desc': 'Saiba por que a limpeza ecológica é melhor para sua família, pets e meio ambiente.',
    'blog.post5.category': 'Limpeza Verde',
    'blog.post6.title': 'Limpeza de Escritórios em Seattle: Por Que Ambientes Limpos Importam',
    'blog.post6.desc': 'Descubra como a limpeza profissional de escritórios melhora a produtividade e cria um melhor ambiente de trabalho.',
    'blog.post6.category': 'Limpeza Comercial',

    // Article 1 - House Cleaning Seattle
    'article1.title': 'Serviços de Limpeza Residencial em Seattle, WA: O Que Esperar de Uma Empresa Profissional',
    'article1.intro': 'Contratar um serviço profissional de limpeza residencial em Seattle, WA é uma das melhores maneiras de manter uma casa limpa, saudável e livre de estresse. Com rotinas agitadas e horários exigentes, muitas famílias contam com profissionais experientes para manter suas casas impecáveis.',
    'article1.aeo': 'A limpeza profissional em Seattle geralmente inclui cozinhas, banheiros, quartos e áreas de estar, usando produtos seguros e ecológicos.',
    'article1.h2.1': 'O Que Está Incluído em uma Limpeza Residencial Profissional?',
    'article1.p1.1': 'Um serviço padrão de limpeza residencial em Seattle inclui limpeza abrangente de todas as áreas principais da sua casa. Profissionais focam em cozinhas, onde limpam bancadas, pias, eletrodomésticos e pisos. Nos banheiros, os serviços incluem sanitização de vasos, chuveiros, banheiras e espelhos.',
    'article1.p1.2': 'Quartos e áreas de estar recebem atenção com remoção de poeira, aspiração e limpeza de pisos. A maioria dos serviços profissionais também inclui organização de itens visíveis e remoção de lixo. O objetivo é deixar sua casa fresca, limpa e acolhedora.',
    'article1.h2.2': 'Por Que Contratar um Serviço de Limpeza Local em Seattle?',
    'article1.p2.1': 'Contratar um serviço de limpeza local em Seattle oferece várias vantagens. Empresas locais entendem as necessidades específicas dos proprietários de Seattle, desde lidar com o clima chuvoso até manter casas em vários bairros como Bellevue, Kirkland e Redmond.',
    'article1.p2.2': 'Profissionais locais também são mais confiáveis e flexíveis com agendamentos. Eles constroem relacionamentos com clientes e têm orgulho de servir sua comunidade. Além disso, apoiar empresas locais ajuda a fortalecer a economia de Seattle.',
    'article1.h2.3': 'Com Que Frequência Você Deve Agendar a Limpeza Residencial?',
    'article1.p3.1': 'A frequência da limpeza residencial depende do seu estilo de vida, tamanho da família e preferências pessoais. A maioria das famílias de Seattle agenda serviços de limpeza semanalmente ou quinzenalmente para manter uma casa consistentemente limpa.',
    'article1.p3.2': 'Limpeza mensal funciona bem para residências menores ou aqueles que mantêm arrumação regular entre visitas profissionais. Para famílias ocupadas com crianças ou animais de estimação, a limpeza semanal garante um ambiente de vida mais saudável e confortável.',
    'article1.cta.title': 'Pronto para uma Casa Impecável?',
    'article1.cta.desc': 'Se você está procurando por limpeza residencial confiável em Seattle, Bellevue ou Kirkland, a SparklHaven Cleaning Service oferece agendamento flexível e resultados garantidos.',

    // Article 2 - Deep Cleaning Seattle
    'article2.title': 'Serviços de Limpeza Profunda em Seattle: Quando Sua Casa Precisa Mais Que Limpeza Básica',
    'article2.intro': 'Um serviço de limpeza profunda em Seattle vai além da limpeza superficial. Remove sujeira escondida, gordura e acúmulos que a limpeza regular não alcança.',
    'article2.aeo': 'A limpeza profunda inclui limpeza detalhada de cozinhas, banheiros, eletrodomésticos, rodapés e áreas de alto contato.',
    'article2.h2.1': 'O Que É Limpeza Profunda?',
    'article2.p1.1': 'Limpeza profunda é um serviço de limpeza abrangente que atinge áreas frequentemente perdidas durante a limpeza regular. Envolve atenção minuciosa aos detalhes, alcançando atrás de eletrodomésticos, dentro de armários e combatendo sujeira acumulada. Diferente da limpeza padrão que mantém a limpeza, a limpeza profunda a restaura.',
    'article2.h2.2': 'O Que Está Incluído em um Serviço de Limpeza Profunda?',
    'article2.p2.1': 'Um serviço profissional de limpeza profunda em Seattle inclui limpeza detalhada de cozinha com desengraxamento de eletrodomésticos, parte externa de armários e azulejos. Banheiros recebem esfregação intensiva de rejuntes, azulejos e acessórios. O serviço também cobre rodapés, peitoris de janelas, luminárias e ventiladores de teto. Cada canto da sua casa recebe atenção que não recebe durante a limpeza de manutenção regular.',
    'article2.h2.3': 'Quem Precisa de Limpeza Profunda em Seattle, WA?',
    'article2.p3.1': 'A limpeza profunda é ideal para várias situações. Proprietários se preparando para ocasiões especiais ou feriados se beneficiam de uma renovação completa. Aqueles se mudando para uma nova casa ou se preparando para vender precisam de limpeza profunda para garantir que a propriedade esteja impecável. Se você negligenciou a limpeza regular por um tempo, a limpeza profunda ajuda a restaurar sua casa à sua melhor condição. Também é recomendada sazonalmente para manter um ambiente de vida verdadeiramente limpo.',
    'article2.cta.title': 'Pronto para uma Limpeza Profunda?',
    'article2.cta.desc': 'Nossos serviços de limpeza profunda em Seattle, Bellevue e Redmond são ideais para limpeza sazonal, ocasiões especiais ou situações de mudança.',

    // Article 3 - Move In/Out Cleaning Seattle
    'article3.title': 'Limpeza para Mudança em Seattle: Tudo Que Você Precisa Saber',
    'article3.intro': 'Mudar pode ser estressante. Um serviço profissional de limpeza para mudança em Seattle, WA garante que sua casa ou apartamento esteja impecável e pronto para o próximo passo.',
    'article3.aeo': 'A limpeza de saída ajuda a cumprir os requisitos do proprietário e melhora as chances de receber seu depósito de volta.',
    'article3.h2.1': 'O Que É Limpeza de Saída?',
    'article3.p1.1': 'Limpeza de saída é um serviço de limpeza profunda realizado ao deixar uma propriedade alugada ou casa. Garante que a propriedade seja devolvida em excelentes condições, cumprindo os requisitos do contrato. Este serviço inclui limpeza completa de todos os cômodos, eletrodomésticos, armários e acessórios. A limpeza profissional de saída em Seattle ajuda inquilinos a maximizar o retorno do depósito de segurança e deixar uma impressão positiva nos proprietários.',
    'article3.h2.2': 'O Que Está Incluído na Limpeza de Entrada?',
    'article3.p2.1': 'A limpeza de entrada prepara sua nova casa antes de você chegar. Inclui sanitização de banheiros, limpeza profunda de cozinhas, limpeza de todas as superfícies e limpeza interna de armários e closets. Este serviço garante que seu novo espaço esteja fresco, limpo e pronto para seus pertences. A limpeza de entrada em Seattle dá a você paz de espírito sabendo que sua família está se mudando para um ambiente verdadeiramente limpo.',
    'article3.h2.3': 'Por Que Contratar Profissionais para Mudança?',
    'article3.p3.1': 'Profissionais de limpeza economizam seu tempo e energia durante o estressante processo de mudança. Eles têm o equipamento certo e experiência para limpar minuciosamente e com eficiência. Para saídas, profissionais garantem que você cumpra todos os requisitos de limpeza para receber seu depósito completo de volta. Para entradas, eles proporcionam um começo fresco em sua nova casa. Muitos residentes de Seattle, Bellevue e Kirkland confiam na limpeza profissional para mudanças para tornar as transições mais suaves.',
    'article3.cta.title': 'Vai se Mudar em Breve?',
    'article3.cta.desc': 'Atendemos com orgulho Seattle, Bellevue, Kirkland e Redmond com limpeza profissional para entrada e saída.',

    // Article 4 - House Cleaning Cost Seattle
    'article4.title': 'Quanto Custa Limpeza Residencial em Seattle, WA?',
    'article4.intro': 'Uma das perguntas mais comuns que proprietários fazem é: Quanto custa limpeza residencial em Seattle? A resposta depende de vários fatores.',
    'article4.aeo': 'Limpeza residencial em Seattle geralmente varia de $120 a $250 por visita, dependendo do tamanho da casa e tipo de serviço.',
    'article4.h2.1': 'Fatores Que Afetam os Preços de Limpeza',
    'article4.p1.1': 'Vários fatores influenciam o custo da limpeza residencial em Seattle. O tamanho da casa é o fator principal - casas maiores exigem mais tempo e esforço. O tipo de limpeza também importa: limpeza de manutenção básica custa menos que limpeza profunda ou limpeza de mudança. A frequência também afeta o preço, com clientes regulares frequentemente recebendo taxas com desconto. A condição da sua casa, número de banheiros e solicitações especiais como limpeza de janelas internas ou organização também podem impactar o preço final.',
    'article4.h2.2': 'Custos Médios de Limpeza Residencial em Seattle',
    'article4.p2.1': 'Nas áreas de Seattle, Bellevue e Kirkland, a limpeza residencial padrão geralmente varia de $120 a $250 por visita. Apartamentos pequenos ou condomínios (até 1.000 pés quadrados) geralmente custam $120-$150. Casas médias (1.000-2.000 pés quadrados) variam de $150-$200. Casas maiores (2.000+ pés quadrados) normalmente custam $200-$250 ou mais. Limpeza profunda e serviços de mudança geralmente custam 50-100% a mais que a limpeza regular devido ao tempo extra e detalhes necessários.',
    'article4.h2.3': 'Vale a Pena o Investimento em Limpeza Profissional?',
    'article4.p3.1': 'Limpeza profissional vale absolutamente o investimento para a maioria dos proprietários de Seattle. Economiza tempo valioso que você pode passar com a família ou em atividades que você gosta. Profissionais de limpeza entregam resultados consistentes e de alta qualidade com equipamento e experiência adequados. Limpeza profissional regular também mantém o valor da sua casa e cria um ambiente de vida mais saudável. Quando você considera o tempo economizado, estresse reduzido e qualidade alcançada, a limpeza profissional oferece excelente valor para famílias e profissionais ocupados.',
    'article4.cta.title': 'Receba Seu Orçamento Grátis',
    'article4.cta.desc': 'Solicite um orçamento gratuito para receber um preço preciso para suas necessidades de limpeza residencial.',

    // Article 5 - Eco-Friendly Cleaning Seattle
    'article5.title': 'Serviços de Limpeza Ecológica em Seattle: Uma Escolha Mais Saudável Para Sua Casa',
    'article5.intro': 'Escolher um serviço de limpeza ecológica em Seattle protege sua família, pets e o meio ambiente enquanto mantém sua casa limpa.',
    'article5.aeo': 'Limpeza ecológica usa produtos não-tóxicos que melhoram a qualidade do ar interno e reduzem riscos à saúde.',
    'article5.h2.1': 'O Que É Limpeza Ecológica?',
    'article5.p1.1': 'Limpeza ecológica usa produtos e métodos ambientalmente seguros que minimizam produtos químicos prejudiciais. Esses serviços dependem de limpadores à base de plantas, biodegradáveis, que removem efetivamente sujeira e germes sem ingredientes tóxicos. Limpeza verde protege a qualidade do ar interno, reduz a exposição química e apoia a sustentabilidade ambiental. Muitas famílias de Seattle escolhem limpeza ecológica para criar casas mais saudáveis, especialmente para crianças, membros idosos da família e pets.',
    'article5.h2.2': 'Benefícios dos Produtos de Limpeza Verde',
    'article5.p2.1': 'Produtos de limpeza verde oferecem numerosos benefícios à saúde e ao meio ambiente. Eles eliminam a exposição a produtos químicos agressivos como amônia, alvejante e fragrâncias sintéticas que podem desencadear alergias e problemas respiratórios. Produtos ecológicos são mais seguros para crianças e pets que passam tempo em pisos e móveis. Eles também reduzem a poluição da água, pois ingredientes biodegradáveis se decompõem naturalmente. Muitos proprietários de Seattle relatam melhora na qualidade do ar interno e menos sintomas de alergia após mudar para serviços de limpeza verde.',
    'article5.h2.3': 'Quem Deve Escolher Limpeza Ecológica?',
    'article5.p3.1': 'Limpeza ecológica beneficia todos, mas é especialmente importante para famílias com crianças pequenas, membros idosos ou qualquer pessoa com alergias, asma ou sensibilidades químicas. Donos de pets apreciam produtos que não prejudicam seus animais. Residentes de Seattle conscientes do meio ambiente escolhem limpeza verde para reduzir sua pegada ecológica. Se você valoriza saúde, sustentabilidade e ainda quer uma casa impecavelmente limpa, serviços de limpeza ecológica em Bellevue, Kirkland e Redmond oferecem a solução perfeita.',
    'article5.cta.title': 'Escolha Limpeza Verde Hoje',
    'article5.cta.desc': 'SparklHaven oferece soluções de limpeza seguras e sustentáveis em Seattle e Eastside.',

    // Article 6 - Office Cleaning Seattle
    'article6.title': 'Serviços de Limpeza de Escritórios em Seattle: Por Que Ambientes Limpos Importam',
    'article6.intro': 'Um escritório limpo cria uma imagem profissional e aumenta a produtividade. Nossos serviços de limpeza de escritórios em Seattle, WA ajudam empresas a manter espaços de trabalho organizados e saudáveis.',
    'article6.aeo': 'Limpeza profissional de escritórios melhora higiene, satisfação dos funcionários e percepção dos clientes.',
    'article6.h2.1': 'Benefícios da Limpeza Profissional de Escritórios',
    'article6.p1.1': 'Limpeza profissional de escritórios oferece múltiplos benefícios empresariais. Um espaço de trabalho limpo reduz dias de doença dos funcionários ao minimizar a propagação de germes e melhorar a qualidade do ar. Aumenta a produtividade, pois os funcionários trabalham com mais eficiência em ambientes organizados e sem desordem. Escritórios limpos também criam primeiras impressões positivas para clientes e visitantes, melhorando a imagem profissional da sua empresa. Limpeza profissional regular estende a vida útil de móveis de escritório, carpetes e equipamentos, protegendo seu investimento.',
    'article6.h2.2': 'O Que Está Incluído nos Serviços de Limpeza de Escritórios?',
    'article6.p2.1': 'Limpeza abrangente de escritórios em Seattle inclui limpeza de mesas e estações de trabalho, sanitização de banheiros e manutenção de áreas comuns. Os serviços cobrem aspiração e cuidado com pisos, remoção de lixo, limpeza de cozinha e sala de descanso e limpeza de janelas. Profissionais de limpeza também cuidam de superfícies de alto contato como maçanetas, interruptores de luz e equipamentos compartilhados. Muitas empresas em Bellevue, Kirkland e Redmond personalizam seus planos de limpeza para corresponder às suas necessidades específicas de escritório e horários.',
    'article6.h2.3': 'Com Que Frequência os Escritórios Devem Ser Limpos?',
    'article6.p3.1': 'A frequência de limpeza depende do tamanho do escritório, número de funcionários e tipo de negócio. A maioria dos escritórios se beneficia de limpeza diária ou noturna para manter limpeza consistente e saúde dos funcionários. Escritórios menores podem agendar limpeza 2-3 vezes por semana. Áreas de alto tráfego como recepção e banheiros frequentemente precisam de atenção diária, enquanto salas de conferência podem ser limpas conforme necessário. Empresas de limpeza profissional em Seattle oferecem horários flexíveis, incluindo serviço após o expediente para evitar interromper suas operações comerciais.',
    'article6.cta.title': 'Mantenha Seu Escritório Impecável',
    'article6.cta.desc': 'Fornecemos limpeza de escritórios e comercial em Seattle, Bellevue e Redmond com horários flexíveis.',

    // Gallery
    'gallery.title': 'Galeria de Trabalhos',
    'gallery.subtitle': 'Veja a qualidade dos nossos serviços de limpeza na região de Seattle',
    'gallery.areas.title': 'Áreas de Atendimento',
    'gallery.areas.subtitle': 'Serviços profissionais de limpeza em toda a Grande Seattle',
    'gallery.cta.title': 'Pronto para Experimentar Nosso Serviço?',
    'gallery.cta.subtitle': 'Agende sua limpeza hoje e veja por que as famílias confiam em nós',
    'gallery.cta.button': 'Solicitar Orçamento Grátis',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en'); // Inglês como padrão

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const t = (key: string): string => {
    const translation = translations[language][key as TranslationKey];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};