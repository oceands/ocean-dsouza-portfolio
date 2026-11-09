"use client";

import React from "react";

export type BrandKey =
  | "barakat"
  | "formcase"
  | "gmg"
  | "spotdraft"
  | "dynamics365"
  | "procol"
  | "checkout"
  | "clevertap"
  | "uowd"
  | "google"
  | "ibm"
  | "microsoft"
  | "aws"
  | "scrum"
  | "productschool";

interface BrandLogoProps {
  brand: BrandKey;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  theme?: "dark" | "light";
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  brand,
  size = "md",
  showText = true,
  theme = "dark",
  className = "",
}) => {
  const iconDim =
    size === "sm"
      ? "w-7 h-7"
      : size === "lg"
      ? "w-11 h-11 sm:w-12 sm:h-12"
      : "w-9 h-9";
  const textClass =
    size === "sm"
      ? "text-xs font-bold tracking-tight"
      : size === "lg"
      ? "text-base font-bold tracking-tight"
      : "text-sm font-bold tracking-tight";
  const subTextClass = "text-[10px] font-medium opacity-75";
  const fg = theme === "dark" ? "text-[#F5F5F7]" : "text-[#0F172A]";

  switch (brand) {
    /* 1. BARAKAT FRESH — User-Uploaded Image (/brands/barakat.png) */
    case "barakat":
      return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
          <div
            className={`${iconDim} rounded-xl overflow-hidden bg-[#28C745] flex items-center justify-center shrink-0`}
          >
            <img
              src="/brands/barakat.png"
              alt="Barakat Fresh logo"
              className="w-full h-full object-cover"
            />
          </div>
          {showText && (
            <div className={`leading-tight ${fg}`}>
              <div className={textClass}>Barakat Fresh</div>
              <div className={subTextClass}>Consumer &amp; Core Platform</div>
            </div>
          )}
        </div>
      );

    /* 2. FORMCASE GMBH / ISERV — User-Uploaded Image (/brands/iserv.jpg) */
    case "formcase":
      return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
          <div
            className={`${iconDim} rounded-xl overflow-hidden bg-white flex items-center justify-center shrink-0 p-1`}
          >
            <img
              src="/brands/iserv.jpg"
              alt="IServ Formcase GMBH logo"
              className="w-full h-full object-contain"
            />
          </div>
          {showText && (
            <div className={`leading-tight ${fg}`}>
              <div className={textClass}>Formcase GMBH · IServ</div>
              <div className={subTextClass}>EdTech Platform · Germany &amp; UAE</div>
            </div>
          )}
        </div>
      );

    /* 3. GMG (SUN & SAND SPORTS / NIKE) — User-Uploaded Image (/brands/gmg.jpg) */
    case "gmg":
      return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
          <div
            className={`${iconDim} rounded-xl overflow-hidden bg-white flex items-center justify-center shrink-0`}
          >
            <img
              src="/brands/gmg.jpg"
              alt="GMG Gulf Marketing Group logo"
              className="w-full h-full object-cover"
            />
          </div>
          {showText && (
            <div className={`leading-tight ${fg}`}>
              <div className={textClass}>GMG · Sun &amp; Sand Sports / Nike</div>
              <div className={subTextClass}>50+ Stores &amp; SFCC Platform</div>
            </div>
          )}
        </div>
      );

    /* 4. UNIVERSITY OF WOLLONGONG (UOWD) — User-Uploaded Image (/brands/uowd.png) */
    case "uowd":
      return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
          <div
            className={`${iconDim} rounded-xl overflow-hidden bg-white flex items-center justify-center shrink-0 p-0.5`}
          >
            <img
              src="/brands/uowd.png"
              alt="University of Wollongong logo"
              className="w-full h-full object-contain scale-125"
            />
          </div>
          {showText && (
            <div className={`leading-tight ${fg}`}>
              <div className={textClass}>University of Wollongong in Dubai</div>
              <div className={subTextClass}>B.Sc. in Computer Science</div>
            </div>
          )}
        </div>
      );

    /* 5. SCRUM ALLIANCE — User-Uploaded Image (/brands/scrum-alliance.png) */
    case "scrum":
      return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
          <div
            className={`${iconDim} rounded-xl overflow-hidden bg-[#DCE2F9] flex items-center justify-center shrink-0`}
          >
            <img
              src="/brands/scrum-alliance.png"
              alt="Scrum Alliance logo"
              className="w-full h-full object-cover"
            />
          </div>
          {showText && (
            <div className={`leading-tight ${fg}`}>
              <div className={textClass}>Scrum Alliance</div>
              <div className={subTextClass}>Certified Scrum Product Owner®</div>
            </div>
          )}
        </div>
      );

    /* 6. IBM — User-Uploaded Image (/brands/ibm.png) */
    case "ibm":
      return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
          <div
            className={`${iconDim} rounded-xl overflow-hidden bg-white flex items-center justify-center shrink-0 p-1`}
          >
            <img
              src="/brands/ibm.png"
              alt="IBM logo"
              className="w-full h-full object-contain"
            />
          </div>
          {showText && (
            <div className={`leading-tight ${fg}`}>
              <div className={textClass}>IBM</div>
              <div className={subTextClass}>Product Manager Professional</div>
            </div>
          )}
        </div>
      );

    /* 7. GOOGLE — Official 4-Color Google G Emblem */
    case "google":
      return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
          <div
            className={`${iconDim} rounded-xl bg-white flex items-center justify-center shrink-0 p-2`}
          >
            <svg viewBox="0 0 48 48" className="w-full h-full" aria-label="Google">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
          </div>
          {showText && (
            <div className={`leading-tight ${fg}`}>
              <div className={textClass}>Google</div>
              <div className={subTextClass}>GA4 &amp; Project Management</div>
            </div>
          )}
        </div>
      );

    /* 8. MICROSOFT / DYNAMICS 365 — Official 4-Square Microsoft Logo */
    case "microsoft":
    case "dynamics365":
      return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
          <div
            className={`${iconDim} rounded-xl bg-white flex items-center justify-center shrink-0 p-2`}
          >
            <svg
              viewBox="0 0 36 36"
              className="w-full h-full"
              aria-label="Microsoft"
            >
              <rect x="3" y="3" width="13.5" height="13.5" fill="#F25022" />
              <rect x="19.5" y="3" width="13.5" height="13.5" fill="#7FBA00" />
              <rect x="3" y="19.5" width="13.5" height="13.5" fill="#00A4EF" />
              <rect
                x="19.5"
                y="19.5"
                width="13.5"
                height="13.5"
                fill="#FFB900"
              />
            </svg>
          </div>
          {showText && (
            <div className={`leading-tight ${fg}`}>
              <div className={textClass}>Microsoft Dynamics 365</div>
              <div className={subTextClass}>Enterprise AI &amp; Cloud</div>
            </div>
          )}
        </div>
      );

    /* 9. AMAZON WEB SERVICES (AWS) — Official AWS Dark Tile with Orange Smile Arrow */
    case "aws":
      return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
          <div
            className={`${iconDim} rounded-xl bg-[#232F3E] flex items-center justify-center shrink-0 p-1.5`}
          >
            <svg viewBox="0 0 44 44" className="w-full h-full" aria-label="AWS">
              <text
                x="22"
                y="23"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="13"
                fontWeight="800"
              >
                aws
              </text>
              <path
                d="M10 29C16 34 28 34 34 29"
                fill="none"
                stroke="#FF9900"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              <path
                d="M31 27L35 28.5L33 32"
                fill="none"
                stroke="#FF9900"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {showText && (
            <div className={`leading-tight ${fg}`}>
              <div className={textClass}>Amazon Web Services</div>
              <div className={subTextClass}>AWS Cloud Practitioner</div>
            </div>
          )}
        </div>
      );

    /* 10. PRODUCT SCHOOL — User-Uploaded Image (/brands/product-school.jpg) */
    case "productschool":
      return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
          <div
            className={`${iconDim} rounded-xl overflow-hidden bg-[#EEF2FF] flex items-center justify-center shrink-0`}
          >
            <img
              src="/brands/product-school.jpg"
              alt="Product School logo"
              className="w-full h-full object-cover"
            />
          </div>
          {showText && (
            <div className={`leading-tight ${fg}`}>
              <div className={textClass}>Product School</div>
              <div className={subTextClass}>PAC™ &amp; PSC™ Certified</div>
            </div>
          )}
        </div>
      );

    /* 11. SPOTDRAFT */
    case "spotdraft":
      return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
          <div
            className={`${iconDim} rounded-xl bg-[#0D2818] flex items-center justify-center shrink-0 p-1.5`}
          >
            <svg viewBox="0 0 36 36" className="w-full h-full" aria-hidden="true">
              <rect x="4" y="4" width="20" height="26" rx="4" fill="#22C55E" />
              <path
                d="M14 10H28C30.2 10 32 11.8 32 14V28C32 30.2 30.2 32 28 32H14V10Z"
                fill="#DCFCE7"
              />
              <path
                d="M18 17H27M18 22H25M18 27H23"
                stroke="#0D2818"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {showText && (
            <div className={`leading-tight ${fg}`}>
              <div className={textClass}>SpotDraft</div>
              <div className={subTextClass}>AI-Native CLM Platform</div>
            </div>
          )}
        </div>
      );

    /* 12. PROCOL */
    case "procol":
      return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
          <div
            className={`${iconDim} rounded-xl bg-[#0B2545] flex items-center justify-center shrink-0 p-1.5`}
          >
            <svg viewBox="0 0 36 36" className="w-full h-full" aria-hidden="true">
              <path
                d="M8 6H21C26.5 6 30 9.5 30 14.5C30 19.5 26.5 23 21 23H15V30H8V6Z"
                fill="#38BDF8"
              />
              <circle cx="21" cy="14.5" r="4" fill="#FACC15" />
            </svg>
          </div>
          {showText && (
            <div className={`leading-tight ${fg}`}>
              <div className={textClass}>Procol</div>
              <div className={subTextClass}>B2B SaaS Platform</div>
            </div>
          )}
        </div>
      );

    /* 13. CHECKOUT.COM */
    case "checkout":
      return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
          <div
            className={`${iconDim} rounded-xl bg-[#0A2540] flex items-center justify-center shrink-0 p-1.5`}
          >
            <svg viewBox="0 0 36 36" className="w-full h-full" aria-hidden="true">
              <path
                d="M24 9C16.8 9 11 13 11 18C11 23 16.8 27 24 27"
                fill="none"
                stroke="#00D4B6"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M20 13L26 18L20 23"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {showText && (
            <div className={`leading-tight ${fg}`}>
              <div className={textClass}>Checkout.com</div>
              <div className={subTextClass}>Apple Pay · Google Pay · BNPL</div>
            </div>
          )}
        </div>
      );

    /* 14. CLEVERTAP */
    case "clevertap":
    default:
      return (
        <div className={`inline-flex items-center gap-2.5 ${className}`}>
          <div
            className={`${iconDim} rounded-xl bg-[#2A0A10] flex items-center justify-center shrink-0 p-1.5`}
          >
            <svg viewBox="0 0 36 36" className="w-full h-full" aria-hidden="true">
              <circle cx="18" cy="18" r="12" fill="#EF4444" />
              <path
                d="M12 18L16.5 22.5L25 13.5"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {showText && (
            <div className={`leading-tight ${fg}`}>
              <div className={textClass}>CleverTap</div>
              <div className={subTextClass}>Retention &amp; Lifecycle CRM</div>
            </div>
          )}
        </div>
      );
  }
};

export default BrandLogo;
