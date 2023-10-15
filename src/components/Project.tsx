import Card from '../components/Card'
import wtw2 from '../assets/images/wtw2.webp'
import hellosanta2 from '../assets/images/hellosanta2.webp'
import apro2 from '../assets/images/apro2.webp'
import excel from '../assets/images/excel.webp'
import anli2 from '../assets/images/anli2.webp'
import fhjh from '../assets/images/fhjh.webp'
import hkm2 from '../assets/images/hkm2.webp'
export default function Project() {
  return (
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      <Card
        title="Side Project Wtw"
        description="An interactive platform for exploring movie details and summaries."
        image={wtw2}
        link="/project/wtw"
      />
      <Card
        title="Hello Santa"
        description="Official website of a design company specializing in custom web development."
        image={hellosanta2}
        link="/project/hellosanta"
      />
      <Card
        title="Anli International Co., Ltd"
        description="Official Website of a Professional Heat Dissipation Key Component Supplier."
        image={anli2}
        link="/project/anli"
      />
      <Card
        title="Taipei Fuhsing Private School"
        description="Official Website of a Private High School."
        image={fhjh}
        link="/project/fhjh"
      />
      <Card
        title="Hwa Kang Museum"
        description="Official Website of the Museum."
        image={hkm2}
        link="/project/hkm"
      />
      <Card
        title="Nestle A-pro"
        description="Dairy Formula Brand Official Website."
        image={apro2}
        link="/project/apro"
      />
      <Card
        title="Nestle Excel"
        description="Dairy Formula Brand Official Website."
        image={excel}
        link="/project/excel"
      />
    </div>
  )
}
