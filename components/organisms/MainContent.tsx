import ProfileSection from "./ProfileSection";
import KnowledgeSection from "./KnowledgeSection";
import EducationSection from "./EducationSection";
import PortfolioSection from "./PortfolioSection";

export default function MainContent() {
  return (
    <main className="min-w-0">
      <ProfileSection />

      <KnowledgeSection />

      <EducationSection />

      <PortfolioSection />
    </main>
  );
}
