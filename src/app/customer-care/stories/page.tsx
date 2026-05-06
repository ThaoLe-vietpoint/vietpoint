import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Story, My Family - Thinksmart Insurance",
};

const stories = [
  {
    name: "Ha Nguyen",
    location: "Georgia",
    amount: "$8,500/month",
    story:
      "After my husband was diagnosed with stage 3 cancer, I didn't know how we'd survive financially. Our IUL Secrets policy paid out $45,000 in living benefits within 3 weeks. That money kept our family afloat while he recovered. Today he's cancer-free, and our policy continues to grow for retirement.",
    tag: "Living Benefits",
    tagColor: "#16a34a",
  },
  {
    name: "Jaclyn Tran",
    location: "California",
    amount: "$10,000/month",
    story:
      "I started IUL at 32 thinking only about retirement. But when I had a sudden heart attack at 40, my insurance paid out $60,000 immediately — no waiting, no fighting with the insurance company. My Thinksmart agent handled everything. I'm so grateful I had the right coverage.",
    tag: "Critical Illness",
    tagColor: "#C41E3A",
  },
  {
    name: "Ty Trieu",
    location: "Texas",
    amount: "$12,000/month",
    story:
      "As a small business owner, I was always worried about what would happen to my family if something happened to me. My Max-Funded IUL now provides $12,000/month tax-free for my wife and kids. It's the best investment I've ever made — both as life insurance AND a retirement vehicle.",
    tag: "Retirement Planning",
    tagColor: "#2563eb",
  },
  {
    name: "Minh Nguyen",
    location: "Washington",
    amount: "$323,195 payout",
    story:
      "My wife was diagnosed with breast cancer. Our IUL policy activated the living benefits clause and paid us $323,195. This incredible sum allowed us to access the best treatments without financial stress. She has now fully recovered. We share our story so others know: the right insurance is everything.",
    tag: "Cancer Recovery",
    tagColor: "#7c3aed",
  },
];

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section
        className="pt-16 min-h-[320px] flex items-center"
        style={{
          background: "linear-gradient(135deg, #C41E3A 0%, #a01828 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-white text-center">
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">
            Customer Care
          </p>
          <h1 className="text-4xl font-extrabold mb-3">My Story, My Family</h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Real stories from our clients whose lives were transformed by the
            right insurance coverage.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {stories.map((s) => (
              <article
                key={s.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0"
                    style={{ background: s.tagColor }}
                  >
                    {s.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{s.name}</h3>
                    <p className="text-sm text-gray-500">{s.location}</p>
                    <span
                      className="inline-block text-xs font-semibold text-white px-3 py-0.5 rounded-full mt-1"
                      style={{ background: s.tagColor }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <div className="ml-auto text-right">
                    <p
                      className="font-extrabold text-lg"
                      style={{ color: s.tagColor }}
                    >
                      {s.amount}
                    </p>
                  </div>
                </div>
                <blockquote className="text-gray-600 leading-relaxed italic">
                  &quot;{s.story}&quot;
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-12 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #C41E3A 0%, #a01828 100%)",
        }}
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          Your Story Starts Here
        </h2>
        <p className="text-white/80 mb-8">
          Get the right coverage before you need it. Consult with our agents
          today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+16788253737"
            className="inline-block bg-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-gray-50 transition-colors"
            style={{ color: "#C41E3A" }}
          >
            📞 (678) 825-3737
          </a>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
