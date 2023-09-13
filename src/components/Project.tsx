import Card from '../components/Card'
import wtw2 from '../assets/images/wtw2.webp'
export default function Project() {
  return (
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      <Card
        title="Wtw"
        description="An interactive platform for exploring movie details and summaries."
        image={wtw2}
        link="/project/wtw"
      />
      <Card
        title="Event Website"
        description="A platform to promote and manage events with features like ticket sales etc."
        image="https://picsum.photos/300/200.webp?grayscale"
        link="/"
      />
      <Card
        title="Event Website"
        description="A platform to promote and manage events with features like ticket sales etc."
        image="https://picsum.photos/300/200.webp?grayscale"
        link="/"
      />
      <Card
        title="Event Website"
        description="A platform to promote and manage events with features like ticket sales etc."
        image="https://picsum.photos/300/200.webp?grayscale"
        link="/"
      />
    </div>
  )
}
