import { memo } from 'react'
import { Row } from 'react-bootstrap'
// @ts-ignore
import ReactReadMoreReadLess from 'react-read-more-read-less'

import * as Styled from './ScentsList.styled'

export interface ScentData {
  ScentName?: string
  Collections?: string
  Rooms?: string
  Description?: string
  ImageURL?: string
  CLPWaxMelt?: string
  WaxMeltPictogram?: string
  CLPCandle?: string
  CandlePictogram?: string
  CLPRoomDiffuser?: string
  RoomDiffuserPictogram?: string
  CLPRoomSpray?: string
  RoomSprayPictogram?: string
}

const makeSlug = (str?: string) => {
  return str?.toLowerCase().replace('&', 'and').replace(' ', '-')
}

const goToScent = (scentName?: string) => {
  if (!scentName) return
  const url = `/collections/all/${makeSlug(scentName)}`

  window.location.assign(url)
}

const ScentsList = ({ scents }: { scents: ScentData[] }) => {
  return (
    <Styled.ScentList>
      <Row xs={1} md={2} lg={4} className="g-4 h-100">
        {scents &&
          scents.map(scent => (
            <Styled.Column className="ms-0 ps-0 me-0 pe-0 pt-0 mt-0 h-100" key={`${makeSlug(scent.ScentName)}`}>
              <Styled.ScentCard className="mb-3 h-100" border="0">
                <Styled.CardImage
                  variant="top"
                  src={scent?.ImageURL ? scent.ImageURL : 'https://source.unsplash.com/random/280x280'}
                  loading="lazy"
                />
                <Styled.CardBody className="h-100">
                  <Styled.CardTitle>{scent.ScentName}</Styled.CardTitle>
                  <Styled.CardText>
                    <ReactReadMoreReadLess
                      charLimit={80}
                      readMoreText={'Show more'}
                      readLessText={'Show less'}
                      readMoreStyle={{ whiteSpace: 'no-wrap', fontWeight: 'bold', color: '#c68f84' }}
                      readLessStyle={{ whiteSpace: 'no-wrap', fontWeight: 'bold', color: '#c68f84' }}
                    >
                      {scent.Description}
                    </ReactReadMoreReadLess>
                  </Styled.CardText>
                  <Styled.SubHeading>Collections:</Styled.SubHeading>
                  <Styled.UList>
                    {scent.Collections?.split(',').map(collection => (
                      <li>
                        <a href={`/collections/${makeSlug(collection)}`} key={collection.toLowerCase()}>
                          {collection}
                        </a>
                      </li>
                    ))}
                  </Styled.UList>
                  <br />
                  <Styled.SubHeading>Perfect for:</Styled.SubHeading>
                  <Styled.UList>
                    {scent.Rooms?.split(',').map(room => (
                      <li>
                        <a href={`/collections/all/${makeSlug(room)}`} key={room.toLowerCase()}>
                          {room}
                        </a>
                      </li>
                    ))}
                  </Styled.UList>
                </Styled.CardBody>
                <Styled.Button onClick={() => goToScent(scent.ScentName)}>Shop this scent</Styled.Button>
              </Styled.ScentCard>
            </Styled.Column>
          ))}
      </Row>
    </Styled.ScentList>
  )
}

export default memo(ScentsList)
