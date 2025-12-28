"use client";

import { useState } from "react";
import FeaturedNewsCard from "./FeaturedNewsCard";
import SmallNewsCard from "./SmallNewsCard";

const TABS = [
  { key: "superlig", label: "Süper Lig" },
  { key: "premier", label: "Premier League" },
  { key: "laliga", label: "La Liga" },
  { key: "seriea", label: "Serie A" },
];

const newsByLeague: Record<string, any[]> = {
  superlig: [
    {
      title: "Galatasaray derbi öncesi hazırlıklarını tamamladı",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "galatasaray-derbi-oncesi",
    },
    {
      title: "Fenerbahçe’de sakatlık şoku",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "fenerbahce-sakatlik",
    },
    {
      title: "Beşiktaş’ta teknik direktör açıklaması",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "besiktas-aciklama",
    },
    {
      title: "Trabzonspor deplasmanda kazandı",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "trabzonspor-galibiyet",
    },
    {
      title: "VAR kararları tartışılıyor",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "var-kararlari",
    },
  ],
  premier: [
    {
      title: "Galatasaray derbi öncesi hazırlıklarını tamamladı",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "galatasaray-derbi-oncesi",
    },
    {
      title: "Fenerbahçe’de sakatlık şoku",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "fenerbahce-sakatlik",
    },
    {
      title: "Beşiktaş’ta teknik direktör açıklaması",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "besiktas-aciklama",
    },
    {
      title: "Trabzonspor deplasmanda kazandı",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "trabzonspor-galibiyet",
    },
    {
      title: "VAR kararları tartışılıyor",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "var-kararlari",
    },
  ],
  laliga: [
    {
      title: "Galatasaray derbi öncesi hazırlıklarını tamamladı",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "galatasaray-derbi-oncesi",
    },
    {
      title: "Fenerbahçe’de sakatlık şoku",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "fenerbahce-sakatlik",
    },
    {
      title: "Beşiktaş’ta teknik direktör açıklaması",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "besiktas-aciklama",
    },
    {
      title: "Trabzonspor deplasmanda kazandı",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "trabzonspor-galibiyet",
    },
    {
      title: "VAR kararları tartışılıyor",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "var-kararlari",
    },
  ],
  seriea: [
    {
      title: "Galatasaray derbi öncesi hazırlıklarını tamamladı",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "galatasaray-derbi-oncesi",
    },
    {
      title: "Fenerbahçe’de sakatlık şoku",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "fenerbahce-sakatlik",
    },
    {
      title: "Beşiktaş’ta teknik direktör açıklaması",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "besiktas-aciklama",
    },
    {
      title: "Trabzonspor deplasmanda kazandı",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "trabzonspor-galibiyet",
    },
    {
      title: "VAR kararları tartışılıyor",
      imageUrl: "/muci-trabzonspor.png",
      category: "Süper Lig",
      slug: "var-kararlari",
    },
  ],
};

export default function LatestNews() {
  const [activeTab, setActiveTab] = useState("superlig");

  const currentNews = newsByLeague[activeTab] || [];
  const featured = currentNews[0];
  const others = currentNews.slice(1, 5);

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold text-white">Son Haberler</h2>

          <div className="flex gap-4 text-sm">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-1 text-white  transition cursor-pointer ${
                  activeTab === tab.key
                    ? "border-b-2 border-primary font-semibold text-primary"
                    : ""
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featured && (
            <div className="h-[420px]">
              <FeaturedNewsCard {...featured} />
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            {others.map((news) => (
              <SmallNewsCard key={news.slug} {...news} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
