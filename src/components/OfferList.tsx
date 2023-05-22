import { Offer } from './Offer'
import { useOffer } from '../hooks/useOffer'
import './OfferList.css'

export default function OfferList () {
  const { offers, loading, error, fetchData } = useOffer()

  return (
        <div className="list__container">
            {
                offers && offers.length > 0
                  ? (
                <ul>
                    {
                    offers.map(offer => {
                      return (
                        <li key={offer.id}>
                            <Offer
                            offer={offer}
                        />
                        </li>
                      )
                    })
                    }
                </ul>
                    )
                  : <h3>Lo sentimos, no se han encontado ofertas de trabajo con los criterios seleccionados</h3>
            }

        </div>
  )
}
