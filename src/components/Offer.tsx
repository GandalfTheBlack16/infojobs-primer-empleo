import { type Offer as OfferType } from '../types'
import './Offer.css'

export function Offer (props: { offer: OfferType }) {
  const { offer } = props

  return (
        <div className="offer__container">
            <div className='offer__details'>
                <h3>{offer.title}</h3>
                <span>{offer.salary}</span>
                <span>Modalidad: {offer.teleworking}</span>
                <span>Fecha de publicacion: {offer.publishDate.toLocaleString()}</span>
            </div>
            <div className='offer__author'>
                {
                   offer.author.logoUrl && <a href={offer.author.uri}>
                        <img
                            src={offer.author.logoUrl}
                            alt={offer.author.name + 'logo'}
                        />
                    </a>

                }
                <h4>
                    Oferta publicada por <a href={offer.author.uri}>{offer.author.name}</a>
                </h4>
            </div>
            <a href={offer.link}>
                <button className='primary'>Ir a la oferta</button>
            </a>
        </div>
  )
}
