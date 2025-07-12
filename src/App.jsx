import AboutMeMain from "./components/aboutMeSection/AboutMeMain"
import ContactMain from "./components/contact/ContactMain"
import FooterMain from "./components/footer/FooterMain"
import HeroMain from "./components/heroSection/HeroMain"
import NavbarMain from "./components/navbar/NavbarMain"
import ProjectMain from "./components/projects/ProjectMain"
import SkillsMain from "./components/skillsSection/SkillsMain"

function App() {

  return (
    <main className="font-body flex flex-col w-full h-fit">
      <NavbarMain />
      <HeroMain />
      <AboutMeMain />
      <SkillsMain />
      <ProjectMain />
      <ContactMain />
      <FooterMain />
    </main>
  )
}

export default App
