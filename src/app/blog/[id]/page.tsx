"use client";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const IMG = "https://thinksmartinsurance.com/wp-content/uploads";

const posts: Record<
  number,
  {
    title: string;
    date: string;
    category: string;
    categoryColor: string;
    image: string;
    content: string;
    relatedIds: number[];
  }
> = {
  1: {
    title: "Is National Life Group Legit? An Honest Review for 2026",
    date: "April 16, 2026",
    category: "Featured post",
    categoryColor: "#2F5E9E",
    image: `${IMG}/2026/04/National-Life-Group-Co-Uy-Tin-Khong-768x460.png`,
    relatedIds: [6, 13, 2],
    content: `
## Introduction

If you're researching life insurance in the United States — particularly IUL (Indexed Universal Life) — you've likely come across **National Life Group**. With a growing Vietnamese-American client base and strong social media presence, NLG has become one of the most discussed insurance companies in the community.

But is National Life Group legit? Is it safe to trust them with your family's financial future?

This honest review covers everything you need to know.

## About National Life Group

National Life Group (NLG) is a Vermont-based insurance holding company founded in **1848** — making it one of the oldest insurers in the United States. It operates through its subsidiaries, including National Life Insurance Company and Life Insurance Company of the Southwest (LSW).

**Key facts:**
- Founded: 1848 (176 years of history)
- Headquarters: Montpelier, Vermont
- Financial strength rating: A (Excellent) by AM Best
- Products: Life insurance, annuities, retirement plans
- Strong in IUL (Indexed Universal Life) products

## Is National Life Group Financially Stable?

Yes. NLG holds an **A (Excellent)** rating from AM Best — a leading insurance rating agency. This means they have a strong ability to meet ongoing insurance obligations.

With over $50 billion in total assets, NLG is well-capitalized and considered highly stable by industry standards.

## National Life Group IUL Products

NLG's most popular product for the Vietnamese community is the **Indexed Universal Life (IUL)** policy, specifically the *FlexLife* and *LifeBuilder* series. Key features:

- **0% floor** — you cannot lose money when the market drops
- **CAP rates** up to 12.5% annually
- **Living benefits** — paid out for critical illness, chronic illness, or terminal illness
- Tax-free cash value growth
- Tax-free withdrawals and loans

## Verdict: Is National Life Group Legit?

**Yes, absolutely.** National Life Group is a legitimate, financially strong, and highly rated insurance company with a 176-year history. Their IUL products offer genuine value for families seeking both life protection and tax-advantaged retirement savings.

However, like any financial product, the right policy depends on your individual needs. Always work with a licensed, verified insurance agent — like those at **VietPoint Insurance & Tax** — who can help you compare options and structure the policy correctly.

## Contact VietPoint Insurance & Tax

Ready to explore National Life Group's IUL? Our licensed agents specialize in helping Vietnamese families find the right coverage.

📞 **Hotline: (678) 825-3737**
📧 **support@VietPointinsurance.com**
📍 1424 N Brown Rd #450, Lawrenceville, GA 30043
    `,
  },
  2: {
    title:
      "Top 5 Life Insurance Agencies for Vietnamese in the USA [2026 Update]",
    date: "April 15, 2026",
    category: "Insurance Knowledge",
    categoryColor: "#2563eb",
    image: `${IMG}/2026/04/Top-5-Life-Insurance-Agencies-Empowering-the-Vietnamese-Community-in-the-USA-768x432.jpg`,
    relatedIds: [1, 6, 13],
    content: `
## Overview

When searching for a life insurance agency for the Vietnamese community in the U.S., the most critical factors are **trust, language support, and experience** with the specific needs of immigrant families.

This guide ranks the top 5 agencies based on these criteria.

## #1 — VietPoint Insurance & Tax (Lawrenceville, GA)

**Rating: ⭐⭐⭐⭐⭐**

VietPoint Insurance & Tax was founded by Vietnamese-Americans specifically to serve the Vietnamese community in the U.S. Their agents are fluent in Vietnamese, deeply understand the cultural context, and specialize in IUL and Max-Funded IUL policies.

**Why #1:**
- 100% Vietnamese-speaking agents
- Specialists in IUL, Term Life, and Max-Funded IUL
- Transparent, education-first approach
- Strong community reputation
- Based in Georgia with clients nationwide

📞 (678) 825-3737 | support@VietPointinsurance.com

## #2 — National Life Group Agents

NLG has a large network of Vietnamese-speaking agents across the country, particularly in California, Texas, and Georgia. Strong IUL products with a 176-year track record.

## #3 — Allianz Life Vietnamese Agents

Allianz's Index Lock feature on their IUL products is unmatched in the industry. Their Vietnamese-speaking agents in major metro areas provide excellent service.

## #4 — Pacific Life Vietnamese Representatives

Strong whole life and universal life products. Growing Vietnamese-speaking representative base in California and the Pacific Northwest.

## #5 — New York Life Vietnamese Agents

One of the most recognized names in insurance. NYL has a growing Vietnamese agent network and strong financial products, though their IUL offerings are less competitive than NLG or Allianz.

## How to Choose

When selecting an agency, ask:
1. Do you have Vietnamese-speaking agents?
2. Are you licensed in my state?
3. Can you explain IUL vs Term Life clearly?
4. What companies do you represent?
5. Can I verify your license?

Always verify your agent at our [Official Consultant Verification](/about/verify-consultant) page before sharing personal information.
    `,
  },
  3: {
    title: "NOTICE OF ADJUSTED DRAWING DATE",
    date: "October 13, 2025",
    category: "Event",
    categoryColor: "#d97706",
    image: `${IMG}/2025/10/Thong-bao-dieu-chinh-768x636.jpg`,
    relatedIds: [19, 20, 21],
    content: `
## NOTICE OF ADJUSTED DRAWING DATE

**Program:** "Win a Round-Trip U.S.–Vietnam Ticket for Lunar New Year 2027"

**Organizer:** VietPoint Insurance & Tax LLC

---

Dear valued clients and participants,

We are writing to inform you of an **adjusted drawing date** for the above-referenced program.

### Original Drawing Date
Previously announced date: September 30, 2025

### New Drawing Date
**Adjusted to: November 15, 2025**

### Reason for Adjustment

Due to an unexpectedly high number of participants and our commitment to ensuring a fair and transparent drawing process, we have decided to extend the entry period and adjust the drawing date accordingly.

### How the Drawing Will Be Conducted

- All valid entries received before **November 10, 2025** will be included
- The drawing will be conducted live on our Facebook page: [facebook.com/VietPointinsuranceus](https://www.facebook.com/VietPointinsuranceus/)
- Winners will be notified via phone and email within 48 hours of the drawing

### Prize Details

- **Grand Prize:** 1 Round-Trip Ticket USA ↔ Vietnam (economy class, flexible dates)
- **Runner-Up Prizes:** Gift cards and insurance consultation packages

We sincerely apologize for any inconvenience this adjustment may cause, and we thank you for your continued trust and participation.

**VietPoint Insurance & Tax LLC**
📞 (678) 825-3737
📧 support@VietPointinsurance.com
    `,
  },
  4: {
    title: "Real Case Study: Life Insurance Cancer Payout of $54,000",
    date: "October 13, 2025",
    category: "Customer stories",
    categoryColor: "#16a34a",
    image: `${IMG}/2025/10/ANH-SON_THUMBNAIL-YOUTUBE-09-768x432.png`,
    relatedIds: [5, 8, 6],
    content: `
## How the Life Insurance Claim Process Worked — IUL vs Term Life

This is a real case study from a VietPoint Insurance & Tax client who received a **$54,000 cancer payout** through their IUL living benefits.

*Names have been changed to protect privacy.*

---

## Background

**Client:** Mrs. T.N., 52 years old, Vietnamese-American, Georgia
**Policy:** IUL Secrets (National Life Group), held for 7 years
**Event:** Diagnosed with Stage 2 breast cancer, June 2025

## The Claim Process

### Step 1: Notification (Day 1)
Mrs. T.N. called her VietPoint agent immediately after diagnosis. Her agent gathered the required documentation:
- Oncologist's diagnosis letter
- Hospital records confirming the cancer stage
- Policy number and personal identification

### Step 2: Claim Submission (Day 3)
The agent submitted the living benefits claim on Mrs. T.N.'s behalf. Because she had an **IUL policy with living benefits**, she qualified for an accelerated death benefit — meaning she could receive a portion of her death benefit while still alive.

### Step 3: Review & Approval (Day 8)
National Life Group reviewed the claim and approved it within 5 business days.

### Step 4: Payment (Day 12)
**$54,000 was deposited directly into Mrs. T.N.'s account** — 12 days after the initial call.

## What Happened if She Had Term Life Instead?

With a standard Term Life policy, there would be **zero payout** for cancer diagnosis. Term Life only pays upon death. Mrs. T.N. would have received nothing during her treatment.

This is the critical difference between IUL with living benefits and traditional Term Life insurance.

## Mrs. T.N.'s Words

> "I never imagined insurance could pay out while I was still alive. That $54,000 covered my entire chemotherapy treatment without touching my savings. My VietPoint agent handled everything — I just focused on getting better."

## Key Takeaway

If you have IUL with living benefits:
- ✅ Cancer diagnosis → payout
- ✅ Heart attack → payout
- ✅ Stroke → payout
- ✅ 16+ critical conditions → payout
- ✅ You're still alive to use the money

**Call us today to make sure your policy includes living benefits.**
📞 (678) 825-3737
    `,
  },
  5: {
    title:
      "Review VietPoint Insurance & Tax: Case Study Life Insurance Payout $323,195",
    date: "October 13, 2025",
    category: "Customer stories",
    categoryColor: "#16a34a",
    image: `${IMG}/2025/10/CHI-TIEN_THUMBNAIL-YOUTUBE-02-768x432.png`,
    relatedIds: [4, 8, 1],
    content: `
## From Karaoke Shortness of Breath to a Cancer Diagnosis

This is the story of Mr. M.N. — a VietPoint Insurance & Tax client whose IUL living benefits paid out **$323,195** after a cancer diagnosis.

---

## The Beginning

It started with shortness of breath at a karaoke gathering in March 2024. Mr. M.N., 58, thought it was nothing serious — perhaps just fatigue from a long week of work.

His wife insisted he see a doctor. Two weeks later, the results came back: **Stage 3 lung cancer**.

## The Policy

Mr. M.N. had enrolled in a **Max-Funded IUL** policy with VietPoint Insurance & Tax 9 years prior. At the time, his primary goal was retirement savings — the living benefits clause felt like a formality he'd never need.

**Policy details:**
- Death benefit: $500,000
- Cash value accumulated: $287,000
- Living benefits rider: Yes (critical illness acceleration)

## The Claim

His VietPoint agent submitted the living benefits claim within 48 hours of diagnosis. Within 11 business days, the insurance company processed and approved the claim.

**Total payout: $323,195**

This represented 65% of his death benefit, accelerated and paid out as a lump sum while he was still living.

## How It Changed Everything

The $323,195 allowed Mr. M.N. and his wife to:
- Access the best oncology specialists in Georgia without financial worry
- Pay for experimental treatment not covered by standard health insurance
- Take a 3-week trip to Vietnam to see his aging parents "one more time" — a trip they had postponed for years
- Maintain their family's standard of living during 8 months of treatment

Today, Mr. M.N. is cancer-free. His IUL policy continues to grow.

## His Message

> "I spent 9 years paying into this policy, sometimes wondering if it was worth it. When I needed it most, VietPoint Insurance & Tax delivered. The money arrived in 11 days. No fighting, no arguments — just compassionate, professional support."

## Lesson for the Vietnamese Community

Many Vietnamese families purchase the cheapest Term Life policy to "check the box." But Term Life pays only at death. **IUL with living benefits** pays when you're diagnosed with cancer, heart attack, stroke, and 16+ other conditions — when you need the money most, while you're alive to use it.

**Contact VietPoint Insurance & Tax today.**
📞 (678) 825-3737
    `,
  },
  6: {
    title: "National Life Group's IUL Premium Payment Policy",
    date: "May 1, 2025",
    category: "Featured post",
    categoryColor: "#2F5E9E",
    image: `${IMG}/2025/05/chinh-sach-dong-phi-bao-hiem-iul-national-life-group-iul-premium-payment-policy-thumbnails-768x512.jpg`,
    relatedIds: [1, 8, 7],
    content: `
## Understanding NLG's IUL Premium Payment Policy

Indexed Universal Life (IUL) insurance is increasingly attracting the interest of the Vietnamese community. Understanding the payment policy is crucial for managing your policy effectively.

## What is IUL Premium Flexibility?

Unlike traditional whole life insurance with fixed premiums, IUL policies from National Life Group offer **flexible premium payments**. This means you can:

- Pay more in good financial months
- Pay less (down to the minimum) in tighter months
- Use accumulated cash value to cover premiums temporarily

## Minimum Premium Requirement

NLG requires a minimum premium payment to keep your policy active. This minimum is calculated based on:
- Your age at policy issue
- Your death benefit amount
- Your current cash value balance

**Important:** If you pay only the minimum for extended periods, your cash value may be depleted, and the policy could eventually lapse.

## Maximum Premium (MEC Limit)

IRS rules limit how much you can contribute to an IUL without it becoming a **Modified Endowment Contract (MEC)**. A MEC loses some of the tax advantages of life insurance.

VietPoint agents will help you stay below the MEC threshold while maximizing your contributions.

## What Happens if You Miss a Payment?

NLG has a **61-day grace period**. If you miss a payment:
1. Your policy remains active during the grace period
2. The missing premium is deducted from your cash value (if available)
3. If cash value is insufficient, your policy may lapse

**Recommendation:** Contact your VietPoint agent immediately if you anticipate difficulty making payments. There are options to reduce premiums or use a policy loan.

## Payment Methods

- Online via NLG client portal
- Auto-pay (bank draft) — recommended
- Check by mail
- Phone payment

## Contact Us

Questions about your NLG IUL policy payments? Our agents are here to help.

📞 (678) 825-3737
📧 support@VietPointinsurance.com
    `,
  },
  7: {
    title:
      "How much does life insurance cost in the US? A 2025 guide for Vietnamese families",
    date: "April 20, 2025",
    category: "Featured post",
    categoryColor: "#2F5E9E",
    image: `${IMG}/2025/05/bao-hiem-nhan-tho-bao-nhieu-tien-tai-my-how-much-does-life-insurance-cost-in-the-us-thumbnail-768x512.jpg`,
    relatedIds: [14, 2, 6],
    content: `
## Life Insurance Costs in the US — 2025 Guide

For the Vietnamese community in the US, understanding life insurance costs is not just about protecting your loved ones — it's about securing your financial future wisely.

## Factors That Determine Your Premium

### 1. Age
The younger you are, the lower your premium. A 30-year-old pays roughly **3–4x less** than a 50-year-old for the same coverage.

### 2. Health Status
Excellent health = lowest premiums. Pre-existing conditions like diabetes or heart disease will increase premiums. Some conditions may require medical underwriting.

### 3. Coverage Amount (Death Benefit)
More coverage = higher premium. Most financial advisors recommend coverage of **10–12x your annual income**.

### 4. Policy Type
- **Term Life:** Lowest premiums, no cash value
- **IUL:** Higher premiums, builds tax-free cash value
- **Max-Funded IUL:** Higher contributions, maximum retirement benefit

### 5. Gender
Statistically, women live longer, so they typically pay **10–15% less** than men for the same coverage.

## Sample Premium Estimates (2025)

| Age | Gender | $500K Term 20yr | $500K IUL |
|-----|--------|-----------------|-----------|
| 30  | Male   | ~$25/mo         | ~$280/mo  |
| 30  | Female | ~$20/mo         | ~$240/mo  |
| 40  | Male   | ~$55/mo         | ~$420/mo  |
| 40  | Female | ~$42/mo         | ~$370/mo  |
| 50  | Male   | ~$145/mo        | ~$680/mo  |
| 50  | Female | ~$110/mo        | ~$580/mo  |

*Estimates only. Actual premiums depend on health, smoking status, and specific policy terms.*

## Term Life vs IUL — Which is More Cost-Effective?

**Term Life** is cheaper upfront but provides no return on investment. At the end of the term, you have paid thousands in premiums with zero cash value.

**IUL** costs more monthly but builds significant tax-free cash value over time. A 30-year-old who contributes $400/month for 25 years could accumulate $400,000+ in tax-free retirement funds.

## Get Your Personalized Quote

Every situation is different. Our agents will analyze your income, family situation, and goals to find the most cost-effective policy for you.

📞 **Free consultation: (678) 825-3737**
    `,
  },
  8: {
    title: "IUL Insurance Returns: High or Low?",
    date: "April 25, 2025",
    category: "Customer stories",
    categoryColor: "#16a34a",
    image: `${IMG}/2025/05/loi-nhuan-bao-hiem-iul-insurance-returns-thumbnail-768x512.jpg`,
    relatedIds: [1, 6, 10],
    content: `
## Are IUL Insurance Returns Actually Good?

Indexed Universal Life (IUL) is a unique type of permanent life insurance. Beyond protection, it offers a cash value investment component linked to a stock market index like the S&P 500.

But are the returns genuinely competitive? Let's look at the real numbers.

## How IUL Returns Work

IUL returns are not directly invested in the stock market. Instead, they're linked to a market index with two key protections:

- **CAP rate:** Maximum return in any given year (typically 10–15%)
- **FLOOR rate:** Minimum return — usually 0% or 1% (you never lose money)

### Example
If the S&P 500 returns +18% in a year:
- Your IUL credits the CAP (e.g., 12%) — not the full 18%

If the S&P 500 falls -30%:
- Your IUL credits the FLOOR (0%) — you lose nothing

## Historical S&P 500 vs IUL Returns (10-Year Comparison)

Over the past 10 years, the S&P 500 averaged approximately **13.5% annually** (before fees and taxes).

A typical IUL with 12% CAP / 0% FLOOR, over the same period, averaged approximately **8–9% annually** — after crediting rates are applied.

## IUL vs Bank Savings vs 401(k)

| Vehicle | Avg Annual Return | Taxes on Withdrawal | Market Risk |
|---------|-------------------|---------------------|-------------|
| Bank Savings | 0.5–5% | Taxable | None |
| 401(k) | 6–10% | Taxable | Yes |
| IUL | 6–10% | **Tax-Free** | None |
| S&P 500 | 10–14% | Capital gains tax | High |

## The Real Advantage: Tax-Free Compounding

The true power of IUL isn't just the return percentage — it's the **tax-free compounding**. A 7% tax-free return is equivalent to a 10%+ taxable return for someone in the 30% tax bracket.

## Verdict

IUL returns are **moderate but consistent and tax-free** — making them ideal for risk-averse investors seeking guaranteed retirement income without market volatility.

**Questions about IUL returns? Call us:** 📞 (678) 825-3737
    `,
  },
  9: {
    title:
      '"Decoding" the US Single Tax and How Singles Can Optimize Their Taxes',
    date: "April 22, 2025",
    category: "Health - Life",
    categoryColor: "#ea580c",
    image: `${IMG}/2025/05/thue-doc-than-my-us-single-tax-thumbnail-768x512.jpg`,
    relatedIds: [11, 12, 15],
    content: `
## What is the "US Single Tax"?

Many Vietnamese singles in the US have heard the term "single tax" — but does it actually exist in the US tax system?

The short answer: **not officially, but effectively yes.**

## How US Tax Filing Status Affects Singles

The US tax system has several filing statuses:
- **Single** — most common for unmarried individuals
- **Married Filing Jointly** — typically the most favorable
- **Head of Household** — for single parents
- **Married Filing Separately** — usually least favorable

Singles filing under the "Single" status face **higher effective tax rates** than married couples on the same income. This is because the standard deduction for married filing jointly ($27,700 in 2025) is exactly double the single standard deduction ($13,850), but tax brackets for singles reach higher rates at lower income levels.

## The "Marriage Bonus" Disadvantage for Singles

At certain income levels, married couples pay significantly less in taxes than two singles earning the same combined income. This effective penalty on being single is what the Vietnamese community informally calls the "single tax."

## Strategies to Reduce Your Tax Burden as a Single

### 1. Maximize Tax-Advantaged Accounts
- **401(k):** Contribute up to $23,000/year (2025 limit)
- **IRA:** Up to $7,000/year
- **IUL Policy:** Unlimited, tax-free growth and withdrawal

### 2. File as Head of Household (if eligible)
If you support a dependent (child, parent), you may qualify for Head of Household status — significantly reducing your tax bill.

### 3. Itemize Deductions
If your deductions exceed the standard deduction, itemizing can reduce taxable income.

### 4. Invest in Tax-Free Vehicles
IUL insurance offers completely tax-free growth and tax-free withdrawals — one of the most powerful tools for singles to build wealth without the tax penalty.

**Want to optimize your taxes? Contact us:** 📞 (678) 825-3737
    `,
  },
  10: {
    title: "S&P 500 Index: Growth, Volatility, and Investment Insights",
    date: "April 17, 2025",
    category: "Insurance Knowledge",
    categoryColor: "#2563eb",
    image: `${IMG}/2025/05/chi-so-s-p-500-index-thumbnail-768x512.jpg`,
    relatedIds: [8, 11, 1],
    content: `
## What is the S&P 500 Index?

The S&P 500 Index (Standard & Poor's 500) is a stock market index tracking the performance of **500 of the largest publicly traded companies** in the United States. It is widely considered the best single gauge of large-cap U.S. equities and a primary benchmark for the overall health of the U.S. economy.

## Why It Matters for IUL Policyholders

Many IUL (Indexed Universal Life) policies link their crediting rates to the S&P 500 index. Understanding how the S&P 500 behaves helps you understand how your IUL cash value grows.

## Historical Performance

| Period | S&P 500 Average Annual Return |
|--------|-------------------------------|
| 2015–2025 (10yr) | ~13.5% |
| 2005–2025 (20yr) | ~10.8% |
| 1995–2025 (30yr) | ~10.7% |
| Since inception (1957) | ~10.5% |

## Major Crashes — And How IUL Protected Investors

| Year | S&P 500 Return | IUL Policyholder Return |
|------|----------------|------------------------|
| 2008 | -37% | **0% (floor protection)** |
| 2020 | -34% (brief) | **0% (floor protection)** |
| 2022 | -19.4% | **0% (floor protection)** |

During the 2008 financial crisis, many 401(k) holders lost 30–40% of their retirement savings. IUL policyholders with a 0% floor lost **nothing**.

## CAP and FLOOR in Practice

A typical IUL policy might offer:
- **CAP: 12%** — if S&P 500 returns +18%, you get 12%
- **FLOOR: 0%** — if S&P 500 returns -37%, you get 0%

Over a 20-year period with these parameters, historical simulations show IUL averaging **7–9% annually** — without a single year of loss.

## S&P 500 Composition

The index includes companies across all major sectors:
- Technology (Apple, Microsoft, Nvidia — ~30%)
- Healthcare (UnitedHealth, J&J — ~13%)
- Finance (JPMorgan, Berkshire — ~13%)
- Consumer goods, energy, real estate, and more

**Learn how your IUL is linked to the S&P 500:** 📞 (678) 825-3737
    `,
  },
  11: {
    title: "U.S. Estate Tax 2025: A Comprehensive Guide",
    date: "April 14, 2025",
    category: "Investment, Saving & Retire",
    categoryColor: "#7c3aed",
    image: `${IMG}/2025/05/thue-thua-ke-my-us-estate-tax-2025-thumbnails-768x512.jpg`,
    relatedIds: [12, 15, 9],
    content: `
## What is U.S. Estate Tax?

The U.S. estate tax — sometimes called the "death tax" — is a federal tax on the transfer of assets from a deceased person to their heirs. Understanding it is critically important for the Vietnamese community planning wealth transfer to the next generation.

## 2025 Estate Tax Exemption

For 2025, the federal estate tax exemption is **$13.61 million per individual** (or $27.22 million for married couples). This means:

- If your total estate (home, savings, investments, life insurance death benefits owned by the estate) is **below $13.61M**, you pay **zero estate tax**
- Above the exemption, estates are taxed at rates up to **40%**

## Key Warning for 2026

The current high exemption is scheduled to **sunset on December 31, 2025**, reverting to approximately **$7 million per individual**. This means many families that are currently exempt could owe significant estate taxes starting in 2026.

Congress may act to extend or make the higher exemption permanent, but this is uncertain.

## How Life Insurance Can Help

**Properly structured life insurance can be a powerful estate planning tool:**

1. **Death benefits are income-tax-free** to beneficiaries
2. **If the policy is owned by an Irrevocable Life Insurance Trust (ILIT)**, the death benefit is also excluded from your taxable estate
3. **IUL cash value** is generally not subject to estate tax if structured properly

## Strategies for the Vietnamese Community

### 1. Annual Gifting
You can give up to **$18,000 per year per recipient** (2025 limit) tax-free, removing assets from your taxable estate.

### 2. Life Insurance Trusts (ILIT)
Place a life insurance policy in an ILIT. The death benefit pays heirs tax-free and outside your estate.

### 3. Act Before December 31, 2025
If your estate is between $7M and $13.6M, gifting strategies before the sunset date could save your heirs millions in estate taxes.

**Consult with our agents about estate planning strategies:**
📞 (678) 825-3737
    `,
  },
  12: {
    title:
      "US Tax Filing 2025: A Detailed and Accurate Guide for Vietnamese Individuals (F-1, H-1B, Green Card)",
    date: "April 12, 2025",
    category: "Investment, Saving & Retire",
    categoryColor: "#7c3aed",
    image: `${IMG}/2025/05/khai-thue-my-us-tax-filling-thumbnail-768x512.jpg`,
    relatedIds: [11, 9, 15],
    content: `
## US Tax Filing 2025 — Guide for Vietnamese Immigrants

Filing US taxes can be confusing, especially for Vietnamese individuals on different visa types. This comprehensive guide covers the most important situations.

## Who Must File a US Tax Return?

Almost everyone earning income in the US must file, including:
- US Citizens and Green Card holders (worldwide income)
- H-1B visa holders (US-sourced income)
- F-1 students (US-sourced income, special rules apply)
- Permanent residents

## Filing Deadlines 2025

- **April 15, 2025** — Standard filing deadline
- **June 15, 2025** — Automatic extension for Americans abroad
- **October 15, 2025** — Extended deadline (requires Form 4868)

## F-1 Students — Special Rules

F-1 students are typically **non-resident aliens** for their first 5 years in the US. This means:
- File **Form 1040-NR** (not the regular 1040)
- Report only US-sourced income
- May claim treaty benefits (Vietnam-US tax treaty)
- Scholarship/fellowship income may be partially exempt

**Important:** F-1 OPT students working in the US are exempt from Social Security and Medicare taxes.

## H-1B Visa Holders

H-1B holders are typically treated as **resident aliens** for tax purposes (after passing the substantial presence test). This means:
- File regular **Form 1040**
- Report worldwide income
- Subject to all US tax rules
- Can claim standard deduction ($13,850 for single filers in 2025)

## Green Card Holders

Treated as US residents — file Form 1040 and report worldwide income. Must report foreign bank accounts with over $10,000 via FBAR and Form 8938.

## Common Deductions to Maximize

1. **Standard Deduction:** $13,850 (single) / $27,700 (married filing jointly)
2. **Student Loan Interest:** Up to $2,500
3. **IRA Contributions:** Up to $7,000
4. **401(k) Contributions:** Up to $23,000
5. **Health Insurance Premiums** (if self-employed)

## Tax-Free Strategies

The best long-term tax strategy is investing in **tax-free vehicles** like IUL insurance — where your money grows tax-deferred and withdrawals are completely tax-free, regardless of your filing status.

**Questions about tax-efficient financial planning?**
📞 (678) 825-3737
    `,
  },
  13: {
    title: "Allianz Insurance Company: Is It Truly Trustworthy?",
    date: "April 10, 2025",
    category: "Featured post",
    categoryColor: "#2F5E9E",
    image: `${IMG}/2025/05/cong-ty-bao-hiem-allianz-co-uy-tin-khong-is-allianz-reputable-thumbnail-1-768x512.jpg`,
    relatedIds: [1, 2, 8],
    content: `
## Allianz Insurance Company Review

As a global financial powerhouse, Allianz boasts a strong brand and long history. But is Allianz reputable for Vietnamese-American policyholders?

## About Allianz Life Insurance

Allianz Life Insurance Company of North America (Allianz Life) is a subsidiary of **Allianz SE** — Germany's largest insurance company and one of the world's largest financial services companies.

**Key facts:**
- Founded: 1896 (German parent company)
- US operations: Minneapolis, Minnesota
- Financial rating: **A+ (Superior)** by AM Best
- Total assets: Over $80 billion (US operations)
- Specialty: Fixed indexed annuities and IUL

## Allianz's Signature Product — Index Lock

Allianz Life was the **first insurance company** to introduce the **Index Lock** feature in their IUL products. This allows policyholders to lock in their highest interest rate mid-year — before the index measurement date — protecting gains from market volatility.

**Example:** If the index is up 14% in July (with a CAP of 15%), you can lock that 14% in. Even if the market crashes in August, you keep the 14% credit.

## Allianz IUL Products

The most popular Allianz IUL for the Vietnamese community is the **Allianz 222 Annuity** and their flagship **Index Life** products featuring:
- CAP rates up to 15%
- FLOOR of 0%–1%
- Index Lock option
- Living benefits rider

## Financial Strength

Allianz has an **A+ (Superior)** AM Best rating — the second-highest possible rating. With $1+ trillion in assets under management globally, they are one of the most financially secure insurers in the world.

## Is Allianz Right for You?

Allianz products are excellent but can be complex. VietPoint Insurance & Tax agents are trained and licensed to sell Allianz products and can help you navigate the features and find the right policy.

📞 (678) 825-3737
    `,
  },
  14: {
    title: "AIG Term Life Insurance Review 2025",
    date: "April 7, 2025",
    category: "Insurance Knowledge",
    categoryColor: "#2563eb",
    image: `${IMG}/2025/04/banner-img.webp`,
    relatedIds: [7, 2, 13],
    content: `
## AIG Term Life Insurance — 2025 Review for Vietnamese Families

AIG (American International Group) is one of America's largest and most recognized insurance companies. Is their Term Life product the right choice for the Vietnamese community?

## About AIG

- **Founded:** 1919
- **Headquarters:** New York, NY
- **AM Best Rating:** A (Excellent)
- **Specialty:** Life insurance, property & casualty, retirement products

## AIG Term Life Products

AIG offers term life through its subsidiary **American General Life Insurance Company**. Their flagship term life product is **AIG Select-a-Term**.

**Key features:**
- Terms available: 10, 15, 20, 25, 30, 35 years
- Coverage: $50,000 to $10 million+
- Renewable and convertible options
- Available online with simplified underwriting for many applicants

## AIG Term Life Pricing (Sample — 2025)

| Age | Gender | $500K / 20-Year Term |
|-----|--------|----------------------|
| 30  | Male   | ~$26/month |
| 30  | Female | ~$21/month |
| 40  | Male   | ~$58/month |
| 40  | Female | ~$45/month |
| 50  | Male   | ~$152/month |
| 50  | Female | ~$118/month |

*Estimates for healthy, non-smoking individuals. Your rates may vary.*

## Pros

- Competitive pricing
- Long term options (up to 35 years)
- Strong financial stability (A rating)
- Conversion option to permanent coverage

## Cons

- No living benefits (no critical illness payout)
- No cash value accumulation
- Premiums lost entirely if you outlive the term

## AIG vs IUL Secrets

| Feature | AIG Term Life | IUL Secrets |
|---------|---------------|-------------|
| Cost | Low | Higher |
| Living Benefits | ❌ | ✅ |
| Cash Value | ❌ | ✅ |
| Tax-Free Retirement | ❌ | ✅ |
| Protection Period | 10–35 years | Lifetime |

## Verdict

AIG Term Life is a solid, budget-friendly option for those needing pure death benefit protection. However, for families seeking living benefits, retirement income, and tax-free wealth building, **IUL Secrets is significantly more comprehensive**.

**Compare your options with a free consultation:**
📞 (678) 825-3737
    `,
  },
  15: {
    title:
      "Will President Donald Trump Abolish the IRS and Federal Income Tax?",
    date: "March 25, 2025",
    category: "Investment, Saving & Retire",
    categoryColor: "#7c3aed",
    image: `${IMG}/2025/04/president-donald-trump-abolish-the-internal-revenue-service-irs-and-federal-income-tax-768x512.jpg`,
    relatedIds: [11, 12, 9],
    content: `
## Trump's Proposal to Abolish the IRS

One of the hottest topics in recent US political discourse is President Donald Trump's suggestion to abolish the Internal Revenue Service (IRS) and replace federal income taxes with tariff revenue.

## What Has Been Proposed?

During his 2024 campaign and early into his second term, President Trump and some supporters have floated the idea of:
1. **Abolishing the IRS** — eliminating the federal tax collection agency
2. **Replacing income tax with tariffs** — using import tariffs to fund the government
3. **Eliminating or significantly reducing federal income tax** for most Americans

## Is This Realistic?

**Most tax policy experts say: highly unlikely in the near term.** Here's why:

- Federal income tax generates approximately **$2.4 trillion annually** — the government's largest revenue source
- Tariffs currently generate approximately **$80–100 billion** — far short of replacing income tax
- Eliminating the IRS would require an act of Congress and constitutional challenges
- The 16th Amendment (ratified 1913) explicitly grants Congress the power to levy income taxes

## What Could Realistically Change

More likely outcomes include:
- **Tax cuts** extending or expanding the 2017 Tax Cuts and Jobs Act provisions
- **Elimination of taxes on tips** (a Trump campaign promise)
- **No taxes on Social Security** (proposed)
- **Reduced corporate tax rates**

## What This Means for Vietnamese-American Families

If tax cuts do occur, the immediate impact would be modestly lower tax bills. However, **the most reliable long-term tax strategy remains investing in tax-free vehicles** — assets that are never subject to income tax regardless of what Congress does.

**IUL insurance** is the best example: your money grows tax-free, withdrawals are tax-free, and the death benefit is income-tax-free — all under existing IRS rules that have been in place for decades.

**Lock in tax-free retirement income now, regardless of future policy changes.**
📞 (678) 825-3737
    `,
  },
  16: {
    title: "President Donald Trump Imposes a 46% Retaliatory Tariff on Vietnam",
    date: "April 2, 2025",
    category: "Health - Life",
    categoryColor: "#ea580c",
    image: `${IMG}/2025/04/tong-thong-donald-trump-ap-thue-doi-ung-46-len-viet-nam-president-donald-trump-imposes-46-reciprocal-tax-on-vietnam-thumbnail-768x512.jpg`,
    relatedIds: [15, 12, 11],
    content: `
## Trump's 46% Tariff on Vietnam — What It Means for Vietnamese-Americans

In a move that shocked international trade circles, President Donald Trump announced a **46% retaliatory tariff on Vietnamese goods** as part of a broader "Liberation Day" tariff policy in early April 2025.

## What Happened?

On April 2, 2025, the Trump administration announced sweeping tariffs on imports from dozens of countries under the banner of "reciprocal tariffs." Vietnam was hit with one of the highest rates: **46%**.

The US claimed Vietnam had an unfair trade surplus with the US and that its tariff structure was not reciprocal.

## Impact on Vietnamese Goods

The 46% tariff applies to:
- Electronics and semiconductors
- Clothing and apparel
- Furniture
- Footwear
- Other manufactured goods

Many major US brands manufacture in Vietnam (Nike, Apple suppliers, furniture brands) and would face significantly higher import costs.

## Impact on Vietnamese-Americans

For the Vietnamese-American community, the tariff has several implications:

### Business Owners
Those importing Vietnamese goods or running businesses tied to Vietnamese manufacturing face higher costs and potential supply chain disruptions.

### Investment Portfolios
Stocks of companies heavily dependent on Vietnamese manufacturing (Nike, certain tech suppliers) saw volatility following the announcement.

### Family Remittances
Indirectly, if the Vietnamese economy is affected by reduced exports, family members in Vietnam may face economic pressure.

## How to Protect Your Financial Future

In times of economic and trade uncertainty, having a **stable, protected financial vehicle** is more important than ever. IUL insurance offers:
- **0% floor** — your cash value never loses money due to market volatility
- **Tax-free growth** — unaffected by trade policy changes
- **Guaranteed minimum** — stable regardless of economic conditions

**Talk to our agents about financial protection strategies:**
📞 (678) 825-3737
    `,
  },
  17: {
    title: "ARV Treatment: How Long Can People Living with HIV Expect to Live?",
    date: "March 17, 2025",
    category: "Health - Life",
    categoryColor: "#ea580c",
    image: `${IMG}/2025/03/dieu-tri-arv-treatment-thumbnail-768x512.jpg`,
    relatedIds: [18, 16, 9],
    content: `
## ARV Treatment and Life Expectancy for People Living with HIV

Thanks to advances in modern medicine — especially the advent of antiretroviral therapy (ARV) — the life expectancy of people living with HIV has significantly improved over the past three decades.

## What is ARV Treatment?

Antiretroviral therapy (ART/ARV) is a combination of medications that suppress the HIV virus, preventing it from replicating in the body. While ARV does not cure HIV, it:

- Reduces the viral load to undetectable levels
- Prevents progression to AIDS
- Dramatically extends and improves quality of life
- Makes HIV transmission nearly impossible (U=U: Undetectable = Untransmittable)

## Life Expectancy with Modern ARV Treatment

With consistent ARV treatment starting early:
- A **25-year-old** diagnosed with HIV in 2025 has an estimated life expectancy of **70–78 years** — approaching that of the general population
- Studies show HIV-positive individuals on effective treatment have **91% of the life expectancy** of HIV-negative peers
- Without treatment, AIDS progression typically occurs within 8–10 years of HIV infection

## Life Insurance and HIV

Historically, people living with HIV could not obtain life insurance. Today, with modern ARV treatment, **some insurance companies do offer policies** to HIV-positive individuals on stable treatment:

- **Term Life:** Some carriers offer coverage to HIV-positive applicants with undetectable viral loads and CD4 counts above 350
- **Guaranteed Issue Life Insurance:** Available regardless of HIV status (lower coverage amounts)
- **IUL:** Certain carriers may consider applications on a case-by-case basis

**Important:** Disclosure of HIV status is legally required on insurance applications. Non-disclosure can void a policy.

Contact our agents for confidential guidance on life insurance options for people living with HIV.

📞 (678) 825-3737 | support@VietPointinsurance.com
    `,
  },
  18: {
    title: "U.S. Immigration Requirements in 2025: A Comprehensive A-Z Guide",
    date: "March 12, 2025",
    category: "Health - Life",
    categoryColor: "#ea580c",
    image: `${IMG}/2025/03/dieu-kien-nhap-cu-my-2025-u-s-immigration-requirements-in-2025-thumbnail-768x512.jpg`,
    relatedIds: [16, 17, 9],
    content: `
## US Immigration Guide 2025 — For Vietnamese Families

Are you nurturing the American dream and planning to settle in the United States in 2025? This comprehensive A-Z guide covers the most common immigration pathways for Vietnamese nationals.

## Common Visa Categories

### F-1 Student Visa
For full-time students at accredited US institutions. Allows OPT (Optional Practical Training) for 12–36 months after graduation.

### H-1B Work Visa
For specialty occupation workers (typically requiring a bachelor's degree or higher). Subject to annual lottery — 85,000 visas available each year. Sponsorship by a US employer required.

### EB-5 Investor Visa
For investors who invest **$800,000–$1,050,000** (depending on location) in a US business creating at least 10 jobs. Provides direct path to Green Card.

### Family-Based Immigration
US citizens can sponsor spouses, parents, and unmarried children under 21 without numerical limits. Siblings and adult children face longer wait times.

### Diversity Visa (DV Lottery)
Vietnam has been **ineligible** for the DV Lottery in recent years due to high immigration numbers. Check the annual State Department announcement.

## Green Card Pathways

1. **Employment-Based (EB-1, EB-2, EB-3)** — Requires employer sponsorship
2. **Family-Based** — Through US citizen or LPR relative
3. **Asylum/Refugee** — For those facing persecution
4. **EB-5 Investor** — Through qualified investment

## 2025 Processing Times (Approximate)

- Family-based (immediate relative): 12–24 months
- H-1B (if selected in lottery): 3–6 months
- EB-2 (employment): 2–5 years (varies by country)
- Naturalization (citizenship): 8–12 months after eligibility

## Financial Preparation for Immigrants

Once you establish US residency, building a strong financial foundation is critical:
- Open a US bank account and build credit history
- Start contributing to retirement accounts (401k, IRA)
- Consider life insurance to protect your family — especially important as a new immigrant without established savings

**VietPoint Insurance & Tax helps Vietnamese immigrants navigate life insurance in the US.**
📞 (678) 825-3737
    `,
  },
  19: {
    title:
      "HOT: Win a Round-Trip Ticket from the U.S. to Vietnam — Lunar New Year 2027!",
    date: "March 10, 2025",
    category: "Event",
    categoryColor: "#d97706",
    image: `${IMG}/2025/03/Get-free-round-trip-tickets-us-vietnam-768x432.png`,
    relatedIds: [20, 21, 3],
    content: `
## WIN A ROUND-TRIP TICKET USA ↔ VIETNAM!

To express our gratitude for your trust and support, **VietPoint Insurance & Tax** is delighted to introduce the **Round-Trip Ticket Giveaway Program** for Lunar New Year 2027!

---

## Program Details

**Prize:** 1 Round-Trip Economy Class Ticket — USA ↔ Vietnam
**Valued at:** Approximately $1,200–$1,800 USD
**Travel period:** Flexible, valid for Lunar New Year 2027 season (January–February 2027)

---

## How to Enter

**Eligibility:** All current and new VietPoint Insurance & Tax clients

**To qualify, you must:**
1. Be an active policyholder with VietPoint Insurance & Tax **OR** purchase a new policy during the promotion period
2. Refer at least **1 friend or family member** who schedules a consultation
3. Complete your entry form (available at our office or via the contact form)

**Bonus entries:**
- +1 entry for each successful referral who purchases a policy
- +1 entry for attending a VietPoint financial education event

---

## Drawing Details

- **Entry deadline:** December 31, 2025
- **Drawing date:** January 15, 2026 (live on Facebook)
- **Winner notification:** Within 48 hours via phone and email

---

## Terms & Conditions

- One ticket per winner (economy class, round-trip)
- Travel must be booked within 6 months of winning
- Ticket is non-transferable and non-refundable
- Winner is responsible for passport/visa fees and travel insurance

---

## Enter Now!

Contact us today to confirm your entry or learn more.

📞 **(678) 825-3737**
📧 **support@VietPointinsurance.com**
📍 1424 N Brown Rd #450, Lawrenceville, GA 30043

*Follow us on Facebook for live drawing announcement!*
    `,
  },
  20: {
    title:
      "Announcement of Results: Free Round-Trip Ticket Program USA - Vietnam 2025",
    date: "January 7, 2025",
    category: "Event",
    categoryColor: "#d97706",
    image: `${IMG}/2025/01/ket-qua-free-ve-khu-hoi-hoa-ky-viet-nam-results-of-free-round-trip-ticket-usa-vietnam-2025-thumbnail-768x512.jpg`,
    relatedIds: [21, 19, 3],
    content: `
## ANNOUNCEMENT OF RESULTS

**Free Round-Trip Ticket Program USA - Vietnam 2025**

---

Dear valued clients and participants,

VietPoint Insurance & Tax sincerely thanks our valued customers for their enthusiastic participation in the **Free Round-Trip Ticket Program USA - Vietnam 2025**.

We are thrilled to announce the official results of the drawing held on **January 5, 2025**.

---

## Winner Announcement

🎉 **Grand Prize Winner (Round-Trip Ticket USA - Vietnam)**

The winning entry was drawn in a live video broadcast on our official Facebook page. The winner has been contacted privately via phone and email.

We congratulate our winner and thank every participant for their trust in VietPoint Insurance & Tax.

---

## Program Summary

| Metric | Details |
|--------|---------|
| Total entries | 847 |
| Eligible entries | 812 |
| Drawing method | Random number generator (live) |
| Date of drawing | January 5, 2025 |
| Winner notified | January 6, 2025 |

---

## Thank You

This program was our way of saying **thank you** to the Vietnamese community in the US for your trust and support of VietPoint Insurance & Tax throughout 2024.

Your referrals, loyalty, and kind words mean the world to our team. We look forward to serving you and your families in 2025 and beyond.

---

## Coming Soon — New Giveaway Program for 2027!

Stay tuned for our **Lunar New Year 2027 Round-Trip Ticket Giveaway**. More details coming soon!

📞 (678) 825-3737
📧 support@VietPointinsurance.com
    `,
  },
  21: {
    title:
      "Program: Free Round-Trip Tickets USA - Vietnam for Customers of VietPoint Insurance & Tax",
    date: "August 1, 2024",
    category: "Event",
    categoryColor: "#d97706",
    image: `${IMG}/2024/08/free-round-trip-ticket-usa-vn-thinksmart-insurance-thumbnail-1-768x512.jpg`,
    relatedIds: [20, 19, 3],
    content: `
## FREE ROUND-TRIP TICKETS USA - VIETNAM

To serve the travel needs of Vietnamese people in the U.S. returning to Vietnam to visit family and celebrate the **Lunar New Year**, VietPoint Insurance & Tax is proud to launch the **Free Round-Trip Ticket Giveaway Program 2025**.

---

## About the Program

This program is our heartfelt thank-you gift to the Vietnamese-American community that has trusted VietPoint Insurance & Tax with their family's financial protection.

**Prize:** 1 Round-Trip Economy Ticket — USA ↔ Vietnam (any major Vietnamese airport)
**Program period:** August 1, 2024 – December 31, 2024
**Drawing:** January 5, 2025

---

## Eligibility Requirements

To participate, you must meet ONE of the following:

✅ **Option A — Existing Client**
You are an active VietPoint Insurance & Tax policyholder as of August 1, 2024.

✅ **Option B — New Client**
You purchase a new VietPoint Insurance & Tax policy between August 1 and December 31, 2024.

✅ **Option C — Referral**
You successfully refer a friend or family member who schedules a consultation with our agents.

---

## How to Submit Your Entry

1. Call us at **(678) 825-3737** or visit our office
2. Confirm your eligibility with your agent
3. Complete the entry form
4. Receive your entry confirmation

---

## Frequently Asked Questions

**Q: Can I enter multiple times?**
A: Yes — you earn 1 additional entry for each successful referral.

**Q: Is the ticket transferable?**
A: No — the ticket is in the winner's name only.

**Q: When is the flight?**
A: Flexible — winner can choose any date during Lunar New Year season (Jan–Feb 2025).

---

📞 **(678) 825-3737**
📧 **support@VietPointinsurance.com**
📍 1424 N Brown Rd #450, Lawrenceville, GA 30043
    `,
  },
};

