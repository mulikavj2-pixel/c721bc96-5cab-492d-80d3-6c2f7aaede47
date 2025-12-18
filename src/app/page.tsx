"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardSplit from '@/components/sections/hero/HeroBillboardSplit';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import TestimonialCardEight from '@/components/sections/testimonial/TestimonialCardEight';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBase from '@/components/sections/footer/FooterBase';
import { CheckCircle, Heart, Shield, Sparkles, Star, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="large"
      sizing="mediumSizeExtraLargeSpacing"
      background="animatedAurora"
      cardStyle="frosted-heavy"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Dogs", id: "dogs" },
            { name: "Adopt", id: "adopt" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Paws Haven"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057703666-yt02pb6h.jpg"
          logoAlt="Paws Haven Shelter"
          bottomLeftText="Help us care for dogs"
          bottomRightText="contact@pawshaven.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardSplit
          tag="Open for Adoptions"
          tagIcon={Heart}
          title="Find Your Perfect Companion"
          description="Give a loving home to a dog in need. Browse our available dogs and start your adoption journey today."
          buttons={[
            { text: "See Available Dogs", href: "dogs" },
            { text: "Learn About Adoption", href: "adopt" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057705155-7tz8c1r9.jpg"
          imageAlt="Happy dogs playing together"
          frameStyle="browser"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We believe in giving every dog a second chance at happiness. Our mission is to rescue, rehabilitate, and rehome dogs while building a compassionate community that values animal welfare."
          useInvertedBackground="noInvert"
          features={[
            {
              icon: Shield,
              title: "Safe Haven",
              description: "Every dog receives medical care, nutrition, and shelter in a safe, stress-free environment."
            },
            {
              icon: Heart,
              title: "Compassionate Care",
              description: "Our dedicated staff provides love and personalized attention to help dogs heal emotionally."
            },
            {
              icon: Users,
              title: "Community First",
              description: "We connect adopters with the right dogs and support families throughout their adoption journey."
            },
            {
              icon: Star,
              title: "Quality Matches",
              description: "We carefully match dogs with families to ensure lasting, loving relationships."
            }
          ]}
        />
      </div>

      <div id="dogs" data-section="dogs">
        <ProductCardSeven
          title="Dogs Ready for Adoption"
          description="Meet our wonderful dogs waiting for their forever homes. Click to learn more about each pup."
          tag="Available Now"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",
              name: "Max",
              price: "Golden Retriever",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057706308-7x94yh61.jpg",
              imageAlt: "Max - Golden Retriever"
            },
            {
              id: "2",
              name: "Luna",
              price: "Labrador Mix",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057708267-l2xloajr.jpg",
              imageAlt: "Luna - Labrador Mix"
            },
            {
              id: "3",
              name: "Charlie",
              price: "Terrier Mix",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057709787-jfjzl9k5.jpg",
              imageAlt: "Charlie - Terrier Mix"
            },
            {
              id: "4",
              name: "Bella",
              price: "Mixed Breed",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057711243-tvyh4780.jpg",
              imageAlt: "Bella - Mixed Breed"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="adoption-process" data-section="adoption-process">
        <FeatureCardTwelve
          title="The Adoption Process"
          description="We make adoption simple and straightforward to help you find your perfect match."
          tag="Simple Steps"
          tagIcon={CheckCircle}
          textboxLayout="default"
          animationType="opacity"
          variant="border"
          useInvertedBackground="noInvert"
          features={[
            {
              id: "step-1",
              label: "01",
              title: "Browse Our Dogs",
              items: [
                "View profiles and photos",
                "Learn about each dog's personality",
                "Check health and history details"
              ]
            },
            {
              id: "step-2",
              label: "02",
              title: "Complete Application",
              items: [
                "Quick online form",
                "Tell us about your home",
                "Share your adoption goals"
              ],
              buttons: [
                { text: "Start Application", href: "contact" }
              ]
            },
            {
              id: "step-3",
              label: "03",
              title: "Meet & Greet",
              items: [
                "Schedule a visit",
                "Meet your potential companion",
                "Discuss final details"
              ]
            },
            {
              id: "step-4",
              label: "04",
              title: "Bring Them Home",
              items: [
                "Complete paperwork",
                "Receive care guide",
                "Start your new journey together"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEight
          title="Success Stories"
          description="Real families sharing their joy of giving a dog a forever home."
          tag="Happy Homes"
          tagIcon={Heart}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Dog Parent",
              company: "Max's Family",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057712971-z5eelo9t.jpg",
              imageAlt: "Sarah with her adopted dog"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "First-Time Adopter",
              company: "Luna's Home",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057714396-gn25qfiz.jpg",
              imageAlt: "Michael hugging his dog"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Dog Lover",
              company: "Charlie's Adventure",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057716847-vmwjusv2.jpg",
              imageAlt: "Emily playing with Charlie"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Family Advocate",
              company: "Bella's Forever Home",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766057718576-sby75xh8.jpg",
              imageAlt: "David's family with Bella"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to change a life? Start your adoption journey today. Our team is here to answer any questions and help you find your perfect match."
          animationType="background-highlight"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Submit Application", href: "https://example.com/apply" },
            { text: "Schedule a Visit", href: "https://example.com/schedule" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Paws Haven"
          copyrightText="© 2024 Paws Haven Dog Shelter. All dogs deserve love."
          columns={[
            {
              title: "Adoption",
              items: [
                { label: "Browse Dogs", href: "dogs" },
                { label: "Adoption Process", href: "adopt" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Mission", href: "about" },
                { label: "Team", href: "#team" },
                { label: "Support Us", href: "#support" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Phone: (555) 123-4567", href: "tel:5551234567" },
                { label: "Email: info@pawshaven.com", href: "mailto:info@pawshaven.com" },
                { label: "Hours: Mon-Sat 10am-6pm", href: "#hours" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}