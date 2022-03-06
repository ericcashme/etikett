import { FC, memo } from 'react'
import { Row, Col, Text, CardBlog, HorizontalScroll } from 'components'
import * as S from './styles'

const data = [
  {
    href: '/',
    image: '/img/home/news1.png',
    title: 'Neue Weiterverarbeitungs-maschinen jege Weiterverarbeitungs-maschinen',
    description:
      'Schon im Dezember vergangenen Jahres wurden zwei neue Weiterverarbeitungs-maschinen installiert: die Big Foot und die Fast Track aus dem Hause. Schon jaga Dezember vergangenen Jahres',
    tags: ['Unternehmen']
  },
  {
    href: '/',
    image: '/img/home/news2.png',
    title: 'etikett.de feiert Geburtstag!',
    description:
      'Vor 10 Jahren entstand aus der Druckerei Nilles GmbH das Startup etikett.de. Die Idee: Das Kalkulieren von Etiketten direkt auf der Webseite ermöglichen. Nach einer',
    tags: ['Unternehmen', 'Team']
  },
  {
    href: '/',
    image: '/img/home/news3.png',
    title: 'Willkommen im Team!',
    description:
      'Auch in diesem Jahr hat wieder ein neuer Azubi seine Ausbildung zum Mediengestalter bei etikett.de begonnen. Künftig wird er Grafik, Druckvorstufe und Marketing',
    tags: ['Team']
  }
]

export const News: FC = memo(() => (
  <S.News>
    <Row>
      <Col>
        <Text color="primary" family="heading" align="center" margin="0 0 .5rem">
          News
        </Text>
        <Text size="xxlg" family="heading" weight="bold" align="center" margin="0 0 4rem">
          Bleiben Sie auf dem Laufenden
        </Text>
      </Col>
    </Row>

    <Row>
      <Col xs={12}>
        <HorizontalScroll>
          {data.map(({ href, image, title, description, tags }) => (
            <CardBlog
              key={title}
              kind="transparent"
              href={href}
              image={image}
              tags={tags}
              title={title}
              description={description}
              labelButton="Weiterlesen"
            />
          ))}
        </HorizontalScroll>
      </Col>
    </Row>
  </S.News>
))

News.displayName = 'News'
