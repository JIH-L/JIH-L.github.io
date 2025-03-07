import cardsData from '../data/cards.json'
import Card from '../components/Card'

export default function Project() {
  const cards = cardsData

  return (
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          link={card.link}
        />
      ))}
    </div>
  )
}