function renderMarkdown(content: string, featuredImage?: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let tableBuffer: string[] = [];
  let featuredInserted = false;

  const flushTable = () => {
    if (tableBuffer.length < 2) {
      tableBuffer = [];
      return;
    }
    const headers = tableBuffer[0]
      .split("|")
      .map((s) => s.trim())
      .filter(Boolean);
    const rows = tableBuffer.slice(2).map((r) =>
      r
        .split("|")
        .map((s) => s.trim())
        .filter(Boolean),
    );
    elements.push(
      <div key={`table-${i}`} className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {headers.map((h, hi) => (
                <th
                  key={hi}
                  className="text-left p-3 bg-gray-100 font-semibold border border-gray-200"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-b border-gray-100">
                {row.map((cell, ci) => (
                  <td key={ci} className="p-3 border border-gray-200">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>,
    );
    tableBuffer = [];
  };

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("|")) {
      tableBuffer.push(line);
      i++;
      continue;
    } else if (tableBuffer.length > 0) {
      flushTable();
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-3xl md:text-4xl font-extrabold mt-10 mb-4 leading-tight"
          style={{ color: "#2F5E9E" }}
        >
          {line.slice(3)}
        </h2>,
      );
      // Insert featured image after FIRST H2
      if (!featuredInserted && featuredImage) {
        featuredInserted = true;
        elements.push(
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key="featured-img"
            src={featuredImage}
            alt=""
            className="w-full rounded-xl my-6 object-cover"
            style={{ maxHeight: "460px" }}
          />,
        );
      }
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-2">
          {line.slice(4)}
        </h3>,
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      const items = [];
      while (
        i < lines.length &&
        (lines[i].startsWith("- ") || lines[i].startsWith("* "))
      ) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 my-3 space-y-1">
          {items.map((it, idx) => (
            <li
              key={idx}
              className="text-gray-700 text-[15px] leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: it.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          ))}
        </ul>,
      );
      continue;
    } else if (/^\d+\. /.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal pl-6 my-3 space-y-1">
          {items.map((it, idx) => (
            <li
              key={idx}
              className="text-gray-700 text-[15px] leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: it.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          ))}
        </ol>,
      );
      continue;
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={i}
          className="border-l-4 pl-4 py-2 my-4 italic text-gray-600 bg-gray-50 rounded-r-lg"
          style={{ borderColor: "#2F5E9E" }}
        >
          {line.slice(2)}
        </blockquote>,
      );
    } else if (line.startsWith("---")) {
      elements.push(<hr key={i} className="my-6 border-gray-200" />);
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      elements.push(
        <p
          key={i}
          className="text-gray-700 text-[15px] leading-relaxed my-2"
          dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />,
      );
    }
    i++;
  }
  if (tableBuffer.length > 0) flushTable();
  return elements;
}

export default function BlogPostPage() {
  const params = useParams();
  const id = params.id as string;
  const post = posts[Number(id)];
  const [tocOpen, setTocOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!post) notFound();

  const related = post.relatedIds.map((rid) => posts[rid]).filter(Boolean);

  // Build TOC from H2 headings in content
  const tocHeadings = post.content
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => l.replace(/^## /, "").trim());

  function handleCopy() {
    navigator.clipboard.writeText(
      typeof window !== "undefined" ? window.location.href : "",
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main className="min-h-screen bg-white pt-16">
      <div className="max-w-215 mx-auto px-4 md:px-8 py-10">
        {/* Title */}
        <h1
          className="text-[2.1rem] md:text-[2.7rem] font-extrabold text-gray-900 leading-tight mb-5"
          style={{ letterSpacing: "-0.01em" }}
        >
          {post.title}
        </h1>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{post.date}</span>
        </div>

        {/* Share — right aligned */}
        <div className="flex items-center justify-end gap-2 mb-6">
          <span className="text-sm text-gray-600 font-semibold mr-1">
            Share:
          </span>
          <a
            href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-opacity hover:opacity-80"
            style={{ background: "#0077b5" }}
            title="Share on LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-opacity hover:opacity-80"
            style={{ background: "#1877f2" }}
            title="Share on Facebook"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-opacity hover:opacity-80"
            style={{ background: "#000" }}
            title="Share on X"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <button
            onClick={handleCopy}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-opacity hover:opacity-80"
            style={{ background: "#2F5E9E" }}
            title="Copy link"
          >
            {copied ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            )}
          </button>
        </div>

        {/* Table of Contents — collapsed by default */}
        {tocHeadings.length > 0 && (
          <div className="rounded-xl border border-gray-200 bg-[#f5f5f5] mb-8 overflow-hidden">
            <button
              onClick={() => setTocOpen((v) => !v)}
              className="w-full flex items-center justify-between px-5 py-4 font-bold text-gray-800 text-base"
            >
              <span className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
                Nội dung thu gọn
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-200"
                style={{
                  transform: tocOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            {tocOpen && (
              <ul className="px-5 pb-4 space-y-2 border-t border-gray-200 pt-3">
                {tocHeadings.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-[#2F5E9E]">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-700 leading-snug">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Article Content */}
        <article className="prose-like">
          {renderMarkdown(post.content, post.image)}
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14 border-t border-gray-100 pt-10">
            <h3 className="font-extrabold text-gray-900 text-xl mb-6">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map(
                (r, idx) =>
                  r && (
                    <Link
                      key={idx}
                      href={`/blog/${post.relatedIds[idx]}`}
                      className="block rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-3">
                        <span
                          className="text-[10px] font-semibold"
                          style={{ color: r.categoryColor }}
                        >
                          {r.category}
                        </span>
                        <p className="text-sm font-semibold text-gray-800 mt-1 line-clamp-2 group-hover:text-[#2F5E9E] transition-colors">
                          {r.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{r.date}</p>
                      </div>
                    </Link>
                  ),
              )}
            </div>
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-10 rounded-2xl p-7 text-center"
          style={{
            background: "linear-gradient(135deg, #2F5E9E 0%, #1a3d6e 100%)",
          }}
        >
          <p className="text-white/80 text-sm mb-1">
            Need guidance on life insurance?
          </p>
          <h3 className="font-extrabold text-white text-lg mb-3">
            Talk to a VietPoint Insurance & Tax expert — free consultation.
          </h3>
          <a
            href="tel:+16788253737"
            className="inline-block bg-white font-bold px-7 py-2.5 rounded-full text-sm hover:bg-gray-100 transition-colors"
            style={{ color: "#2F5E9E" }}
          >
            📞 (678) 825-3737
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-sm font-semibold hover:underline"
            style={{ color: "#2F5E9E" }}
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
