import ProfileSection from "./ProfileSection";
import KnowledgeSection from "./KnowledgeSection";
import EducationSection from "./EducationSection";
import PortfolioSection from "./PortfolioSection";
import Footer from "./Footer";

export default function MainContent() {
  return (
    <main className="min-w-0">
      <ProfileSection />

      <KnowledgeSection />

      <EducationSection />

      <PortfolioSection />

      <Footer />
    </main>
  );
}
